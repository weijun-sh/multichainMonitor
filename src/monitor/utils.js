const {transferMilSecond, dateFormatter} = require("../utils/time");

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

module.exports = {
    deepMapList,
    formatListTime,
}
