const {transferMilSecond, timestamp2DateTime} = require("../utils/time");
const {emailTransporter} = require("../utils/email");
const {EmailConfig} = require("../staticConfig");
const {renderView} = require("../utils/viewEngin");

function deepMapList(data) {
    let list = [];
    let bridgeAndRouter = {};
    if (data.bridge) {
        bridgeAndRouter.bridge = data.bridge
    }
    if (data.router) {
        bridgeAndRouter.router = data.router
    }
    for (let bridgeOrRouterKey in bridgeAndRouter) {
        let bridgeOrRouter = data[bridgeOrRouterKey];
        bridgeOrRouter.map((bridges) => {
            for (let bridgeName in bridges) {
                let bridgeList = bridges[bridgeName];

                if (!Array.isArray(bridgeList)) {
                    bridgeList = [bridgeList]
                }
                bridgeList.map((item) => {
                    item.bridgeOrRouter = bridgeOrRouterKey;
                    item.bridge = bridgeName;
                    list = list.concat(item)
                })
            }
        })
    }
    return list;
}



//timeout   is 13  mil seconds
//inittime  is 13  mil seconds
//timestamp is 10      seconds  * 1000
function isArrivalTimeout(record, timeout = 1000 * 60 * 10){
    let {inittime, timestamp} = record;

    timestamp = timestamp * 1000;
    let diff = timestamp - inittime;

    //diffText  110days 20h 10m 4s
    let diffText = transferMilSecond(diff);

    let isOut = diff > timeout;
    let inittimeText = timestamp2DateTime(inittime);
    let timestampText = timestamp2DateTime(timestamp);

    return {
        diffText,
        diff,
        isOut: isOut,
        inittimeText: inittimeText,
        timestampText: timestampText
    }
}

function filterRangeList(list){
    list = list.filter(item => {
        const outInfo = isArrivalTimeout(item);
        const {diff, diffText, isOut} = outInfo;
        console.log("outInfo ==>", outInfo)
        return isOut
    })

    return list;
}



function sendTimeoutEmail(){

    renderView().then((html) => {
        let mailOptions = {
            from: EmailConfig.from,
            to: '13026610069@163.com',
            subject: '监控报告',
            html: html
        };
        emailTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('邮件发送成功 ID：', info.messageId);
        });
    })

}

module.exports = {
    deepMapList,
    isArrivalTimeout,
    filterRangeList,
    sendTimeoutEmail
}
