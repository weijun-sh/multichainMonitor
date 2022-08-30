const {transferMilSecond, timestamp2DateTime} = require("../utils/time");

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
function isTimeout(record, timeout = 1000 * 60 * 10){
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
        const outInfo = isTimeout(item);
        const {diff, diffText, isOut} = outInfo;
        console.log("outInfo ==>", outInfo)
        return isOut
    })

    return list;
}

module.exports = {
    deepMapList,
    isTimeout,
    filterRangeList
}
