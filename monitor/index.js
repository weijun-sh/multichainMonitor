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

    return new Promise((resolve, reject) => {
        getAllList({
            inReq: getSwapinHistory,
            outReq: getSwapoutHistory,
            routerReq: getSwapHistory,
            page: "un"
        }).then((list) => {
            console.log("org list ==>", list.length)
            list = filterRangeList(list)
            console.log("filtered list ==>", list.length)
            resolve(list)

        }).catch((err) => {
            console.log("un monitor error ==>", err.message)
            reject(err)
        });
    })

}



function startMonitor(){
    analysis().then((list) => {
        sendTimeoutEmail(list)
    }).catch(() => {

    })
}

startMonitor();

module.exports = {
    startMonitor,
    analysis
}
