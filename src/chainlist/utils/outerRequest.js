import {rpcRequest} from "../../../mlib/mu/rpcRequest";

const rpcBody = {
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['latest', false],
    id: 1,
};

export const fetchWssChain = (url) => {

    return new Promise((resolve, reject) => {
        const socket = new WebSocket(url);
        let requestStart;

        socket.onopen = function () {
            socket.send(rpcBody);
            requestStart = Date.now();
        };

        socket.onmessage = function (event) {
            const data = JSON.parse(event.data);

            const latency = Date.now() - requestStart;
            resolve({ ...data, latency });
        };

        socket.onerror = function (e) {
            reject()
        };
    });
};

export const fetchHttpChain = (url) => {
    let httpQuery = rpcRequest({
        url: url,
        method: 'post',
        data: rpcBody,

        sendOption: {
            retry: {
                counter: 0
            },
            timeout: 7,
        }
    })

    return httpQuery;
}

export const fetchOuter = (url) => {
    let query = null;
    if(url.includes('wss://')){
        query = fetchWssChain(url)
    }else {
        query = fetchHttpChain(url);
    }

    return query;
}
