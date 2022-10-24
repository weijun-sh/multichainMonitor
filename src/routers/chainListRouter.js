const express = require('express')
const router = express.Router();
const {getTableView} = require('../chainlist/index')
const {systemStorageSave} = require("../fileStorage");
const {guid} = require("../utils/math");
const _ = require('lodash')
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


router.post("/msg/add", function (req, res) {
    const {title, msg,} = req.body;

    if(!title || !msg){
        res.send({
            code: 1,
            msg: 'param error',
            data: null
        })
        return
    }

    if (!global.systemStorage.chainList.msgList) {
        global.systemStorage.chainList.msgList = []
    }

    global.systemStorage.chainList.msgList.push({
        title,
        msg,
        id: guid()
    });

    systemStorageSave(global.systemStorage)
    res.send({
        code: 0,
        msg: 'success',
        data: global.systemStorage.msgList
    })
});

router.post("/msg/delete", function (req, res) {
    const {id} = req.body;

    if(!id){
        res.send({
            code: 1,
            msg: 'param error',
            data: null
        })
        return
    }
    if (!global.systemStorage.chainList.msgList ) {
        res.send({
            code: 1,
            msg: 'msg list is null',
            data: null
        })
        return;
    }
    if(!global.systemStorage.chainList.msgList.length){
        res.send({
            code: 1,
            msg: 'msg list length is 0',
            data: null
        })
        return;
    }

    _.remove(global.systemStorage.chainList.msgList, function (item) {
        return item.id === id
    });
    console.log("global.systemStorage.chainList.msgList ==> ", global.systemStorage.chainList.msgList)
    systemStorageSave(global.systemStorage)
    res.send({
        code: 0,
        msg: 'success',
        data: null
    })
});

router.get('/msg/get', function (req, res){
    const {id} = req.query;

    if(!id){
        res.send({
            code: 1,
            msg: 'param error',
            data: null
        })
        return
    }

    let item = global.systemStorage.chainList.msgList.find(item => {
        return item.id === id
    })
    if(!item){
        res.send({
            code: 1,
            msg: 'not exits',
            data: null
        })
        return
    }

    res.send({
        code: 0,
        msg: 'success',
        data: item
    })
})


module.exports = {
    router,
}
