const {getBlockHeight} = require("../../service/api");
const {getRpcData, STATUS_SUCCESS, STATUS_ERROR} = require("../constant/rpcState");

function innerStart(chain){
    return new Promise((resolve, reject) => {

        getBlockHeight({
            params: [{chainid: chain.chainId.toString()}],
            sendOption: {
                retry: {
                    counter: 0
                },
                timeout: 5,
                isToastError: false,
                isConsoleError: false,
            },

        }).then((res) => {

            let list = res.result.data;
            list = list.map(item => {
                //attach chainId,
                item.chainId = chain.chainId

                //latency, height maybe '', format it
                if(item.latency === ""){
                    item.latency = null
                }
                if(item.height === ''){
                    item.height = null;
                }

                if(item.latency != null){
                    item.latency = item.latency * 1000;
                }
                if(item.height != null){
                    item.height = item.height * 1;
                }
                item.isInner = true

                //height null is error
                if(item.height == null || item.latency == null){
                    item.errMsg = "rpc error"
                    return getRpcData(STATUS_ERROR, item)
                }else {
                    return getRpcData(STATUS_SUCCESS, item)
                }
            })
            resolve(list);
        }).catch((err) => {
            console.log("inner err", 'err', err, 'chain', chain)
        }).finally(() => {
        })
    })
}

module.exports = {
    innerStart
}
