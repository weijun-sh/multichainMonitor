const express = require('express')
const router = express.Router();
const {getTableView} = require('../chainlist/index')
const {systemStorageSave} = require("../fileStorage");
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


router.post("/msg/add", function (req, res){
    const {title, msg, } = req.body;
    if(!global.systemStorage.chainList.msgList){
        global.systemStorage.chainList.msgList = []
    }

    global.systemStorage.chainList.msgList.push({
        title,
        msg
    });

    systemStorageSave(global.systemStorage)
    res.send({
        code: 0,
        msg: 'success',
        data: global.systemStorage.msgList
    })
});

router.post("/msg/delete", function (req, res){
    res.send({
        code: 0,
        msg: 'success',
        data: null
    })
});



module.exports = {
    router,
}
