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


async function analysis() {

    sendTimeoutEmail()
    return;
    getAllList({
        inReq: getSwapinHistory,
        outReq: getSwapoutHistory,
        routerReq: getSwapHistory,
        page: "un"
    }).then((list) => {

        list = filterRangeList(list)
        sendTimeoutEmail()

    }).catch((err) => {
        console.log("un monitor error ==>", err.message)
    });
}



function startMonitor(){
    analysis().then(() => {

    }).catch(() => {

    })
}

startMonitor();

module.exports = {
    startMonitor
}
