const express = require('express')
const router = express.Router();
const {getTableView} = require('../chainlist/index')
router.get("/view", async function (req, res) {
    let [inTable, outTable, totalTable, sortedTable] = await getTableView();

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
                ${sortedTable}
            </body>
        </html>
    `

    res.send(html)
})

module.exports = {
    router,
}
