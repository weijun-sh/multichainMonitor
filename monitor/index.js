const {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory
} = require('../service/api');

const {
    unInRes,
    unOutRes,
    unRouterRes
} = require('./mock')

const {deepMapList} = require('./utils')
async function getUnList() {
    console.log("start ==>")
    let outRes = await getSwapoutHistory({params: {bridge: "all"}, sendOption: {mock: {data: unOutRes}}});
    let inRes = await getSwapinHistory({params: {bridge: "all"}, sendOption: {mock: {data: unInRes}}});
    let routerRes = await getSwapHistory({params: {bridge: "all"}, sendOption: {mock: {data: unRouterRes}}});

    console.log("in ==>", inRes);
    console.log("out ==>", outRes);
    console.log("router ==>", routerRes);

    if(!inRes ){
        return Promise.reject(new Error("in 网络错误"))
    }
    if(!outRes ){
        return Promise.reject(new Error("out 网络错误"))
    }
    if(!routerRes ){
        return Promise.reject(new Error("router 网络错误"))
    }

    if(inRes.result.code !== 0 ){
        return Promise.reject(new Error("in 发生错误"))
    }
    if(outRes.result.code !== 0){
        return Promise.reject(new Error("out 发生错误"))
    }
    if(routerRes.result.code !== 0){
        return Promise.reject(new Error("router 发生错误"))
    }
    let inList = deepMapList(inRes.result.data);
    let outList = deepMapList(outRes.result.data);
    let routerList = deepMapList(routerRes.result.data);
    let list = [...inList, ...outList, ...routerList]

    return Promise.resolve(list);
}

async function startMonitor() {
    getUnList().then((list) => {
        console.log("monitor list ==>", list);
        list.map(item => {
            //console.log("item ==>", item)
        })
    }).catch((err) => {
        console.log("monitor error ==>", err.message)
    });
}

startMonitor().then(() => {

}).catch(() => {

})

module.exports = {
    getUnList
}
