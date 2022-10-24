const express = require("express");
const {innerStart} = require("./hooks/inter");
const {outerStart} = require("./hooks/outer");
const {OUTER_CHAIN_LIST} = require("./constant/rpcs");
const {STATUS_SUCCESS} = require("./constant/rpcState");

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

async function startChainList() {

    let chain = OUTER_CHAIN_LIST[0];
    chain.isInner = true;

    let inRes = await innerStart(chain);

    let outRes = await outerStart(chain, chain.rpc)

    let total = [...inRes, ...outRes];

    let sortedList = sortHeightLatency(total)
    return [inRes, outRes, total, sortedList]
}



async function getTableView() {
    let [inRes, outRes, total, sortedList] = await startChainList();
    console.log("inRes ==>", inRes)
    console.log("outRes ==>", outRes)

    let inTable = '';
    let outTable = '';
    let totalTable = '';
    let sortedTable = '';

    if (inRes) {
        const tBody = inRes.map((item, index) => {
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
                    <td>In</td>
                 </tr>`
            )
        })
        inTable = `
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
        inTable = inTable.replace(/,/g, "")
    }

    if (outRes) {
        const tBody = outRes.map((item, index) => {
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
        outTable = `
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
        outTable = outTable.replace(/,/g, "")
    }
    if (total) {
        const tBody = sortedList.map((item, index) => {
            const {data, status} = item;
            const {height = '', latency = '', rpc, errMsg = '', isInner} = data;
            return (
                `<tr>
                    <td>${index + 1}</td>
                    <td>${rpc}</td>
                    <td>${height}</td>
                    <td>${latency}</td>
                    <td>${status}</td>
                    <td>${errMsg}</td>
                    <td>${isInner ? "INNER":'OUT'}</td>
                 </tr>`
            )
        })
        totalTable = `
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
        totalTable = totalTable.replace(/,/g, "")
    }
    if (sortedList) {
        const tBody = sortedList.map((item, index) => {
            const {data, status} = item;
            const {height = '', latency = '', rpc, errMsg = '', isInner} = data;
            return (
                `<tr>
                    <td>${index + 1}</td>
                    <td>${rpc}</td>
                    <td>${height}</td>
                    <td>${latency}</td>
                    <td>${status}</td>
                    <td>${errMsg}</td>
                    <td>${isInner ? "INNER":'OUT'}</td>
                 </tr>`
            )
        })
        sortedTable = `
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
        sortedTable = sortedTable.replace(/,/g, "")
    }

    return [inTable, outTable, totalTable,sortedTable]
}

module.exports = {
    startChainList,
    router,
    getTableView
};
