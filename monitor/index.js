const {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    getInReview,
    getOutReview,
    getReview
} = require('../service/api');
const {getAllList} = require('./request')
const {filterRangeList, sendTimeoutEmail} = require("./utils");
const {monitorColumns} = require("./monitorColumns");
const {renderView} = require("../utils/viewEngin");

const TIMEOUT_VALUE = 1000 * 60 * 10;

let emailReceivers = [
    {name: '张国泽qq', email: '747954470@qq.com'},
    {name: '张国泽163', email: '13026610069@163.com'},
]

function exceptSomeItem(list){
    list = list.filter(item => {
        return item.bridge.indexOf("AnyCall") === -1
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


async function analysis() {

    return new Promise((resolve, reject) => {
        getAllList({
            inReq: getSwapinHistory,
            outReq: getSwapoutHistory,
            routerReq: getSwapHistory,
            page: "un"
        }).then((list) => {

            list = exceptSomeItem(list);

            list = filterRangeList(list, TIMEOUT_VALUE)
            list = list.map((item, index) => {
                item.rowKey = index + 1;
                return item
            });

            let {showList, orgList} = renderFieldList(list);

            resolve({
                showList,
                orgList
            })

        }).catch((err) => {
            console.log("un monitor error ==>", err.message)
            reject(err)
        });
    })

}



function startMonitor(){
    let theme = "未到账交易监控"
    analysis().then(({showList}) => {
        let html = renderView({
            list: showList,
            columns: monitorColumns,
            title: theme
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
        console.log("发送失败 ==>", err.message, err);
    })
}

function monitorInterval(){
    startMonitor();
    setInterval(() => {
        startMonitor();
    }, 10000)
}

monitorInterval();

module.exports = {
    analysis,
    renderFieldList,
    exceptSomeItem,
    monitorInterval
}
