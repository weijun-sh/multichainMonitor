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
                let formattedData = formatOutData(rpc, data, null);
                list[index] = getRpcData(STATUS_SUCCESS, formattedData);
            }).catch((err) => {
                let formattedData = formatOutData(rpc, {rpc: rpc, chainId: chain.chainId,}, "network error");
                list[index] = getRpcData(STATUS_ERROR, formattedData );
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
