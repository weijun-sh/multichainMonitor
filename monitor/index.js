const {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    getInReview,
    getOutReview,
    getReview
} = require('../service/api');
const _ = require('lodash')
const {getAllList} = require('./request')
const {formatListTime, sendTimeoutEmail} = require("./utils");
const {monitorColumns} = require("./monitorColumns");
const {renderView} = require("../utils/viewEngin");

const RECORD_THRESHOLD = 5;
//10 minutes

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR   = ONE_SECOND * 60 * 60;

//in 24hours mil second
const HOURS_24 = 24

const TOP_LIST_NUMBER = 20;

const MONITOR_INTERVAL = ONE_HOUR;


const TIMEOUT_VALUE = ONE_MINUTE * 10;

let emailReceivers = [
    {name: '张国泽qq', email: '747954470@qq.com'},
    {name: '张国泽163', email: '13026610069@163.com'},
    {name: '黄卫军', email: 'anyswapinfo@163.com'}
]

function exceptSomeItem(list, field){
    list = list.filter(item => {
        return item.bridge.indexOf(field) === -1
    });
    return list;
}

function renderFieldList(list){
    let showList = [];
    showList = list.map(item => {
        let record = {
            ...item
        }
        monitorColumns.forEach(cItem => {
            let value = record[cItem.dataIndex];
            let text = cItem.render(value, record);
            record[cItem.dataIndex] = {
                data: value,
                text: text
            }
        })
        showList.push(record)
        return record;
    });
    return {showList, orgList:list}
}

//timeout   is 13  mil seconds
//inittime  is 13  mil seconds
//timestamp is 10      seconds  * 1000

function filter24Hours(list, start, end){
    let current = new Date().getTime()
    return list.filter(item => {
        console.log("current ==>", current);
        console.log("inittime ==>", item.inittime);
        let diff = current - item.inittime;
        let isIn = diff > start && diff < end
        return isIn
    })
}

function sorterByInitTime(list){
    list = _.sortBy(list, function (item) {
        return item.inittime
    })
    return list
}

function addRowKey(list){
    list = list.map((item, index) => {
        item.rowKey = index + 1;
        return item
    });
    return list
}

async function analysis() {

    return new Promise((resolve, reject) => {
        getAllList({
            inReq: getSwapinHistory,
            outReq: getSwapoutHistory,
            routerReq: getSwapHistory,
            page: "un"
        }).then((list) => {
            console.log("获取到后端数据 ==>")
            //not show anycall record
            list = exceptSomeItem(list, "AnyCall");

            //only show record in 24 hours mil second
            let start = ONE_MINUTE * 10;
            let end = HOURS_24 * ONE_HOUR;
            //start = start * 6 * 24 * 18;
            //end = end * 190
            list= filter24Hours(list, start, end,)

            //show over 10 minutes
            list = formatListTime(list);

            //sorter by inittime
            list = sorterByInitTime(list);

            //rowKeys
            list = addRowKey(list);

            console.log("解析字段显示 ==>")
            let {showList, orgList} = renderFieldList(list);

            let group = _.groupBy(showList, "swaptype.text");

            let statistics = {
                group: group,
                total: list.length
            }
            console.log("解析成功 ==>")
            resolve({
                showList,
                orgList,
                emitEmail: list.length > RECORD_THRESHOLD,
                statistics: statistics,
                recordInTimeText: `${HOURS_24}小时`,
                recordInTime: HOURS_24,
                topListNumber: TOP_LIST_NUMBER,
                timeOutValue: TIMEOUT_VALUE,
            })

        }).catch((err) => {
            console.log("un monitor error ==>", err.message)
            reject(err)
        });
    })

}

function startMonitor(){
    let theme = "未到账交易监控";
    console.log("开始监控 ==>")
    analysis().then(({
                         showList,
                         orgList,
                         emitEmail,
                         statistics,
                         recordInTime,
                         topListNumber,
                         timeOutValue,
                         recordInTimeText,
    }) => {
        console.log("已经获取到 解析数据")
        let html = renderView({
            showList: showList,
            columns: monitorColumns,
            title: theme,
            statistics: statistics,
            recordInTime: recordInTime,
            topListNumber: topListNumber,
            timeOutValue: timeOutValue,
            recordInTimeText: recordInTimeText,
        });

        let receivers = emailReceivers.map(item => {
            return item.email
        }).join(",")
        sendTimeoutEmail({
            html,
            theme: theme,
            receivers: receivers
        });
        console.log("发送成功");
    }).catch((err) => {
        console.log("分析日志失败 ==>", err.message, err);
    })
}

function monitorInterval(){
    startMonitor();
    setInterval(() => {
        startMonitor();
    }, MONITOR_INTERVAL)
}

monitorInterval();

module.exports = {
    analysis,
    renderFieldList,
    exceptSomeItem,
    monitorInterval
}
