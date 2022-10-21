const {rpcRequest} = require("./rpcRequest") ;

var ws = require("ws").client;
const rpcBody = {
    jsonrpc: '2.0',
    method: 'eth_getBlockByNumber',
    params: ['latest', false],
    id: 1,
};

const fetchWssChain = (url) => {

    return new Promise((resolve, reject) => {
        reject();
        return
        const socket = new ws(url);
        let requestStart = 0;

        socket.on('open', function (){
            requestStart = Date.now();
            socket.send(rpcBody);
        });

        socket.on("message", function (event){
            const data = JSON.parse(event.data);

            const latency = Date.now() - requestStart;
            resolve({ ...data, latency });
        });

        socket.on("error", function (){
            reject()
        });
    });


};

const fetchHttpChain = (url) => {
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

const fetchOuter = (url) => {
    let query = null;
    if(url.includes('wss://')){
        query = fetchWssChain(url)
    }else {
        query = fetchHttpChain(url);
    }

    return query;
}

module.exports = {
    fetchOuter,
}
