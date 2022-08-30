
const http = require('../utils/http');
const {tradeRpc} = require('../staticConfig')
let getSwapHistory = function ({params, sendOption}) {
    return http.http({
        method: 'post',
        url: tradeRpc,
        data: {
            "jsonrpc": "2.0",
            "method": "swap.GetSwapHistory",
            "params": [{
                ...params
            }],
            "id": 1
        },
        sendOption
    })
}

let getSwapinHistory = function ({params, sendOption}) {
    return http.http({
        method: 'post',
        url: tradeRpc,
        data: {
            "jsonrpc": "2.0",
            "method": "swap.GetSwapinHistory",
            "params": [{
                ...params
            }],
            "id": 1
        },
        sendOption
    })
}

let getSwapoutHistory = function ({params, sendOption}) {
    return http.http({
        method: 'post',
        url: tradeRpc,
        data: {
            "jsonrpc": "2.0",
            "method": "swap.GetSwapoutHistory",
            "params": [{
                ...params
            }],
            "id": 1
        },
        sendOption
    })
}

let getReview = function ({params, sendOption}) {
    const {bridge, starttime, endtime} = params;

    return http.http({
        method: 'post',
        url: tradeRpc,
        data: {
            "jsonrpc": "2.0",
            "method": "swap.GetSwapReview",
            "params": [{
                "bridge": bridge,
                "starttime": starttime,
                "endtime": endtime,
            }],
            "id": 1
        },
        sendOption
    })
}

let getInReview = function ({params, sendOption}) {
    const {bridge, starttime, endtime} = params;

    return http.http({
        method: 'post',
        url: tradeRpc,
        data: {
            "jsonrpc": "2.0",
            "method": "swap.GetSwapinReview",
            "params": [{
                "bridge": bridge,
                "starttime": starttime,
                "endtime": endtime,
            }],
            "id": 1
        },
        sendOption
    })
}

let getOutReview = function ({params, sendOption}) {
    const {bridge, starttime, endtime} = params;

    return http.http({
        method: 'post',
        url: tradeRpc,
        data: {
            "jsonrpc": "2.0",
            "method": "swap.GetSwapoutReview",
            "params": [{
                "bridge": bridge,
                "starttime": starttime,
                "endtime": endtime,
            }],
            "id": 1
        },
        sendOption
    })
}

module.exports = {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    getReview,
    getInReview,
    getOutReview,
}
