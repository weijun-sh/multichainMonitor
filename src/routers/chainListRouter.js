const express = require('express')
const router = express.Router();
const {chainListMonitor} = require('../chainlist/index')
const {systemStorageSave} = require("../fileStorage");
const {guid} = require("../utils/math");
const _ = require('lodash');

function getIndexById(id){
    let findIndex = -1;
    global.systemStorage.chainList.msgList.find((item, index) => {
        if(item.id === id){
            findIndex = index
            return true;
        }
    })
    if(findIndex !== -1){
        return [findIndex, global.systemStorage.chainList.msgList[findIndex]];
    }
    return [findIndex, null]
}
function getIndexByChainIdRpc(chainId){
    let findIndex = -1;
    global.systemStorage.chainList.msgList.find((item, index) => {
        if(item.chainId === chainId){
            findIndex = index
            return true;
        }
    })
    return findIndex;
}

function filterHistory(id){
    let history = global.systemStorage.chainList.history;

    let list = history.filter(item => {
        return item.id === id
    });
    return list;
}

router.get("/view", async function (req, res) {
    let [allTable, errorTable] = await chainListMonitor();

    let allView = allTable.join('').replace(/,/g, '');
    let errorView = errorTable.join('').replace(/,/g, '');
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
                ${allView}
                ${errorView}
            </body>
        </html>
    `

    res.send(html)
})

router.post("/msg/add", function (req, res) {
    const {title, content,chainId, createTime, /*chainType*/} = req.body;

    if(!title || !content || !chainId || !createTime /*|| !chainType*/){
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

    global.systemStorage.chainList.msgList.unshift({
        title,
        content,
        id: guid(),
        chainId: chainId,
        deal: null,
        createTime: createTime,
        /*chainType: chainType*/
    });

    systemStorageSave(global.systemStorage)
    res.send({
        code: 0,
        msg: 'success',
        data: {}
    })
});

router.post("/msg/update", function (req, res) {
    const {title, content, id, deal} = req.body;
    if(!id){
        res.send({
            code: 1,
            msg: 'param error',
            data: null
        })
        return
    }

    if (!global.systemStorage.chainList.msgList) {
        res.send({
            code: 1,
            msg: '无消息',
            data: null
        })
        return
    }

    let [findIndex, findItem] = getIndexById(id);

    if(findIndex === -1){
        res.send({
            code: 1,
            msg: '消息不存在',
            data: null
        })
        return
    }

    delete findItem.history;

    let newItem = {
        ...findItem,
        title,
        content,
        deal,
    }

    findItem.createTime = new Date().getTime()
    global.systemStorage.chainList.history.unshift(findItem);

    global.systemStorage.chainList.msgList[findIndex] = newItem

    systemStorageSave(global.systemStorage)
    res.send({
        code: 0,
        msg: 'success',
        data: {}
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
    systemStorageSave(global.systemStorage)
    res.send({
        code: 0,
        msg: 'success',
        data: null
    })
});

router.post('/msg/get', function (req, res){
    const {id} = req.body;

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

    item.history = filterHistory(id)
    res.send({
        code: 0,
        msg: 'success',
        data: item
    })
})

router.post('/msg/list', function (req, res){
    let chainList = _.cloneDeep(global.systemStorage.chainList);
    let mgList = chainList.msgList.map(item => item);


    mgList = mgList.map(item => {
        item.history = filterHistory(item.id);
        return item;
    })


    res.send({
        code: 0,
        msg: 'success',
        data: mgList
    })
})


router.get('/msg/view', function (req, res){
    res.render("msg",{
        msg: global.systemStorage.chainList.msgList,
    })
})

module.exports = {
    router,
}
