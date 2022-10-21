const {getRpcData, STATUS_ERROR, STATUS_LOADING, STATUS_SUCCESS} = require("../constant/rpcState") ;
const _ = require('lodash')
const {
    SCORE_ERROR,
    SCORE_LOADING, SCORE_PARAMS,
    SCORE_SUCCESS_GREEN,
    SCORE_SUCCESS_RED,
    SCORE_SUCCESS_ORANGE
} = require("../constant/valueConst") ;

function calcScore(list) {
    /**TODO replaced by sortHeightLatency*/
    list = list.sort((a1, b1) => {
        let a = _.cloneDeep(a1);
        let b = _.cloneDeep(b1);

        if (a.status !== STATUS_SUCCESS) {
            a.height = 0;
            a.latency = 99999999999;
        }
        if (b.status !== STATUS_SUCCESS) {
            b.height = 0;
            b.latency = 99999999999;
        }
        if (a.height > b.height) {
            return -1
        } else if (a.height < b.height) {
            return 1
        } else {
            return a.latency - b.latency;
        }
    });

    let topRpc = {};
    if (list.length) {
        topRpc = list[0];
    }

    list = list.map(record => {
        if (record.status === STATUS_ERROR) {
            record.score = SCORE_ERROR;
            record.heightScore = SCORE_ERROR;
            record.latencyScore = SCORE_ERROR;
            return record
        }
        if (record.status === STATUS_LOADING) {
            record.score = SCORE_LOADING;
            record.heightScore = SCORE_LOADING;
            record.latencyScore = SCORE_LOADING;
            return record;
        }

        const {height, latency, chainId} = record;

        if (!chainId) {
            window.error("not found error calc score", 'chain', record)
        }

        let param = getScoreParams(record);
        //window.success("param", param)
        if (!param) {
            window.error("not found error calc score", 'param', record)
        }

        let diffOfLatency = topRpc.latency - latency;
        let diffOfHeight = topRpc.height - height;


        if(diffOfLatency > 3000){
            record.latencyScore = SCORE_SUCCESS_RED
        }else if(diffOfLatency > 0){
            record.latencyScore = SCORE_SUCCESS_ORANGE
        }
        else{
            record.latencyScore = SCORE_SUCCESS_GREEN
        }

        if(diffOfHeight >= param){
            record.heightScore = SCORE_SUCCESS_RED;
        }else if(diffOfHeight > param - 1){
            record.heightScore = SCORE_SUCCESS_ORANGE;
        }else {
            record.heightScore = SCORE_SUCCESS_GREEN;
        }

/*        if (topRpc.height - height >= param || topRpc.latency - latency > 5000) {
            record.score = SCORE_SUCCESS_RED
        } else if (topRpc.height - height < param && topRpc.latency - latency > -600) {
            record.score = SCORE_SUCCESS_GREEN
        } else {
            record.score = SCORE_SUCCESS_ORANGE
        }*/

        return record
    })


    return list;
}

function sortHeightLatency(list) {
    let result = list.sort((a, b) => {
        let aHeight = 0;
        let aLatency = 9999999;
        let bHeight = 0;
        let bLatency = 9999999;
        if (a.status === STATUS_SUCCESS) {
            aHeight = a.data.height;
            aLatency = a.data.latency;
        }
        if (b.status === STATUS_SUCCESS) {
            bHeight = b.data.height;
            bLatency = b.data.latency;
        }
        let heightDiff = bHeight - aHeight;

        if (heightDiff !== 0) {
            return heightDiff
        } else {
            return aLatency - bLatency;
        }
    })
    return result;
}

function getTopHeight(list) {

    let result = sortHeightLatency(list);
    return result
}

function formatOutData(rpc, data) {
    let height = data?.result?.number ?? null;
    let latency = data?.latency ?? null;
    if (height) {
        const hexString = height.toString(16);
        height = parseInt(hexString, 16);
    } else {
        latency = null;
    }
    return {rpc: rpc, height, latency, isInner: false, chainId: data.chainId};
}

function getScoreParams(chain) {
    const {chainId} = chain;

    let defaultParam = 3
    let param = SCORE_PARAMS[chainId];
    if(param){
        return param
    }
    return defaultParam
}

module.exports = {
    calcScore,
    formatOutData
}
