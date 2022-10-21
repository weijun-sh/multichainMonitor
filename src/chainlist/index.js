const express = require("express");
const {innerStart} = require("./hooks/inter");
const {outerStart} = require("./hooks/outer");
const {OUTER_CHAIN_LIST} = require("./constant/rpcs");

const router = express.Router();

async function startChainList() {

    let chain = OUTER_CHAIN_LIST[0];
    chain.isInner = true;

    let res = await innerStart(chain);
    if (!res) {
        console.log("inner res err ==>", res)
        return;
    }

    let outRes = await outerStart(chain, chain.rpc)

    console.log("res ==>", res, outRes)
    return res
}


//startChainList()


router.get("/view", async function (req, res) {
    let result = await startChainList();

    let html = '';

    if (result) {
        const tbodys = result.map((item, index) => {
            const {height, latency, rpc} = item.data;
            return (
                `<tr>
                    <td>${index + 1}</td>
                    <td>${rpc}</td>
                    <td>${height}</td>
                    <td>${latency}</td>
                    <td>${item.status}</td>
                 </tr>`
            )
        })
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
                            padding: 6px 12px;
                        }
                        td:last-child{
                            border-right: none;
                        }
                    </style>
                </head>
                <body>
                

                <table >
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>rpc</td>
                            <td>height</td>
                            <td>latency</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        ${tbodys}                        
                    </tbody>
                </table>
                </body>
            </html>
        `
    }

    res.send(html)
})

module.exports = {
    startChainList,
    router,
};
