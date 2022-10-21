const {
    unOutRes,
    unInRes,
    unRouterRes,
    revInRes,
    revRouterRes,
    revOutRes,
} = require("./mock");
const {deepMapList} = require("./utils");

async function getAllList({inReq, outReq, routerReq, page, isMock}) {
    //console.log(page + " start req ==>");
    let outRes = await outReq({params: {bridge: "all"}, sendOption: {mock: {data:  isMock ? unOutRes: null}}});
    console.log(page + " end out req ==>");
    let inRes = await inReq({params: {bridge: "all"}, sendOption: {mock: {data:  isMock ? unInRes: null}}});
    console.log(page + " end in req ==>");
    let routerRes = await routerReq({params: {bridge: "all"}, sendOption: {mock: {data: isMock ? unRouterRes: null}}});
    console.log(page + " end router req ==>");

    if(!inRes ){
        console.log("in 网络错误 ==>")
        return Promise.reject(new Error("in 网络错误"))
    }
    if(!outRes ){
        console.log("out 网络错误 ==>")
        return Promise.reject(new Error("out 网络错误"))
    }
    if(!routerRes ){
        console.log("router 网络错误 ==>")
        return Promise.reject(new Error("router 网络错误"))
    }

    if(inRes.result.code !== 0 ){
        console.log("in 发生错误 ==>", routerRes.result.msg)
        return Promise.reject(new Error("in 发生错误"))
    }
    if(outRes.result.code !== 0){
        console.log("out 发生错误 ==>", routerRes.result.msg)
        return Promise.reject(new Error("out 发生错误"))
    }
    if(routerRes.result.code !== 0){
        console.log("outer 发生错误 ==>", routerRes.result.msg)
        return Promise.reject(new Error("router 发生错误"))
    }
    let inList = deepMapList(inRes.result.data);
    let outList = deepMapList(outRes.result.data);
    let routerList = deepMapList(routerRes.result.data);
    let list = [...inList, ...outList, ...routerList]

    return Promise.resolve(list);
}

module.exports = {
    getAllList
}
