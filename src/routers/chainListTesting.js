const express = require('express')
const router = express.Router();
const {chainListMonitor} = require('../chainlist/index')
const {systemStorageSave} = require("../fileStorage");
const {guid} = require("../utils/math");
const _ = require('lodash');

router.post('/chainIds', function (req, res) {
    res.send({
            "jsonrpc": "2.0", "result": {
                "code": 0,
                "msg": "",
                "data": [
/*                    {
                        "chainId": "1",
                        "releaselatest": "1.10.26",
                        "releaseurl": "https://github.com/ethereum/go-ethereum/releases/tag/v1.10.26"
                    }, {
                        "chainId": "56",
                        "releaselatest": "1.1.17",
                        "releaseurl": "https://github.com/bnb-chain/bsc/releases/tag/v1.1.17"
                    }, {
                        "chainId": "137",
                        "releaselatest": "0.2.17",
                        "releaseurl": "https://github.com/maticnetwork/bor/releases/tag/v0.2.17"
                    },*/

                    {
                        "chainId": "1",
                        "releaselatest": "",
                        "releaseurl": "https://github.com/ethereum/go-ethereum/releases/tag/v1.10.26"
                    }, {
                        "chainId": "56",
                        "releaselatest": "11.11.11",
                        "releaseurl": "https://github.com/bnb-chain/bsc/releases/tag/v1.1.17"
                    }, {
                        "chainId": "137",
                        "releaselatest": "15.15.15",
                        "releaseurl": "https://github.com/maticnetwork/bor/releases/tag/v0.2.17"
                    },
                ]
            }, "id": 1
        }
    )
});

router.post('/nodeInfo', function (req, res) {
    const {params} = req.body;
    let {chainid} = params[0];
    if (chainid === "1") {
        res.send({
                "jsonrpc": "2.0",
                "result": {
                    "code": 0,
                    "msg": "",
                    "data": [{
                        "rpc": "node16",
                        "height": "16022435",
                        "latency": "0.002",
                        "version": "11.11.11"
                    }, {
                        "rpc": "node6",
                        "height": "16022435",
                        "latency": "",
                        "version": ""
                    }, {
                        "rpc": "fullnode1",
                        "height": "",
                        "latency": "0.048",
                        "version": ""
                    }, {
                        "rpc": "ethmainnet-nginx",
                        "height": "16022435",
                        "latency": "0.102",
                        "version": ""
                    }]
                },
                "id": 1
            }
        )
        return;
        res.send({
                "jsonrpc": "2.0",
                "result": {
                    "code": 0,
                    "msg": "",
                    "data": [{
                        "rpc": "node16",
                        "height": "16022435",
                        "latency": "0.002",
                        "version": "1.10.26"
                    }, {
                        "rpc": "node6",
                        "height": "16022435",
                        "latency": "0.002",
                        "version": "1.10.26"
                    }, {
                        "rpc": "fullnode1",
                        "height": "16022435",
                        "latency": "0.048",
                        "version": "9.9.9"
                    }, {
                        "rpc": "ethmainnet-nginx",
                        "height": "16022435",
                        "latency": "0.102",
                        "version": "1.1.1"
                    }]
                },
                "id": 1
            }
        )
    }
    if (chainid === '56') {
        res.send({
                "jsonrpc": "2.0",
                "result": {
                    "code": 0,
                    "msg": "",
                    "data": [{
                        "rpc": "node16",
                        "height": "23262956",
                        "latency": "0.001",
                        "version": "99.99.99"
                    }, {
                        "rpc": "node19",
                        "height": "23256380",
                        "latency": "0.002",
                        "version": "14.14.14"
                    }]
                },
                "id": 1
            }
        )
    }
    if (chainid === '137') {
        res.send({
                "jsonrpc": "2.0",
                "result": {
                    "code": 0,
                    "msg": "",
                    "data": [{
                        "rpc": "node19",
                        "height": "35908319",
                        "latency": "0.001",
                        "version": "17.17.17"
                    }, {
                        "rpc": "node10",
                        "height": "35908319",
                        "latency": "0.002",
                        "version": "16.16.16"
                    }]
                },
                "id": 1
            }
        )
    }
})


module.exports = {
    router,
}

