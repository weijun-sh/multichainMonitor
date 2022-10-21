import {fetchOuter} from "../utils/outerRequest";
import {formatOutData} from "../utils";
import {getRpcData, STATUS_ERROR, STATUS_SUCCESS} from "../constant/rpcState";

function startOuter(chain, rpcs){
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
                list[index] = getRpcData( STATUS_ERROR, {rpc:rpc, chainId: chain.chainId, errMsg: "network error" });
            }).finally(() => {

                if(counter >= list.length - 1){
                    resolve(list);
                    return;
                }
                counter++;
            })
        })
    })
}

export default {
    startOuter
}
