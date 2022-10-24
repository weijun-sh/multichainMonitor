const express = require("express");
const {innerStart} = require("./hooks/inter");
const {outerStart} = require("./hooks/outer");
const {OUTER_CHAIN_LIST} = require("./constant/rpcs");
const {STATUS_SUCCESS} = require("./constant/rpcState");
const {interChains} = require("../service/api");

const router = express.Router();

function sortHeightLatency(list) {
    let result = list.sort((a, b) => {
        let aHeight = 0;
        let aLatency = 9999999;
        let bHeight = 0;
        let bLatency = 9999999;
        if (a.status === STATUS_SUCCESS) {
            aHeight = a.data.height;
            aLatency = a.data.latency;
        }
        if (b.status === STATUS_SUCCESS) {
            bHeight = b.data.height;
            bLatency = b.data.latency;
        }
        let heightDiff = bHeight - aHeight;

        if (heightDiff !== 0) {
            return heightDiff
        } else {
            return aLatency - bLatency;
        }
    })
    return result;
}


function getErrorInner(top,innerList){
    let list = innerList.filter(item => {
        if(item.status !== STATUS_SUCCESS){
            return true
        }

        if(top.data.height - item.data.height >= 1 ){
            return true;
        }
        if(item.data.latency > 3000){
            return true
        }
        return false
    })
    return list;
}

async function getInnerChains() {
    let res = await interChains({})
    return res.result.data;
}

async function analysisChainList(id) {

    let chain =  OUTER_CHAIN_LIST.find(item => {return item.chainId == id});

    if(!chain){
        console.log("chain not exits ==>", id, chain,)
        return []
    }

    let inRes = await innerStart(chain);

    let outRes = await outerStart(chain, chain.rpc)

    let total = [...inRes, ...outRes];

    let sortedList = sortHeightLatency(total);

    console.log("inRes ==>", inRes)
    let errorList =  getErrorInner(sortedList[0], inRes);

    return [inRes, outRes, total, sortedList, errorList]
}


function renderTable(list){
    let table = '';

    if (list) {
        const tBody = list.map((item, index) => {
            const {data, status} = item;
            const {height = '', latency = '', rpc, errMsg = ''} = data;
            return (
                `<tr>
                    <td>${index + 1}</td>
                    <td>${rpc}</td>
                    <td>${height}</td>
                    <td>${latency}</td>
                    <td>${status}</td>
                    <td>${errMsg}</td>
                    <td>OUT</td>
                 </tr>`
            )
        })
        table = `
            <table >
                <thead>
                    <tr>
                        <td>id</td>
                        <td>rpc</td>
                        <td>height</td>
                        <td>latency</td>
                        <td>status</td>
                        <td>msg</td>
                        <td>in/out</td>
                    </tr>
                </thead>
                <tbody>
                    ${tBody}                        
                </tbody>
            </table>
        `
        table = table.replace(/,/g, "")
    }
    return table;
}

async function getTableView(id) {
    let [inRes, outRes, total, sortedList, errorList] = await analysisChainList(id);

    let inTable = renderTable(inRes);
    let outTable = renderTable(outRes);
    let totalTable = renderTable(total);
    let sortedTable = renderTable(sortedList);
    let errorTable = renderTable(errorList);

    return [inTable, outTable, totalTable,sortedTable, errorTable]
}


async function chainListMonitor() {
    let ids = await getInnerChains();
    console.log("ids ==>", ids)
    let errorTable = [];
    let allTable = [];


    for await (let id of ids){
        let [inRes, outRes, total, sortedList, errorList] = await analysisChainList(id);
        if (!inRes || !outRes) {
            console.log("get res fail ==>", id)
            return;
        }
        let inTable = renderTable(inRes);
        let outTable = renderTable(outRes);
        let totalTable = renderTable(total);
        let currentSortedTable = renderTable(sortedList);
        let currentErrorTable = renderTable(errorList);
        allTable.push(currentSortedTable);
        errorTable.push(currentErrorTable)
    }
    console.log("all table ==>", allTable)
    console.log("error table ==>", errorTable)
    return [allTable, errorTable];
}

module.exports = {
    router,
    chainListMonitor
};
