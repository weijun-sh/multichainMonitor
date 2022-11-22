const express = require('express')
const router = express.Router();
const {chainListMonitor} = require('../chainlist/index')
const {systemStorageSave} = require("../fileStorage");
const {guid} = require("../utils/math");
const _ = require('lodash');

router.get('/', function (req, res) {
    res.send("hello testing")
})

router.post('/chainIds', function (req, res) {
    res.send({
            "jsonrpc": "2.0", "result": {
                "code": 0,
                "msg": "",
                "data": [{
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
                },

                    /* {
                    "chainId": "250",
                    "releaselatest": "1.1.1-rc.2",
                    "releaseurl": "https://github.com/Fantom-foundation/go-opera/releases/tag/v1.1.1-rc.2"
                }, {
                    "chainId": "43114",
                    "releaselatest": "1.9.3",
                    "releaseurl": "https://github.com/ava-labs/avalanchego/releases/tag/v1.9.3"
                }, {
                    "chainId": "32659",
                    "releaselatest": "5.0.0",
                    "releaseurl": "https://github.com/FUSIONFoundation/efsn/releases/tag/v5.0.0"
                }, {
                    "chainId": "128",
                    "releaselatest": "1.2.2",
                    "releaseurl": "https://github.com/stars-labs/heco-chain/releases/tag/v1.2.2"
                }, {
                    "chainId": "100",
                    "releaselatest": "3.0.1",
                    "releaseurl": "https://github.com/openethereum/parity-ethereum/releases/tag/v3.0.1"
                }, {
                    "chainId": "1666600000",
                    "releaselatest": "4.3.12",
                    "releaseurl": "https://github.com/harmony-one/harmony/releases/tag/v4.3.12"
                }, {
                    "chainId": "321",
                    "releaselatest": "1.2.0",
                    "releaseurl": "https://github.com/kcc-community/kcc/releases/tag/v1.2.0"
                }, {
                    "chainId": "66",
                    "releaselatest": "1.6.5.6",
                    "releaseurl": "https://github.com/okex/exchain/releases/tag/v1.6.5.6"
                }, {
                    "chainId": "42220",
                    "releaselatest": "1.7.0",
                    "releaseurl": "https://github.com/celo-org/celo-blockchain/releases/tag/v1.7.0"
                }, {
                    "chainId": "336",
                    "releaselatest": "4.33.0",
                    "releaseurl": "https://github.com/AstarNetwork/Astar/releases/tag/v4.33.0"
                }, {
                    "chainId": "1030",
                    "releaselatest": "2.2.0",
                    "releaseurl": "https://github.com/Conflux-Chain/conflux-rust/releases/tag/v2.2.0"
                }, {
                    "chainId": "30",
                    "releaselatest": "HOP-TESTNET-4.1.1",
                    "releaseurl": "https://github.com/rsksmart/rskj/releases/tag/HOP-TESTNET-4.1.1"
                }, {
                    "chainId": "10001",
                    "releaselatest": "1.10.23.1",
                    "releaseurl": "https://github.com/ethereumpow/go-ethereum/releases/tag/v1.10.23.1"
                }, {
                    "chainId": "1285",
                    "releaselatest": "0.27.2",
                    "releaseurl": "https://github.com/PureStake/moonbeam/releases/tag/v0.27.2"
                }, {
                    "chainId": "1284",
                    "releaselatest": "0.27.2",
                    "releaseurl": "https://github.com/PureStake/moonbeam/releases/tag/v0.27.2"
                }, {
                    "chainId": "25",
                    "releaselatest": "0.8.3",
                    "releaseurl": "https://github.com/crypto-org-chain/cronos/releases/tag/v0.8.3"
                }, {
                    "chainId": "terra",
                    "releaselatest": "2.1.4",
                    "releaseurl": "https://github.com/terra-money/core/releases/tag/v2.1.4"
                }, {
                    "chainId": "1313161554",
                    "releaselatest": "2.7.0",
                    "releaseurl": "https://github.com/aurora-is-near/aurora-engine/releases/tag/2.7.0"
                }, {
                    "chainId": "592",
                    "releaselatest": "4.33.0",
                    "releaseurl": "https://github.com/AstarNetwork/Astar/releases/tag/v4.33.0"
                }, {
                    "chainId": "61",
                    "releaselatest": "1.12.8",
                    "releaseurl": "https://github.com/etclabscore/core-geth/releases/tag/v1.12.8"
                }, {
                    "chainId": "xrp",
                    "releaselatest": "1.9.4",
                    "releaseurl": "https://github.com/XRPLF/rippled/releases/tag/1.9.4"
                }, {
                    "chainId": "2000",
                    "releaselatest": "1.2.0",
                    "releaseurl": "https://github.com/dogechain-lab/dogechain/releases/tag/v1.2.0"
                }*/
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
                        "version": ""
                    }, {"rpc": "ethmainnet-nginx", "height": "16022435", "latency": "0.102", "version": ""}]
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
                        "version": "1.1.17"
                    }, {
                        "rpc": "node19",
                        "height": "23256380",
                        "latency": "0.002",
                        "version": "1.1.17"
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
                        "version": "0.2.17"
                    }, {
                        "rpc": "node10",
                        "height": "35908319",
                        "latency": "0.002",
                        "version": "0.2.17"
                    }]
                },
                "id": 1
            }
        )
    }
})

router.post("/version", function (req, res) {
    res.send({
        "jsonrpc": "2.0", "result": {
            "code": 0,
            "msg": "",
            "data": [{
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
            },]
        }, "id": 1
    })
})

module.exports = {
    router,
}

