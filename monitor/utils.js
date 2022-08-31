const {transferMilSecond, timestamp2DateTime, dateFormatter} = require("../utils/time");
const {emailTransporter} = require("../utils/email");
const {EmailConfig} = require("../staticConfig");
const path = require("path");

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

//inittime  is 13  mil seconds
function timeFromNow(inittime) {
    let current = new Date().getTime();
    let fromNow = ((current - inittime)).toFixed(0);

    let FromNowText = transferMilSecond(fromNow);

    return {
        fromNow: fromNow,
        FromNowText: FromNowText
    }
}

//timeout   is 13  mil seconds
//inittime  is 13  mil seconds
//timestamp is 10      seconds  * 1000
function isArrivalTimeout(record, timeout){
    let {inittime, timestamp} = record;

    timestamp = timestamp * 1000;
    let diff = timestamp - inittime;

    //diffText  110days 20h 10m 4s
    let diffText = transferMilSecond(diff);

    let inittimeText = dateFormatter(inittime);
    let timestampText = dateFormatter(timestamp);

    let { fromNow, FromNowText } = timeFromNow(inittime)

    return {
        diffText,
        diff,
        isOut:  false,
        inittimeText: inittimeText,
        timestampText: timestampText,
        initFromNowText:FromNowText,
        fromNow: fromNow
    }
}



function formatListTime(list){
    list = list.map(item => {
        const outInfo = isArrivalTimeout(item);
        return {
            ...item,
            ...outInfo
        }
    });

    return list;
}



function sendTimeoutEmail({html, theme, receivers = '13026610069@163.com'}){


    //console.log("html ==>", html)
    let mailOptions = {
        from: EmailConfig.from,
        to: receivers,
        subject: theme,
        html: html
    };
    emailTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log("email send error ==>",error);
        }
        console.log('邮件发送成功 ID：', info.messageId);
    })

}

module.exports = {
    deepMapList,
    isArrivalTimeout,
    formatListTime,
    sendTimeoutEmail
}
