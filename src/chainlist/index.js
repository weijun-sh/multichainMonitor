const express = require("express");
const {innerStart} = require("./hooks/inter");
const {outerStart} = require("./hooks/outer");
const {OUTER_CHAIN_LIST} = require("./constant/rpcs");

const router = express.Router();

async function startChainList() {

    let chain = OUTER_CHAIN_LIST[0];
    chain.isInner = true;

    let inRes = await innerStart(chain);

    let outRes = await outerStart(chain, chain.rpc)

    return [inRes, outRes]
}


async function getInnerView() {
    let [inRes, outRes] = await startChainList();
    console.log("outRes ==>", outRes)

    let inTable = '';
    let outTable = '';

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
    }

    return [inTable.replace(/,/g, ""), outTable.replace(/,/g, "")]
}

router.get("/view", async function (req, res) {
    let [inTable, outTable] = await getInnerView();

    let html = '';

    html = `
        <!DOCTYPE html>

        <html lang="en">
            <head>
                <style>
                    table{
                        border: 1px solid deepskyblue;
                        border-bottom: none;
                    }
                    td{
                        border-right: 1px solid deepskyblue;
                        border-bottom: 1px solid deepskyblue;
                        padding: 2px 2px;
                    }
                    td:last-child{
                        border-right: none;
                    }
                </style>
            </head>
            <body>
                ${inTable}
                ${outTable}
            </body>
        </html>
    `

    res.send(html)
})

module.exports = {
    startChainList,
    router,
};
