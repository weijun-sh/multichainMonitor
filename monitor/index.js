const {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    getInReview,
    getOutReview,
    getReview
} = require('../service/api');
const {getAllList} = require('./request')


async function analysis() {

    getAllList({
        inReq: getSwapinHistory,
        outReq: getSwapoutHistory,
        routerReq: getSwapHistory,
        page: "un"
    }).then((list) => {
        console.log("un monitor list ==>", list[0]);
        list.map(item => {
            //console.log("item ==>", item)
        })
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
    getUnList
}
