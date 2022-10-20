const {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    sendEmail
} = require('../service/api');
const _ = require('lodash')
const {getAllList} = require('./request')
const {formatListTime} = require("./utils");
const {monitorColumns} = require("./monitorColumns");
const {renderView} = require("./viewEngin");
const {MAINTENANCE_CONF} = require("../config/config");
const {ONE_HOUR} = require("../const/timeValue");

const RECORD_THRESHOLD = MAINTENANCE_CONF.RECORD_THRESHOLD;
//10 minutes

const TOP_LIST_NUMBER = MAINTENANCE_CONF.TOP_LIST_NUMBER;
const MONITOR_INTERVAL = MAINTENANCE_CONF.MONITOR_INTERVAL;

const TIMEOUT_VALUE = MAINTENANCE_CONF.TIMEOUT_VALUE;
const NOT_OVER_TIME = MAINTENANCE_CONF.NOT_OVER_TIME;

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

function filterTimeRange(list, start, end){
    let current = new Date().getTime()
    return list.filter(item => {
        let diff = current - item.inittime;
        let isIn = diff > start && diff < end;
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

function milSecond2Hours(mil){
    return mil * 1 / ONE_HOUR
}

async function analysis() {

    return new Promise((resolve, reject) => {
        let isMock = false
        //start = start * 6 ;
        //end = end * 200
        //isMock = true;

        getAllList({
            inReq: getSwapinHistory,
            outReq: getSwapoutHistory,
            routerReq: getSwapHistory,
            page: "un",
            isMock: isMock
        }).then((list) => {
            console.log("获取到后端数据 ==>")
            //not show anycall record
            list = exceptSomeItem(list, "AnyCall");

            //only show record in 24 hours, and 15 minutes mil second
            list= filterTimeRange(list, TIMEOUT_VALUE, NOT_OVER_TIME,)

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
            let hours = milSecond2Hours(NOT_OVER_TIME);
            let emitEmail = list.length >= RECORD_THRESHOLD;
            console.log("解析成功 ==>",NOT_OVER_TIME, hours);
            console.log("emitEmail",emitEmail, list.length, RECORD_THRESHOLD);
            resolve({
                showList,
                orgList,
                emitEmail: emitEmail,
                statistics: statistics,
                recordInTimeText: `${hours}小时`,
                recordInTime: hours,
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
    //email title
    let subject = "监控-未到账交易"
    //page title
    let title = "未到账统计";

    console.log("开始监控 ==>", new Date().toLocaleString())
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
        console.log("已经获取到 解析数据 ==> ")
        let html = renderView({
            showList: showList,
            columns: monitorColumns,
            title: title,
            statistics: statistics,
            recordInTime: recordInTime,
            topListNumber: topListNumber,
            timeOutValue: timeOutValue,
            recordInTimeText: recordInTimeText,
        });

        if(!emitEmail){
            console.log(`交易数量为${showList.length}， 不发送邮件`)
            return
        }

        sendEmail({
            params: {
                html: html,
                to: MAINTENANCE_CONF.TO_LIST,
                subject: subject,
            },
            sendOption: {

            }
        }).then((res) => {
            console.log(`交易数量为${showList.length}， 发送成功`)
        }).catch((err) => {
            console.log(`交易数量为${showList.length}， 发送失败`)
        })


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
