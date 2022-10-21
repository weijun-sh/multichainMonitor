const {fetchOuter} = require("../utils/outerRequest");
const {formatOutData} = require("../utils");
const {getRpcData, STATUS_ERROR, STATUS_SUCCESS} = require("../constant/rpcState");

function outerStart(chain, rpcs) {
    let list = new Array(rpcs.length);
    let counter = 0;
    return new Promise((resolve, reject) => {
        rpcs.map((rpc, index) => {
            fetchOuter(rpc).then((res) => {
                const {data, latency} = res;
                data.latency = latency;
                data.chainId = chain.chainId;
                let formattedData = formatOutData(rpc, data);
                list[index] = getRpcData(STATUS_SUCCESS, formattedData);
            }).catch((err) => {
                //console.log("outer error", err)
                list[index] = getRpcData(STATUS_ERROR, {rpc: rpc, chainId: chain.chainId, errMsg: "network error"});
            }).finally(() => {

                if (counter >= list.length - 1) {
                    resolve(list);
                    return;
                }
                counter++;
            })
        })
    })
}

module.exports = {
    outerStart
}
