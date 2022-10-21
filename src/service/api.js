const {http} = require('../utils/http');
const {SERVER_URL} = require("../config/index");
let getSwapHistory = function ({params, sendOption}) {
    return http({
        method: 'post',
        url: SERVER_URL.URL_MAINTENANCE,
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
    return http({
        method: 'post',
        url: SERVER_URL.URL_MAINTENANCE,
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
    return http({
        method: 'post',
        url: SERVER_URL.URL_MAINTENANCE,
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

let sendEmail = function ({params, sendOption}) {
    const {to, html, subject} = params;

    return http({
        method: 'post',
        url: SERVER_URL.URL_EMAIL + '/email/send',
        data: {
            to: to,
            html: html,
            subject: subject
        },
        sendOption
    })
}
/** =============================== */
const getBlockHeight = function (queParams) {
    const {params, sendOption} = queParams;
    return http({
        method: 'post',
        url: SERVER_URL.URL_CHAINLIST,
        data: {
            "jsonrpc": "2.0",
            "method": "minfo.GetFullnodeInfo",
            "params": params,
            "id": 1
        },
        sendOption
    })
}

const interChains = function (queParams) {
    const {params, sendOption} = queParams;
    return http({
        method: 'post',
        url: SERVER_URL.URL_CHAINLIST,
        data: {
            jsonrpc: "2.0",
            method: "minfo.GetFullnodeChainid",
            params: [],
            id: 1
        },
        sendOption
    })
}

module.exports = {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    sendEmail,
    getBlockHeight,
    interChains
}
