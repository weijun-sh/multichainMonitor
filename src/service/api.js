const http = require('../utils/http');
const {SERVER_URL} = require("../config/index");
let getSwapHistory = function ({params, sendOption}) {
    return http.http({
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
    return http.http({
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
    return http.http({
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

let getReview = function ({params, sendOption}) {
    const {bridge, starttime, endtime} = params;

    return http.http({
        method: 'post',
        url: SERVER_URL.URL_MAINTENANCE,
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
        url: SERVER_URL.URL_MAINTENANCE,
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
        url: SERVER_URL.URL_MAINTENANCE,
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


let sendEmail = function ({params, sendOption}) {
    const {to, html, subject} = params;

    return http.http({
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

module.exports = {
    getSwapoutHistory,
    getSwapHistory,
    getSwapinHistory,
    getReview,
    getInReview,
    getOutReview,
    sendEmail
}
