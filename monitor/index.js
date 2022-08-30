const {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    getInReview,
    getOutReview,
    getReview
} = require('../service/api');
const {getAllList} = require('./request')
const {isTimeout, filterRangeList} = require("./utils");


async function analysis() {

    getAllList({
        inReq: getSwapinHistory,
        outReq: getSwapoutHistory,
        routerReq: getSwapHistory,
        page: "un"
    }).then((list) => {

        list = filterRangeList(list)

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
