let OUTER_CHAIN_LIST = [{
    "name": "Ethereum Mainnet",
    "chain": "ETH",
    "icon": "ethereum",
    "rpc": [
        "https://api.mycryptoapi.com/eth",
        "https://cloudflare-eth.com",
        "https://rpc.flashbots.net",
        "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79",
        "https://mainnet-nethermind.blockscout.com",
        "https://nodes.mewapi.io/rpc/eth",
        "https://main-rpc.linkpool.io",
        "https://mainnet.eth.cloud.ava.do",
        "https://ethereumnodelight.app.runonflux.io",
        "https://rpc.ankr.com/eth",
        "https://eth-rpc.gateway.pokt.network",
        "https://main-light.eth.linkpool.io",
        "https://eth-mainnet.public.blastapi.io",
        "http://18.211.207.34:8545",
        "https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7",
        "wss://eth-mainnet.nodereal.io/ws/v1/1659dfb40aa24bbb8153a677b98064d7",
        "https://api.bitstack.com/v1/wNFxbiJyQsSeLrX8RRCHi7NpRxrlErZk/DjShIqLishPCTB9HiMkPHXjUM9CNM9Na/ETH/mainnet"
    ],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://ethereum.org",
    "shortName": "eth",
    "chainId": 1,
    "networkId": 1,
    "slip44": 60,
    "ens": {"registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},
    "explorers": [{"name": "etherscan", "url": "https://etherscan.io", "standard": "EIP3091"}],
    "tvl": 46391137053.79036,
    "chainSlug": "ethereum"
}, {
    "name": "Binance Smart Chain Mainnet",
    "chain": "BSC",
    "rpc": ["https://bsc-dataseed1.binance.org", "https://bsc-dataseed2.binance.org", "https://bsc-dataseed3.binance.org", "https://bsc-dataseed4.binance.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "wss://bsc-ws-node.nariox.org", "https://bsc-dataseed.binance.org", "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3", "wss://bsc-mainnet.nodereal.io/ws/v1/64a9df0874fb4a93b9d0a3849de012d3", "https://rpc.ankr.com/bsc", "https://bscrpc.com", "https://bsc.mytokenpocket.vip", "https://binance.nodereal.io", "https://rpc-bsc.bnb48.club", "https://bscapi.terminet.io/rpc"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "Binance Chain Native Token", "symbol": "BNB", "decimals": 18},
    "infoURL": "https://www.binance.org",
    "shortName": "bnb",
    "chainId": 56,
    "networkId": 56,
    "slip44": 714,
    "explorers": [{"name": "bscscan", "url": "https://bscscan.com", "standard": "EIP3091"}],
    "tvl": 6385164794.128867,
    "chainSlug": "binance"
}, {
    "name": "Avalanche C-Chain",
    "chain": "AVAX",
    "rpc": ["https://api.avax.network/ext/bc/C/rpc", "https://rpc.ankr.com/avalanche", "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc", "https://avalancheapi.terminet.io/ext/bc/C/rpc"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "Avalanche", "symbol": "AVAX", "decimals": 18},
    "infoURL": "https://www.avax.network/",
    "shortName": "avax",
    "chainId": 43114,
    "networkId": 43114,
    "slip44": 9005,
    "explorers": [{"name": "snowtrace", "url": "https://snowtrace.io", "standard": "EIP3091"}],
    "tvl": 1921370892.496067,
    "chainSlug": "avalanche"
}, {
    "name": "Polygon Mainnet",
    "chain": "Polygon",
    "rpc": ["https://polygon-rpc.com", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://matic-mainnet-archive-rpc.bwarelabs.com", "https://poly-rpc.gateway.pokt.network", "https://rpc.ankr.com/polygon", "https://polygon-mainnet.public.blastapi.io", "https://polygonapi.terminet.io/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "MATIC", "symbol": "MATIC", "decimals": 18},
    "infoURL": "https://polygon.technology/",
    "shortName": "matic",
    "chainId": 137,
    "networkId": 137,
    "slip44": 966,
    "explorers": [{"name": "polygonscan", "url": "https://polygonscan.com", "standard": "EIP3091"}],
    "tvl": 1435016778.4718213,
    "chainSlug": "polygon"
}, {
    "name": "Arbitrum One",
    "chainId": 42161,
    "shortName": "arb1",
    "chain": "ETH",
    "networkId": 42161,
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "rpc": [
        "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
        "https://arb1.arbitrum.io/rpc", "https://rpc.ankr.com/arbitrum",
        "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}"
    ],
    "faucets": [],
    "explorers": [{
        "name": "Arbiscan", "url": "https://arbiscan.io", "standard": "EIP3091"
    }, {"name": "Arbitrum Explorer", "url": "https://explorer.arbitrum.io", "standard": "EIP3091"}],
    "infoURL": "https://arbitrum.io",
    "parent": {"type": "L2", "chain": "eip155-1", "bridges": [{"url": "https://bridge.arbitrum.io"}]},
    "tvl": 968888892.1010216,
    "chainSlug": "arbitrum"
}, {
    "name": "Optimism",
    "chain": "ETH",
    "rpc": ["https://mainnet.optimism.io", "https://optimism-mainnet.public.blastapi.io", "https://rpc.ankr.com/optimism"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://optimism.io",
    "shortName": "oeth",
    "chainId": 10,
    "networkId": 10,
    "explorers": [{"name": "etherscan", "url": "https://optimistic.etherscan.io", "standard": "EIP3091"}],
    "tvl": 909398276.7239474,
    "chainSlug": "optimism"
}, {
    "name": "Cronos Mainnet Beta",
    "chain": "CRO",
    "rpc": ["https://evm.cronos.org", "https://cronos-rpc.heavenswail.one", "https://cronosrpc-1.xstaking.sg", "https://cronos-rpc.elk.finance"],
    "faucets": [],
    "nativeCurrency": {"name": "Cronos", "symbol": "CRO", "decimals": 18},
    "infoURL": "https://cronos.org/",
    "shortName": "cro",
    "chainId": 25,
    "networkId": 25,
    "explorers": [{"name": "Cronos Explorer", "url": "https://cronos.org/explorer", "standard": "none"}],
    "tvl": 751898712.9594802,
    "chainSlug": "cronos"
}, {
    "name": "Fantom Opera",
    "chain": "FTM",
    "rpc": ["https://rpc.ftm.tools", "https://fantom-mainnet.gateway.pokt.network/v1/lb/62759259ea1b320039c9e7ac", "https://rpc.ankr.com/fantom", "https://rpc.fantom.network", "https://rpc2.fantom.network", "https://rpc3.fantom.network", "https://rpcapi.fantom.network", "https://fantom-mainnet.public.blastapi.io"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "Fantom", "symbol": "FTM", "decimals": 18},
    "infoURL": "https://fantom.foundation",
    "shortName": "ftm",
    "chainId": 250,
    "networkId": 250,
    "icon": "fantom",
    "explorers": [{"name": "ftmscan", "url": "https://ftmscan.com", "icon": "ftmscan", "standard": "EIP3091"}],
    "tvl": 634736599.6183095,
    "chainSlug": "fantom"
}, {
    "name": "Klaytn Mainnet Cypress",
    "chain": "KLAY",
    "rpc": ["https://public-node-api.klaytnapi.com/v1/cypress", "https://klaytn01.fandom.finance", "https://klaytn02.fandom.finance", "https://klaytn03.fandom.finance", "https://klaytn04.fandom.finance", "https://klaytn05.fandom.finance", "https://cypress.fandom.finance/archive"],
    "faucets": [],
    "nativeCurrency": {"name": "KLAY", "symbol": "KLAY", "decimals": 18},
    "infoURL": "https://www.klaytn.com/",
    "shortName": "Cypress",
    "chainId": 8217,
    "networkId": 8217,
    "slip44": 8217,
    "explorers": [{"name": "Klaytnscope", "url": "https://scope.klaytn.com", "standard": "none"}],
    "tvl": 365010479.61029714,
    "chainSlug": "klaytn"
}, {
    "name": "Kava EVM",
    "chain": "KAVA",
    "rpc": ["https://evm.kava.io", "https://evm2.kava.io", "wss://wevm.kava.io", "wss://wevm2.kava.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Kava", "symbol": "KAVA", "decimals": 18},
    "infoURL": "https://www.kava.io",
    "shortName": "kava",
    "chainId": 2222,
    "networkId": 2222,
    "icon": "kava",
    "explorers": [{
        "name": "Kava EVM Explorer", "url": "https://explorer.kava.io", "standard": "EIP3091", "icon": "kava"
    }],
    "tvl": 279187998.8997495,
    "chainSlug": "kava"
}, {
    "name": "Gnosis",
    "chain": "GNO",
    "icon": "gnosis",
    "rpc": ["https://rpc.gnosischain.com", "https://rpc.ankr.com/gnosis", "https://gnosischain-rpc.gateway.pokt.network", "https://gnosis-mainnet.public.blastapi.io", "wss://rpc.gnosischain.com/wss", "https://xdai-rpc.gateway.pokt.network", "https://xdai-archive.blockscout.com", "https://rpc.ap-southeast-1.gateway.fm/v1/gnosis/non-archival/mainnet"],
    "faucets": ["https://gnosisfaucet.com", "https://faucet.gimlu.com/gnosis", "https://stakely.io/faucet/gnosis-chain-xdai", "https://faucet.prussia.dev/xdai"],
    "nativeCurrency": {"name": "xDAI", "symbol": "xDAI", "decimals": 18},
    "infoURL": "https://docs.gnosischain.com",
    "shortName": "gno",
    "chainId": 100,
    "networkId": 100,
    "slip44": 700,
    "explorers": [{
        "name": "gnosisscan", "url": "https://gnosisscan.io", "icon": "gnosisscan", "standard": "EIP3091"
    }, {
        "name": "blockscout", "url": "https://blockscout.com/xdai/mainnet", "icon": "blockscout", "standard": "EIP3091"
    }],
    "tvl": 219207073.5933379,
    "chainSlug": "xdai"
}, {
    "name": "Aurora Mainnet",
    "chain": "NEAR",
    "rpc": ["https://mainnet.aurora.dev"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://aurora.dev",
    "shortName": "aurora",
    "chainId": 1313161554,
    "networkId": 1313161554,
    "explorers": [{"name": "aurorascan.dev", "url": "https://aurorascan.dev", "standard": "EIP3091"}],
    "tvl": 154591258.60913348,
    "chainSlug": "aurora"
}, {
    "name": "Fusion Mainnet",
    "chain": "FSN",
    "rpc": ["https://mainnet.anyswap.exchange", "https://fsn.dev/api", "https://mainway.freemoon.xyz/gate"],
    "faucets": [],
    "nativeCurrency": {"name": "Fusion", "symbol": "FSN", "decimals": 18},
    "infoURL": "https://www.fusion.org/",
    "shortName": "fsn",
    "chainId": 32659,
    "networkId": 32659,
    "tvl": 136138366.351003,
    "chainSlug": "fusion"
}, {
    "name": "Celo Mainnet",
    "chainId": 42220,
    "shortName": "CELO",
    "chain": "CELO",
    "networkId": 42220,
    "nativeCurrency": {"name": "CELO", "symbol": "CELO", "decimals": 18},
    "rpc": ["https://forno.celo.org", "wss://forno.celo.org/ws", "https://rpc.ankr.com/celo"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "infoURL": "https://docs.celo.org/",
    "explorers": [{"name": "blockscout", "url": "https://explorer.celo.org", "standard": "none"}],
    "tvl": 125214704.66941747,
    "chainSlug": "celo"
}, {
    "name": "Huobi ECO Chain Mainnet",
    "chain": "Heco",
    "rpc": ["https://http-mainnet.hecochain.com", "wss://ws-mainnet.hecochain.com", "https://http-mainnet-node.huobichain.com", "https://pub001.hg.network/rpc", "https://hecoapi.terminet.io/rpc"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "Huobi ECO Chain Native Token", "symbol": "HT", "decimals": 18},
    "infoURL": "https://www.hecochain.com",
    "shortName": "heco",
    "chainId": 128,
    "networkId": 128,
    "slip44": 1010,
    "explorers": [{"name": "hecoinfo", "url": "https://hecoinfo.com", "standard": "EIP3091"}],
    "tvl": 116647227.53677861,
    "chainSlug": "heco"
}, {
    "name": "Moonriver",
    "chain": "MOON",
    "rpc": ["https://rpc.api.moonriver.moonbeam.network", "wss://wss.api.moonriver.moonbeam.network", "https://moonriver.api.onfinality.io/rpc?apikey=673e1fae-c9c9-4c7f-a3d5-2121e8274366", "https://moonriver.api.onfinality.io/public", "https://moonriver.public.blastapi.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Moonriver", "symbol": "MOVR", "decimals": 18},
    "infoURL": "https://moonbeam.network/networks/moonriver/",
    "shortName": "mriver",
    "chainId": 1285,
    "networkId": 1285,
    "explorers": [{"name": "moonscan", "url": "https://moonriver.moonscan.io", "standard": "none"}],
    "tvl": 76141977.64768638,
    "chainSlug": "moonriver"
}, {
    "name": "Moonbeam",
    "chain": "MOON",
    "rpc": ["https://rpc.api.moonbeam.network", "wss://wss.api.moonbeam.network", "https://moonbeam.public.blastapi.io", "https://rpc.ankr.com/moonbeam"],
    "faucets": [],
    "nativeCurrency": {"name": "Glimmer", "symbol": "GLMR", "decimals": 18},
    "infoURL": "https://moonbeam.network/networks/moonbeam/",
    "shortName": "mbeam",
    "chainId": 1284,
    "networkId": 1284,
    "explorers": [{"name": "moonscan", "url": "https://moonbeam.moonscan.io", "standard": "none"}],
    "tvl": 70988117.67058162,
    "chainSlug": "moonbeam"
}, {
    "name": "RSK Mainnet",
    "chain": "RSK",
    "rpc": ["https://public-node.rsk.co", "https://mycrypto.rsk.co"],
    "faucets": ["https://faucet.rsk.co/"],
    "nativeCurrency": {"name": "Smart Bitcoin", "symbol": "RBTC", "decimals": 18},
    "infoURL": "https://rsk.co",
    "shortName": "rsk",
    "chainId": 30,
    "networkId": 30,
    "slip44": 137,
    "explorers": [{"name": "RSK Explorer", "url": "https://explorer.rsk.co", "standard": "EIP3091"}],
    "tvl": 58912872.56232872,
    "chainSlug": "rsk"
}, {
    "name": "Metis Andromeda Mainnet",
    "chain": "ETH",
    "rpc": ["https://andromeda.metis.io/?owner=1088"],
    "faucets": [],
    "nativeCurrency": {"name": "Metis", "symbol": "METIS", "decimals": 18},
    "infoURL": "https://www.metis.io",
    "shortName": "metis-andromeda",
    "chainId": 1088,
    "networkId": 1088,
    "explorers": [{"name": "blockscout", "url": "https://andromeda-explorer.metis.io", "standard": "EIP3091"}],
    "parent": {"type": "L2", "chain": "eip155-1", "bridges": [{"url": "https://bridge.metis.io"}]},
    "tvl": 51945906.182888456,
    "chainSlug": "metis"
}, {
    "name": "Astar",
    "chain": "ASTR",
    "rpc": ["https://rpc.astar.network:8545", "https://astar.public.blastapi.io", "https://evm.astar.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Astar", "symbol": "ASTR", "decimals": 18},
    "infoURL": "https://astar.network/",
    "shortName": "astr",
    "chainId": 592,
    "networkId": 592,
    "icon": "astar",
    "explorers": [{"name": "subscan", "url": "https://astar.subscan.io", "standard": "none", "icon": "subscan"}],
    "tvl": 50490986.510525696,
    "chainSlug": "astar"
}, {
    "name": "KCC Mainnet",
    "chain": "KCC",
    "rpc": ["https://rpc-mainnet.kcc.network", "wss://rpc-ws-mainnet.kcc.network"],
    "faucets": [],
    "nativeCurrency": {"name": "KuCoin Token", "symbol": "KCS", "decimals": 18},
    "infoURL": "https://kcc.io",
    "shortName": "kcs",
    "chainId": 321,
    "networkId": 1,
    "explorers": [{"name": "KCC Explorer", "url": "https://explorer.kcc.io/en", "standard": "EIP3091"}],
    "tvl": 50306699.417519815,
    "chainSlug": "kucoin"
}, {
    "name": "Telos EVM Mainnet",
    "chain": "TLOS",
    "rpc": ["https://mainnet.telos.net/evm", "https://rpc1.eu.telos.net/evm", "https://rpc1.us.telos.net/evm", "https://rpc2.us.telos.net/evm", "https://api.kainosbp.com/evm", "https://rpc2.eu.telos.net/evm", "https://evm.teloskorea.com/evm", "https://rpc2.teloskorea.com/evm", "https://rpc01.us.telosunlimited.io/evm", "https://rpc02.us.telosunlimited.io/evm", "https://rpc.telosarabia.net/evm"],
    "faucets": [],
    "nativeCurrency": {"name": "Telos", "symbol": "TLOS", "decimals": 18},
    "infoURL": "https://telos.net",
    "shortName": "TelosEVM",
    "chainId": 40,
    "networkId": 40,
    "explorers": [{"name": "teloscan", "url": "https://teloscan.io", "standard": "EIP3091"}],
    "tvl": 38088376.08348992,
    "chainSlug": "telos"
}, {
    "name": "IoTeX Network Mainnet",
    "chain": "iotex.io",
    "rpc": ["https://babel-api.mainnet.iotex.io", "https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492", "https://rpc.ankr.com/iotex", "https://babel-api.mainnet.iotex.one", "https://pokt-api.iotex.io"],
    "faucets": [],
    "nativeCurrency": {"name": "IoTeX", "symbol": "IOTX", "decimals": 18},
    "infoURL": "https://iotex.io",
    "shortName": "iotex-mainnet",
    "chainId": 4689,
    "networkId": 4689,
    "explorers": [{"name": "iotexscan", "url": "https://iotexscan.io", "standard": "EIP3091"}],
    "tvl": 35187946.360792965,
    "chainSlug": "iotex"
}, {
    "name": "Harmony Mainnet Shard 0",
    "chain": "Harmony",
    "rpc": ["https://api.harmony.one", "https://api.s0.t.hmny.io", "https://harmony-0-rpc.gateway.pokt.network", "https://a.api.s0.t.hmny.io", "https://rpc.heavenswail.one", "https://api.fuzz.fi", "https://rpc.hermesdefi.io", "https://rpc.ankr.com/harmony", "https://harmony-mainnet.chainstacklabs.com", "https://rpc.dkvalidator.one"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-s0",
    "chainId": 1666600000,
    "networkId": 1666600000,
    "explorers": [{"name": "Harmony Block Explorer", "url": "https://explorer.harmony.one", "standard": "EIP3091"}],
    "tvl": 31793939.315128688,
    "chainSlug": "harmony"
}, {
    "name": "Wanchain",
    "chain": "WAN",
    "rpc": ["https://gwan-ssl.wandevs.org:56891"],
    "faucets": [],
    "nativeCurrency": {"name": "Wancoin", "symbol": "WAN", "decimals": 18},
    "infoURL": "https://www.wanscan.org",
    "shortName": "wan",
    "chainId": 888,
    "networkId": 888,
    "slip44": 5718350,
    "tvl": 27867879.99372609,
    "chainSlug": "wanchain"
}, {
    "name": "OKXChain Mainnet",
    "chain": "okxchain",
    "rpc": ["https://exchainrpc.okex.org", "https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/?"],
    "nativeCurrency": {"name": "OKXChain Global Utility Token", "symbol": "OKT", "decimals": 18},
    "infoURL": "https://www.okex.com/okc",
    "shortName": "okt",
    "chainId": 66,
    "networkId": 66,
    "explorers": [{"name": "OKLink", "url": "https://www.oklink.com/en/okc", "standard": "EIP3091"}],
    "tvl": 25489877.73042267,
    "chainSlug": "okexchain"
}, {
    "name": "Oasis Emerald ParaTime Mainnet",
    "chain": "Emerald",
    "icon": "oasis",
    "rpc": ["https://emerald.oasis.dev", "wss://emerald.oasis.dev/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "Emerald Rose", "symbol": "ROSE", "decimals": 18},
    "infoURL": "https://docs.oasis.dev/general/developer-resources/overview",
    "shortName": "emerald",
    "chainId": 42262,
    "networkId": 42262,
    "explorers": [{
        "name": "Emerald ParaTime Mainnet Explorer", "url": "https://explorer.emerald.oasis.dev", "standard": "EIP3091"
    }],
    "tvl": 24753580.93559649,
    "chainSlug": "oasis"
}, {
    "name": "Theta Mainnet",
    "chain": "Theta",
    "rpc": ["https://eth-rpc-api.thetatoken.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Theta Fuel", "symbol": "TFUEL", "decimals": 18},
    "infoURL": "https://www.thetatoken.org/",
    "shortName": "theta-mainnet",
    "chainId": 361,
    "networkId": 361,
    "explorers": [{"name": "Theta Mainnet Explorer", "url": "https://explorer.thetatoken.org", "standard": "EIP3091"}],
    "tvl": 23700032.50544177,
    "chainSlug": "theta"
}, {
    "name": "Songbird Canary-Network",
    "chain": "SGB",
    "icon": "songbird",
    "rpc": ["https://songbird.towolabs.com/rpc", "https://songbird-api.flare.network/ext/C/rpc", "https://sgb.ftso.com.au/ext/bc/C/rpc", "https://sgb.lightft.so/rpc", "https://sgb-rpc.ftso.eu"],
    "faucets": [],
    "nativeCurrency": {"name": "Songbird", "symbol": "SGB", "decimals": 18},
    "infoURL": "https://flare.xyz",
    "shortName": "sgb",
    "chainId": 19,
    "networkId": 19,
    "explorers": [{"name": "blockscout", "url": "https://songbird-explorer.flare.network", "standard": "EIP3091"}],
    "tvl": 17168836.155717183,
    "chainSlug": "songbird"
}, {
    "name": "Dogechain Mainnet",
    "chain": "DC",
    "icon": "dogechain",
    "rpc": ["https://rpc-sg.dogechain.dog", "https://rpc-us.dogechain.dog", "https://rpc.dogechain.dog", "https://rpc01-sg.dogechain.dog", "https://rpc02-sg.dogechain.dog", "https://rpc03-sg.dogechain.dog"],
    "faucets": [],
    "nativeCurrency": {"name": "Dogecoin", "symbol": "DOGE", "decimals": 18},
    "infoURL": "https://dogechain.dog",
    "shortName": "dc",
    "chainId": 2000,
    "networkId": 2000,
    "explorers": [{"name": "dogechain explorer", "url": "https://explorer.dogechain.dog", "standard": "EIP3091"}],
    "tvl": 10332695.715001784,
    "chainSlug": "dogechain"
}, {
    "name": "Godwoken Mainnet",
    "chain": "GWT",
    "rpc": ["https://v1.mainnet.godwoken.io/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "pCKB", "symbol": "pCKB", "decimals": 18},
    "infoURL": "https://www.nervos.org",
    "shortName": "gw-mainnet-v1",
    "chainId": 71402,
    "networkId": 71402,
    "explorers": [{
        "name": "GWScout Explorer", "url": "https://gw-mainnet-explorer.nervosdao.community", "standard": "none"
    }, {"name": "GWScan Block Explorer", "url": "https://v1.gwscan.com", "standard": "none"}],
    "tvl": 6950668.389474615,
    "chainSlug": "godwoken"
}, {
    "name": "Velas EVM Mainnet",
    "chain": "Velas",
    "icon": "velas",
    "rpc": ["https://evmexplorer.velas.com/rpc", "https://explorer.velas.com/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Velas", "symbol": "VLX", "decimals": 18},
    "infoURL": "https://velas.com",
    "shortName": "vlx",
    "chainId": 106,
    "networkId": 106,
    "explorers": [{"name": "Velas Explorer", "url": "https://evmexplorer.velas.com", "standard": "EIP3091"}],
    "tvl": 5958050.120368907,
    "chainSlug": "velas"
}, {
    "name": "Smart Bitcoin Cash",
    "chain": "smartBCH",
    "rpc": ["https://smartbch.greyh.at", "https://rpc-mainnet.smartbch.org", "https://smartbch.fountainhead.cash/mainnet", "https://smartbch.devops.cash/mainnet", "https://global.uat.cash", "https://rpc.uatvo.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Bitcoin Cash", "symbol": "BCH", "decimals": 18},
    "infoURL": "https://smartbch.org/",
    "shortName": "smartbch",
    "chainId": 10000,
    "networkId": 10000,
    "tvl": 5420539.196009633,
    "chainSlug": "smartbch"
}, {
    "name": "Boba Network",
    "chain": "ETH",
    "rpc": ["https://mainnet.boba.network", "https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f", "https://lightning-replica.boba.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "Boba",
    "chainId": 288,
    "networkId": 288,
    "explorers": [{"name": "Blockscout", "url": "https://blockexplorer.boba.network", "standard": "none"}],
    "parent": {"type": "L2", "chain": "eip155-1", "bridges": [{"url": "https://gateway.boba.network"}]},
    "tvl": 4322750.526549091,
    "chainSlug": "boba"
}, {
    "name": "CoinEx Smart Chain Mainnet",
    "chain": "CSC",
    "rpc": ["https://rpc.coinex.net", "https://rpc1.coinex.net", "https://rpc2.coinex.net", "https://rpc3.coinex.net", "https://rpc4.coinex.net"],
    "faucets": [],
    "nativeCurrency": {"name": "CoinEx Chain Native Token", "symbol": "cet", "decimals": 18},
    "infoURL": "https://www.coinex.org/",
    "shortName": "cet",
    "chainId": 52,
    "networkId": 52,
    "explorers": [{"name": "coinexscan", "url": "https://www.coinex.net", "standard": "none"}],
    "tvl": 3949772.7247792208,
    "chainSlug": "csc"
}, {
    "name": "ThunderCore Mainnet",
    "chain": "TT",
    "rpc": ["https://mainnet-rpc.thundercore.com", "https://mainnet-rpc.thundertoken.net", "https://mainnet-rpc.thundercore.io"],
    "faucets": ["https://faucet.thundercore.com"],
    "nativeCurrency": {"name": "ThunderCore Token", "symbol": "TT", "decimals": 18},
    "infoURL": "https://thundercore.com",
    "shortName": "TT",
    "chainId": 108,
    "networkId": 108,
    "slip44": 1001,
    "explorers": [{"name": "thundercore-viewblock", "url": "https://viewblock.io/thundercore", "standard": "EIP3091"}],
    "tvl": 3866825.5923161083,
    "chainSlug": "thundercore"
}, {
    "name": "Fuse Mainnet",
    "chain": "FUSE",
    "rpc": ["https://rpc.fuse.io", "https://fuse-rpc.gateway.pokt.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Fuse", "symbol": "FUSE", "decimals": 18},
    "infoURL": "https://fuse.io/",
    "shortName": "fuse",
    "chainId": 122,
    "networkId": 122,
    "tvl": 3499870.5648452034,
    "chainSlug": "fuse"
}, {
    "name": "Elastos Smart Chain",
    "chain": "ETH",
    "rpc": ["https://api.elastos.io/eth", "https://api.elastos.io/esc", "https://api.trinity-tech.io/esc"],
    "faucets": ["https://faucet.elastos.org/"],
    "nativeCurrency": {"name": "Elastos", "symbol": "ELA", "decimals": 18},
    "infoURL": "https://www.elastos.org/",
    "shortName": "elaeth",
    "chainId": 20,
    "networkId": 20,
    "explorers": [{"name": "elastos eth explorer", "url": "https://eth.elastos.io", "standard": "EIP3091"}],
    "tvl": 3105309.6870397218,
    "chainSlug": "elastos"
}, {
    "name": "Callisto Mainnet",
    "chain": "CLO",
    "rpc": ["https://rpc.callisto.network", "https://clo-geth.0xinfra.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Callisto", "symbol": "CLO", "decimals": 18},
    "infoURL": "https://callisto.network",
    "shortName": "clo",
    "chainId": 820,
    "networkId": 1,
    "slip44": 820,
    "tvl": 1735946.5506985493,
    "chainSlug": "callisto"
}, {
    "name": "Evmos",
    "chain": "Evmos",
    "rpc": ["https://eth.bd.evmos.org:8545", "https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205", "https://evmos-json-rpc.stakely.io", "https://jsonrpc-evmos-ia.notional.ventures", "https://json-rpc.evmos.blockhunters.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Evmos", "symbol": "EVMOS", "decimals": 18},
    "infoURL": "https://evmos.org",
    "shortName": "evmos",
    "chainId": 9001,
    "networkId": 9001,
    "icon": "evmos",
    "explorers": [{
        "name": "Evmos EVM Explorer (Blockscout)", "url": "https://evm.evmos.org", "standard": "none", "icon": "evmos"
    }, {
        "name": "Evmos Cosmos Explorer (Mintscan)",
        "url": "https://www.mintscan.io/evmos",
        "standard": "none",
        "icon": "evmos"
    }],
    "tvl": 1636488.258180512,
    "chainSlug": "evmos"
}, {
    "name": "Nahmii Mainnet",
    "chain": "Nahmii",
    "rpc": ["https://l2.nahmii.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://nahmii.io",
    "shortName": "Nahmii",
    "chainId": 5551,
    "networkId": 5551,
    "icon": "nahmii",
    "explorers": [{
        "name": "Nahmii mainnet explorer", "url": "https://explorer.nahmii.io", "icon": "nahmii", "standard": "EIP3091"
    }],
    "parent": {"type": "L2", "chain": "eip155-1", "bridges": [{"url": "https://bridge.nahmii.io"}]},
    "tvl": 1416082.950891668,
    "chainSlug": "nahmii"
}, {
    "name": "Syscoin Mainnet",
    "chain": "SYS",
    "rpc": ["https://rpc.syscoin.org", "wss://rpc.syscoin.org/wss", "https://rpc.ankr.com/syscoin"],
    "faucets": ["https://faucet.syscoin.org"],
    "nativeCurrency": {"name": "Syscoin", "symbol": "SYS", "decimals": 18},
    "infoURL": "https://www.syscoin.org",
    "shortName": "sys",
    "chainId": 57,
    "networkId": 57,
    "explorers": [{"name": "Syscoin Block Explorer", "url": "https://explorer.syscoin.org", "standard": "EIP3091"}],
    "tvl": 1026681.6777681649,
    "chainSlug": "syscoin"
}, {
    "name": "Energy Web Chain",
    "chain": "Energy Web Chain",
    "rpc": ["https://rpc.energyweb.org", "wss://rpc.energyweb.org/ws"],
    "faucets": ["https://faucet.carbonswap.exchange", "https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "Energy Web Token", "symbol": "EWT", "decimals": 18},
    "infoURL": "https://energyweb.org",
    "shortName": "ewt",
    "chainId": 246,
    "networkId": 246,
    "slip44": 246,
    "explorers": [{"name": "blockscout", "url": "https://explorer.energyweb.org", "standard": "none"}],
    "tvl": 800140.7336693049,
    "chainSlug": "energyweb"
}, {
    "name": "TomoChain",
    "chain": "TOMO",
    "rpc": ["https://rpc.tomochain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "TomoChain", "symbol": "TOMO", "decimals": 18},
    "infoURL": "https://tomochain.com",
    "shortName": "tomo",
    "chainId": 88,
    "networkId": 88,
    "slip44": 889,
    "tvl": 761637.4063596649,
    "chainSlug": "tomochain"
}, {
    "name": "Ethereum Classic Mainnet",
    "chain": "ETC",
    "rpc": ["https://www.ethercluster.com/etc", "https://blockscout.com/etc/mainnet/api/eth-rpc", "https://etc.etcdesktop.com", "https://etc.mytokenpocket.vip"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/?"],
    "nativeCurrency": {"name": "Ethereum Classic Ether", "symbol": "ETC", "decimals": 18},
    "infoURL": "https://ethereumclassic.org",
    "shortName": "etc",
    "chainId": 61,
    "networkId": 1,
    "slip44": 61,
    "explorers": [{"name": "blockscout", "url": "https://blockscout.com/etc/mainnet", "standard": "none"}],
    "tvl": 643068.8347628412,
    "chainSlug": "ethereumclassic"
}, {
    "name": "Meter Mainnet",
    "chain": "METER",
    "rpc": ["https://rpc.meter.io"],
    "faucets": ["https://faucet.meter.io"],
    "nativeCurrency": {"name": "Meter", "symbol": "MTR", "decimals": 18},
    "infoURL": "https://www.meter.io",
    "shortName": "Meter",
    "chainId": 82,
    "networkId": 82,
    "explorers": [{"name": "Meter Mainnet Scan", "url": "https://scan.meter.io", "standard": "EIP3091"}],
    "tvl": 426668.5352246326,
    "chainSlug": "meter"
}, {
    "name": "Shiden",
    "chain": "SDN",
    "rpc": ["https://rpc.shiden.astar.network:8545", "wss://shiden.api.onfinality.io/public-ws", "https://shiden.public.blastapi.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Shiden", "symbol": "SDN", "decimals": 18},
    "infoURL": "https://shiden.astar.network/",
    "shortName": "sdn",
    "chainId": 336,
    "networkId": 336,
    "icon": "shiden",
    "explorers": [{"name": "subscan", "url": "https://shiden.subscan.io", "standard": "none", "icon": "subscan"}],
    "tvl": 373193.70739341475,
    "chainSlug": "shiden"
}, {
    "name": "XinFin XDC Network",
    "chain": "XDC",
    "rpc": ["https://erpc.xinfin.network", "https://rpc.xinfin.network", "https://rpc1.xinfin.network", "https://xdcrpc.com"],
    "faucets": [],
    "nativeCurrency": {"name": "XinFin", "symbol": "XDC", "decimals": 18},
    "infoURL": "https://xinfin.org",
    "shortName": "xdc",
    "chainId": 50,
    "networkId": 50,
    "icon": "xdc",
    "explorers": [{
        "name": "xdcscan", "url": "https://xdcscan.io", "icon": "blocksscan", "standard": "EIP3091"
    }, {"name": "blocksscan", "url": "https://xdc.blocksscan.io", "icon": "blocksscan", "standard": "EIP3091"}],
    "tvl": 373048.0768487922,
    "chainSlug": "xdc"
}, {
    "name": "Hoo Smart Chain",
    "chain": "HSC",
    "rpc": ["https://http-mainnet.hoosmartchain.com", "https://http-mainnet2.hoosmartchain.com", "wss://ws-mainnet.hoosmartchain.com", "wss://ws-mainnet2.hoosmartchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Hoo Smart Chain Native Token", "symbol": "HOO", "decimals": 18},
    "infoURL": "https://www.hoosmartchain.com",
    "shortName": "hsc",
    "chainId": 70,
    "networkId": 70,
    "slip44": 1170,
    "explorers": [{"name": "hooscan", "url": "https://www.hooscan.com", "standard": "EIP3091"}],
    "tvl": 354765.2604258313,
    "chainSlug": "hoo"
}, {
    "name": "Ubiq",
    "chain": "UBQ",
    "rpc": ["https://rpc.octano.dev", "https://pyrus2.ubiqscan.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Ubiq Ether", "symbol": "UBQ", "decimals": 18},
    "infoURL": "https://ubiqsmart.com",
    "shortName": "ubq",
    "chainId": 8,
    "networkId": 8,
    "slip44": 108,
    "explorers": [{"name": "ubiqscan", "url": "https://ubiqscan.io", "standard": "EIP3091"}],
    "tvl": 200288.4215346371,
    "chainSlug": "ubiq"
}, {
    "name": "Nova Network",
    "chain": "NNW",
    "icon": "novanetwork",
    "rpc": ["https://connect.novanetwork.io", "https://0x57.redjackstudio.com", "https://rpc.novanetwork.io:9070", "https://dev.rpc.novanetwork.io", "http://dataseed-0.rpc.novanetwork.io:8545", "http://dataseed-1.rpc.novanetwork.io:8545", "http://dataseed-2.rpc.novanetwork.io:8545", "http://dataseed-3.rpc.novanetwork.io:8545", "http://dataseed-4.rpc.novanetwork.io:8545", "http://dataseed-5.rpc.novanetwork.io:8545", "http://dataseed-6.rpc.novanetwork.io:8545", "http://dataseed-f.rpc.novanetwork.io:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "Supernova", "symbol": "SNT", "decimals": 18},
    "infoURL": "https://novanetwork.io",
    "shortName": "nnw",
    "chainId": 87,
    "networkId": 87,
    "explorers": [{"name": "novanetwork", "url": "https://explorer.novanetwork.io", "standard": "EIP3091"}],
    "tvl": 151879.53003763108,
    "chainSlug": "nova network"
}, {
    "name": "Zyx Mainnet",
    "chain": "ZYX",
    "rpc": ["https://rpc-1.zyx.network", "https://rpc-2.zyx.network", "https://rpc-3.zyx.network", "https://rpc-4.zyx.network", "https://rpc-5.zyx.network", "https://rpc-6.zyx.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Zyx", "symbol": "ZYX", "decimals": 18},
    "infoURL": "https://zyx.network/",
    "shortName": "ZYX",
    "chainId": 55,
    "networkId": 55,
    "explorers": [{"name": "zyxscan", "url": "https://zyxscan.com", "standard": "none"}],
    "tvl": 91125.41408942916,
    "chainSlug": "zyx"
}, {
    "name": "High Performance Blockchain",
    "chain": "HPB",
    "rpc": ["https://hpbnode.com", "wss://ws.hpbnode.com"],
    "faucets": ["https://myhpbwallet.com/"],
    "nativeCurrency": {"name": "High Performance Blockchain Ether", "symbol": "HPB", "decimals": 18},
    "infoURL": "https://hpb.io",
    "shortName": "hpb",
    "chainId": 269,
    "networkId": 269,
    "slip44": 269,
    "explorers": [{"name": "hscan", "url": "https://hscan.org", "standard": "EIP3091"}],
    "tvl": 81070.92090301833,
    "chainSlug": "hpb"
}, {
    "name": "Polis Mainnet",
    "chain": "Olympus",
    "icon": "polis",
    "rpc": ["https://rpc.polis.tech"],
    "faucets": ["https://faucet.polis.tech"],
    "nativeCurrency": {"name": "Polis", "symbol": "POLIS", "decimals": 18},
    "infoURL": "https://polis.tech",
    "shortName": "olympus",
    "chainId": 333999,
    "networkId": 333999,
    "tvl": 33214.26016164239,
    "chainSlug": "polis"
}, {
    "name": "GoChain",
    "chain": "GO",
    "rpc": ["https://rpc.gochain.io"],
    "faucets": ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
    "nativeCurrency": {"name": "GoChain Ether", "symbol": "GO", "decimals": 18},
    "infoURL": "https://gochain.io",
    "shortName": "go",
    "chainId": 60,
    "networkId": 60,
    "slip44": 6060,
    "explorers": [{"name": "GoChain Explorer", "url": "https://explorer.gochain.io", "standard": "EIP3091"}],
    "tvl": 20985.381367781265,
    "chainSlug": "gochain"
}, {
    "name": "Palm",
    "chain": "Palm",
    "icon": "palm",
    "rpc": ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b", "https://palm-mainnet.public.blastapi.io"],
    "faucets": [],
    "nativeCurrency": {"name": "PALM", "symbol": "PALM", "decimals": 18},
    "infoURL": "https://palm.io",
    "shortName": "palm",
    "chainId": 11297108109,
    "networkId": 11297108109,
    "explorers": [{"name": "Palm Explorer", "url": "https://explorer.palm.io", "standard": "EIP3091", "icon": "palm"}],
    "tvl": 808.4343101046627,
    "chainSlug": "palm"
}, {
    "name": "Expanse Network",
    "chain": "EXP",
    "rpc": ["https://node.expanse.tech", "https://node.eggs.cool"],
    "faucets": [],
    "nativeCurrency": {"name": "Expanse Network Ether", "symbol": "EXP", "decimals": 18},
    "infoURL": "https://expanse.tech",
    "shortName": "exp",
    "chainId": 2,
    "networkId": 1,
    "slip44": 40
}, {
    "name": "Ropsten",
    "title": "Ethereum Testnet Ropsten",
    "chain": "ETH",
    "rpc": ["https://rpc.ankr.com/eth_ropsten", "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    "faucets": ["http://fauceth.komputing.org?chain=3&address=${ADDRESS}", "https://faucet.ropsten.be?${ADDRESS}"],
    "nativeCurrency": {"name": "Ropsten Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://github.com/ethereum/ropsten",
    "shortName": "rop",
    "chainId": 3,
    "networkId": 3,
    "ens": {"registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"},
    "explorers": [{"name": "etherscan", "url": "https://ropsten.etherscan.io", "standard": "EIP3091"}]
}, {
    "name": "Rinkeby",
    "title": "Ethereum Testnet Rinkeby",
    "chain": "ETH",
    "rpc": ["https://rpc.ankr.com/eth_rinkeby", "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
    "faucets": ["http://fauceth.komputing.org?chain=4&address=${ADDRESS}", "https://faucet.rinkeby.io"],
    "nativeCurrency": {"name": "Rinkeby Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://www.rinkeby.io",
    "shortName": "rin",
    "chainId": 4,
    "networkId": 4,
    "ens": {"registry": "0xe7410170f87102df0055eb195163a03b7f2bff4a"},
    "explorers": [{"name": "etherscan-rinkeby", "url": "https://rinkeby.etherscan.io", "standard": "EIP3091"}]
}, {
    "name": "Görli",
    "title": "Ethereum Testnet Görli",
    "chain": "ETH",
    "rpc": ["https://rpc.goerli.mudit.blog", "https://rpc.ankr.com/eth_goerli", "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", "https://eth-goerli.public.blastapi.io"],
    "faucets": ["http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"],
    "nativeCurrency": {"name": "Görli Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://goerli.net/#about",
    "shortName": "gor",
    "chainId": 5,
    "networkId": 5,
    "ens": {"registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"},
    "explorers": [{"name": "etherscan-goerli", "url": "https://goerli.etherscan.io", "standard": "EIP3091"}]
}, {
    "name": "Ethereum Classic Testnet Kotti",
    "chain": "ETC",
    "rpc": ["https://www.ethercluster.com/kotti"],
    "faucets": [],
    "nativeCurrency": {"name": "Kotti Ether", "symbol": "KOT", "decimals": 18},
    "infoURL": "https://explorer.jade.builders/?network=kotti",
    "shortName": "kot",
    "chainId": 6,
    "networkId": 6
}, {
    "name": "ThaiChain",
    "chain": "TCH",
    "rpc": ["https://rpc.dome.cloud"],
    "faucets": [],
    "nativeCurrency": {"name": "ThaiChain Ether", "symbol": "TCH", "decimals": 18},
    "infoURL": "https://thaichain.io",
    "shortName": "tch",
    "chainId": 7,
    "networkId": 7
}, {
    "name": "Ubiq Network Testnet",
    "chain": "UBQ",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Ubiq Testnet Ether", "symbol": "TUBQ", "decimals": 18},
    "infoURL": "https://ethersocial.org",
    "shortName": "tubq",
    "chainId": 9,
    "networkId": 2
}, {
    "name": "Metadium Mainnet",
    "chain": "META",
    "rpc": ["https://api.metadium.com/prod", "https://api.metadium.com/dev"],
    "faucets": [],
    "nativeCurrency": {"name": "Metadium Mainnet Ether", "symbol": "META", "decimals": 18},
    "infoURL": "https://metadium.com",
    "shortName": "meta",
    "chainId": 11,
    "networkId": 11,
    "slip44": 916
}, {
    "name": "Metadium Testnet",
    "chain": "META",
    "rpc": ["https://api.metadium.com/dev"],
    "faucets": [],
    "nativeCurrency": {"name": "Metadium Testnet Ether", "symbol": "KAL", "decimals": 18},
    "infoURL": "https://metadium.com",
    "shortName": "kal",
    "chainId": 12,
    "networkId": 12
}, {
    "name": "Diode Testnet Staging",
    "chain": "DIODE",
    "rpc": ["https://staging.diode.io:8443/", "wss://staging.diode.io:8443/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "Staging Diodes", "symbol": "sDIODE", "decimals": 18},
    "infoURL": "https://diode.io/staging",
    "shortName": "dstg",
    "chainId": 13,
    "networkId": 13
}, {
    "name": "Flare Mainnet",
    "chain": "FLR",
    "icon": "flare",
    "rpc": ["https://flare-api.flare.network/ext/C/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Flare", "symbol": "FLR", "decimals": 18},
    "infoURL": "https://flare.xyz",
    "shortName": "flr",
    "chainId": 14,
    "networkId": 14,
    "explorers": [{"name": "blockscout", "url": "https://flare-explorer.flare.network", "standard": "EIP3091"}]
}, {
    "name": "Diode Prenet",
    "chain": "DIODE",
    "rpc": ["https://prenet.diode.io:8443", "wss://prenet.diode.io:8443/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "Diodes", "symbol": "DIODE", "decimals": 18},
    "infoURL": "https://diode.io/prenet",
    "shortName": "diode",
    "chainId": 15,
    "networkId": 15
}, {
    "name": "Flare Testnet Coston",
    "chain": "FLR",
    "rpc": ["https://coston-api.flare.network/ext/bc/C/rpc"],
    "faucets": ["https://faucet.towolabs.com", "https://fauceth.komputing.org?chain=16&address=${ADDRESS}"],
    "nativeCurrency": {"name": "Coston Flare", "symbol": "CFLR", "decimals": 18},
    "infoURL": "https://flare.xyz",
    "shortName": "cflr",
    "chainId": 16,
    "networkId": 16,
    "explorers": [{"name": "blockscout", "url": "https://coston-explorer.flare.network", "standard": "EIP3091"}]
}, {
    "name": "ThaiChain 2.0 ThaiFi",
    "chain": "TCH",
    "rpc": ["https://rpc.thaifi.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Thaifi Ether", "symbol": "TFI", "decimals": 18},
    "infoURL": "https://exp.thaifi.com",
    "shortName": "tfi",
    "chainId": 17,
    "networkId": 17
}, {
    "name": "ThunderCore Testnet",
    "chain": "TST",
    "rpc": ["https://testnet-rpc.thundercore.com"],
    "faucets": ["https://faucet-testnet.thundercore.com"],
    "nativeCurrency": {"name": "ThunderCore Testnet Token", "symbol": "TST", "decimals": 18},
    "infoURL": "https://thundercore.com",
    "shortName": "TST",
    "chainId": 18,
    "networkId": 18,
    "explorers": [{
        "name": "thundercore-blockscout-testnet",
        "url": "https://explorer-testnet.thundercore.com",
        "standard": "EIP3091"
    }]
}, {
    "name": "ELA-ETH-Sidechain Testnet",
    "chain": "ETH",
    "rpc": ["https://rpc.elaeth.io"],
    "faucets": ["https://faucet.elaeth.io/"],
    "nativeCurrency": {"name": "Elastos", "symbol": "tELA", "decimals": 18},
    "infoURL": "https://elaeth.io/",
    "shortName": "elaetht",
    "chainId": 21,
    "networkId": 21
}, {
    "name": "ELA-DID-Sidechain Mainnet",
    "chain": "ETH",
    "rpc": ["https://api.trinity-tech.io/eid", "https://api.elastos.io/eid"],
    "faucets": [],
    "nativeCurrency": {"name": "Elastos", "symbol": "ELA", "decimals": 18},
    "infoURL": "https://www.elastos.org/",
    "shortName": "eladid",
    "chainId": 22,
    "networkId": 22
}, {
    "name": "ELA-DID-Sidechain Testnet",
    "chain": "ETH",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Elastos", "symbol": "tELA", "decimals": 18},
    "infoURL": "https://elaeth.io/",
    "shortName": "eladidt",
    "chainId": 23,
    "networkId": 23
}, {
    "name": "Dithereum Mainnet",
    "chain": "DTH",
    "icon": "dithereum",
    "rpc": ["https://node-mainnet.dithereum.io", "https://node-mainnet.dithereum.io  "],
    "faucets": ["https://faucet.dithereum.org"],
    "nativeCurrency": {"name": "Dither", "symbol": "DTH", "decimals": 18},
    "infoURL": "https://dithereum.org",
    "shortName": "dthmainnet",
    "chainId": 24,
    "networkId": 24
}, {
    "name": "Genesis L1 testnet",
    "chain": "genesis",
    "rpc": ["https://testrpc.genesisl1.org"],
    "faucets": [],
    "nativeCurrency": {"name": "L1 testcoin", "symbol": "L1test", "decimals": 18},
    "infoURL": "https://www.genesisl1.com",
    "shortName": "L1test",
    "chainId": 26,
    "networkId": 26,
    "explorers": [{"name": "Genesis L1 testnet explorer", "url": "https://testnet.genesisl1.org", "standard": "none"}]
}, {
    "name": "ShibaChain",
    "chain": "SHIB",
    "rpc": ["https://rpc.shibachain.net"],
    "faucets": [],
    "nativeCurrency": {"name": "SHIBA INU COIN", "symbol": "SHIB", "decimals": 18},
    "infoURL": "https://www.shibachain.net",
    "shortName": "shib",
    "chainId": 27,
    "networkId": 27,
    "explorers": [{"name": "Shiba Explorer", "url": "https://exp.shibachain.net", "standard": "none"}]
}, {
    "name": "Boba Network Rinkeby Testnet",
    "chain": "ETH",
    "rpc": ["https://rinkeby.boba.network/"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "BobaRinkeby",
    "chainId": 28,
    "networkId": 28,
    "explorers": [{"name": "Blockscout", "url": "https://blockexplorer.rinkeby.boba.network", "standard": "none"}],
    "parent": {"type": "L2", "chain": "eip155-4", "bridges": [{"url": "https://gateway.rinkeby.boba.network"}]}
}, {
    "name": "Genesis L1",
    "chain": "genesis",
    "rpc": ["https://rpc.genesisl1.org"],
    "faucets": [],
    "nativeCurrency": {"name": "L1 coin", "symbol": "L1", "decimals": 18},
    "infoURL": "https://www.genesisl1.com",
    "shortName": "L1",
    "chainId": 29,
    "networkId": 29,
    "explorers": [{
        "name": "Genesis L1 blockchain explorer", "url": "https://explorer.genesisl1.org", "standard": "none"
    }]
}, {
    "name": "RSK Testnet",
    "chain": "RSK",
    "rpc": ["https://public-node.testnet.rsk.co", "https://mycrypto.testnet.rsk.co"],
    "faucets": ["https://faucet.rsk.co/"],
    "nativeCurrency": {"name": "Testnet Smart Bitcoin", "symbol": "tRBTC", "decimals": 18},
    "infoURL": "https://rsk.co",
    "shortName": "trsk",
    "chainId": 31,
    "networkId": 31,
    "explorers": [{"name": "RSK Testnet Explorer", "url": "https://explorer.testnet.rsk.co", "standard": "EIP3091"}]
}, {
    "name": "GoodData Testnet",
    "chain": "GooD",
    "rpc": ["https://test2.goodata.io"],
    "faucets": [],
    "nativeCurrency": {"name": "GoodData Testnet Ether", "symbol": "GooD", "decimals": 18},
    "infoURL": "https://www.goodata.org",
    "shortName": "GooDT",
    "chainId": 32,
    "networkId": 32
}, {
    "name": "GoodData Mainnet",
    "chain": "GooD",
    "rpc": ["https://rpc.goodata.io"],
    "faucets": [],
    "nativeCurrency": {"name": "GoodData Mainnet Ether", "symbol": "GooD", "decimals": 18},
    "infoURL": "https://www.goodata.org",
    "shortName": "GooD",
    "chainId": 33,
    "networkId": 33
}, {
    "name": "Dithereum Testnet",
    "chain": "DTH",
    "icon": "dithereum",
    "rpc": ["https://node-testnet.dithereum.io"],
    "faucets": ["https://faucet.dithereum.org"],
    "nativeCurrency": {"name": "Dither", "symbol": "DTH", "decimals": 18},
    "infoURL": "https://dithereum.org",
    "shortName": "dth",
    "chainId": 34,
    "networkId": 34
}, {
    "name": "TBWG Chain",
    "chain": "TBWG",
    "rpc": ["https://rpc.tbwg.io"],
    "faucets": [],
    "nativeCurrency": {"name": "TBWG Ether", "symbol": "TBG", "decimals": 18},
    "infoURL": "https://tbwg.io",
    "shortName": "tbwg",
    "chainId": 35,
    "networkId": 35
}, {
    "name": "Dxchain Mainnet",
    "chain": "Dxchain",
    "icon": "dx",
    "rpc": ["https://mainnet.dxchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Dxchain", "symbol": "DX", "decimals": 18},
    "infoURL": "https://www.dxchain.com/",
    "shortName": "dx",
    "chainId": 36,
    "networkId": 36,
    "explorers": [{"name": "dxscan", "url": "https://dxscan.io", "standard": "EIP3091"}]
}, {
    "name": "SeedCoin-Network",
    "chain": "SeedCoin-Network",
    "rpc": ["https://node.seedcoin.network"],
    "faucets": [],
    "nativeCurrency": {"name": "SeedCoin", "symbol": "SEED", "decimals": 18},
    "infoURL": "https://www.seedcoin.network/",
    "shortName": "SEED",
    "icon": "seedcoin",
    "chainId": 37,
    "networkId": 37
}, {
    "name": "Valorbit",
    "chain": "VAL",
    "rpc": ["https://rpc.valorbit.com/v2"],
    "faucets": [],
    "nativeCurrency": {"name": "Valorbit", "symbol": "VAL", "decimals": 18},
    "infoURL": "https://valorbit.com",
    "shortName": "val",
    "chainId": 38,
    "networkId": 38,
    "slip44": 538
}, {
    "name": "Telos EVM Testnet",
    "chain": "TLOS",
    "rpc": ["https://testnet.telos.net/evm"],
    "faucets": ["https://app.telos.net/testnet/developers"],
    "nativeCurrency": {"name": "Telos", "symbol": "TLOS", "decimals": 18},
    "infoURL": "https://telos.net",
    "shortName": "TelosEVMTestnet",
    "chainId": 41,
    "networkId": 41
}, {
    "name": "Kovan",
    "title": "Ethereum Testnet Kovan",
    "chain": "ETH",
    "rpc": [
        "https://kovan.poa.network",
        "http://kovan.poa.network:8545",
        "https://kovan.infura.io/v3/${INFURA_API_KEY}",
        "wss://kovan.infura.io/ws/v3/${INFURA_API_KEY}",
        "ws://kovan.poa.network:8546"
    ],
    "faucets": ["http://fauceth.komputing.org?chain=42&address=${ADDRESS}", "https://faucet.kovan.network", "https://gitter.im/kovan-testnet/faucet"],
    "nativeCurrency": {"name": "Kovan Ether", "symbol": "ETH", "decimals": 18},
    "explorers": [{"name": "etherscan", "url": "https://kovan.etherscan.io", "standard": "EIP3091"}],
    "infoURL": "https://kovan-testnet.github.io/website",
    "shortName": "kov",
    "chainId": 42,
    "networkId": 42
}, {
    "name": "Darwinia Pangolin Testnet",
    "chain": "pangolin",
    "rpc": ["https://pangolin-rpc.darwinia.network"],
    "faucets": ["https://docs.crab.network/dvm/wallets/dvm-metamask#apply-for-the-test-token"],
    "nativeCurrency": {"name": "Pangolin Network Native Token”", "symbol": "PRING", "decimals": 18},
    "infoURL": "https://darwinia.network/",
    "shortName": "pangolin",
    "chainId": 43,
    "networkId": 43,
    "explorers": [{"name": "subscan", "url": "https://pangolin.subscan.io", "standard": "none"}]
}, {
    "name": "Darwinia Crab Network",
    "chain": "crab",
    "rpc": ["https://crab-rpc.darwinia.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Crab Network Native Token", "symbol": "CRAB", "decimals": 18},
    "infoURL": "https://crab.network/",
    "shortName": "crab",
    "chainId": 44,
    "networkId": 44,
    "explorers": [{"name": "subscan", "url": "https://crab.subscan.io", "standard": "none"}]
}, {
    "name": "Darwinia Pangoro Testnet",
    "chain": "pangoro",
    "rpc": ["http://pangoro-rpc.darwinia.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Pangoro Network Native Token”", "symbol": "ORING", "decimals": 18},
    "infoURL": "https://darwinia.network/",
    "shortName": "pangoro",
    "chainId": 45,
    "networkId": 45,
    "explorers": [{"name": "subscan", "url": "https://pangoro.subscan.io", "standard": "none"}]
}, {
    "name": "Darwinia Network",
    "chain": "darwinia",
    "rpc": ["https://darwinia-rpc.darwinia.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Darwinia Network Native Token", "symbol": "RING", "decimals": 18},
    "infoURL": "https://darwinia.network/",
    "shortName": "darwinia",
    "chainId": 46,
    "networkId": 46,
    "explorers": [{"name": "subscan", "url": "https://darwinia.subscan.io", "standard": "none"}]
}, {
    "name": "XDC Apothem Network",
    "chain": "XDC",
    "rpc": ["https://rpc.apothem.network", "https://erpc.apothem.network"],
    "faucets": ["https://faucet.apothem.network"],
    "nativeCurrency": {"name": "XinFin", "symbol": "TXDC", "decimals": 18},
    "infoURL": "https://xinfin.org",
    "shortName": "txdc",
    "chainId": 51,
    "networkId": 51,
    "icon": "xdc",
    "explorers": [{
        "name": "xdcscan", "url": "https://apothem.xinfinscan.com", "icon": "blocksscan", "standard": "EIP3091"
    }, {"name": "blocksscan", "url": "https://apothem.blocksscan.io", "icon": "blocksscan", "standard": "EIP3091"}]
}, {
    "name": "CoinEx Smart Chain Testnet",
    "chain": "CSC",
    "rpc": ["https://testnet-rpc.coinex.net/"],
    "faucets": [],
    "nativeCurrency": {"name": "CoinEx Chain Test Native Token", "symbol": "cett", "decimals": 18},
    "infoURL": "https://www.coinex.org/",
    "shortName": "tcet",
    "chainId": 53,
    "networkId": 53,
    "explorers": [{"name": "coinexscan", "url": "https://testnet.coinex.net", "standard": "none"}]
}, {
    "name": "Openpiece Mainnet",
    "chain": "OPENPIECE",
    "icon": "openpiece",
    "rpc": ["https://mainnet.openpiece.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Belly", "symbol": "BELLY", "decimals": 18},
    "infoURL": "https://cryptopiece.online",
    "shortName": "OP",
    "chainId": 54,
    "networkId": 54,
    "explorers": [{"name": "Belly Scan", "url": "https://bellyscan.com", "standard": "none"}]
}, {
    "name": "Ontology Mainnet",
    "chain": "Ontology",
    "rpc": ["http://dappnode1.ont.io:20339", "http://dappnode2.ont.io:20339", "http://dappnode3.ont.io:20339", "http://dappnode4.ont.io:20339", "https://dappnode1.ont.io:10339", "https://dappnode2.ont.io:10339", "https://dappnode3.ont.io:10339", "https://dappnode4.ont.io:10339"],
    "faucets": [],
    "nativeCurrency": {"name": "ONG", "symbol": "ONG", "decimals": 18},
    "infoURL": "https://ont.io/",
    "shortName": "OntologyMainnet",
    "chainId": 58,
    "networkId": 58,
    "explorers": [{"name": "explorer", "url": "https://explorer.ont.io", "standard": "EIP3091"}]
}, {
    "name": "EOS Mainnet",
    "chain": "EOS",
    "rpc": ["https://api.eosargentina.io"],
    "faucets": [],
    "nativeCurrency": {"name": "EOS", "symbol": "EOS", "decimals": 18},
    "infoURL": "https://eoscommunity.org/",
    "shortName": "EOSMainnet",
    "chainId": 59,
    "networkId": 59,
    "explorers": [{"name": "bloks", "url": "https://bloks.eosargentina.io", "standard": "EIP3091"}]
}, {
    "name": "Ethereum Classic Testnet Morden",
    "chain": "ETC",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Ethereum Classic Testnet Ether", "symbol": "TETC", "decimals": 18},
    "infoURL": "https://ethereumclassic.org",
    "shortName": "tetc",
    "chainId": 62,
    "networkId": 2
}, {
    "name": "Ethereum Classic Testnet Mordor",
    "chain": "ETC",
    "rpc": ["https://www.ethercluster.com/mordor"],
    "faucets": [],
    "nativeCurrency": {"name": "Mordor Classic Testnet Ether", "symbol": "METC", "decimals": 18},
    "infoURL": "https://github.com/eth-classic/mordor/",
    "shortName": "metc",
    "chainId": 63,
    "networkId": 7
}, {
    "name": "Ellaism",
    "chain": "ELLA",
    "rpc": ["https://jsonrpc.ellaism.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Ellaism Ether", "symbol": "ELLA", "decimals": 18},
    "infoURL": "https://ellaism.org",
    "shortName": "ellaism",
    "chainId": 64,
    "networkId": 64,
    "slip44": 163
}, {
    "name": "OKExChain Testnet",
    "chain": "okexchain",
    "rpc": ["https://exchaintestrpc.okex.org"],
    "faucets": ["https://www.okex.com/drawdex"],
    "nativeCurrency": {"name": "OKExChain Global Utility Token in testnet", "symbol": "OKT", "decimals": 18},
    "infoURL": "https://www.okex.com/okexchain",
    "shortName": "tokt",
    "chainId": 65,
    "networkId": 65,
    "explorers": [{"name": "OKLink", "url": "https://www.oklink.com/okexchain-test", "standard": "EIP3091"}]
}, {
    "name": "DBChain Testnet",
    "chain": "DBM",
    "rpc": ["http://test-rpc.dbmbp.com"],
    "faucets": [],
    "nativeCurrency": {"name": "DBChain Testnet", "symbol": "DBM", "decimals": 18},
    "infoURL": "http://test.dbmbp.com",
    "shortName": "dbm",
    "chainId": 67,
    "networkId": 67
}, {
    "name": "SoterOne Mainnet",
    "chain": "SOTER",
    "rpc": ["https://rpc.soter.one"],
    "faucets": [],
    "nativeCurrency": {"name": "SoterOne Mainnet Ether", "symbol": "SOTER", "decimals": 18},
    "infoURL": "https://www.soterone.com",
    "shortName": "SO1",
    "chainId": 68,
    "networkId": 68
}, {
    "name": "Optimism Kovan",
    "title": "Optimism Testnet Kovan",
    "chain": "ETH",
    "rpc": ["https://kovan.optimism.io/"],
    "faucets": ["http://fauceth.komputing.org?chain=69&address=${ADDRESS}"],
    "nativeCurrency": {"name": "Kovan Ether", "symbol": "ETH", "decimals": 18},
    "explorers": [{"name": "etherscan", "url": "https://kovan-optimistic.etherscan.io", "standard": "EIP3091"}],
    "infoURL": "https://optimism.io",
    "shortName": "okov",
    "chainId": 69,
    "networkId": 69
}, {
    "name": "Conflux eSpace (Testnet)",
    "chain": "Conflux",
    "rpc": ["https://evmtestnet.confluxrpc.com"],
    "faucets": ["https://faucet.confluxnetwork.org"],
    "nativeCurrency": {"name": "CFX", "symbol": "CFX", "decimals": 18},
    "infoURL": "https://confluxnetwork.org",
    "shortName": "cfxtest",
    "chainId": 71,
    "networkId": 71,
    "icon": "conflux",
    "explorers": [{"name": "Conflux Scan", "url": "https://evmtestnet.confluxscan.net", "standard": "none"}]
}, {
    "name": "DxChain Testnet",
    "chain": "DxChain",
    "rpc": ["https://testnet-http.dxchain.com"],
    "faucets": ["https://faucet.dxscan.io"],
    "nativeCurrency": {"name": "DxChain Testnet", "symbol": "DX", "decimals": 18},
    "infoURL": "https://testnet.dxscan.io/",
    "shortName": "dxc",
    "chainId": 72,
    "networkId": 72
}, {
    "name": "IDChain Mainnet",
    "chain": "IDChain",
    "rpc": ["https://idchain.one/rpc", "wss://idchain.one/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "EIDI", "symbol": "EIDI", "decimals": 18},
    "infoURL": "https://idchain.one/begin/",
    "shortName": "idchain",
    "chainId": 74,
    "networkId": 74,
    "icon": "idchain",
    "explorers": [{
        "name": "explorer", "url": "https://explorer.idchain.one", "icon": "etherscan", "standard": "EIP3091"
    }]
}, {
    "name": "Mix",
    "chain": "MIX",
    "rpc": ["https://rpc2.mix-blockchain.org:8647"],
    "faucets": [],
    "nativeCurrency": {"name": "Mix Ether", "symbol": "MIX", "decimals": 18},
    "infoURL": "https://mix-blockchain.org",
    "shortName": "mix",
    "chainId": 76,
    "networkId": 76,
    "slip44": 76
}, {
    "name": "POA Network Sokol",
    "chain": "POA",
    "rpc": ["https://sokol.poa.network", "wss://sokol.poa.network/wss", "ws://sokol.poa.network:8546"],
    "faucets": ["https://faucet.poa.network"],
    "nativeCurrency": {"name": "POA Sokol Ether", "symbol": "SPOA", "decimals": 18},
    "infoURL": "https://poa.network",
    "shortName": "spoa",
    "chainId": 77,
    "networkId": 77,
    "explorers": [{"name": "blockscout", "url": "https://blockscout.com/poa/sokol", "standard": "none"}]
}, {
    "name": "PrimusChain mainnet",
    "chain": "PC",
    "rpc": ["https://ethnode.primusmoney.com/mainnet"],
    "faucets": [],
    "nativeCurrency": {"name": "Primus Ether", "symbol": "PETH", "decimals": 18},
    "infoURL": "https://primusmoney.com",
    "shortName": "primuschain",
    "chainId": 78,
    "networkId": 78
}, {
    "name": "Zenith Mainnet",
    "chain": "Zenith",
    "rpc": ["https://dataserver-us-1.zenithchain.co/", "https://dataserver-asia-3.zenithchain.co/", "https://dataserver-asia-4.zenithchain.co/", "https://dataserver-asia-2.zenithchain.co/", "https://dataserver-asia-5.zenithchain.co/", "https://dataserver-asia-6.zenithchain.co/", "https://dataserver-asia-7.zenithchain.co/"],
    "faucets": [],
    "nativeCurrency": {"name": "ZENITH", "symbol": "ZENITH", "decimals": 18},
    "infoURL": "https://www.zenithchain.co/",
    "chainId": 79,
    "networkId": 79,
    "shortName": "zenith",
    "explorers": [{"name": "zenith scan", "url": "https://scan.zenithchain.co", "standard": "EIP3091"}]
}, {
    "name": "GeneChain",
    "chain": "GeneChain",
    "rpc": ["https://rpc.genechain.io", "website:https://genechain.io/en/index.html"],
    "faucets": [],
    "nativeCurrency": {"name": "RNA", "symbol": "RNA", "decimals": 18},
    "infoURL": "https://scan.genechain.io/",
    "shortName": "GeneChain",
    "chainId": 80,
    "networkId": 80,
    "explorers": [{"name": "GeneChain Scan", "url": "https://scan.genechain.io", "standard": "EIP3091"}]
}, {
    "name": "Zenith Testnet (Vilnius)",
    "chain": "Zenith",
    "rpc": ["https://vilnius.zenithchain.co/http"],
    "faucets": ["https://faucet.zenithchain.co/"],
    "nativeCurrency": {"name": "Vilnius", "symbol": "VIL", "decimals": 18},
    "infoURL": "https://www.zenithchain.co/",
    "chainId": 81,
    "networkId": 81,
    "shortName": "VIL",
    "explorers": [{"name": "vilnius scan", "url": "https://vilnius.scan.zenithchain.co", "standard": "EIP3091"}]
}, {
    "name": "Meter Testnet",
    "chain": "METER Testnet",
    "rpc": ["https://rpctest.meter.io"],
    "faucets": ["https://faucet-warringstakes.meter.io"],
    "nativeCurrency": {"name": "Meter", "symbol": "MTR", "decimals": 18},
    "infoURL": "https://www.meter.io",
    "shortName": "MeterTest",
    "chainId": 83,
    "networkId": 83,
    "explorers": [{"name": "Meter Testnet Scan", "url": "https://scan-warringstakes.meter.io", "standard": "EIP3091"}]
}, {
    "name": "GateChain Testnet",
    "chainId": 85,
    "shortName": "gttest",
    "chain": "GTTEST",
    "networkId": 85,
    "nativeCurrency": {"name": "GateToken", "symbol": "GT", "decimals": 18},
    "rpc": ["https://testnet.gatenode.cc"],
    "faucets": ["https://www.gatescan.org/testnet/faucet"],
    "explorers": [{"name": "GateScan", "url": "https://www.gatescan.org/testnet", "standard": "EIP3091"}],
    "infoURL": "https://www.gatechain.io"
}, {
    "name": "GateChain Mainnet",
    "chainId": 86,
    "shortName": "gt",
    "chain": "GT",
    "networkId": 86,
    "nativeCurrency": {"name": "GateToken", "symbol": "GT", "decimals": 18},
    "rpc": ["https://evm.gatenode.cc"],
    "faucets": ["https://www.gatescan.org/faucet"],
    "explorers": [{"name": "GateScan", "url": "https://www.gatescan.org", "standard": "EIP3091"}],
    "infoURL": "https://www.gatechain.io"
}, {
    "name": "TomoChain Testnet",
    "chain": "TOMO",
    "rpc": ["https://rpc.testnet.tomochain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "TomoChain", "symbol": "TOMO", "decimals": 18},
    "infoURL": "https://tomochain.com",
    "shortName": "tomot",
    "chainId": 89,
    "networkId": 89,
    "slip44": 889
}, {
    "name": "Garizon Stage0",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s0.garizon.net/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-s0",
    "chainId": 90,
    "networkId": 90,
    "explorers": [{"name": "explorer", "url": "https://explorer.garizon.com", "icon": "garizon", "standard": "EIP3091"}]
}, {
    "name": "Garizon Stage1",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s1.garizon.net/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-s1",
    "chainId": 91,
    "networkId": 91,
    "explorers": [{
        "name": "explorer", "url": "https://explorer.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }],
    "parent": {"chain": "eip155-90", "type": "shard"}
}, {
    "name": "Garizon Stage2",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s2.garizon.net/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-s2",
    "chainId": 92,
    "networkId": 92,
    "explorers": [{
        "name": "explorer", "url": "https://explorer.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }],
    "parent": {"chain": "eip155-90", "type": "shard"}
}, {
    "name": "Garizon Stage3",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s3.garizon.net/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-s3",
    "chainId": 93,
    "networkId": 93,
    "explorers": [{
        "name": "explorer", "url": "https://explorer.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }],
    "parent": {"chain": "eip155-90", "type": "shard"}
}, {
    "name": "CryptoKylin Testnet",
    "chain": "EOS",
    "rpc": ["https://kylin.eosargentina.io"],
    "faucets": [],
    "nativeCurrency": {"name": "EOS", "symbol": "EOS", "decimals": 18},
    "infoURL": "https://www.cryptokylin.io/",
    "shortName": "KylinTestnet",
    "chainId": 95,
    "networkId": 95,
    "explorers": [{"name": "eosq", "url": "https://kylin.eosargentina.io", "standard": "EIP3091"}]
}, {
    "name": "NEXT Smart Chain",
    "chain": "NSC",
    "rpc": ["https://rpc.nextsmartchain.com"],
    "faucets": ["https://faucet.nextsmartchain.com"],
    "nativeCurrency": {"name": "NEXT", "symbol": "NEXT", "decimals": 18},
    "infoURL": "https://www.nextsmartchain.com/",
    "shortName": "nsc",
    "chainId": 96,
    "networkId": 96,
    "explorers": [{
        "name": "Next Smart Chain Explorer", "url": "https://explorer.nextsmartchain.com", "standard": "none"
    }]
}, {
    "name": "Binance Smart Chain Testnet",
    "chain": "BSC",
    "rpc": ["https://data-seed-prebsc-1-s1.binance.org:8545", "https://data-seed-prebsc-2-s1.binance.org:8545", "https://data-seed-prebsc-1-s2.binance.org:8545", "https://data-seed-prebsc-2-s2.binance.org:8545", "https://data-seed-prebsc-1-s3.binance.org:8545", "https://data-seed-prebsc-2-s3.binance.org:8545", "https://bsctestapi.terminet.io/rpc"],
    "faucets": ["https://testnet.binance.org/faucet-smart"],
    "nativeCurrency": {"name": "Binance Chain Native Token", "symbol": "tBNB", "decimals": 18},
    "infoURL": "https://testnet.binance.org/",
    "shortName": "bnbt",
    "chainId": 97,
    "networkId": 97,
    "explorers": [{"name": "bscscan-testnet", "url": "https://testnet.bscscan.com", "standard": "EIP3091"}]
}, {
    "name": "POA Network Core",
    "chain": "POA",
    "rpc": ["https://core.poanetwork.dev", "http://core.poanetwork.dev:8545", "https://core.poa.network", "ws://core.poanetwork.dev:8546"],
    "faucets": [],
    "nativeCurrency": {"name": "POA Network Core Ether", "symbol": "POA", "decimals": 18},
    "infoURL": "https://poa.network",
    "shortName": "poa",
    "chainId": 99,
    "networkId": 99,
    "slip44": 178,
    "explorers": [{"name": "blockscout", "url": "https://blockscout.com/poa/core", "standard": "none"}]
}, {
    "name": "EtherInc",
    "chain": "ETI",
    "rpc": ["https://api.einc.io/jsonrpc/mainnet"],
    "faucets": [],
    "nativeCurrency": {"name": "EtherInc Ether", "symbol": "ETI", "decimals": 18},
    "infoURL": "https://einc.io",
    "shortName": "eti",
    "chainId": 101,
    "networkId": 1,
    "slip44": 464
}, {
    "name": "Web3Games Testnet",
    "chain": "Web3Games",
    "icon": "web3games",
    "rpc": ["https://testnet-rpc-0.web3games.org/evm", "https://testnet-rpc-1.web3games.org/evm", "https://testnet-rpc-2.web3games.org/evm"],
    "faucets": [],
    "nativeCurrency": {"name": "Web3Games", "symbol": "W3G", "decimals": 18},
    "infoURL": "https://web3games.org/",
    "shortName": "tw3g",
    "chainId": 102,
    "networkId": 102
}, {
    "name": "Kaiba Lightning Chain Testnet",
    "chain": "tKLC",
    "rpc": ["https://klc.live/"],
    "faucets": [],
    "nativeCurrency": {"name": "Kaiba Testnet Token", "symbol": "tKAIBA", "decimals": 18},
    "infoURL": "https://kaibadefi.com",
    "shortName": "tklc",
    "chainId": 104,
    "networkId": 104,
    "icon": "kaiba",
    "explorers": [{"name": "kaibascan", "url": "https://kaibascan.io", "icon": "kaibascan", "standard": "EIP3091"}]
}, {
    "name": "Web3Games Devnet",
    "chain": "Web3Games",
    "icon": "web3games",
    "rpc": ["https://devnet.web3games.org/evm"],
    "faucets": [],
    "nativeCurrency": {"name": "Web3Games", "symbol": "W3G", "decimals": 18},
    "infoURL": "https://web3games.org/",
    "shortName": "dw3g",
    "chainId": 105,
    "networkId": 105,
    "explorers": [{"name": "Web3Games Explorer", "url": "https://explorer-devnet.web3games.org", "standard": "none"}]
}, {
    "name": "Nebula Testnet",
    "chain": "NTN",
    "icon": "nebulatestnet",
    "rpc": ["https://testnet.rpc.novanetwork.io:9070"],
    "faucets": ["https://faucet.novanetwork.io"],
    "nativeCurrency": {"name": "Nebula X", "symbol": "NBX", "decimals": 18},
    "infoURL": "https://novanetwork.io",
    "shortName": "ntn",
    "chainId": 107,
    "networkId": 107,
    "explorers": [{"name": "nebulatestnet", "url": "https://explorer.novanetwork.io", "standard": "EIP3091"}]
}, {
    "name": "Proton Testnet",
    "chain": "XPR",
    "rpc": ["https://protontestnet.greymass.com/"],
    "faucets": [],
    "nativeCurrency": {"name": "Proton", "symbol": "XPR", "decimals": 4},
    "infoURL": "https://protonchain.com",
    "shortName": "xpr",
    "chainId": 110,
    "networkId": 110
}, {
    "name": "EtherLite Chain",
    "chain": "ETL",
    "rpc": ["https://rpc.etherlite.org"],
    "faucets": ["https://etherlite.org/faucets"],
    "nativeCurrency": {"name": "EtherLite", "symbol": "ETL", "decimals": 18},
    "infoURL": "https://etherlite.org",
    "shortName": "ETL",
    "chainId": 111,
    "networkId": 111,
    "icon": "etherlite"
}, {
    "name": "Fuse Sparknet",
    "chain": "fuse",
    "rpc": ["https://rpc.fusespark.io"],
    "faucets": ["https://get.fusespark.io"],
    "nativeCurrency": {"name": "Spark", "symbol": "SPARK", "decimals": 18},
    "infoURL": "https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet",
    "shortName": "spark",
    "chainId": 123,
    "networkId": 123
}, {
    "name": "Decentralized Web Mainnet",
    "shortName": "dwu",
    "chain": "DWU",
    "chainId": 124,
    "networkId": 124,
    "rpc": ["https://decentralized-web.tech/dw_rpc.php"],
    "faucets": [],
    "infoURL": "https://decentralized-web.tech/dw_chain.php",
    "nativeCurrency": {"name": "Decentralized Web Utility", "symbol": "DWU", "decimals": 18}
}, {
    "name": "OYchain Testnet",
    "chain": "OYchain",
    "rpc": ["https://rpc.testnet.oychain.io"],
    "faucets": ["https://faucet.oychain.io"],
    "nativeCurrency": {"name": "OYchain Token", "symbol": "OY", "decimals": 18},
    "infoURL": "https://www.oychain.io",
    "shortName": "OYchainTestnet",
    "chainId": 125,
    "networkId": 125,
    "slip44": 125,
    "explorers": [{
        "name": "OYchain Testnet Explorer", "url": "https://explorer.testnet.oychain.io", "standard": "none"
    }]
}, {
    "name": "OYchain Mainnet",
    "chain": "OYchain",
    "icon": "oychain",
    "rpc": ["https://rpc.mainnet.oychain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "OYchain Token", "symbol": "OY", "decimals": 18},
    "infoURL": "https://www.oychain.io",
    "shortName": "OYchainMainnet",
    "chainId": 126,
    "networkId": 126,
    "slip44": 126,
    "explorers": [{"name": "OYchain Mainnet Explorer", "url": "https://explorer.oychain.io", "standard": "none"}]
}, {
    "name": "Factory 127 Mainnet",
    "chain": "FETH",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Factory 127 Token", "symbol": "FETH", "decimals": 18},
    "infoURL": "https://www.factory127.com",
    "shortName": "feth",
    "chainId": 127,
    "networkId": 127,
    "slip44": 127
}, {
    "name": "Openpiece Testnet",
    "chain": "OPENPIECE",
    "icon": "openpiece",
    "rpc": ["https://testnet.openpiece.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Belly", "symbol": "BELLY", "decimals": 18},
    "infoURL": "https://cryptopiece.online",
    "shortName": "OPtest",
    "chainId": 141,
    "networkId": 141,
    "explorers": [{"name": "Belly Scan", "url": "https://testnet.bellyscan.com", "standard": "none"}]
}, {
    "name": "DAX CHAIN",
    "chain": "DAX",
    "rpc": ["https://rpc.prodax.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Prodax", "symbol": "DAX", "decimals": 18},
    "infoURL": "https://prodax.io/",
    "shortName": "dax",
    "chainId": 142,
    "networkId": 142
}, {
    "name": "PHI Network v2",
    "chain": "PHI",
    "rpc": ["https://connect.phi.network", ""],
    "faucets": [],
    "nativeCurrency": {"name": "PHI", "symbol": "Φ", "decimals": 18},
    "infoURL": "https://phi.network",
    "shortName": "PHI",
    "chainId": 144,
    "networkId": 144,
    "icon": "phi",
    "explorers": [{"name": "Phiscan", "url": "https://phiscan.com", "icon": "phi", "standard": "none"}]
}, {
    "name": "Lightstreams Testnet",
    "chain": "PHT",
    "rpc": ["https://node.sirius.lightstreams.io"],
    "faucets": ["https://discuss.lightstreams.network/t/request-test-tokens"],
    "nativeCurrency": {"name": "Lightstreams PHT", "symbol": "PHT", "decimals": 18},
    "infoURL": "https://explorer.sirius.lightstreams.io",
    "shortName": "tpht",
    "chainId": 162,
    "networkId": 162
}, {
    "name": "Lightstreams Mainnet",
    "chain": "PHT",
    "rpc": ["https://node.mainnet.lightstreams.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Lightstreams PHT", "symbol": "PHT", "decimals": 18},
    "infoURL": "https://explorer.lightstreams.io",
    "shortName": "pht",
    "chainId": 163,
    "networkId": 163
}, {
    "name": "AIOZ Network",
    "chain": "AIOZ",
    "icon": "aioz",
    "rpc": ["https://eth-dataseed.aioz.network"],
    "faucets": [],
    "nativeCurrency": {"name": "AIOZ", "symbol": "AIOZ", "decimals": 18},
    "infoURL": "https://aioz.network",
    "shortName": "aioz",
    "chainId": 168,
    "networkId": 168,
    "slip44": 60,
    "explorers": [{"name": "AIOZ Network Explorer", "url": "https://explorer.aioz.network", "standard": "EIP3091"}]
}, {
    "name": "HOO Smart Chain Testnet",
    "chain": "ETH",
    "rpc": ["https://http-testnet.hoosmartchain.com"],
    "faucets": ["https://faucet-testnet.hscscan.com/"],
    "nativeCurrency": {"name": "HOO", "symbol": "HOO", "decimals": 18},
    "infoURL": "https://www.hoosmartchain.com",
    "shortName": "hoosmartchain",
    "chainId": 170,
    "networkId": 170
}, {
    "name": "Latam-Blockchain Resil Testnet",
    "chain": "Resil",
    "rpc": ["https://rpc.latam-blockchain.com", "wss://ws.latam-blockchain.com"],
    "faucets": ["https://faucet.latam-blockchain.com"],
    "nativeCurrency": {"name": "Latam-Blockchain Resil Test Native Token", "symbol": "usd", "decimals": 18},
    "infoURL": "https://latam-blockchain.com",
    "shortName": "resil",
    "chainId": 172,
    "networkId": 172
}, {
    "name": "AME Chain Mainnet",
    "chain": "AME",
    "rpc": ["https://node1.amechain.io/"],
    "faucets": [],
    "nativeCurrency": {"name": "AME", "symbol": "AME", "decimals": 18},
    "infoURL": "https://amechain.io/",
    "shortName": "ame",
    "chainId": 180,
    "networkId": 180,
    "explorers": [{"name": "AME Scan", "url": "https://amescan.io", "standard": "EIP3091"}]
}, {
    "name": "Seele Mainnet",
    "chain": "Seele",
    "rpc": ["https://rpc.seelen.pro", "https://rpc.seele-n.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Seele", "symbol": "Seele", "decimals": 18},
    "infoURL": "https://seelen.pro/",
    "shortName": "Seele",
    "chainId": 186,
    "networkId": 186,
    "explorers": [{"name": "seeleview", "url": "https://seeleview.net", "standard": "none"}]
}, {
    "name": "BMC Mainnet",
    "chain": "BMC",
    "rpc": ["https://mainnet.bmcchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "BTM", "symbol": "BTM", "decimals": 18},
    "infoURL": "https://bmc.bytom.io/",
    "shortName": "BMC",
    "chainId": 188,
    "networkId": 188,
    "explorers": [{"name": "Blockmeta", "url": "https://bmc.blockmeta.com", "standard": "none"}]
}, {
    "name": "BMC Testnet",
    "chain": "BMC",
    "rpc": ["https://testnet.bmcchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "BTM", "symbol": "BTM", "decimals": 18},
    "infoURL": "https://bmc.bytom.io/",
    "shortName": "BMCT",
    "chainId": 189,
    "networkId": 189,
    "explorers": [{"name": "Blockmeta", "url": "https://bmctestnet.blockmeta.com", "standard": "none"}]
}, {
    "name": "Crypto Emergency",
    "chain": "CEM",
    "rpc": ["https://cemchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Crypto Emergency", "symbol": "CEM", "decimals": 18},
    "infoURL": "https://cemblockchain.com/",
    "shortName": "cem",
    "chainId": 193,
    "networkId": 193,
    "explorers": [{"name": "cemscan", "url": "https://cemscan.com", "standard": "EIP3091"}]
}, {
    "name": "BitTorrent Chain Mainnet",
    "chain": "BTTC",
    "rpc": ["https://rpc.bittorrentchain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "BitTorrent", "symbol": "BTT", "decimals": 18},
    "infoURL": "https://bittorrentchain.io/",
    "shortName": "BTT",
    "chainId": 199,
    "networkId": 199,
    "explorers": [{"name": "bttcscan", "url": "https://scan.bittorrentchain.io", "standard": "none"}]
}, {
    "name": "Arbitrum on xDai",
    "chain": "AOX",
    "rpc": ["https://arbitrum.xdaichain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "xDAI", "symbol": "xDAI", "decimals": 18},
    "infoURL": "https://xdaichain.com",
    "shortName": "aox",
    "chainId": 200,
    "networkId": 200,
    "explorers": [{"name": "blockscout", "url": "https://blockscout.com/xdai/arbitrum", "standard": "EIP3091"}],
    "parent": {"chain": "eip155-100", "type": "L2"}
}, {
    "name": "Freight Trust Network",
    "chain": "EDI",
    "rpc": [
        "http://13.57.207.168:3435",
        "https://app.freighttrust.net/ftn/${API_KEY}"
    ],
    "faucets": ["http://faucet.freight.sh"],
    "nativeCurrency": {"name": "Freight Trust Native", "symbol": "0xF", "decimals": 18},
    "infoURL": "https://freighttrust.com",
    "shortName": "EDI",
    "chainId": 211,
    "networkId": 0
}, {
    "name": "SoterOne Mainnet old",
    "chain": "SOTER",
    "rpc": ["https://rpc.soter.one"],
    "faucets": [],
    "nativeCurrency": {"name": "SoterOne Mainnet Ether", "symbol": "SOTER", "decimals": 18},
    "infoURL": "https://www.soterone.com",
    "shortName": "SO1-old",
    "chainId": 218,
    "networkId": 218,
    "status": "deprecated"
}, {
    "name": "Permission",
    "chain": "ASK",
    "rpc": ["https://blockchain-api-mainnet.permission.io/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "ASK", "symbol": "ASK", "decimals": 18},
    "infoURL": "https://permission.io/",
    "shortName": "ASK",
    "chainId": 222,
    "networkId": 2221,
    "slip44": 2221,
    "status": "deprecated"
}, {
    "name": "LACHAIN Mainnet",
    "chain": "LA",
    "icon": "lachain",
    "rpc": ["https://rpc-mainnet.lachain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "LA", "symbol": "LA", "decimals": 18},
    "infoURL": "https://lachain.io",
    "shortName": "LA",
    "chainId": 225,
    "networkId": 225,
    "explorers": [{"name": "blockscout", "url": "https://scan.lachain.io", "standard": "EIP3091"}]
}, {
    "name": "LACHAIN Testnet",
    "chain": "TLA",
    "icon": "lachain",
    "rpc": ["https://rpc-testnet.lachain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "TLA", "symbol": "TLA", "decimals": 18},
    "infoURL": "https://lachain.io",
    "shortName": "TLA",
    "chainId": 226,
    "networkId": 226,
    "explorers": [{"name": "blockscout", "url": "https://scan-test.lachain.io", "standard": "EIP3091"}]
}, {
    "name": "Huobi ECO Chain Testnet",
    "chain": "Heco",
    "rpc": ["https://http-testnet.hecochain.com", "wss://ws-testnet.hecochain.com", "https://hecotestapi.terminet.io/rpc"],
    "faucets": ["https://scan-testnet.hecochain.com/faucet"],
    "nativeCurrency": {"name": "Huobi ECO Chain Test Native Token", "symbol": "htt", "decimals": 18},
    "infoURL": "https://testnet.hecoinfo.com",
    "shortName": "hecot",
    "chainId": 256,
    "networkId": 256
}, {
    "name": "Setheum",
    "chain": "Setheum",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Setheum", "symbol": "SETM", "decimals": 18},
    "infoURL": "https://setheum.xyz",
    "shortName": "setm",
    "chainId": 258,
    "networkId": 258
}, {
    "name": "SUR Blockchain Network",
    "chain": "SUR",
    "rpc": ["https://sur.nilin.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Suren", "symbol": "SRN", "decimals": 18},
    "infoURL": "https://surnet.org",
    "shortName": "SUR",
    "chainId": 262,
    "networkId": 1,
    "icon": "SUR",
    "explorers": [{
        "name": "Surnet Explorer", "url": "https://explorer.surnet.org", "icon": "SUR", "standard": "EIP3091"
    }]
}, {
    "name": "zkSync alpha testnet",
    "chain": "ETH",
    "rpc": ["https://zksync2-testnet.zksync.dev"],
    "faucets": ["https://portal.zksync.io/faucet"],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://v2-docs.zksync.io/",
    "shortName": "zksync-goerli",
    "chainId": 280,
    "networkId": 280,
    "icon": "ethereum",
    "explorers": [{
        "name": "blockscout", "url": "https://zksync2-testnet.zkscan.io", "icon": "blockscout", "standard": "EIP3091"
    }]
}, {
    "name": "Optimism on Gnosis",
    "chain": "OGC",
    "rpc": ["https://optimism.gnosischain.com", "wss://optimism.gnosischain.com/wss"],
    "faucets": ["https://faucet.gimlu.com/gnosis"],
    "nativeCurrency": {"name": "xDAI", "symbol": "xDAI", "decimals": 18},
    "infoURL": "https://www.xdaichain.com/for-developers/optimism-optimistic-rollups-on-gc",
    "shortName": "ogc",
    "chainId": 300,
    "networkId": 300,
    "explorers": [{
        "name": "blockscout", "url": "https://blockscout.com/xdai/optimism", "icon": "blockscout", "standard": "EIP3091"
    }]
}, {
    "name": "KCC Testnet",
    "chain": "KCC",
    "rpc": ["https://rpc-testnet.kcc.network", "wss://rpc-ws-testnet.kcc.network"],
    "faucets": ["https://faucet-testnet.kcc.network"],
    "nativeCurrency": {"name": "KuCoin Testnet Token", "symbol": "tKCS", "decimals": 18},
    "infoURL": "https://scan-testnet.kcc.network",
    "shortName": "kcst",
    "chainId": 322,
    "networkId": 322,
    "explorers": [{"name": "kcc-scan", "url": "https://scan-testnet.kcc.network", "standard": "EIP3091"}]
}, {
    "name": "Web3Q Mainnet",
    "chain": "Web3Q",
    "rpc": ["https://mainnet.web3q.io:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "Web3Q", "symbol": "W3Q", "decimals": 18},
    "infoURL": "https://web3q.io/home.w3q/",
    "shortName": "w3q",
    "chainId": 333,
    "networkId": 333,
    "explorers": [{"name": "w3q-mainnet", "url": "https://explorer.mainnet.web3q.io", "standard": "EIP3091"}]
}, {
    "name": "DFK Chain Test",
    "chain": "DFK",
    "icon": "dfk",
    "rpc": ["https://subnets.avax.network/defi-kingdoms/dfk-chain-testnet/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Jewel", "symbol": "JEWEL", "decimals": 18},
    "infoURL": "https://defikingdoms.com",
    "shortName": "DFKTEST",
    "chainId": 335,
    "networkId": 335,
    "explorers": [{
        "name": "ethernal", "url": "https://explorer-test.dfkchain.com", "icon": "ethereum", "standard": "none"
    }]
}, {
    "name": "Cronos Testnet",
    "chain": "CRO",
    "rpc": ["https://cronos-testnet-3.crypto.org:8545", "wss://cronos-testnet-3.crypto.org:8546", "https://evm-t3.cronos.org"],
    "faucets": ["https://cronos.crypto.org/faucet"],
    "nativeCurrency": {"name": "Crypto.org Test Coin", "symbol": "TCRO", "decimals": 18},
    "infoURL": "https://cronos.crypto.org",
    "shortName": "tcro",
    "chainId": 338,
    "networkId": 338,
    "explorers": [{
        "name": "Cronos Testnet Explorer", "url": "https://cronos.crypto.org/explorer/testnet3", "standard": "none"
    }]
}, {
    "name": "Theta Sapphire Testnet",
    "chain": "Theta",
    "rpc": ["https://eth-rpc-api-sapphire.thetatoken.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Theta Fuel", "symbol": "TFUEL", "decimals": 18},
    "infoURL": "https://www.thetatoken.org/",
    "shortName": "theta-sapphire",
    "chainId": 363,
    "networkId": 363,
    "explorers": [{
        "name": "Theta Sapphire Testnet Explorer",
        "url": "https://guardian-testnet-sapphire-explorer.thetatoken.org",
        "standard": "EIP3091"
    }]
}, {
    "name": "Theta Amber Testnet",
    "chain": "Theta",
    "rpc": ["https://eth-rpc-api-amber.thetatoken.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Theta Fuel", "symbol": "TFUEL", "decimals": 18},
    "infoURL": "https://www.thetatoken.org/",
    "shortName": "theta-amber",
    "chainId": 364,
    "networkId": 364,
    "explorers": [{
        "name": "Theta Amber Testnet Explorer",
        "url": "https://guardian-testnet-amber-explorer.thetatoken.org",
        "standard": "EIP3091"
    }]
}, {
    "name": "Theta Testnet",
    "chain": "Theta",
    "rpc": ["https://eth-rpc-api-testnet.thetatoken.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Theta Fuel", "symbol": "TFUEL", "decimals": 18},
    "infoURL": "https://www.thetatoken.org/",
    "shortName": "theta-testnet",
    "chainId": 365,
    "networkId": 365,
    "explorers": [{
        "name": "Theta Testnet Explorer", "url": "https://testnet-explorer.thetatoken.org", "standard": "EIP3091"
    }]
}, {
    "name": "PulseChain Mainnet",
    "shortName": "pls",
    "chain": "PLS",
    "chainId": 369,
    "networkId": 369,
    "infoURL": "https://pulsechain.com/",
    "rpc": ["https://rpc.mainnet.pulsechain.com", "wss://rpc.mainnet.pulsechain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Pulse", "symbol": "PLS", "decimals": 18}
}, {
    "name": "Lisinski",
    "chain": "CRO",
    "rpc": ["https://rpc-bitfalls1.lisinski.online"],
    "faucets": ["https://pipa.lisinski.online"],
    "nativeCurrency": {"name": "Lisinski Ether", "symbol": "LISINS", "decimals": 18},
    "infoURL": "https://lisinski.online",
    "shortName": "lisinski",
    "chainId": 385,
    "networkId": 385
}, {
    "name": "SX Network Mainnet",
    "chain": "SX",
    "icon": "SX",
    "rpc": ["https://rpc.sx.technology"],
    "faucets": [],
    "nativeCurrency": {"name": "SX Network", "symbol": "SX", "decimals": 18},
    "infoURL": "https://www.sx.technology",
    "shortName": "SX",
    "chainId": 416,
    "networkId": 416,
    "explorers": [{"name": "SX Network Explorer", "url": "https://explorer.sx.technology", "standard": "EIP3091"}]
}, {
    "name": "Optimism Goerli Testnet",
    "chain": "ETH",
    "rpc": ["https://goerli.optimism.io/"],
    "faucets": [],
    "nativeCurrency": {"name": "Görli Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://optimism.io",
    "shortName": "ogor",
    "chainId": 420,
    "networkId": 420
}, {
    "name": "Rupaya",
    "chain": "RUPX",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Rupaya", "symbol": "RUPX", "decimals": 18},
    "infoURL": "https://www.rupx.io",
    "shortName": "rupx",
    "chainId": 499,
    "networkId": 499,
    "slip44": 499
}, {
    "name": "Double-A Chain Mainnet",
    "chain": "AAC",
    "rpc": ["https://rpc.acuteangle.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Acuteangle Native Token", "symbol": "AAC", "decimals": 18},
    "infoURL": "https://www.acuteangle.com/",
    "shortName": "aac",
    "chainId": 512,
    "networkId": 512,
    "slip44": 1512,
    "explorers": [{"name": "aacscan", "url": "https://scan.acuteangle.com", "standard": "EIP3091"}],
    "icon": "aac"
}, {
    "name": "Double-A Chain Testnet",
    "chain": "AAC",
    "icon": "aac",
    "rpc": ["https://rpc-testnet.acuteangle.com"],
    "faucets": ["https://scan-testnet.acuteangle.com/faucet"],
    "nativeCurrency": {"name": "Acuteangle Native Token", "symbol": "AAC", "decimals": 18},
    "infoURL": "https://www.acuteangle.com/",
    "shortName": "aact",
    "chainId": 513,
    "networkId": 513,
    "explorers": [{"name": "aacscan-testnet", "url": "https://scan-testnet.acuteangle.com", "standard": "EIP3091"}]
}, {
    "name": "XT Smart Chain Mainnet",
    "chain": "XSC",
    "icon": "xsc",
    "rpc": ["https://datarpc1.xsc.pub", "https://datarpc2.xsc.pub", "https://datarpc3.xsc.pub"],
    "faucets": ["https://xsc.pub/faucet"],
    "nativeCurrency": {"name": "XT Smart Chain Native Token", "symbol": "XT", "decimals": 18},
    "infoURL": "https://xsc.pub/",
    "shortName": "xt",
    "chainId": 520,
    "networkId": 1024,
    "explorers": [{"name": "xscscan", "url": "https://xscscan.pub", "standard": "EIP3091"}]
}, {
    "name": "F(x)Core Mainnet Network",
    "chain": "Fxcore",
    "rpc": ["https://fx-json-web3.functionx.io:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "Function X", "symbol": "FX", "decimals": 18},
    "infoURL": "https://functionx.io/",
    "shortName": "FxCore",
    "chainId": 530,
    "networkId": 530,
    "icon": "fxcore",
    "explorers": [{"name": "FunctionX Explorer", "url": "https://fx-evm.functionx.io", "standard": "EIP3091"}]
}, {
    "name": "Candle",
    "chain": "Candle",
    "rpc": ["https://candle-rpc.com/", "https://rpc.cndlchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "CANDLE", "symbol": "CNDL", "decimals": 18},
    "infoURL": "https://candlelabs.org/",
    "shortName": "CNDL",
    "chainId": 534,
    "networkId": 534,
    "slip44": 674,
    "explorers": [{"name": "candleexplorer", "url": "https://candleexplorer.com", "standard": "EIP3091"}]
}, {
    "name": "Vela1 Chain Mainnet",
    "chain": "VELA1",
    "rpc": ["https://rpc.velaverse.io"],
    "faucets": [],
    "nativeCurrency": {"name": "CLASS COIN", "symbol": "CLASS", "decimals": 18},
    "infoURL": "https://velaverse.io",
    "shortName": "CLASS",
    "chainId": 555,
    "networkId": 555,
    "explorers": [{"name": "Vela1 Chain Mainnet Explorer", "url": "https://exp.velaverse.io", "standard": "EIP3091"}]
}, {
    "name": "Tao Network",
    "chain": "TAO",
    "rpc": ["https://rpc.testnet.tao.network", "http://rpc.testnet.tao.network:8545", "https://rpc.tao.network", "wss://rpc.tao.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Tao", "symbol": "TAO", "decimals": 18},
    "infoURL": "https://tao.network",
    "shortName": "tao",
    "chainId": 558,
    "networkId": 558
}, {
    "name": "Dogechain Testnet",
    "chain": "DC",
    "icon": "dogechain",
    "rpc": ["https://rpc-testnet.dogechain.dog"],
    "faucets": ["https://faucet.dogechain.dog"],
    "nativeCurrency": {"name": "Dogecoin", "symbol": "DOGE", "decimals": 18},
    "infoURL": "https://dogechain.dog",
    "shortName": "dct",
    "chainId": 568,
    "networkId": 568,
    "explorers": [{
        "name": "dogechain testnet explorer", "url": "https://explorer-testnet.dogechain.dog", "standard": "EIP3091"
    }]
}, {
    "name": "Metis Stardust Testnet",
    "chain": "ETH",
    "rpc": ["https://stardust.metis.io/?owner=588"],
    "faucets": [],
    "nativeCurrency": {"name": "tMetis", "symbol": "METIS", "decimals": 18},
    "infoURL": "https://www.metis.io",
    "shortName": "metis-stardust",
    "chainId": 588,
    "networkId": 588,
    "explorers": [{"name": "blockscout", "url": "https://stardust-explorer.metis.io", "standard": "EIP3091"}],
    "parent": {"type": "L2", "chain": "eip155-4", "bridges": [{"url": "https://bridge.metis.io"}]}
}, {
    "name": "Acala Mandala Testnet",
    "chain": "mACA",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Acala Mandala Token", "symbol": "mACA", "decimals": 18},
    "infoURL": "https://acala.network",
    "shortName": "maca",
    "chainId": 595,
    "networkId": 595
}, {
    "name": "Karura Network Testnet",
    "chain": "KAR",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Karura Token", "symbol": "KAR", "decimals": 18},
    "infoURL": "https://karura.network",
    "shortName": "tkar",
    "chainId": 596,
    "networkId": 596,
    "slip44": 596
}, {
    "name": "Acala Network Testnet",
    "chain": "ACA",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Acala Token", "symbol": "ACA", "decimals": 18},
    "infoURL": "https://acala.network",
    "shortName": "taca",
    "chainId": 597,
    "networkId": 597,
    "slip44": 597
}, {
    "name": "Meshnyan testnet",
    "chain": "MeshTestChain",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Meshnyan Testnet Native Token", "symbol": "MESHT", "decimals": 18},
    "infoURL": "",
    "shortName": "mesh-chain-testnet",
    "chainId": 600,
    "networkId": 600
}, {
    "name": "SX Network Testnet",
    "chain": "SX",
    "icon": "SX",
    "rpc": ["https://rpc.toronto.sx.technology"],
    "faucets": ["https://faucet.toronto.sx.technology"],
    "nativeCurrency": {"name": "SX Network", "symbol": "SX", "decimals": 18},
    "infoURL": "https://www.sx.technology",
    "shortName": "SX-Testnet",
    "chainId": 647,
    "networkId": 647,
    "explorers": [{
        "name": "SX Network Toronto Explorer", "url": "https://explorer.toronto.sx.technology", "standard": "EIP3091"
    }]
}, {
    "name": "Pixie Chain Testnet",
    "chain": "PixieChain",
    "rpc": ["https://http-testnet.chain.pixie.xyz", "wss://ws-testnet.chain.pixie.xyz"],
    "faucets": ["https://chain.pixie.xyz/faucet"],
    "nativeCurrency": {"name": "Pixie Chain Testnet Native Token", "symbol": "PCTT", "decimals": 18},
    "infoURL": "https://scan-testnet.chain.pixie.xyz",
    "shortName": "pixie-chain-testnet",
    "chainId": 666,
    "networkId": 666
}, {
    "name": "Karura Network",
    "chain": "KAR",
    "rpc": ["https://eth-rpc-karura.aca-api.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Karura Token", "symbol": "KAR", "decimals": 18},
    "infoURL": "https://karura.network",
    "shortName": "kar",
    "chainId": 686,
    "networkId": 686,
    "slip44": 686
}, {
    "name": "Star Social Testnet",
    "chain": "SNS",
    "rpc": ["https://avastar.cc/ext/bc/C/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Social", "symbol": "SNS", "decimals": 18},
    "infoURL": "https://info.avastar.cc",
    "shortName": "SNS",
    "chainId": 700,
    "networkId": 700,
    "explorers": [{"name": "starscan", "url": "https://avastar.info", "standard": "EIP3091"}]
}, {
    "name": "BlockChain Station Mainnet",
    "chain": "BCS",
    "rpc": ["https://rpc-mainnet.bcsdev.io", "wss://rpc-ws-mainnet.bcsdev.io"],
    "faucets": [],
    "nativeCurrency": {"name": "BCS Token", "symbol": "BCS", "decimals": 18},
    "infoURL": "https://blockchainstation.io",
    "shortName": "bcs",
    "chainId": 707,
    "networkId": 707,
    "explorers": [{"name": "BlockChain Station Explorer", "url": "https://explorer.bcsdev.io", "standard": "EIP3091"}]
}, {
    "name": "BlockChain Station Testnet",
    "chain": "BCS",
    "rpc": ["https://rpc-testnet.bcsdev.io", "wss://rpc-ws-testnet.bcsdev.io"],
    "faucets": ["https://faucet.bcsdev.io"],
    "nativeCurrency": {"name": "BCS Testnet Token", "symbol": "tBCS", "decimals": 18},
    "infoURL": "https://blockchainstation.io",
    "shortName": "tbcs",
    "chainId": 708,
    "networkId": 708,
    "explorers": [{"name": "BlockChain Station Explorer", "url": "https://testnet.bcsdev.io", "standard": "EIP3091"}]
}, {
    "name": "Factory 127 Testnet",
    "chain": "FETH",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Factory 127 Token", "symbol": "FETH", "decimals": 18},
    "infoURL": "https://www.factory127.com",
    "shortName": "tfeth",
    "chainId": 721,
    "networkId": 721,
    "slip44": 721
}, {
    "name": "Lycan Chain",
    "chain": "LYC",
    "rpc": ["https://rpc.lycanchain.com/"],
    "faucets": [],
    "nativeCurrency": {"name": "Lycan", "symbol": "LYC", "decimals": 18},
    "infoURL": "https://lycanchain.com",
    "shortName": "LYC",
    "chainId": 721,
    "networkId": 721,
    "icon": "lycanchain",
    "explorers": [{"name": "blockscout", "url": "https://explorer.lycanchain.com", "standard": "EIP3091"}]
}, {
    "name": "OpenChain Testnet",
    "chain": "OpenChain Testnet",
    "rpc": ["http://mainnet.openchain.info:8545", "https://mainnet1.openchain.info"],
    "faucets": ["https://faucet.openchain.info/"],
    "nativeCurrency": {"name": "Openchain Testnet", "symbol": "TOPC", "decimals": 18},
    "infoURL": "https://testnet.openchain.info/",
    "shortName": "opc",
    "chainId": 776,
    "networkId": 776,
    "explorers": [{"name": "OPEN CHAIN TESTNET", "url": "https://testnet.openchain.info", "standard": "none"}]
}, {
    "name": "cheapETH",
    "chain": "cheapETH",
    "rpc": ["https://node.cheapeth.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "cTH", "symbol": "cTH", "decimals": 18},
    "infoURL": "https://cheapeth.org/",
    "shortName": "cth",
    "chainId": 777,
    "networkId": 777
}, {
    "name": "Acala Network",
    "chain": "ACA",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Acala Token", "symbol": "ACA", "decimals": 18},
    "infoURL": "https://acala.network",
    "shortName": "aca",
    "chainId": 787,
    "networkId": 787,
    "slip44": 787
}, {
    "name": "Aerochain Testnet",
    "chain": "Aerochain",
    "rpc": ["https://testnet-rpc.aerochain.id/"],
    "faucets": ["https://faucet.aerochain.id/"],
    "nativeCurrency": {"name": "Aerochain Testnet", "symbol": "TAero", "decimals": 18},
    "infoURL": "https://aerochaincoin.org/",
    "shortName": "taero",
    "chainId": 788,
    "networkId": 788,
    "explorers": [{"name": "aeroscan", "url": "https://testnet.aeroscan.id", "standard": "EIP3091"}]
}, {
    "name": "Haic",
    "chain": "Haic",
    "rpc": ["https://orig.haichain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Haicoin", "symbol": "HAIC", "decimals": 18},
    "infoURL": "https://www.haichain.io/",
    "shortName": "haic",
    "chainId": 803,
    "networkId": 803
}, {
    "name": "Portal Fantasy Chain Test",
    "chain": "PF",
    "icon": "pf",
    "rpc": ["https://subnets.avax.network/portal-fantasy/testnet/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Portal Fantasy Token", "symbol": "PFT", "decimals": 18},
    "infoURL": "https://portalfantasy.io",
    "shortName": "PFTEST",
    "chainId": 808,
    "networkId": 808,
    "explorers": []
}, {
    "name": "Callisto Testnet Deprecated",
    "chain": "CLO",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Callisto Testnet Ether", "symbol": "TCLO", "decimals": 18},
    "infoURL": "https://callisto.network",
    "shortName": "tclo",
    "chainId": 821,
    "networkId": 2,
    "status": "deprecated"
}, {
    "name": "Ambros Chain Mainnet",
    "chain": "ambroschain",
    "rpc": ["https://api.ambros.network", "https://mainnet.ambroschain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "AMBROS", "symbol": "AMBROS", "decimals": 18},
    "infoURL": "https://ambros.network",
    "shortName": "ambros",
    "chainId": 880,
    "networkId": 880,
    "explorers": [{"name": "Ambros Chain Explorer", "url": "https://ambrosscan.com", "standard": "none"}]
}, {
    "name": "Garizon Testnet Stage0",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s0-testnet.garizon.net/rpc"],
    "faucets": ["https://faucet-testnet.garizon.com"],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-test-s0",
    "chainId": 900,
    "networkId": 900,
    "explorers": [{
        "name": "explorer", "url": "https://explorer-testnet.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }]
}, {
    "name": "Garizon Testnet Stage1",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s1-testnet.garizon.net/rpc"],
    "faucets": ["https://faucet-testnet.garizon.com"],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-test-s1",
    "chainId": 901,
    "networkId": 901,
    "explorers": [{
        "name": "explorer", "url": "https://explorer-testnet.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }],
    "parent": {"chain": "eip155-900", "type": "shard"}
}, {
    "name": "Garizon Testnet Stage2",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s2-testnet.garizon.net/rpc"],
    "faucets": ["https://faucet-testnet.garizon.com"],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-test-s2",
    "chainId": 902,
    "networkId": 902,
    "explorers": [{
        "name": "explorer", "url": "https://explorer-testnet.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }],
    "parent": {"chain": "eip155-900", "type": "shard"}
}, {
    "name": "Garizon Testnet Stage3",
    "chain": "GAR",
    "icon": "garizon",
    "rpc": ["https://s3-testnet.garizon.net/rpc"],
    "faucets": ["https://faucet-testnet.garizon.com"],
    "nativeCurrency": {"name": "Garizon", "symbol": "GAR", "decimals": 18},
    "infoURL": "https://garizon.com",
    "shortName": "gar-test-s3",
    "chainId": 903,
    "networkId": 903,
    "explorers": [{
        "name": "explorer", "url": "https://explorer-testnet.garizon.com", "icon": "garizon", "standard": "EIP3091"
    }],
    "parent": {"chain": "eip155-900", "type": "shard"}
}, {
    "name": "Portal Fantasy Chain",
    "chain": "PF",
    "icon": "pf",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Portal Fantasy Token", "symbol": "PFT", "decimals": 18},
    "infoURL": "https://portalfantasy.io",
    "shortName": "PF",
    "chainId": 909,
    "networkId": 909,
    "explorers": [],
    "status": "incubating"
}, {
    "name": "PulseChain Testnet",
    "shortName": "tpls",
    "chain": "tPLS",
    "chainId": 940,
    "networkId": 940,
    "infoURL": "https://pulsechain.com/",
    "rpc": ["https://rpc.v2.testnet.pulsechain.com/", "wss://rpc.v2.testnet.pulsechain.com/"],
    "faucets": ["https://faucet.v2.testnet.pulsechain.com/"],
    "nativeCurrency": {"name": "Test Pulse", "symbol": "tPLS", "decimals": 18}
}, {
    "name": "PulseChain Testnet v2b",
    "shortName": "t2bpls",
    "chain": "t2bPLS",
    "chainId": 941,
    "networkId": 941,
    "infoURL": "https://pulsechain.com/",
    "rpc": ["https://rpc.v2b.testnet.pulsechain.com/", "wss://rpc.v2b.testnet.pulsechain.com/"],
    "faucets": ["https://faucet.v2b.testnet.pulsechain.com/"],
    "nativeCurrency": {"name": "Test Pulse", "symbol": "tPLS", "decimals": 18}
}, {
    "name": "PulseChain Testnet v3",
    "shortName": "t3pls",
    "chain": "t3PLS",
    "chainId": 942,
    "networkId": 942,
    "infoURL": "https://pulsechain.com/",
    "rpc": ["https://rpc.v3.testnet.pulsechain.com/", "wss://rpc.v3.testnet.pulsechain.com/"],
    "faucets": ["https://faucet.v3.testnet.pulsechain.com/"],
    "nativeCurrency": {"name": "Test Pulse", "symbol": "tPLS", "decimals": 18}
}, {
    "name": "CCN",
    "title": "ComputeCoin Main Network",
    "chain": "CCN",
    "rpc": ["https://rpc.mainnet.computecoin.com"],
    "faucets": [],
    "nativeCurrency": {"name": "ComputeCoin", "symbol": "CCN", "decimals": 18},
    "infoURL": "https://computecoin.com/",
    "shortName": "ccn",
    "chainId": 970,
    "networkId": 970,
    "icon": "ccn"
}, {
    "name": "CCN Beta",
    "title": "ComputeCoin Beta Network",
    "chain": "CCN Beta",
    "rpc": ["https://beta-rpc.mainnet.computecoin.com"],
    "faucets": [],
    "nativeCurrency": {"name": "ComputeCoin", "symbol": "CCN", "decimals": 18},
    "infoURL": "https://computecoin.com/",
    "shortName": "ccnbeta",
    "chainId": 971,
    "networkId": 971,
    "icon": "ccn"
}, {
    "name": "Nepal Blockchain Network",
    "chain": "YETI",
    "rpc": ["https://api.nepalblockchain.dev", "https://api.nepalblockchain.network"],
    "faucets": ["https://faucet.nepalblockchain.network"],
    "nativeCurrency": {"name": "Nepal Blockchain Network Ether", "symbol": "YETI", "decimals": 18},
    "infoURL": "https://nepalblockchain.network",
    "shortName": "yeti",
    "chainId": 977,
    "networkId": 977
}, {
    "name": "TOP Mainnet EVM",
    "chain": "TOP",
    "icon": "top",
    "rpc": ["ethapi.topnetwork.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://www.topnetwork.org/",
    "shortName": "top_evm",
    "chainId": 980,
    "networkId": 0,
    "explorers": [{"name": "topscan.dev", "url": "https://www.topscan.io", "standard": "none"}]
}, {
    "name": "TOP Mainnet",
    "chain": "TOP",
    "icon": "top",
    "rpc": ["topapi.topnetwork.org"],
    "faucets": [],
    "nativeCurrency": {"name": "TOP", "symbol": "TOP", "decimals": 6},
    "infoURL": "https://www.topnetwork.org/",
    "shortName": "top",
    "chainId": 989,
    "networkId": 0,
    "explorers": [{"name": "topscan.dev", "url": "https://www.topscan.io", "standard": "none"}]
}, {
    "name": "Lucky Network",
    "chain": "LN",
    "rpc": ["https://rpc.luckynetwork.org", "wss://ws.lnscan.org", "https://rpc.lnscan.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Lucky", "symbol": "L99", "decimals": 18},
    "infoURL": "https://luckynetwork.org",
    "shortName": "ln",
    "chainId": 998,
    "networkId": 998,
    "icon": "lucky",
    "explorers": [{
        "name": "blockscout", "url": "https://explorer.luckynetwork.org", "standard": "none"
    }, {"name": "expedition", "url": "https://lnscan.org", "standard": "none"}]
}, {
    "name": "Wanchain Testnet",
    "chain": "WAN",
    "rpc": ["https://gwan-ssl.wandevs.org:46891/"],
    "faucets": [],
    "nativeCurrency": {"name": "Wancoin", "symbol": "WAN", "decimals": 18},
    "infoURL": "https://testnet.wanscan.org",
    "shortName": "twan",
    "chainId": 999,
    "networkId": 999
}, {
    "name": "GTON Mainnet",
    "chain": "GTON",
    "rpc": ["https://rpc.gton.network/"],
    "faucets": [],
    "nativeCurrency": {"name": "GCD", "symbol": "GCD", "decimals": 18},
    "infoURL": "https://gton.capital",
    "shortName": "gton",
    "chainId": 1000,
    "networkId": 1000,
    "explorers": [{"name": "GTON Network Explorer", "url": "https://explorer.gton.network", "standard": "EIP3091"}],
    "parent": {"type": "L2", "chain": "eip155-1"}
}, {
    "name": "Klaytn Testnet Baobab",
    "chain": "KLAY",
    "rpc": ["https://api.baobab.klaytn.net:8651"],
    "faucets": ["https://baobab.wallet.klaytn.com/access?next=faucet"],
    "nativeCurrency": {"name": "KLAY", "symbol": "KLAY", "decimals": 18},
    "infoURL": "https://www.klaytn.com/",
    "shortName": "Baobab",
    "chainId": 1001,
    "networkId": 1001
}, {
    "name": "Newton Testnet",
    "chain": "NEW",
    "rpc": ["https://rpc1.newchain.newtonproject.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Newton", "symbol": "NEW", "decimals": 18},
    "infoURL": "https://www.newtonproject.org/",
    "shortName": "tnew",
    "chainId": 1007,
    "networkId": 1007
}, {
    "name": "Eurus Mainnet",
    "chain": "EUN",
    "rpc": ["https://mainnet.eurus.network/"],
    "faucets": [],
    "nativeCurrency": {"name": "Eurus", "symbol": "EUN", "decimals": 18},
    "infoURL": "https://eurus.network",
    "shortName": "eun",
    "chainId": 1008,
    "networkId": 1008,
    "icon": "eurus",
    "explorers": [{
        "name": "eurusexplorer", "url": "https://explorer.eurus.network", "icon": "eurus", "standard": "none"
    }]
}, {
    "name": "Evrice Network",
    "chain": "EVC",
    "rpc": ["https://meta.evrice.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Evrice", "symbol": "EVC", "decimals": 18},
    "infoURL": "https://evrice.com",
    "shortName": "EVC",
    "chainId": 1010,
    "networkId": 1010,
    "slip44": 1020
}, {
    "name": "Newton",
    "chain": "NEW",
    "rpc": ["https://global.rpc.mainnet.newtonproject.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Newton", "symbol": "NEW", "decimals": 18},
    "infoURL": "https://www.newtonproject.org/",
    "shortName": "new",
    "chainId": 1012,
    "networkId": 1012
}, {
    "name": "Sakura",
    "chain": "Sakura",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Sakura", "symbol": "SKU", "decimals": 18},
    "infoURL": "https://clover.finance/sakura",
    "shortName": "sku",
    "chainId": 1022,
    "networkId": 1022
}, {
    "name": "Clover Testnet",
    "chain": "Clover",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Clover", "symbol": "CLV", "decimals": 18},
    "infoURL": "https://clover.finance",
    "shortName": "tclv",
    "chainId": 1023,
    "networkId": 1023
}, {
    "name": "CLV Parachain",
    "chain": "CLV",
    "rpc": ["https://api-para.clover.finance", "https://rpc-ivy.clover.finance", "https://rpc-ivy-2.clover.finance", "https://rpc-ivy-3.clover.finance"],
    "faucets": [],
    "nativeCurrency": {"name": "CLV", "symbol": "CLV", "decimals": 18},
    "infoURL": "https://clv.org",
    "shortName": "clv",
    "chainId": 1024,
    "networkId": 1024
}, {
    "name": "BitTorrent Chain Testnet",
    "chain": "BTTC",
    "rpc": ["https://testrpc.bittorrentchain.io/"],
    "faucets": [],
    "nativeCurrency": {"name": "BitTorrent", "symbol": "BTT", "decimals": 18},
    "infoURL": "https://bittorrentchain.io/",
    "shortName": "tbtt",
    "chainId": 1028,
    "networkId": 1028,
    "explorers": [{"name": "testbttcscan", "url": "https://testscan.bittorrentchain.io", "standard": "none"}]
}, {
    "name": "Conflux eSpace",
    "chain": "Conflux",
    "rpc": ["https://evm.confluxrpc.com"],
    "faucets": [],
    "nativeCurrency": {"name": "CFX", "symbol": "CFX", "decimals": 18},
    "infoURL": "https://confluxnetwork.org",
    "shortName": "cfx",
    "chainId": 1030,
    "networkId": 1030,
    "icon": "conflux",
    "explorers": [{"name": "Conflux Scan", "url": "https://evm.confluxscan.net", "standard": "none"}]
}, {
    "name": "WEMIX3.0 Testnet",
    "chain": "TWEMIX",
    "rpc": ["https://api.test.wemix.com", "wss://ws.test.wemi.com"],
    "faucets": ["https://wallet.test.wemix.com/faucet"],
    "nativeCurrency": {"name": "TestnetWEMIX", "symbol": "tWEMIX", "decimals": 18},
    "infoURL": "https://wemix.com",
    "shortName": "twemix",
    "chainId": 1112,
    "networkId": 1112,
    "explorers": [{
        "name": "WEMIX Testnet Microscope", "url": "https://microscope.test.wemix.com", "standard": "EIP3091"
    }]
}, {
    "name": "MathChain",
    "chain": "MATH",
    "rpc": ["https://mathchain-asia.maiziqianbao.net/rpc", "https://mathchain-us.maiziqianbao.net/rpc", "https://mathchain.maiziqianbao.net/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "MathChain", "symbol": "MATH", "decimals": 18},
    "infoURL": "https://mathchain.org",
    "shortName": "MATH",
    "chainId": 1139,
    "networkId": 1139
}, {
    "name": "MathChain Testnet",
    "chain": "MATH",
    "rpc": ["https://galois-hk.maiziqianbao.net/rpc"],
    "faucets": ["https://scan.boka.network/#/Galois/faucet"],
    "nativeCurrency": {"name": "MathChain", "symbol": "MATH", "decimals": 18},
    "infoURL": "https://mathchain.org",
    "shortName": "tMATH",
    "chainId": 1140,
    "networkId": 1140
}, {
    "name": "Iora Chain",
    "chain": "IORA",
    "icon": "iorachain",
    "rpc": ["https://dataseed.iorachain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Iora", "symbol": "IORA", "decimals": 18},
    "infoURL": "https://iorachain.com",
    "shortName": "iora",
    "chainId": 1197,
    "networkId": 1197,
    "explorers": [{"name": "ioraexplorer", "url": "https://explorer.iorachain.com", "standard": "EIP3091"}]
}, {
    "name": "Evanesco Testnet",
    "chain": "Evanesco Testnet",
    "rpc": ["https://seed5.evanesco.org:8547"],
    "faucets": [],
    "nativeCurrency": {"name": "AVIS", "symbol": "AVIS", "decimals": 18},
    "infoURL": "https://evanesco.org/",
    "shortName": "avis",
    "chainId": 1201,
    "networkId": 1201
}, {
    "name": "World Trade Technical Chain Mainnet",
    "chain": "WTT",
    "rpc": ["https://rpc.cadaut.com", "wss://rpc.cadaut.com/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "World Trade Token", "symbol": "WTT", "decimals": 18},
    "infoURL": "http://www.cadaut.com",
    "shortName": "wtt",
    "chainId": 1202,
    "networkId": 2048,
    "explorers": [{"name": "WTTScout", "url": "https://explorer.cadaut.com", "standard": "EIP3091"}]
}, {
    "name": "Popcateum Mainnet",
    "chain": "POPCATEUM",
    "rpc": ["https://dataseed.popcateum.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Popcat", "symbol": "POP", "decimals": 18},
    "infoURL": "https://popcateum.org",
    "shortName": "popcat",
    "chainId": 1213,
    "networkId": 1213,
    "explorers": [{"name": "popcateum explorer", "url": "https://explorer.popcateum.org", "standard": "none"}]
}, {
    "name": "EnterChain Mainnet",
    "chain": "ENTER",
    "rpc": ["https://tapi.entercoin.net"],
    "faucets": [],
    "nativeCurrency": {"name": "EnterCoin", "symbol": "ENTER", "decimals": 18},
    "infoURL": "https://entercoin.net",
    "shortName": "enter",
    "chainId": 1214,
    "networkId": 1214,
    "icon": "enter",
    "explorers": [{
        "name": "Enter Explorer - Expenter",
        "url": "https://explorer.entercoin.net",
        "icon": "enter",
        "standard": "EIP3091"
    }]
}, {
    "name": "Ultron Testnet",
    "chain": "Ultron",
    "icon": "ultron",
    "rpc": ["https://ultron-dev.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Ultron", "symbol": "ULX", "decimals": 18},
    "infoURL": "https://ultron.foundation",
    "shortName": "UltronTestnet",
    "chainId": 1230,
    "networkId": 1230,
    "explorers": [{
        "name": "Ultron Testnet Explorer", "url": "https://explorer.ultron-dev.io", "icon": "ultron", "standard": "none"
    }]
}, {
    "name": "Ultron Mainnet",
    "chain": "Ultron",
    "icon": "ultron",
    "rpc": ["https://ultron-rpc.net"],
    "faucets": [],
    "nativeCurrency": {"name": "Ultron", "symbol": "ULX", "decimals": 18},
    "infoURL": "https://ultron.foundation",
    "shortName": "UtronMainnet",
    "chainId": 1231,
    "networkId": 1231,
    "explorers": [{"name": "Ultron Explorer", "url": "https://ulxscan.com", "icon": "ultron", "standard": "none"}]
}, {
    "name": "OM Platform Mainnet",
    "chain": "omplatform",
    "rpc": ["https://rpc-cnx.omplatform.com"],
    "faucets": [],
    "nativeCurrency": {"name": "OMCOIN", "symbol": "OM", "decimals": 18},
    "infoURL": "https://omplatform.com/",
    "shortName": "om",
    "chainId": 1246,
    "networkId": 1246,
    "explorers": [{"name": "OMSCAN - Expenter", "url": "https://omscan.omplatform.com", "standard": "none"}]
}, {
    "name": "HALO Mainnet",
    "chain": "HALO",
    "rpc": ["https://nodes.halo.land"],
    "faucets": [],
    "nativeCurrency": {"name": "HALO", "symbol": "HO", "decimals": 18},
    "infoURL": "https://halo.land/#/",
    "shortName": "HO",
    "chainId": 1280,
    "networkId": 1280,
    "explorers": [{"name": "HALOexplorer", "url": "https://browser.halo.land", "standard": "none"}]
}, {
    "name": "Moonrock old",
    "chain": "MOON",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "Rocs", "symbol": "ROC", "decimals": 18},
    "infoURL": "",
    "shortName": "mrock-old",
    "chainId": 1286,
    "networkId": 1286,
    "status": "deprecated"
}, {
    "name": "Moonbase Alpha",
    "chain": "MOON",
    "rpc": ["https://rpc.api.moonbase.moonbeam.network", "wss://wss.api.moonbase.moonbeam.network", "https://rpc.testnet.moonbeam.network", "https://moonbase-alpha.public.blastapi.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Dev", "symbol": "DEV", "decimals": 18},
    "infoURL": "https://docs.moonbeam.network/networks/testnet/",
    "shortName": "mbase",
    "chainId": 1287,
    "networkId": 1287,
    "explorers": [{"name": "moonscan", "url": "https://moonbase.moonscan.io", "standard": "none"}]
}, {
    "name": "Moonrock",
    "chain": "MOON",
    "rpc": ["https://rpc.api.moonrock.moonbeam.network", "wss://wss.api.moonrock.moonbeam.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Rocs", "symbol": "ROC", "decimals": 18},
    "infoURL": "https://docs.moonbeam.network/learn/platform/networks/overview/",
    "shortName": "mrock",
    "chainId": 1288,
    "networkId": 1288
}, {
    "name": "Boba Network Bobabeam",
    "chain": "Bobabeam",
    "rpc": ["https://bobabeam.boba.network", "wss://wss.bobabeam.boba.network", "https://replica.bobabeam.boba.network", "wss://replica-wss.bobabeam.boba.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Boba Token", "symbol": "BOBA", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "Bobabeam",
    "chainId": 1294,
    "networkId": 1294,
    "explorers": [{
        "name": "Bobabeam block explorer", "url": "https://blockexplorer.bobabeam.boba.network", "standard": "none"
    }]
}, {
    "name": "Boba Network Bobabase Testnet",
    "chain": "Bobabase Testnet",
    "rpc": ["https://bobabase.boba.network", "wss://wss.bobabase.boba.network", "https://replica.bobabase.boba.network", "wss://replica-wss.bobabase.boba.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Boba Token", "symbol": "BOBA", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "Bobabase",
    "chainId": 1297,
    "networkId": 1297,
    "explorers": [{
        "name": "Bobabase block explorer", "url": "https://blockexplorer.bobabase.boba.network", "standard": "none"
    }]
}, {
    "name": "Aitd Mainnet",
    "chain": "AITD",
    "icon": "aitd",
    "rpc": ["https://walletrpc.aitd.io", "https://node.aitd.io"],
    "faucets": [],
    "nativeCurrency": {"name": "AITD Mainnet", "symbol": "AITD", "decimals": 18},
    "infoURL": "https://www.aitd.io/",
    "shortName": "aitd",
    "chainId": 1319,
    "networkId": 1319,
    "explorers": [{
        "name": "AITD Chain Explorer Mainnet", "url": "https://aitd-explorer-new.aitd.io", "standard": "EIP3091"
    }]
}, {
    "name": "Aitd Testnet",
    "chain": "AITD",
    "icon": "aitd",
    "rpc": ["http://http-testnet.aitd.io"],
    "faucets": ["https://aitd-faucet-pre.aitdcoin.com/"],
    "nativeCurrency": {"name": "AITD Testnet", "symbol": "AITD", "decimals": 18},
    "infoURL": "https://www.aitd.io/",
    "shortName": "aitdtestnet",
    "chainId": 1320,
    "networkId": 1320,
    "explorers": [{
        "name": "AITD Chain Explorer Testnet", "url": "https://block-explorer-testnet.aitd.io", "standard": "EIP3091"
    }]
}, {
    "name": "CENNZnet old",
    "chain": "CENNZnet",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "CPAY", "symbol": "CPAY", "decimals": 18},
    "infoURL": "https://cennz.net",
    "shortName": "cennz-old",
    "chainId": 1337,
    "networkId": 1337,
    "status": "deprecated"
}, {
    "name": "Sherpax Mainnet",
    "chain": "Sherpax Mainnet",
    "rpc": ["https://mainnet.sherpax.io/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "KSX", "symbol": "KSX", "decimals": 18},
    "infoURL": "https://sherpax.io/",
    "shortName": "Sherpax",
    "chainId": 1506,
    "networkId": 1506,
    "explorers": [{"name": "Sherpax Mainnet Explorer", "url": "https://evm.sherpax.io", "standard": "none"}]
}, {
    "name": "Sherpax Testnet",
    "chain": "Sherpax Testnet",
    "rpc": ["https://sherpax-testnet.chainx.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "KSX", "symbol": "KSX", "decimals": 18},
    "infoURL": "https://sherpax.io/",
    "shortName": "SherpaxTestnet",
    "chainId": 1507,
    "networkId": 1507,
    "explorers": [{"name": "Sherpax Testnet Explorer", "url": "https://evm-pre.sherpax.io", "standard": "none"}]
}, {
    "name": "Beagle Messaging Chain",
    "chain": "BMC",
    "rpc": ["https://beagle.chat/eth"],
    "faucets": ["https://faucet.beagle.chat/"],
    "nativeCurrency": {"name": "Beagle", "symbol": "BG", "decimals": 18},
    "infoURL": "https://beagle.chat/",
    "shortName": "beagle",
    "chainId": 1515,
    "networkId": 1515,
    "explorers": [{"name": "Beagle Messaging Chain Explorer", "url": "https://eth.beagle.chat", "standard": "EIP3091"}]
}, {
    "name": "Catecoin Chain Mainnet",
    "chain": "Catechain",
    "rpc": ["https://send.catechain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Catecoin", "symbol": "CATE", "decimals": 18},
    "infoURL": "https://catechain.com",
    "shortName": "cate",
    "chainId": 1618,
    "networkId": 1618
}, {
    "name": "Atheios",
    "chain": "ATH",
    "rpc": ["https://wallet.atheios.com:8797"],
    "faucets": [],
    "nativeCurrency": {"name": "Atheios Ether", "symbol": "ATH", "decimals": 18},
    "infoURL": "https://atheios.com",
    "shortName": "ath",
    "chainId": 1620,
    "networkId": 11235813,
    "slip44": 1620
}, {
    "name": "Btachain",
    "chain": "btachain",
    "rpc": ["https://dataseed1.btachain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Bitcoin Asset", "symbol": "BTA", "decimals": 18},
    "infoURL": "https://bitcoinasset.io/",
    "shortName": "bta",
    "chainId": 1657,
    "networkId": 1657
}, {
    "name": "LUDAN Mainnet",
    "chain": "LUDAN",
    "rpc": ["https://rpc.ludan.org/"],
    "faucets": [],
    "nativeCurrency": {"name": "LUDAN", "symbol": "LUDAN", "decimals": 18},
    "infoURL": "https://www.ludan.org/",
    "shortName": "LUDAN",
    "icon": "ludan",
    "chainId": 1688,
    "networkId": 1688
}, {
    "name": "Rabbit Analog Testnet Chain",
    "chain": "rAna",
    "icon": "rabbit",
    "rpc": ["https://rabbit.analog-rpc.com"],
    "faucets": ["https://analogfaucet.com"],
    "nativeCurrency": {"name": "Rabbit Analog Test Chain Native Token ", "symbol": "rAna", "decimals": 18},
    "infoURL": "https://rabbit.analogscan.com",
    "shortName": "rAna",
    "chainId": 1807,
    "networkId": 1807,
    "explorers": [{"name": "blockscout", "url": "https://rabbit.analogscan.com", "standard": "none"}]
}, {
    "name": "Cube Chain Mainnet",
    "chain": "Cube",
    "icon": "cube",
    "rpc": ["https://http-mainnet.cube.network", "wss://ws-mainnet.cube.network", "https://http-mainnet-sg.cube.network", "wss://ws-mainnet-sg.cube.network", "https://http-mainnet-us.cube.network", "wss://ws-mainnet-us.cube.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Cube Chain Native Token", "symbol": "CUBE", "decimals": 18},
    "infoURL": "https://www.cube.network",
    "shortName": "cube",
    "chainId": 1818,
    "networkId": 1818,
    "slip44": 1818,
    "explorers": [{"name": "cube-scan", "url": "https://cubescan.network", "standard": "EIP3091"}]
}, {
    "name": "Cube Chain Testnet",
    "chain": "Cube",
    "icon": "cube",
    "rpc": ["https://http-testnet.cube.network", "wss://ws-testnet.cube.network", "https://http-testnet-sg.cube.network", "wss://ws-testnet-sg.cube.network", "https://http-testnet-jp.cube.network", "wss://ws-testnet-jp.cube.network", "https://http-testnet-us.cube.network", "wss://ws-testnet-us.cube.network"],
    "faucets": ["https://faucet.cube.network"],
    "nativeCurrency": {"name": "Cube Chain Test Native Token", "symbol": "CUBET", "decimals": 18},
    "infoURL": "https://www.cube.network",
    "shortName": "cubet",
    "chainId": 1819,
    "networkId": 1819,
    "slip44": 1819,
    "explorers": [{"name": "cubetest-scan", "url": "https://testnet.cubescan.network", "standard": "EIP3091"}]
}, {
    "name": "Teslafunds",
    "chain": "TSF",
    "rpc": ["https://tsfapi.europool.me", "rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "Teslafunds Ether", "symbol": "TSF", "decimals": 18},
    "infoURL": "https://teslafunds.io",
    "shortName": "tsf",
    "chainId": 1856,
    "networkId": 1
}, {
    "name": "BON Network",
    "chain": "BON",
    "rpc": ["http://rpc.boyanet.org:8545", "ws://rpc.boyanet.org:8546"],
    "faucets": [],
    "nativeCurrency": {"name": "BOYACoin", "symbol": "BOY", "decimals": 18},
    "infoURL": "https://boyanet.org",
    "shortName": "boya",
    "chainId": 1898,
    "networkId": 1,
    "explorers": [{"name": "explorer", "url": "https://explorer.boyanet.org:4001", "standard": "EIP3091"}]
}, {
    "name": "Eurus Testnet",
    "chain": "EUN",
    "rpc": ["https://testnet.eurus.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Eurus", "symbol": "EUN", "decimals": 18},
    "infoURL": "https://eurus.network",
    "shortName": "euntest",
    "chainId": 1984,
    "networkId": 1984,
    "icon": "eurus",
    "explorers": [{
        "name": "testnetexplorer", "url": "https://testnetexplorer.eurus.network", "icon": "eurus", "standard": "none"
    }]
}, {
    "name": "EtherGem",
    "chain": "EGEM",
    "rpc": ["https://jsonrpc.egem.io/custom"],
    "faucets": [],
    "nativeCurrency": {"name": "EtherGem Ether", "symbol": "EGEM", "decimals": 18},
    "infoURL": "https://egem.io",
    "shortName": "egem",
    "chainId": 1987,
    "networkId": 1987,
    "slip44": 1987
}, {
    "name": "Milkomeda C1 Mainnet",
    "chain": "milkAda",
    "icon": "milkomeda",
    "rpc": ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com", "wss://rpc-mainnet-cardano-evm.c1.milkomeda.com"],
    "faucets": [],
    "nativeCurrency": {"name": "milkAda", "symbol": "mADA", "decimals": 18},
    "infoURL": "https://milkomeda.com",
    "shortName": "milkAda",
    "chainId": 2001,
    "networkId": 2001,
    "explorers": [{
        "name": "Blockscout", "url": "https://explorer-mainnet-cardano-evm.c1.milkomeda.com", "standard": "none"
    }]
}, {
    "name": "CloudWalk Testnet",
    "chain": "CloudWalk Testnet",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "CloudWalk Native Token", "symbol": "CWN", "decimals": 18},
    "infoURL": "https://cloudwalk.io",
    "shortName": "cloudwalk_testnet",
    "chainId": 2008,
    "networkId": 2008,
    "explorers": [{
        "name": "CloudWalk Testnet Explorer", "url": "https://explorer.testnet.cloudwalk.io", "standard": "none"
    }]
}, {
    "name": "CloudWalk Mainnet",
    "chain": "CloudWalk Mainnet",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "CloudWalk Native Token", "symbol": "CWN", "decimals": 18},
    "infoURL": "https://cloudwalk.io",
    "shortName": "cloudwalk_mainnet",
    "chainId": 2009,
    "networkId": 2009,
    "explorers": [{
        "name": "CloudWalk Mainnet Explorer", "url": "https://explorer.mainnet.cloudwalk.io", "standard": "none"
    }]
}, {
    "name": "Edgeware Mainnet",
    "chain": "EDG",
    "rpc": ["https://mainnet1.edgewa.re", "https://mainnet2.edgewa.re/evm", "https://mainnet3.edgewa.re/evm"],
    "faucets": [],
    "nativeCurrency": {"name": "Edge", "symbol": "EDG", "decimals": 18},
    "infoURL": "http://edgewa.re",
    "shortName": "edg",
    "chainId": 2021,
    "networkId": 2021
}, {
    "name": "Beresheet Testnet",
    "chain": "EDG",
    "rpc": ["https://beresheet1.edgewa.re"],
    "faucets": [],
    "nativeCurrency": {"name": "Testnet Edge", "symbol": "tEDG", "decimals": 18},
    "infoURL": "http://edgewa.re",
    "shortName": "edgt",
    "chainId": 2022,
    "networkId": 2022
}, {
    "name": "Taycan Testnet",
    "chain": "Taycan",
    "rpc": ["https://test-taycan.hupayx.io"],
    "faucets": ["https://ttaycan-faucet.hupayx.io/"],
    "nativeCurrency": {"name": "test-Shuffle", "symbol": "tSFL", "decimals": 18},
    "infoURL": "https://hupayx.io",
    "shortName": "taycan-testnet",
    "chainId": 2023,
    "networkId": 2023,
    "explorers": [{
        "name": "Taycan Explorer(Blockscout)", "url": "https://evmscan-test.hupayx.io", "standard": "none"
    }, {"name": "Taycan Cosmos Explorer", "url": "https://cosmoscan-test.hupayx.io", "standard": "none"}]
}, {
    "name": "Rangers Protocol Mainnet",
    "chain": "Rangers",
    "icon": "rangers",
    "rpc": ["https://mainnet.rangersprotocol.com/api/jsonrpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Rangers Protocol Gas", "symbol": "RPG", "decimals": 18},
    "infoURL": "https://rangersprotocol.com",
    "shortName": "rpg",
    "chainId": 2025,
    "networkId": 2025,
    "slip44": 1008,
    "explorers": [{"name": "rangersscan", "url": "https://scan.rangersprotocol.com", "standard": "none"}]
}, {
    "name": "Quokkacoin Mainnet",
    "chain": "Qkacoin",
    "rpc": ["https://rpc.qkacoin.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Qkacoin", "symbol": "QKA", "decimals": 18},
    "infoURL": "https://qkacoin.org",
    "shortName": "QKA",
    "chainId": 2077,
    "networkId": 2077,
    "explorers": [{"name": "blockscout", "url": "https://explorer.qkacoin.org", "standard": "EIP3091"}]
}, {
    "name": "Ecoball Mainnet",
    "chain": "ECO",
    "rpc": ["https://api.ecoball.org/ecoball"],
    "faucets": [],
    "nativeCurrency": {"name": "Ecoball Coin", "symbol": "ECO", "decimals": 18},
    "infoURL": "https://ecoball.org",
    "shortName": "eco",
    "chainId": 2100,
    "networkId": 2100,
    "explorers": [{"name": "Ecoball Explorer", "url": "https://scan.ecoball.org", "standard": "EIP3091"}]
}, {
    "name": "Ecoball Testnet Espuma",
    "chain": "ECO",
    "rpc": ["https://api.ecoball.org/espuma/"],
    "faucets": [],
    "nativeCurrency": {"name": "Espuma Coin", "symbol": "ECO", "decimals": 18},
    "infoURL": "https://ecoball.org",
    "shortName": "esp",
    "chainId": 2101,
    "networkId": 2101,
    "explorers": [{"name": "Ecoball Testnet Explorer", "url": "https://espuma-scan.ecoball.org", "standard": "EIP3091"}]
}, {
    "name": "Findora Mainnet",
    "chain": "Findora",
    "rpc": ["https://prod-mainnet.prod.findora.org:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "FRA", "symbol": "FRA", "decimals": 18},
    "infoURL": "https://findora.org/",
    "shortName": "fra",
    "chainId": 2152,
    "networkId": 2152,
    "explorers": [{"name": "findorascan", "url": "https://evm.findorascan.io", "standard": "EIP3091"}]
}, {
    "name": "Findora Testnet",
    "chain": "Testnet-anvil",
    "rpc": ["https://prod-testnet.prod.findora.org:8545/"],
    "faucets": [],
    "nativeCurrency": {"name": "FRA", "symbol": "FRA", "decimals": 18},
    "infoURL": "https://findora.org/",
    "shortName": "findora-testnet",
    "chainId": 2153,
    "networkId": 2153,
    "explorers": [{"name": "findorascan", "url": "https://testnet-anvil.evm.findorascan.io", "standard": "EIP3091"}]
}, {
    "name": "Bitcoin EVM",
    "chain": "Bitcoin EVM",
    "rpc": ["https://connect.bitcoinevm.com", ""],
    "faucets": [],
    "nativeCurrency": {"name": "Bitcoin", "symbol": "eBTC", "decimals": 18},
    "infoURL": "https://bitcoinevm.com",
    "shortName": "eBTC",
    "chainId": 2203,
    "networkId": 2203,
    "icon": "ebtc",
    "explorers": [{"name": "Explorer", "url": "https://explorer.bitcoinevm.com", "icon": "ebtc", "standard": "none"}]
}, {
    "name": "Evanesco Mainnet",
    "chain": "EVA",
    "rpc": ["https://seed4.evanesco.org:8546"],
    "faucets": [],
    "nativeCurrency": {"name": "EVA", "symbol": "EVA", "decimals": 18},
    "infoURL": "https://evanesco.org/",
    "shortName": "evanesco",
    "chainId": 2213,
    "networkId": 2213,
    "icon": "evanesco",
    "explorers": [{"name": "Evanesco Explorer", "url": "https://explorer.evanesco.org", "standard": "none"}]
}, {
    "name": "Kava EVM Testnet",
    "chain": "KAVA",
    "rpc": ["https://evm.testnet.kava.io", "wss://wevm.testnet.kava.io"],
    "faucets": ["https://faucet.kava.io"],
    "nativeCurrency": {"name": "TKava", "symbol": "TKAVA", "decimals": 18},
    "infoURL": "https://www.kava.io",
    "shortName": "tkava",
    "chainId": 2221,
    "networkId": 2221,
    "icon": "kava",
    "explorers": [{
        "name": "Kava Testnet Explorer",
        "url": "https://explorer.testnet.kava.io",
        "standard": "EIP3091",
        "icon": "kava"
    }]
}, {
    "name": "VChain Mainnet",
    "chain": "VChain",
    "rpc": ["https://bc.vcex.xyz"],
    "faucets": [],
    "nativeCurrency": {"name": "VNDT", "symbol": "VNDT", "decimals": 18},
    "infoURL": "https://bo.vcex.xyz/",
    "shortName": "VChain",
    "chainId": 2223,
    "networkId": 2223,
    "explorers": [{"name": "VChain Scan", "url": "https://scan.vcex.xyz", "standard": "EIP3091"}]
}, {
    "name": "Kortho Mainnet",
    "chain": "Kortho Chain",
    "rpc": ["https://www.kortho-chain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "KorthoChain", "symbol": "KTO", "decimals": 11},
    "infoURL": "https://www.kortho.io/",
    "shortName": "ktoc",
    "chainId": 2559,
    "networkId": 2559
}, {
    "name": "TechPay Mainnet",
    "chain": "TPC",
    "rpc": ["https://api.techpay.io/"],
    "faucets": [],
    "nativeCurrency": {"name": "TechPay", "symbol": "TPC", "decimals": 18},
    "infoURL": "https://techpay.io/",
    "shortName": "tpc",
    "chainId": 2569,
    "networkId": 2569,
    "icon": "techpay",
    "explorers": [{"name": "tpcscan", "url": "https://tpcscan.com", "icon": "techpay", "standard": "EIP3091"}]
}, {
    "name": "Redlight Chain Mainnet",
    "chain": "REDLC",
    "rpc": ["https://dataseed2.redlightscan.finance"],
    "faucets": [],
    "nativeCurrency": {"name": "Redlight Coin", "symbol": "REDLC", "decimals": 18},
    "infoURL": "https://redlight.finance/",
    "shortName": "REDLC",
    "chainId": 2611,
    "networkId": 2611,
    "explorers": [{"name": "REDLC Explorer", "url": "https://redlightscan.finance", "standard": "EIP3091"}]
}, {
    "name": "EZChain C-Chain Mainnet",
    "chain": "EZC",
    "rpc": ["https://api.ezchain.com/ext/bc/C/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "EZChain", "symbol": "EZC", "decimals": 18},
    "infoURL": "https://ezchain.com",
    "shortName": "EZChain",
    "chainId": 2612,
    "networkId": 2612,
    "icon": "ezchain",
    "explorers": [{"name": "ezchain", "url": "https://cchain-explorer.ezchain.com", "standard": "EIP3091"}]
}, {
    "name": "EZChain C-Chain Testnet",
    "chain": "EZC",
    "rpc": ["https://testnet-api.ezchain.com/ext/bc/C/rpc"],
    "faucets": ["https://testnet-faucet.ezchain.com"],
    "nativeCurrency": {"name": "EZChain", "symbol": "EZC", "decimals": 18},
    "infoURL": "https://ezchain.com",
    "shortName": "Fuji-EZChain",
    "chainId": 2613,
    "networkId": 2613,
    "icon": "ezchain",
    "explorers": [{"name": "ezchain", "url": "https://testnet-cchain-explorer.ezchain.com", "standard": "EIP3091"}]
}, {
    "name": "CENNZnet Rata",
    "chain": "CENNZnet",
    "rpc": ["https://rata.centrality.me/public"],
    "faucets": ["https://app-faucet.centrality.me"],
    "nativeCurrency": {"name": "CPAY", "symbol": "CPAY", "decimals": 18},
    "infoURL": "https://cennz.net",
    "shortName": "cennz-r",
    "chainId": 3000,
    "networkId": 3000,
    "icon": "cennz"
}, {
    "name": "CENNZnet Nikau",
    "chain": "CENNZnet",
    "rpc": ["https://nikau.centrality.me/public"],
    "faucets": ["https://app-faucet.centrality.me"],
    "nativeCurrency": {"name": "CPAY", "symbol": "CPAY", "decimals": 18},
    "infoURL": "https://cennz.net",
    "shortName": "cennz-n",
    "chainId": 3001,
    "networkId": 3001,
    "icon": "cennz",
    "explorers": [{"name": "UNcover", "url": "https://www.uncoverexplorer.com/?network=Nikau", "standard": "none"}]
}, {
    "name": "Orlando Chain",
    "chain": "ORL",
    "rpc": ["https://rpc-testnet.orlchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Orlando", "symbol": "ORL", "decimals": 18},
    "infoURL": "https://orlchain.com",
    "shortName": "ORL",
    "chainId": 3031,
    "networkId": 3031,
    "icon": "orl",
    "explorers": [{
        "name": "Orlando (ORL) Explorer", "url": "https://orlscan.com", "icon": "orl", "standard": "EIP3091"
    }]
}, {
    "name": "ZCore Testnet",
    "chain": "Beach",
    "icon": "zcore",
    "rpc": ["https://rpc-testnet.zcore.cash"],
    "faucets": ["https://faucet.zcore.cash"],
    "nativeCurrency": {"name": "ZCore", "symbol": "ZCR", "decimals": 18},
    "infoURL": "https://zcore.cash",
    "shortName": "zcrbeach",
    "chainId": 3331,
    "networkId": 3331
}, {
    "name": "Web3Q Testnet",
    "chain": "Web3Q",
    "rpc": ["https://testnet.web3q.io:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "Web3Q", "symbol": "W3Q", "decimals": 18},
    "infoURL": "https://testnet.web3q.io/home.w3q/",
    "shortName": "w3q-t",
    "chainId": 3333,
    "networkId": 3333,
    "explorers": [{"name": "w3q-testnet", "url": "https://explorer.testnet.web3q.io", "standard": "EIP3091"}]
}, {
    "name": "Web3Q Galileo",
    "chain": "Web3Q",
    "rpc": ["https://galileo.web3q.io:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "Web3Q", "symbol": "W3Q", "decimals": 18},
    "infoURL": "https://galileo.web3q.io/home.w3q/",
    "shortName": "w3q-g",
    "chainId": 3334,
    "networkId": 3334,
    "explorers": [{"name": "w3q-galileo", "url": "https://explorer.galileo.web3q.io", "standard": "EIP3091"}]
}, {
    "name": "Paribu Net Mainnet",
    "chain": "PRB",
    "rpc": ["https://rpc.paribu.network"],
    "faucets": [],
    "nativeCurrency": {"name": "PRB", "symbol": "PRB", "decimals": 18},
    "infoURL": "https://net.paribu.com",
    "shortName": "prb",
    "chainId": 3400,
    "networkId": 3400,
    "icon": "prb",
    "explorers": [{
        "name": "Paribu Net Explorer",
        "url": "https://explorer.paribu.network",
        "icon": "explorer",
        "standard": "EIP3091"
    }]
}, {
    "name": "Paribu Net Testnet",
    "chain": "PRB",
    "rpc": ["https://rpc.testnet.paribuscan.com"],
    "faucets": ["https://faucet.paribuscan.com"],
    "nativeCurrency": {"name": "PRB", "symbol": "PRB", "decimals": 18},
    "infoURL": "https://net.paribu.com",
    "shortName": "prbtestnet",
    "chainId": 3500,
    "networkId": 3500,
    "icon": "prb",
    "explorers": [{
        "name": "Paribu Net Testnet Explorer",
        "url": "https://testnet.paribuscan.com",
        "icon": "explorer",
        "standard": "EIP3091"
    }]
}, {
    "name": "JFIN Chain",
    "chain": "JFIN",
    "rpc": ["https://rpc.jfinchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "JFIN Coin", "symbol": "jfin", "decimals": 18},
    "infoURL": "https://jfinchain.com",
    "shortName": "jfin",
    "chainId": 3501,
    "networkId": 3501,
    "explorers": [{"name": "JFIN Chain Explorer", "url": "https://exp.jfinchain.com", "standard": "EIP3091"}]
}, {
    "name": "Bittex Mainnet",
    "chain": "BTX",
    "rpc": ["https://rpc1.bittexscan.info", "https://rpc2.bittexscan.info"],
    "faucets": [],
    "nativeCurrency": {"name": "Bittex", "symbol": "BTX", "decimals": 18},
    "infoURL": "https://bittexscan.com",
    "shortName": "btx",
    "chainId": 3690,
    "networkId": 3690,
    "icon": "ethereum",
    "explorers": [{"name": "bittexscan", "url": "https://bittexscan.com", "icon": "etherscan", "standard": "EIP3091"}]
}, {
    "name": "Crossbell",
    "chain": "Crossbell",
    "rpc": ["https://rpc.crossbell.io"],
    "faucets": ["https://faucet.crossbell.io"],
    "nativeCurrency": {"name": "Crossbell Token", "symbol": "CSB", "decimals": 18},
    "infoURL": "https://crossbell.io",
    "shortName": "csb",
    "chainId": 3737,
    "networkId": 3737,
    "icon": "crossbell",
    "explorers": [{"name": "Crossbell Explorer", "url": "https://scan.crossbell.io", "standard": "EIP3091"}]
}, {
    "name": "DYNO Mainnet",
    "chain": "DYNO",
    "rpc": ["https://api.dynoprotocol.com"],
    "faucets": ["https://faucet.dynoscan.io"],
    "nativeCurrency": {"name": "DYNO Token", "symbol": "DYNO", "decimals": 18},
    "infoURL": "https://dynoprotocol.com",
    "shortName": "dyno",
    "chainId": 3966,
    "networkId": 3966,
    "explorers": [{"name": "DYNO Explorer", "url": "https://dynoscan.io", "standard": "EIP3091"}]
}, {
    "name": "DYNO Testnet",
    "chain": "DYNO",
    "rpc": ["https://tapi.dynoprotocol.com"],
    "faucets": ["https://faucet.dynoscan.io"],
    "nativeCurrency": {"name": "DYNO Token", "symbol": "tDYNO", "decimals": 18},
    "infoURL": "https://dynoprotocol.com",
    "shortName": "tdyno",
    "chainId": 3967,
    "networkId": 3967,
    "explorers": [{"name": "DYNO Explorer", "url": "https://testnet.dynoscan.io", "standard": "EIP3091"}]
}, {
    "name": "YuanChain Mainnet",
    "chain": "YCC",
    "rpc": ["https://mainnet.yuan.org/eth"],
    "faucets": [],
    "nativeCurrency": {"name": "YCC", "symbol": "YCC", "decimals": 18},
    "infoURL": "https://www.yuan.org",
    "shortName": "ycc",
    "chainId": 3999,
    "networkId": 3999,
    "icon": "ycc",
    "explorers": [{"name": "YuanChain Explorer", "url": "https://mainnet.yuan.org", "standard": "none"}]
}, {
    "name": "Fantom Testnet",
    "chain": "FTM",
    "rpc": ["https://rpc.testnet.fantom.network", "https://rpc.ankr.com/fantom_testnet", "https://fantom-testnet.public.blastapi.io"],
    "faucets": ["https://faucet.fantom.network"],
    "nativeCurrency": {"name": "Fantom", "symbol": "FTM", "decimals": 18},
    "infoURL": "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet",
    "shortName": "tftm",
    "chainId": 4002,
    "networkId": 4002,
    "icon": "fantom",
    "explorers": [{"name": "ftmscan", "url": "https://testnet.ftmscan.com", "icon": "ftmscan", "standard": "EIP3091"}]
}, {
    "name": "Boba Network Bobaopera Testnet",
    "chain": "Bobaopera Testnet",
    "rpc": ["https://testnet.bobaopera.boba.network", "wss://wss.testnet.bobaopera.boba.network", "https://replica.testnet.bobaopera.boba.network", "wss://replica-wss.testnet.bobaopera.boba.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Boba Token", "symbol": "BOBA", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "BobaoperaTestnet",
    "chainId": 4051,
    "networkId": 4051,
    "explorers": [{
        "name": "Bobaopera Testnet block explorer",
        "url": "https://blockexplorer.testnet.bobaopera.boba.network",
        "standard": "none"
    }]
}, {
    "name": "AIOZ Network Testnet",
    "chain": "AIOZ",
    "icon": "aioz",
    "rpc": ["https://eth-ds.testnet.aioz.network"],
    "faucets": [],
    "nativeCurrency": {"name": "testAIOZ", "symbol": "AIOZ", "decimals": 18},
    "infoURL": "https://aioz.network",
    "shortName": "aioz-testnet",
    "chainId": 4102,
    "networkId": 4102,
    "slip44": 60,
    "explorers": [{
        "name": "AIOZ Network Testnet Explorer", "url": "https://testnet.explorer.aioz.network", "standard": "EIP3091"
    }]
}, {
    "name": "PHI Network V1",
    "chain": "PHI V1",
    "rpc": ["https://rpc1.phi.network", "https://rpc2.phi.network"],
    "faucets": [],
    "nativeCurrency": {"name": "PHI", "symbol": "Φ", "decimals": 18},
    "infoURL": "https://phi.network",
    "shortName": "PHIv1",
    "chainId": 4181,
    "networkId": 4181,
    "icon": "phi",
    "explorers": [{"name": "PHI Explorer", "url": "https://explorer.phi.network", "icon": "phi", "standard": "none"}]
}, {
    "name": "Boba Network Bobafuji Testnet",
    "chain": "Bobafuji Testnet",
    "rpc": ["https://testnet.avax.boba.network", "wss://wss.testnet.avax.boba.network", "https://replica.testnet.avax.boba.network", "wss://replica-wss.testnet.avax.boba.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Boba Token", "symbol": "BOBA", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "BobafujiTestnet",
    "chainId": 4328,
    "networkId": 4328,
    "explorers": [{
        "name": "Bobafuji Testnet block explorer",
        "url": "https://blockexplorer.testnet.avax.boba.network",
        "standard": "none"
    }]
}, {
    "name": "IoTeX Network Testnet",
    "chain": "iotex.io",
    "rpc": ["https://babel-api.testnet.iotex.io"],
    "faucets": ["https://faucet.iotex.io/"],
    "nativeCurrency": {"name": "IoTeX", "symbol": "IOTX", "decimals": 18},
    "infoURL": "https://iotex.io",
    "shortName": "iotex-testnet",
    "chainId": 4690,
    "networkId": 4690,
    "explorers": [{"name": "testnet iotexscan", "url": "https://testnet.iotexscan.io", "standard": "EIP3091"}]
}, {
    "name": "Venidium Testnet",
    "chain": "XVM",
    "rpc": ["https://rpc-evm-testnet.venidium.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Venidium", "symbol": "XVM", "decimals": 18},
    "infoURL": "https://venidium.io",
    "shortName": "txvm",
    "chainId": 4918,
    "networkId": 4918,
    "explorers": [{
        "name": "Venidium EVM Testnet Explorer",
        "url": "https://evm-testnet.venidiumexplorer.com",
        "standard": "EIP3091"
    }]
}, {
    "name": "Venidium Mainnet",
    "chain": "XVM",
    "icon": "venidium",
    "rpc": ["https://rpc.venidium.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Venidium", "symbol": "XVM", "decimals": 18},
    "infoURL": "https://venidium.io",
    "shortName": "xvm",
    "chainId": 4919,
    "networkId": 4919,
    "explorers": [{"name": "Venidium Explorer", "url": "https://evm.venidiumexplorer.com", "standard": "EIP3091"}]
}, {
    "name": "TLChain Network Mainnet",
    "chain": "TLC",
    "icon": "tlc",
    "rpc": ["https://mainnet-rpc.tlxscan.com/"],
    "faucets": [],
    "nativeCurrency": {"name": "TLChain Network", "symbol": "TLC", "decimals": 18},
    "infoURL": "https://tlchain.network/",
    "shortName": "tlc",
    "chainId": 5177,
    "networkId": 5177,
    "explorers": [{"name": "TLChain Explorer", "url": "https://explorer.tlchain.network", "standard": "none"}]
}, {
    "name": "EraSwap Mainnet",
    "chain": "ESN",
    "icon": "eraswap",
    "rpc": ["https://mainnet.eraswap.network", "https://rpc-mumbai.mainnet.eraswap.network"],
    "faucets": [],
    "nativeCurrency": {"name": "EraSwap", "symbol": "ES", "decimals": 18},
    "infoURL": "https://eraswap.info/",
    "shortName": "es",
    "chainId": 5197,
    "networkId": 5197
}, {
    "name": "Humanode Mainnet",
    "chain": "HMND",
    "rpc": [],
    "faucets": [],
    "nativeCurrency": {"name": "HMND", "symbol": "HMND", "decimals": 18},
    "infoURL": "https://humanode.io",
    "shortName": "hmnd",
    "chainId": 5234,
    "networkId": 5234,
    "explorers": []
}, {
    "name": "Uzmi Network Mainnet",
    "chain": "UZMI",
    "rpc": ["https://network.uzmigames.com.br"],
    "faucets": [],
    "nativeCurrency": {"name": "UZMI", "symbol": "UZMI", "decimals": 18},
    "infoURL": "https://uzmigames.com.br/",
    "shortName": "UZMI",
    "chainId": 5315,
    "networkId": 5315
}, {
    "name": "Nahmii Testnet",
    "chain": "Nahmii",
    "rpc": ["https://l2.testnet.nahmii.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://nahmii.io",
    "shortName": "NahmiiTestnet",
    "chainId": 5553,
    "networkId": 5553,
    "icon": "nahmii",
    "explorers": [{
        "name": "blockscout", "url": "https://explorer.testnet.nahmii.io", "icon": "nahmii", "standard": "EIP3091"
    }],
    "parent": {"type": "L2", "chain": "eip155-3", "bridges": [{"url": "https://bridge.nahmii.io"}]}
}, {
    "name": "Syscoin Tanenbaum Testnet",
    "chain": "SYS",
    "rpc": ["https://rpc.tanenbaum.io", "wss://rpc.tanenbaum.io/wss"],
    "faucets": ["https://faucet.tanenbaum.io"],
    "nativeCurrency": {"name": "Testnet Syscoin", "symbol": "tSYS", "decimals": 18},
    "infoURL": "https://syscoin.org",
    "shortName": "tsys",
    "chainId": 5700,
    "networkId": 5700,
    "explorers": [{"name": "Syscoin Testnet Block Explorer", "url": "https://tanenbaum.io", "standard": "EIP3091"}]
}, {
    "name": "Digest Swarm Chain",
    "chain": "DSC",
    "icon": "swarmchain",
    "rpc": ["https://rpc.digestgroup.ltd"],
    "faucets": [],
    "nativeCurrency": {"name": "DigestCoin", "symbol": "DGCC", "decimals": 18},
    "infoURL": "https://digestgroup.ltd",
    "shortName": "dgcc",
    "chainId": 5777,
    "networkId": 5777,
    "explorers": [{"name": "swarmexplorer", "url": "https://explorer.digestgroup.ltd", "standard": "EIP3091"}]
}, {
    "name": "Ontology Testnet",
    "chain": "Ontology",
    "rpc": ["http://polaris1.ont.io:20339", "http://polaris2.ont.io:20339", "http://polaris3.ont.io:20339", "http://polaris4.ont.io:20339", "https://polaris1.ont.io:10339", "https://polaris2.ont.io:10339", "https://polaris3.ont.io:10339", "https://polaris4.ont.io:10339"],
    "faucets": ["https://developer.ont.io/"],
    "nativeCurrency": {"name": "ONG", "symbol": "ONG", "decimals": 18},
    "infoURL": "https://ont.io/",
    "shortName": "OntologyTestnet",
    "chainId": 5851,
    "networkId": 5851,
    "explorers": [{"name": "explorer", "url": "https://explorer.ont.io/testnet", "standard": "EIP3091"}]
}, {
    "name": "Wegochain Rubidium Mainnet",
    "chain": "RBD",
    "rpc": ["https://proxy.wegochain.io", "http://wallet.wegochain.io:7764"],
    "faucets": [],
    "nativeCurrency": {"name": "Rubid", "symbol": "RBD", "decimals": 18},
    "infoURL": "https://www.wegochain.io",
    "shortName": "rbd",
    "chainId": 5869,
    "networkId": 5869,
    "explorers": [{"name": "wegoscan2", "url": "https://scan2.wegochain.io", "standard": "EIP3091"}]
}, {
    "name": "Pixie Chain Mainnet",
    "chain": "PixieChain",
    "rpc": ["https://http-mainnet.chain.pixie.xyz", "wss://ws-mainnet.chain.pixie.xyz"],
    "faucets": [],
    "nativeCurrency": {"name": "Pixie Chain Native Token", "symbol": "PIX", "decimals": 18},
    "infoURL": "https://chain.pixie.xyz",
    "shortName": "pixie-chain",
    "chainId": 6626,
    "networkId": 6626,
    "explorers": [{"name": "blockscout", "url": "https://scan.chain.pixie.xyz", "standard": "none"}]
}, {
    "name": "Tomb Chain Mainnet",
    "chain": "Tomb Chain",
    "rpc": ["https://rpc.tombchain.com/"],
    "faucets": [],
    "nativeCurrency": {"name": "Tomb", "symbol": "TOMB", "decimals": 18},
    "infoURL": "https://tombchain.com/",
    "shortName": "tombchain",
    "chainId": 6969,
    "networkId": 6969,
    "explorers": [{"name": "tombscout", "url": "https://tombscout.com", "standard": "none"}],
    "parent": {"type": "L2", "chain": "eip155-250", "bridges": [{"url": "https://beta-bridge.lif3.com/"}]}
}, {
    "name": "Ella the heart",
    "chain": "ella",
    "icon": "ella",
    "rpc": ["https://rpc.ella.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Ella", "symbol": "ELLA", "decimals": 18},
    "infoURL": "https://ella.network",
    "shortName": "ELLA",
    "chainId": 7027,
    "networkId": 7027,
    "explorers": [{"name": "Ella", "url": "https://ella.network", "standard": "EIP3091"}]
}, {
    "name": "Shyft Mainnet",
    "chain": "SHYFT",
    "icon": "shyft",
    "rpc": ["https://rpc.shyft.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Shyft", "symbol": "SHYFT", "decimals": 18},
    "infoURL": "https://shyft.network",
    "shortName": "shyft",
    "chainId": 7341,
    "networkId": 7341,
    "slip44": 2147490989,
    "explorers": [{"name": "Shyft BX", "url": "https://bx.shyft.network", "standard": "EIP3091"}]
}, {
    "name": "Canto",
    "chain": "Canto",
    "rpc": ["https://canto.evm.chandrastation.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Canto", "symbol": "CANTO", "decimals": 18},
    "infoURL": "https://canto.io",
    "shortName": "canto",
    "chainId": 7700,
    "networkId": 7700,
    "explorers": [{
        "name": "Canto EVM Explorer (Blockscout)", "url": "https://evm.explorer.canto.io", "standard": "none"
    }, {"name": "Canto Cosmos Explorer (BigDipper)", "url": "https://cosmos.explorer.canto.io", "standard": "none"}]
}, {
    "name": "Rise of the Warbots Testnet",
    "chain": "nmactest",
    "rpc": ["https://testnet1.riseofthewarbots.com", "https://testnet2.riseofthewarbots.com", "https://testnet3.riseofthewarbots.com", "https://testnet4.riseofthewarbots.com", "https://testnet5.riseofthewarbots.com", "https://testnet1.rotw.games", "https://testnet2.rotw.games", "https://testnet3.rotw.games", "https://testnet4.rotw.games", "https://testnet5.rotw.games"],
    "faucets": [],
    "nativeCurrency": {"name": "Nano Machines", "symbol": "NMAC", "decimals": 18},
    "infoURL": "https://riseofthewarbots.com/",
    "shortName": "RiseOfTheWarbotsTestnet",
    "chainId": 7777,
    "networkId": 7777,
    "explorers": [{
        "name": "avascan",
        "url": "https://testnet.avascan.info/blockchain/2mZ9doojfwHzXN3VXDQELKnKyZYxv7833U8Yq5eTfFx3hxJtiy",
        "standard": "none"
    }]
}, {
    "name": "Hazlor Testnet",
    "chain": "SCAS",
    "rpc": ["https://hatlas.rpc.hazlor.com:8545", "wss://hatlas.rpc.hazlor.com:8546"],
    "faucets": ["https://faucet.hazlor.com"],
    "nativeCurrency": {"name": "Hazlor Test Coin", "symbol": "TSCAS", "decimals": 18},
    "infoURL": "https://hazlor.com",
    "shortName": "tscas",
    "chainId": 7878,
    "networkId": 7878,
    "explorers": [{"name": "Hazlor Testnet Explorer", "url": "https://explorer.hazlor.com", "standard": "none"}]
}, {
    "name": "Teleport",
    "chain": "Teleport",
    "rpc": ["https://evm-rpc.teleport.network", "https://dataseed.testnet.teleport.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Tele", "symbol": "TELE", "decimals": 18},
    "infoURL": "https://teleport.network",
    "shortName": "teleport",
    "chainId": 8000,
    "networkId": 8000,
    "icon": "teleport",
    "explorers": [{
        "name": "Teleport EVM Explorer (Blockscout)",
        "url": "https://evm-explorer.teleport.network",
        "standard": "none",
        "icon": "teleport"
    }, {
        "name": "Teleport Cosmos Explorer (Big Dipper)",
        "url": "https://explorer.teleport.network",
        "standard": "none",
        "icon": "teleport"
    }]
}, {
    "name": "Teleport Testnet",
    "chain": "Teleport",
    "rpc": ["https://evm-rpc.testnet.teleport.network"],
    "faucets": ["https://chain-docs.teleport.network/testnet/faucet.html"],
    "nativeCurrency": {"name": "Tele", "symbol": "TELE", "decimals": 18},
    "infoURL": "https://teleport.network",
    "shortName": "teleport-testnet",
    "chainId": 8001,
    "networkId": 8001,
    "icon": "teleport",
    "explorers": [{
        "name": "Teleport EVM Explorer (Blockscout)",
        "url": "https://evm-explorer.testnet.teleport.network",
        "standard": "none",
        "icon": "teleport"
    }, {
        "name": "Teleport Cosmos Explorer (Big Dipper)",
        "url": "https://explorer.testnet.teleport.network",
        "standard": "none",
        "icon": "teleport"
    }]
}, {
    "name": "MDGL Testnet",
    "chain": "MDGL",
    "rpc": ["https://testnet.mdgl.io"],
    "faucets": [],
    "nativeCurrency": {"name": "MDGL Token", "symbol": "MDGLT", "decimals": 18},
    "infoURL": "https://mdgl.io",
    "shortName": "mdgl",
    "chainId": 8029,
    "networkId": 8029
}, {
    "name": "Shardeum Liberty",
    "chain": "Shardeum",
    "rpc": ["https://liberty10.shardeum.org/"],
    "faucets": ["https://faucet.liberty10.shardeum.org"],
    "nativeCurrency": {"name": "Shardeum SHM", "symbol": "SHM", "decimals": 18},
    "infoURL": "https://docs.shardeum.org/",
    "shortName": "ShardeumSHM",
    "chainId": 8080,
    "networkId": 8080,
    "explorers": [{"name": "Sharedum Scan", "url": "https://explorer.liberty10.shardeum.org", "standard": "EIP3091"}],
    "redFlags": ["reusedChainId"]
}, {
    "name": "KorthoTest",
    "chain": "Kortho",
    "rpc": ["https://www.krotho-test.net"],
    "faucets": [],
    "nativeCurrency": {"name": "Kortho Test", "symbol": "KTO", "decimals": 11},
    "infoURL": "https://www.kortho.io/",
    "shortName": "Kortho",
    "chainId": 8285,
    "networkId": 8285
}, {
    "name": "Toki Network",
    "chain": "TOKI",
    "rpc": ["https://mainnet.buildwithtoki.com/v0/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Toki", "symbol": "TOKI", "decimals": 18},
    "infoURL": "https://www.buildwithtoki.com",
    "shortName": "toki",
    "chainId": 8654,
    "networkId": 8654,
    "icon": "toki",
    "explorers": []
}, {
    "name": "Toki Testnet",
    "chain": "TOKI",
    "rpc": ["https://testnet.buildwithtoki.com/v0/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Toki", "symbol": "TOKI", "decimals": 18},
    "infoURL": "https://www.buildwithtoki.com",
    "shortName": "toki-testnet",
    "chainId": 8655,
    "networkId": 8655,
    "icon": "toki",
    "explorers": []
}, {
    "name": "TOOL Global Mainnet",
    "chain": "OLO",
    "rpc": ["https://mainnet-web3.wolot.io"],
    "faucets": [],
    "nativeCurrency": {"name": "TOOL Global", "symbol": "OLO", "decimals": 18},
    "infoURL": "https://ibdt.io",
    "shortName": "olo",
    "chainId": 8723,
    "networkId": 8723,
    "slip44": 479,
    "explorers": [{"name": "OLO Block Explorer", "url": "https://www.olo.network", "standard": "EIP3091"}]
}, {
    "name": "TOOL Global Testnet",
    "chain": "OLO",
    "rpc": ["https://testnet-web3.wolot.io"],
    "faucets": ["https://testnet-explorer.wolot.io"],
    "nativeCurrency": {"name": "TOOL Global", "symbol": "OLO", "decimals": 18},
    "infoURL": "https://testnet-explorer.wolot.io",
    "shortName": "tolo",
    "chainId": 8724,
    "networkId": 8724,
    "slip44": 479
}, {
    "name": "Ambros Chain Testnet",
    "chain": "ambroschain",
    "rpc": ["https://api.testnet.ambros.network"],
    "faucets": [],
    "nativeCurrency": {"name": "AMBROS", "symbol": "AMBROS", "decimals": 18},
    "infoURL": "https://test.ambros.network",
    "shortName": "ambrostestnet",
    "chainId": 8888,
    "networkId": 8888,
    "explorers": [{"name": "Ambros Chain Explorer", "url": "https://testnet.ambrosscan.com", "standard": "none"}]
}, {
    "name": "Mammoth Mainnet",
    "title": "Mammoth Chain",
    "chain": "MMT",
    "rpc": ["https://dataseed.mmtscan.io", "https://dataseed1.mmtscan.io", "https://dataseed2.mmtscan.io"],
    "faucets": ["https://faucet.mmtscan.io/"],
    "nativeCurrency": {"name": "Mammoth Token", "symbol": "MMT", "decimals": 18},
    "infoURL": "https://mmtchain.io/",
    "shortName": "mmt",
    "chainId": 8898,
    "networkId": 8898,
    "icon": "mmt",
    "explorers": [{"name": "mmtscan", "url": "https://mmtscan.io", "standard": "EIP3091", "icon": "mmt"}]
}, {
    "name": "bloxberg",
    "chain": "bloxberg",
    "rpc": ["https://core.bloxberg.org"],
    "faucets": ["https://faucet.bloxberg.org/"],
    "nativeCurrency": {"name": "BERG", "symbol": "U+25B3", "decimals": 18},
    "infoURL": "https://bloxberg.org",
    "shortName": "berg",
    "chainId": 8995,
    "networkId": 8995
}, {
    "name": "Evmos Testnet",
    "chain": "Evmos",
    "rpc": ["https://eth.bd.evmos.dev:8545"],
    "faucets": ["https://faucet.evmos.dev"],
    "nativeCurrency": {"name": "test-Evmos", "symbol": "tEVMOS", "decimals": 18},
    "infoURL": "https://evmos.org",
    "shortName": "evmos-testnet",
    "chainId": 9000,
    "networkId": 9000,
    "icon": "evmos",
    "explorers": [{
        "name": "Evmos EVM Explorer", "url": "https://evm.evmos.dev", "standard": "EIP3091", "icon": "evmos"
    }, {"name": "Evmos Cosmos Explorer", "url": "https://explorer.evmos.dev", "standard": "none", "icon": "evmos"}]
}, {
    "name": "BerylBit Mainnet",
    "chain": "BRB",
    "rpc": ["https://mainnet.berylbit.io"],
    "faucets": ["https://t.me/BerylBit"],
    "nativeCurrency": {"name": "BerylBit Chain Native Token", "symbol": "BRB", "decimals": 18},
    "infoURL": "https://www.beryl-bit.com",
    "shortName": "brb",
    "chainId": 9012,
    "networkId": 9012,
    "icon": "berylbit",
    "explorers": [{"name": "berylbit-explorer", "url": "https://explorer.berylbit.io", "standard": "EIP3091"}]
}, {
    "name": "Genesis Coin",
    "chain": "Genesis",
    "rpc": ["https://genesis-gn.com", "wss://genesis-gn.com", "rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "GN Coin", "symbol": "GNC", "decimals": 18},
    "infoURL": "https://genesis-gn.com",
    "shortName": "GENEC",
    "chainId": 9100,
    "networkId": 9100
}, {
    "name": "Rangers Protocol Testnet Robin",
    "chain": "Rangers",
    "icon": "rangers",
    "rpc": ["https://robin.rangersprotocol.com/api/jsonrpc"],
    "faucets": ["https://robin-faucet.rangersprotocol.com"],
    "nativeCurrency": {"name": "Rangers Protocol Gas", "symbol": "tRPG", "decimals": 18},
    "infoURL": "https://rangersprotocol.com",
    "shortName": "trpg",
    "chainId": 9527,
    "networkId": 9527,
    "explorers": [{
        "name": "rangersscan-robin", "url": "https://robin-rangersscan.rangersprotocol.com", "standard": "none"
    }]
}, {
    "name": "Boba Network BNB Testnet",
    "chain": "Boba BNB Testnet",
    "rpc": ["https://testnet.bnb.boba.network", "wss://wss.testnet.bnb.boba.network", "https://replica.testnet.bnb.boba.network", "wss://replica-wss.testnet.bnb.boba.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Boba Token", "symbol": "BOBA", "decimals": 18},
    "infoURL": "https://boba.network",
    "shortName": "BobaBNBTestnet",
    "chainId": 9728,
    "networkId": 9728,
    "explorers": [{
        "name": "Boba BNB Testnet block explorer",
        "url": "https://blockexplorer.testnet.bnb.boba.network",
        "standard": "none"
    }]
}, {
    "name": "myOwn Testnet",
    "chain": "myOwn",
    "rpc": ["https://geth.dev.bccloud.net"],
    "faucets": [],
    "nativeCurrency": {"name": "MYN", "symbol": "MYN", "decimals": 18},
    "infoURL": "https://docs.bccloud.net/",
    "shortName": "myn",
    "chainId": 9999,
    "networkId": 9999
}, {
    "name": "Smart Bitcoin Cash Testnet",
    "chain": "smartBCHTest",
    "rpc": ["https://rpc-testnet.smartbch.org", "https://smartbch.devops.cash/testnet"],
    "faucets": [],
    "nativeCurrency": {"name": "Bitcoin Cash Test Token", "symbol": "BCHT", "decimals": 18},
    "infoURL": "http://smartbch.org/",
    "shortName": "smartbchtest",
    "chainId": 10001,
    "networkId": 10001
}, {
    "name": "Gon Chain",
    "chain": "GonChain",
    "icon": "gonchain",
    "rpc": ["https://node1.testnet.gaiaopen.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Gon Token", "symbol": "GT", "decimals": 18},
    "infoURL": "",
    "shortName": "gon",
    "chainId": 10024,
    "networkId": 10024,
    "explorers": [{"name": "Gon Explorer", "url": "https://gonscan.com", "standard": "none"}]
}, {
    "name": "SJATSH",
    "chain": "ETH",
    "rpc": ["http://geth.free.idcfengye.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://sjis.me",
    "shortName": "SJ",
    "chainId": 10086,
    "networkId": 10086
}, {
    "name": "Blockchain Genesis Mainnet",
    "chain": "GEN",
    "rpc": ["https://eu.mainnet.xixoio.com", "https://us.mainnet.xixoio.com", "https://asia.mainnet.xixoio.com"],
    "faucets": [],
    "nativeCurrency": {"name": "GEN", "symbol": "GEN", "decimals": 18},
    "infoURL": "https://www.xixoio.com/",
    "shortName": "GEN",
    "chainId": 10101,
    "networkId": 10101
}, {
    "name": "CryptoCoinPay",
    "chain": "CCP",
    "rpc": ["http://node106.cryptocoinpay.info:8545", "ws://node106.cryptocoinpay.info:8546"],
    "faucets": [],
    "icon": "ccp",
    "nativeCurrency": {"name": "CryptoCoinPay", "symbol": "CCP", "decimals": 18},
    "infoURL": "https://www.cryptocoinpay.co",
    "shortName": "CCP",
    "chainId": 10823,
    "networkId": 10823,
    "explorers": [{"name": "CCP Explorer", "url": "https://cryptocoinpay.info", "standard": "EIP3091"}]
}, {
    "name": "Quadrans Blockchain",
    "chain": "QDC",
    "icon": "quadrans",
    "rpc": ["https://rpc.quadrans.io", "https://rpcna.quadrans.io", "https://rpceu.quadrans.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Quadrans Coin", "symbol": "QDC", "decimals": 18},
    "infoURL": "https://quadrans.io",
    "shortName": "quadrans",
    "chainId": 10946,
    "networkId": 10946,
    "explorers": [{
        "name": "explorer", "url": "https://explorer.quadrans.io", "icon": "quadrans", "standard": "EIP3091"
    }]
}, {
    "name": "Quadrans Blockchain Testnet",
    "chain": "tQDC",
    "icon": "quadrans",
    "rpc": ["https://rpctest.quadrans.io", "https://rpctest2.quadrans.io"],
    "faucets": ["https://faucetpage.quadrans.io"],
    "nativeCurrency": {"name": "Quadrans Testnet Coin", "symbol": "tQDC", "decimals": 18},
    "infoURL": "https://quadrans.io",
    "shortName": "quadranstestnet",
    "chainId": 10947,
    "networkId": 10947,
    "explorers": [{
        "name": "explorer", "url": "https://explorer.testnet.quadrans.io", "icon": "quadrans", "standard": "EIP3091"
    }]
}, {
    "name": "Astra",
    "chain": "Astra",
    "rpc": ["https://rpc.astranaut.io", "https://rpc1.astranaut.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Astra", "symbol": "ASA", "decimals": 18},
    "infoURL": "https://astranaut.io",
    "shortName": "astra",
    "chainId": 11110,
    "networkId": 11110,
    "icon": "astra",
    "explorers": [{
        "name": "Astra EVM Explorer (Blockscout)",
        "url": "https://explorer.astranaut.io",
        "standard": "none",
        "icon": "astra"
    }, {
        "name": "Astra PingPub Explorer", "url": "https://ping.astranaut.io/astra", "standard": "none", "icon": "astra"
    }]
}, {
    "name": "WAGMI",
    "chain": "WAGMI",
    "icon": "wagmi",
    "rpc": ["https://subnets.avax.network/wagmi/wagmi-chain-testnet/rpc", "https://api.trywagmi.xyz/rpc"],
    "faucets": ["https://faucet.avax.network/?subnet=wagmi"],
    "nativeCurrency": {"name": "WAGMI", "symbol": "WGM", "decimals": 18},
    "infoURL": "https://subnets-test.avax.network/wagmi/details",
    "shortName": "WAGMI",
    "chainId": 11111,
    "networkId": 11111,
    "explorers": [{
        "name": "Avalanche Subnet Explorer", "url": "https://subnets-test.avax.network/wagmi", "standard": "EIP3091"
    }]
}, {
    "name": "Astra Testnet",
    "chain": "Astra",
    "rpc": ["https://rpc.astranaut.dev"],
    "faucets": ["https://faucet.astranaut.dev"],
    "nativeCurrency": {"name": "test-Astra", "symbol": "tASA", "decimals": 18},
    "infoURL": "https://astranaut.io",
    "shortName": "astra-testnet",
    "chainId": 11115,
    "networkId": 11115,
    "icon": "astra",
    "explorers": [{
        "name": "Astra EVM Explorer", "url": "https://explorer.astranaut.dev", "standard": "EIP3091", "icon": "astra"
    }, {
        "name": "Astra PingPub Explorer", "url": "https://ping.astranaut.dev/astra", "standard": "none", "icon": "astra"
    }]
}, {
    "name": "Shyft Testnet",
    "chain": "SHYFTT",
    "icon": "shyft",
    "rpc": ["https://rpc.testnet.shyft.network/"],
    "faucets": [],
    "nativeCurrency": {"name": "Shyft Test Token", "symbol": "SHYFTT", "decimals": 18},
    "infoURL": "https://shyft.network",
    "shortName": "shyftt",
    "chainId": 11437,
    "networkId": 11437,
    "explorers": [{"name": "Shyft Testnet BX", "url": "https://bx.testnet.shyft.network", "standard": "EIP3091"}]
}, {
    "name": "SanR Chain",
    "chain": "SanRChain",
    "rpc": ["https://sanrchain-node.santiment.net"],
    "faucets": [],
    "nativeCurrency": {"name": "nSAN", "symbol": "nSAN", "decimals": 18},
    "infoURL": "https://sanr.app",
    "shortName": "SAN",
    "chainId": 11888,
    "networkId": 11888,
    "icon": "sanrchain",
    "parent": {"chain": "eip155-1", "type": "L2", "bridges": [{"url": "https://sanr.app"}]},
    "explorers": [{
        "name": "SanR Chain Explorer", "url": "https://sanrchain-explorer.santiment.net", "standard": "none"
    }]
}, {
    "name": "Singularity ZERO Testnet",
    "chain": "ZERO",
    "rpc": ["https://betaenv.singularity.gold:18545"],
    "faucets": ["https://nft.singularity.gold"],
    "nativeCurrency": {"name": "ZERO", "symbol": "tZERO", "decimals": 18},
    "infoURL": "https://www.singularity.gold",
    "shortName": "tZERO",
    "chainId": 12051,
    "networkId": 12051,
    "explorers": [{"name": "zeroscan", "url": "https://betaenv.singularity.gold:18002", "standard": "EIP3091"}]
}, {
    "name": "Singularity ZERO Mainnet",
    "chain": "ZERO",
    "rpc": ["https://zerorpc.singularity.gold"],
    "faucets": ["https://zeroscan.singularity.gold"],
    "nativeCurrency": {"name": "ZERO", "symbol": "ZERO", "decimals": 18},
    "infoURL": "https://www.singularity.gold",
    "shortName": "ZERO",
    "chainId": 12052,
    "networkId": 12052,
    "slip44": 621,
    "explorers": [{"name": "zeroscan", "url": "https://zeroscan.singularity.gold", "standard": "EIP3091"}]
}, {
    "name": "Phoenix Mainnet",
    "chain": "Phoenix",
    "rpc": ["https://rpc.phoenixplorer.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Phoenix", "symbol": "PHX", "decimals": 18},
    "infoURL": "https://cryptophoenix.org/phoenix",
    "shortName": "Phoenix",
    "chainId": 13381,
    "networkId": 13381,
    "icon": "phoenix",
    "explorers": [{
        "name": "phoenixplorer", "url": "https://phoenixplorer.com", "icon": "phoenixplorer", "standard": "EIP3091"
    }]
}, {
    "name": "Trust EVM Testnet",
    "chain": "Trust EVM Testnet",
    "rpc": ["https://api.testnet-dev.trust.one"],
    "faucets": ["https://faucet.testnet-dev.trust.one/"],
    "nativeCurrency": {"name": "Trust EVM", "symbol": "EVM", "decimals": 18},
    "infoURL": "https://www.trust.one/",
    "shortName": "TrustTestnet",
    "chainId": 15555,
    "networkId": 15555,
    "explorers": [{"name": "Trust EVM Explorer", "url": "https://trustscan.one", "standard": "EIP3091"}]
}, {
    "name": "MetaDot Mainnet",
    "chain": "MTT",
    "rpc": ["https://mainnet.metadot.network"],
    "faucets": [],
    "nativeCurrency": {"name": "MetaDot Token", "symbol": "MTT", "decimals": 18},
    "infoURL": "https://metadot.network",
    "shortName": "mtt",
    "chainId": 16000,
    "networkId": 16000
}, {
    "name": "MetaDot Testnet",
    "chain": "MTTTest",
    "rpc": ["https://testnet.metadot.network"],
    "faucets": ["https://faucet.metadot.network/"],
    "nativeCurrency": {"name": "MetaDot Token TestNet", "symbol": "MTTest", "decimals": 18},
    "infoURL": "https://metadot.network",
    "shortName": "mtttest",
    "chainId": 16001,
    "networkId": 16001
}, {
    "name": "IVAR Chain Testnet",
    "chain": "IVAR",
    "icon": "ivar",
    "rpc": ["https://testnet-rpc.ivarex.com"],
    "faucets": ["https://tfaucet.ivarex.com/"],
    "nativeCurrency": {"name": "tIvar", "symbol": "tIVAR", "decimals": 18},
    "infoURL": "https://ivarex.com",
    "shortName": "tivar",
    "chainId": 16888,
    "networkId": 16888,
    "explorers": [{"name": "ivarscan", "url": "https://testnet.ivarscan.com", "standard": "EIP3091"}]
}, {
    "name": "Frontier of Dreams Testnet",
    "chain": "Game Network",
    "rpc": ["https://rpc.fod.games/"],
    "nativeCurrency": {"name": "ZKST", "symbol": "ZKST", "decimals": 18},
    "faucets": [],
    "shortName": "ZKST",
    "chainId": 18000,
    "networkId": 18000,
    "infoURL": "https://goexosphere.com",
    "explorers": [{"name": "Game Network", "url": "https://explorer.fod.games", "standard": "EIP3091"}]
}, {
    "name": "BTCIX Network",
    "chain": "BTCIX",
    "rpc": ["https://seed.btcix.org/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "BTCIX Network", "symbol": "BTCIX", "decimals": 18},
    "infoURL": "https://bitcolojix.org",
    "shortName": "btcix",
    "chainId": 19845,
    "networkId": 19845,
    "explorers": [{"name": "BTCIXScan", "url": "https://btcixscan.com", "standard": "none"}]
}, {
    "name": "Callisto Testnet",
    "chain": "CLO",
    "rpc": ["https://testnet-rpc.callisto.network/"],
    "faucets": ["https://faucet.callisto.network/"],
    "nativeCurrency": {"name": "Callisto", "symbol": "CLO", "decimals": 18},
    "infoURL": "https://callisto.network",
    "shortName": "CLOTestnet",
    "chainId": 20729,
    "networkId": 79
}, {
    "name": "CENNZnet Azalea",
    "chain": "CENNZnet",
    "rpc": ["https://cennznet.unfrastructure.io/public"],
    "faucets": [],
    "nativeCurrency": {"name": "CPAY", "symbol": "CPAY", "decimals": 18},
    "infoURL": "https://cennz.net",
    "shortName": "cennz-a",
    "chainId": 21337,
    "networkId": 21337,
    "icon": "cennz",
    "explorers": [{"name": "UNcover", "url": "https://uncoverexplorer.com", "standard": "none"}]
}, {
    "name": "omChain Mainnet",
    "chain": "OML",
    "icon": "omlira",
    "rpc": ["https://seed.omchain.io", "https://seed.omlira.com"],
    "faucets": [],
    "nativeCurrency": {"name": "omChain", "symbol": "OMC", "decimals": 18},
    "infoURL": "https://omchain.io",
    "shortName": "omc",
    "chainId": 21816,
    "networkId": 21816,
    "explorers": [{"name": "omChain Explorer", "url": "https://explorer.omchain.io", "standard": "EIP3091"}]
}, {
    "name": "Taycan",
    "chain": "Taycan",
    "rpc": ["https://taycan-rpc.hupayx.io:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "shuffle", "symbol": "SFL", "decimals": 18},
    "infoURL": "https://hupayx.io",
    "shortName": "SFL",
    "chainId": 22023,
    "networkId": 22023,
    "explorers": [{
        "name": "Taycan Explorer(Blockscout)", "url": "https://taycan-evmscan.hupayx.io", "standard": "none"
    }, {"name": "Taycan Cosmos Explorer(BigDipper)", "url": "https://taycan-cosmoscan.hupayx.io", "standard": "none"}]
}, {
    "name": "Opside Testnet",
    "chain": "Opside",
    "rpc": ["https://testrpc.opside.network"],
    "faucets": ["https://faucet.opside.network"],
    "nativeCurrency": {"name": "IDE", "symbol": "IDE", "decimals": 18},
    "infoURL": "https://opside.network",
    "shortName": "opside",
    "chainId": 23118,
    "networkId": 23118,
    "icon": "opside",
    "explorers": [{"name": "opsideInfo", "url": "https://opside.info", "standard": "EIP3091"}]
}, {
    "name": "Webchain",
    "chain": "WEB",
    "rpc": ["https://node1.webchain.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Webchain Ether", "symbol": "WEB", "decimals": 18},
    "infoURL": "https://webchain.network",
    "shortName": "web",
    "chainId": 24484,
    "networkId": 37129,
    "slip44": 227
}, {
    "name": "MintMe.com Coin",
    "chain": "MINTME",
    "rpc": ["https://node1.mintme.com"],
    "faucets": [],
    "nativeCurrency": {"name": "MintMe.com Coin", "symbol": "MINTME", "decimals": 18},
    "infoURL": "https://www.mintme.com",
    "shortName": "mintme",
    "chainId": 24734,
    "networkId": 37480
}, {
    "name": "OasisChain Mainnet",
    "chain": "OasisChain",
    "rpc": ["https://rpc1.oasischain.io", "https://rpc2.oasischain.io", "https://rpc3.oasischain.io"],
    "faucets": ["http://faucet.oasischain.io"],
    "nativeCurrency": {"name": "OAC", "symbol": "OAC", "decimals": 18},
    "infoURL": "https://scan.oasischain.io",
    "shortName": "OAC",
    "chainId": 26863,
    "networkId": 26863,
    "explorers": [{"name": "OasisChain Explorer", "url": "https://scan.oasischain.io", "standard": "EIP3091"}]
}, {
    "name": "Piece testnet",
    "chain": "PieceNetwork",
    "icon": "piecechain",
    "rpc": ["https://testnet-rpc0.piecenetwork.com"],
    "faucets": ["https://piecenetwork.com/faucet"],
    "nativeCurrency": {"name": "ECE", "symbol": "ECE", "decimals": 18},
    "infoURL": "https://piecenetwork.com",
    "shortName": "Piece",
    "chainId": 30067,
    "networkId": 30067,
    "explorers": [{"name": "Piece Scan", "url": "https://testnet-scan.piecenetwork.com", "standard": "EIP3091"}]
}, {
    "name": "Ethersocial Network",
    "chain": "ESN",
    "rpc": ["https://api.esn.gonspool.com", "rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "Ethersocial Network Ether", "symbol": "ESN", "decimals": 18},
    "infoURL": "https://ethersocial.org",
    "shortName": "esn",
    "chainId": 31102,
    "networkId": 1,
    "slip44": 31102
}, {
    "name": "GoChain Testnet",
    "chain": "GO",
    "rpc": ["https://testnet-rpc.gochain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "GoChain Coin", "symbol": "GO", "decimals": 18},
    "infoURL": "https://gochain.io",
    "shortName": "got",
    "chainId": 31337,
    "networkId": 31337,
    "slip44": 6060,
    "explorers": [{
        "name": "GoChain Testnet Explorer", "url": "https://testnet-explorer.gochain.io", "standard": "EIP3091"
    }]
}, {
    "name": "Bitgert Mainnet",
    "chain": "Brise",
    "rpc": ["https://rpc.icecreamswap.com", "https://mainnet-rpc.brisescan.com", "https://chainrpc.com", "https://serverrpc.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Bitrise Token", "symbol": "Brise", "decimals": 18},
    "infoURL": "https://bitgert.com/",
    "shortName": "Brise",
    "chainId": 32520,
    "networkId": 32520,
    "icon": "brise",
    "explorers": [{"name": "Brise Scan", "url": "https://brisescan.com", "icon": "brise", "standard": "EIP3091"}]
}, {
    "name": "Q Mainnet",
    "chain": "Q",
    "rpc": ["https://rpc.q.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Q token", "symbol": "Q", "decimals": 18},
    "infoURL": "https://q.org",
    "shortName": "q",
    "chainId": 35441,
    "networkId": 35441,
    "icon": "q",
    "explorers": [{"name": "Q explorer", "url": "https://explorer.q.org", "icon": "q", "standard": "EIP3091"}]
}, {
    "name": "Q Testnet",
    "chain": "Q",
    "rpc": ["https://rpc.qtestnet.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Q token", "symbol": "Q", "decimals": 18},
    "infoURL": "https://q.org/",
    "shortName": "q-testnet",
    "chainId": 35443,
    "networkId": 35443,
    "icon": "q",
    "explorers": [{"name": "Q explorer", "url": "https://explorer.qtestnet.org", "icon": "q", "standard": "EIP3091"}]
}, {
    "name": "Energi Mainnet",
    "chain": "NRG",
    "rpc": ["https://nodeapi.energi.network", "https://explorer.energi.network/api/eth-rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Energi", "symbol": "NRG", "decimals": 18},
    "infoURL": "https://www.energi.world/",
    "shortName": "nrg",
    "chainId": 39797,
    "networkId": 39797,
    "slip44": 39797
}, {
    "name": "Opulent-X BETA",
    "chainId": 41500,
    "shortName": "ox-beta",
    "chain": "Opulent-X",
    "networkId": 41500,
    "nativeCurrency": {"name": "Oxyn Gas", "symbol": "OXYN", "decimals": 18},
    "rpc": ["https://connect.opulent-x.com"],
    "faucets": [],
    "infoURL": "https://beta.opulent-x.com",
    "explorers": [{"name": "Opulent-X BETA Explorer", "url": "https://explorer.opulent-x.com", "standard": "none"}]
}, {
    "name": "pegglecoin",
    "chain": "42069",
    "rpc": ["rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "pegglecoin", "symbol": "peggle", "decimals": 18},
    "infoURL": "https://teampeggle.com",
    "shortName": "PC",
    "chainId": 42069,
    "networkId": 42069
}, {
    "name": "Arbitrum Nova",
    "chainId": 42170,
    "shortName": "arb-nova",
    "chain": "ETH",
    "networkId": 42170,
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "rpc": ["https://nova.arbitrum.io/rpc"],
    "faucets": [],
    "explorers": [{
        "name": "Arbitrum Nova Chain Explorer",
        "url": "https://nova-explorer.arbitrum.io",
        "icon": "blockscout",
        "standard": "EIP3091"
    }],
    "infoURL": "https://arbitrum.io",
    "parent": {"type": "L2", "chain": "eip155-1", "bridges": [{"url": "https://bridge.arbitrum.io"}]}
}, {
    "name": "Oasis Emerald ParaTime Testnet",
    "chain": "Emerald",
    "icon": "oasis",
    "rpc": ["https://testnet.emerald.oasis.dev/", "wss://testnet.emerald.oasis.dev/ws"],
    "faucets": ["https://faucet.testnet.oasis.dev/"],
    "nativeCurrency": {"name": "Emerald Rose", "symbol": "ROSE", "decimals": 18},
    "infoURL": "https://docs.oasis.dev/general/developer-resources/overview",
    "shortName": "emerald-testnet",
    "chainId": 42261,
    "networkId": 42261,
    "explorers": [{
        "name": "Emerald ParaTime Testnet Explorer",
        "url": "https://testnet.explorer.emerald.oasis.dev",
        "standard": "EIP3091"
    }]
}, {
    "name": "Athereum",
    "chain": "ATH",
    "rpc": ["https://ava.network:21015/ext/evm/rpc", "rpcWorking:false"],
    "faucets": ["http://athfaucet.ava.network//?address=${ADDRESS}"],
    "nativeCurrency": {"name": "Athereum Ether", "symbol": "ATH", "decimals": 18},
    "infoURL": "https://athereum.ava.network",
    "shortName": "avaeth",
    "chainId": 43110,
    "networkId": 43110
}, {
    "name": "Avalanche Fuji Testnet",
    "chain": "AVAX",
    "rpc": ["https://api.avax-test.network/ext/bc/C/rpc", "https://rpc.ankr.com/avalanche_fuji", "https://rpc.ankr.com/avalanche_fuji-c", "https://avalanchetestapi.terminet.io/ext/bc/C/rpc", "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc"],
    "faucets": ["https://faucet.avax-test.network/"],
    "nativeCurrency": {"name": "Avalanche", "symbol": "AVAX", "decimals": 18},
    "infoURL": "https://cchain.explorer.avax-test.network",
    "shortName": "Fuji",
    "chainId": 43113,
    "networkId": 1,
    "explorers": [{"name": "snowtrace", "url": "https://testnet.snowtrace.io", "standard": "EIP3091"}]
}, {
    "name": "Celo Alfajores Testnet",
    "chainId": 44787,
    "shortName": "ALFA",
    "chain": "CELO",
    "networkId": 44787,
    "nativeCurrency": {"name": "CELO", "symbol": "CELO", "decimals": 18},
    "rpc": ["https://alfajores-forno.celo-testnet.org", "wss://alfajores-forno.celo-testnet.org/ws"],
    "faucets": ["https://celo.org/developers/faucet", "https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],
    "infoURL": "https://docs.celo.org/"
}, {
    "name": "Autobahn Network",
    "chain": "TXL",
    "rpc": ["https://rpc.autobahn.network"],
    "faucets": [],
    "nativeCurrency": {"name": "TXL", "symbol": "TXL", "decimals": 18},
    "infoURL": "https://autobahn.network",
    "shortName": "AutobahnNetwork",
    "chainId": 45000,
    "networkId": 45000,
    "icon": "autobahn",
    "explorers": [{
        "name": "autobahn explorer",
        "url": "https://explorer.autobahn.network",
        "icon": "autobahn",
        "standard": "EIP3091"
    }]
}, {
    "name": "REI Network",
    "chain": "REI",
    "rpc": ["https://rpc.rei.network", "wss://rpc.rei.network"],
    "faucets": [],
    "nativeCurrency": {"name": "REI", "symbol": "REI", "decimals": 18},
    "infoURL": "https://rei.network/",
    "shortName": "REI",
    "chainId": 47805,
    "networkId": 47805,
    "explorers": [{"name": "rei-scan", "url": "https://scan.rei.network", "standard": "none"}]
}, {
    "name": "Energi Testnet",
    "chain": "NRG",
    "rpc": ["https://nodeapi.test.energi.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Energi", "symbol": "NRG", "decimals": 18},
    "infoURL": "https://www.energi.world/",
    "shortName": "tnrg",
    "chainId": 49797,
    "networkId": 49797,
    "slip44": 49797
}, {
    "name": "GTON Testnet",
    "chain": "GTON Testnet",
    "rpc": ["https://testnet.gton.network/"],
    "faucets": [],
    "nativeCurrency": {"name": "GCD", "symbol": "GCD", "decimals": 18},
    "infoURL": "https://gton.capital",
    "shortName": "tgton",
    "chainId": 50021,
    "networkId": 50021,
    "explorers": [{
        "name": "GTON Testnet Network Explorer", "url": "https://explorer.testnet.gton.network", "standard": "EIP3091"
    }],
    "parent": {"type": "L2", "chain": "eip155-3"}
}, {
    "name": "DFK Chain",
    "chain": "DFK",
    "icon": "dfk",
    "rpc": ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc", "https://avax-dfk.gateway.pokt.network/v1/lb/6244818c00b9f0003ad1b619/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc"],
    "faucets": [],
    "nativeCurrency": {"name": "Jewel", "symbol": "JEWEL", "decimals": 18},
    "infoURL": "https://defikingdoms.com",
    "shortName": "DFK",
    "chainId": 53935,
    "networkId": 53935,
    "explorers": [{"name": "ethernal", "url": "https://explorer.dfkchain.com", "icon": "ethereum", "standard": "none"}]
}, {
    "name": "REI Chain Mainnet",
    "chain": "REI",
    "icon": "reichain",
    "rpc": ["https://rei-rpc.moonrhythm.io"],
    "faucets": ["http://kururu.finance/faucet?chainId=55555"],
    "nativeCurrency": {"name": "Rei", "symbol": "REI", "decimals": 18},
    "infoURL": "https://reichain.io",
    "shortName": "reichain",
    "chainId": 55555,
    "networkId": 55555,
    "explorers": [{"name": "reiscan", "url": "https://reiscan.com", "standard": "EIP3091"}]
}, {
    "name": "REI Chain Testnet",
    "chain": "REI",
    "icon": "reichain",
    "rpc": ["https://rei-testnet-rpc.moonrhythm.io"],
    "faucets": ["http://kururu.finance/faucet?chainId=55556"],
    "nativeCurrency": {"name": "tRei", "symbol": "tREI", "decimals": 18},
    "infoURL": "https://reichain.io",
    "shortName": "trei",
    "chainId": 55556,
    "networkId": 55556,
    "explorers": [{"name": "reiscan", "url": "https://testnet.reiscan.com", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Testnet Chain 0",
    "chain": "Thinkium",
    "rpc": ["https://test.thinkiumrpc.net/"],
    "faucets": ["https://www.thinkiumdev.net/faucet"],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM-test0",
    "chainId": 60000,
    "networkId": 60000,
    "explorers": [{"name": "thinkiumscan", "url": "https://test0.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Testnet Chain 1",
    "chain": "Thinkium",
    "rpc": ["https://test1.thinkiumrpc.net/"],
    "faucets": ["https://www.thinkiumdev.net/faucet"],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM-test1",
    "chainId": 60001,
    "networkId": 60001,
    "explorers": [{"name": "thinkiumscan", "url": "https://test1.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Testnet Chain 2",
    "chain": "Thinkium",
    "rpc": ["https://test2.thinkiumrpc.net/"],
    "faucets": ["https://www.thinkiumdev.net/faucet"],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM-test2",
    "chainId": 60002,
    "networkId": 60002,
    "explorers": [{"name": "thinkiumscan", "url": "https://test2.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Testnet Chain 103",
    "chain": "Thinkium",
    "rpc": ["https://test103.thinkiumrpc.net/"],
    "faucets": ["https://www.thinkiumdev.net/faucet"],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM-test103",
    "chainId": 60103,
    "networkId": 60103,
    "explorers": [{"name": "thinkiumscan", "url": "https://test103.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Celo Baklava Testnet",
    "chainId": 62320,
    "shortName": "BKLV",
    "chain": "CELO",
    "networkId": 62320,
    "nativeCurrency": {"name": "CELO", "symbol": "CELO", "decimals": 18},
    "rpc": ["https://baklava-forno.celo-testnet.org"],
    "faucets": ["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform", "https://cauldron.pretoriaresearchlab.io/baklava-faucet"],
    "infoURL": "https://docs.celo.org/"
}, {
    "name": "MultiVAC Mainnet",
    "chain": "MultiVAC",
    "icon": "multivac",
    "rpc": ["https://rpc.mtv.ac", "https://rpc-eu.mtv.ac"],
    "faucets": [],
    "nativeCurrency": {"name": "MultiVAC", "symbol": "MTV", "decimals": 18},
    "infoURL": "https://mtv.ac",
    "shortName": "mtv",
    "chainId": 62621,
    "networkId": 62621,
    "explorers": [{"name": "MultiVAC Explorer", "url": "https://e.mtv.ac", "standard": "none"}]
}, {
    "name": "eCredits Mainnet",
    "chain": "ECS",
    "rpc": ["https://rpc.ecredits.com"],
    "faucets": [],
    "nativeCurrency": {"name": "eCredits", "symbol": "ECS", "decimals": 18},
    "infoURL": "https://ecredits.com",
    "shortName": "ecs",
    "chainId": 63000,
    "networkId": 63000,
    "icon": "ecredits",
    "explorers": [{
        "name": "eCredits MainNet Explorer",
        "url": "https://explorer.ecredits.com",
        "icon": "ecredits",
        "standard": "EIP3091"
    }]
}, {
    "name": "eCredits Testnet",
    "chain": "ECS",
    "rpc": ["https://rpc.tst.ecredits.com"],
    "faucets": ["https://faucet.tst.ecredits.com"],
    "nativeCurrency": {"name": "eCredits", "symbol": "ECS", "decimals": 18},
    "infoURL": "https://ecredits.com",
    "shortName": "ecs-testnet",
    "chainId": 63001,
    "networkId": 63001,
    "icon": "ecredits",
    "explorers": [{
        "name": "eCredits TestNet Explorer",
        "url": "https://explorer.tst.ecredits.com",
        "icon": "ecredits",
        "standard": "EIP3091"
    }]
}, {
    "name": "Condrieu",
    "title": "Ethereum Verkle Testnet Condrieu",
    "chain": "ETH",
    "rpc": ["https://rpc.condrieu.ethdevops.io:8545"],
    "faucets": ["https://faucet.condrieu.ethdevops.io"],
    "nativeCurrency": {"name": "Condrieu Testnet Ether", "symbol": "CTE", "decimals": 18},
    "infoURL": "https://condrieu.ethdevops.io",
    "shortName": "cndr",
    "chainId": 69420,
    "networkId": 69420,
    "explorers": [{"name": "Condrieu explorer", "url": "https://explorer.condrieu.ethdevops.io", "standard": "none"}]
}, {
    "name": "Thinkium Mainnet Chain 0",
    "chain": "Thinkium",
    "rpc": ["https://proxy.thinkiumrpc.net"],
    "faucets": [],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM0",
    "chainId": 70000,
    "networkId": 70000,
    "explorers": [{"name": "thinkiumscan", "url": "https://chain0.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Mainnet Chain 1",
    "chain": "Thinkium",
    "rpc": ["https://proxy1.thinkiumrpc.net"],
    "faucets": [],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM1",
    "chainId": 70001,
    "networkId": 70001,
    "explorers": [{"name": "thinkiumscan", "url": "https://chain1.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Mainnet Chain 2",
    "chain": "Thinkium",
    "rpc": ["https://proxy2.thinkiumrpc.net"],
    "faucets": [],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM2",
    "chainId": 70002,
    "networkId": 70002,
    "explorers": [{"name": "thinkiumscan", "url": "https://chain2.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Thinkium Mainnet Chain 103",
    "chain": "Thinkium",
    "rpc": ["https://proxy103.thinkiumrpc.net"],
    "faucets": [],
    "nativeCurrency": {"name": "TKM", "symbol": "TKM", "decimals": 18},
    "infoURL": "https://thinkium.net/",
    "shortName": "TKM103",
    "chainId": 70103,
    "networkId": 70103,
    "explorers": [{"name": "thinkiumscan", "url": "https://chain103.thinkiumscan.net", "standard": "EIP3091"}]
}, {
    "name": "Polyjuice Testnet",
    "chain": "CKB",
    "icon": "polyjuice",
    "rpc": ["https://godwoken-testnet-web3-rpc.ckbapp.dev", "ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"],
    "faucets": ["https://faucet.nervos.org/"],
    "nativeCurrency": {"name": "CKB", "symbol": "CKB", "decimals": 8},
    "infoURL": "https://github.com/nervosnetwork/godwoken",
    "shortName": "ckb",
    "chainId": 71393,
    "networkId": 1
}, {
    "name": "Godwoken Testnet (V1.1)",
    "chain": "GWT",
    "rpc": ["https://godwoken-testnet-v1.ckbapp.dev"],
    "faucets": ["https://testnet.bridge.godwoken.io"],
    "nativeCurrency": {"name": "pCKB", "symbol": "pCKB", "decimals": 18},
    "infoURL": "https://www.nervos.org",
    "shortName": "gw-testnet-v1",
    "chainId": 71401,
    "networkId": 71401,
    "explorers": [{
        "name": "GWScout Explorer", "url": "https://gw-testnet-explorer.nervosdao.community", "standard": "none"
    }, {"name": "GWScan Block Explorer", "url": "https://v1.testnet.gwscan.com", "standard": "none"}]
}, {
    "name": "Energy Web Volta Testnet",
    "chain": "Volta",
    "rpc": ["https://volta-rpc.energyweb.org", "wss://volta-rpc.energyweb.org/ws"],
    "faucets": ["https://voltafaucet.energyweb.org"],
    "nativeCurrency": {"name": "Volta Token", "symbol": "VT", "decimals": 18},
    "infoURL": "https://energyweb.org",
    "shortName": "vt",
    "chainId": 73799,
    "networkId": 73799
}, {
    "name": "Mixin Virtual Machine",
    "chain": "MVM",
    "rpc": ["https://geth.mvm.dev"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://mvm.dev",
    "shortName": "mvm",
    "chainId": 73927,
    "networkId": 73927,
    "icon": "mvm",
    "explorers": [{"name": "mvmscan", "url": "https://scan.mvm.dev", "icon": "mvm", "standard": "EIP3091"}]
}, {
    "name": "ResinCoin Mainnet",
    "chain": "RESIN",
    "rpc": ["https://mainnet.resincoin.dev"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "RESIN", "decimals": 18},
    "infoURL": "https://resincoin.dev",
    "shortName": "resin",
    "chainId": 75000,
    "networkId": 75000,
    "explorers": [{"name": "ResinScan", "url": "https://explorer.resincoin.dev", "standard": "none"}]
}, {
    "name": "Firenze test network",
    "chain": "ETH",
    "rpc": ["https://ethnode.primusmoney.com/firenze"],
    "faucets": [],
    "nativeCurrency": {"name": "Firenze Ether", "symbol": "FIN", "decimals": 18},
    "infoURL": "https://primusmoney.com",
    "shortName": "firenze",
    "chainId": 78110,
    "networkId": 78110
}, {
    "name": "Mumbai",
    "title": "Polygon Testnet Mumbai",
    "chain": "Polygon",
    "rpc": ["https://matic-mumbai.chainstacklabs.com", "https://rpc-mumbai.maticvigil.com", "https://matic-testnet-archive-rpc.bwarelabs.com", "https://rpc.ankr.com/polygon_mumbai", "https://polygontestapi.terminet.io/rpc", "https://polygon-testnet.public.blastapi.io"],
    "faucets": ["https://faucet.polygon.technology/"],
    "nativeCurrency": {"name": "MATIC", "symbol": "MATIC", "decimals": 18},
    "infoURL": "https://polygon.technology/",
    "shortName": "maticmum",
    "chainId": 80001,
    "networkId": 80001,
    "explorers": [{"name": "polygonscan", "url": "https://mumbai.polygonscan.com", "standard": "EIP3091"}]
}, {
    "name": "IVAR Chain Mainnet",
    "chain": "IVAR",
    "icon": "ivar",
    "rpc": ["https://mainnet-rpc.ivarex.com"],
    "faucets": ["https://faucet.ivarex.com/"],
    "nativeCurrency": {"name": "Ivar", "symbol": "IVAR", "decimals": 18},
    "infoURL": "https://ivarex.com",
    "shortName": "ivar",
    "chainId": 88888,
    "networkId": 88888,
    "explorers": [{"name": "ivarscan", "url": "https://ivarscan.com", "standard": "EIP3091"}]
}, {
    "name": "Beverly Hills",
    "title": "Ethereum multi-client Verkle Testnet Beverly Hills",
    "chain": "ETH",
    "rpc": ["https://rpc.beverlyhills.ethdevops.io:8545"],
    "faucets": ["https://faucet.beverlyhills.ethdevops.io"],
    "nativeCurrency": {"name": "Beverly Hills Testnet Ether", "symbol": "BVE", "decimals": 18},
    "infoURL": "https://beverlyhills.ethdevops.io",
    "shortName": "bvhl",
    "chainId": 90210,
    "networkId": 90210,
    "status": "incubating",
    "explorers": [{
        "name": "Beverly Hills explorer", "url": "https://explorer.beverlyhills.ethdevops.io", "standard": "none"
    }]
}, {
    "name": "Lambda Testnet",
    "chain": "Lambda",
    "rpc": ["https://evm.lambda.top/"],
    "faucets": ["https://faucet.lambda.top"],
    "nativeCurrency": {"name": "test-Lamb", "symbol": "LAMB", "decimals": 18},
    "infoURL": "https://lambda.im",
    "shortName": "lambda-testnet",
    "chainId": 92001,
    "networkId": 92001,
    "icon": "lambda",
    "explorers": [{
        "name": "Lambda EVM Explorer", "url": "https://explorer.lambda.top", "standard": "EIP3091", "icon": "lambda"
    }]
}, {
    "name": "UB Smart Chain(testnet)",
    "chain": "USC",
    "rpc": ["https://testnet.rpc.uschain.network"],
    "faucets": [],
    "nativeCurrency": {"name": "UBC", "symbol": "UBC", "decimals": 18},
    "infoURL": "https://www.ubchain.site",
    "shortName": "usctest",
    "chainId": 99998,
    "networkId": 99998
}, {
    "name": "UB Smart Chain",
    "chain": "USC",
    "rpc": ["https://rpc.uschain.network"],
    "faucets": [],
    "nativeCurrency": {"name": "UBC", "symbol": "UBC", "decimals": 18},
    "infoURL": "https://www.ubchain.site/",
    "shortName": "usc",
    "chainId": 99999,
    "networkId": 99999
}, {
    "name": "QuarkChain Mainnet Root",
    "chain": "QuarkChain",
    "rpc": ["http://jrpc.mainnet.quarkchain.io:38391"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-r",
    "chainId": 100000,
    "networkId": 100000
}, {
    "name": "QuarkChain Mainnet Shard 0",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s0-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39000"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s0",
    "chainId": 100001,
    "networkId": 100001,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/0", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 1",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s1-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39001"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s1",
    "chainId": 100002,
    "networkId": 100002,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/1", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 2",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s2-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39002"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s2",
    "chainId": 100003,
    "networkId": 100003,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/2", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 3",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s3-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39003"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s3",
    "chainId": 100004,
    "networkId": 100004,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/3", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 4",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s4-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39004"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s4",
    "chainId": 100005,
    "networkId": 100005,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/4", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 5",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s5-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39005"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s5",
    "chainId": 100006,
    "networkId": 100006,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/5", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 6",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s6-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39006"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s6",
    "chainId": 100007,
    "networkId": 100007,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/6", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Mainnet Shard 7",
    "chain": "QuarkChain",
    "rpc": ["https://mainnet-s7-ethapi.quarkchain.io", "http://eth-jrpc.mainnet.quarkchain.io:39007"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-s7",
    "chainId": 100008,
    "networkId": 100008,
    "parent": {"chain": "eip155-100000", "type": "shard"},
    "explorers": [{"name": "quarkchain-mainnet", "url": "https://mainnet.quarkchain.io/7", "standard": "EIP3091"}]
}, {
    "name": "Chiado Testnet",
    "chain": "CHI",
    "icon": "gnosis",
    "rpc": ["https://rpc-chiado.gnosistestnet.com"],
    "faucets": ["https://gnosisfaucet.com"],
    "nativeCurrency": {"name": "Chiado xDAI", "symbol": "xDAI", "decimals": 18},
    "infoURL": "https://docs.gnosischain.com",
    "shortName": "chi",
    "chainId": 100100,
    "networkId": 100100,
    "explorers": [{
        "name": "blockscout",
        "url": "https://blockscout-chiado.gnosistestnet.com",
        "icon": "blockscout",
        "standard": "EIP3091"
    }]
}, {
    "name": "Crystaleum",
    "chain": "crystal",
    "rpc": ["https://evm.cryptocurrencydevs.org", "https://rpc.crystaleum.org"],
    "faucets": [],
    "nativeCurrency": {"name": "CRFI", "symbol": "◈", "decimals": 18},
    "infoURL": "https://crystaleum.org",
    "shortName": "CRFI",
    "chainId": 103090,
    "networkId": 1,
    "icon": "crystal",
    "explorers": [{
        "name": "blockscout", "url": "https://scan.crystaleum.org", "icon": "crystal", "standard": "EIP3091"
    }]
}, {
    "name": "BROChain Mainnet",
    "chain": "BRO",
    "rpc": ["https://rpc.brochain.org", "http://rpc.brochain.org", "https://rpc.brochain.org/mainnet", "http://rpc.brochain.org/mainnet", "rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "Brother", "symbol": "BRO", "decimals": 18},
    "infoURL": "https://brochain.org",
    "shortName": "bro",
    "chainId": 108801,
    "networkId": 108801,
    "explorers": [{"name": "BROChain Explorer", "url": "https://explorer.brochain.org", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Root",
    "chain": "QuarkChain",
    "rpc": ["http://jrpc.devnet.quarkchain.io:38391", "rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-r",
    "chainId": 110000,
    "networkId": 110000
}, {
    "name": "QuarkChain Devnet Shard 0",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s0-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39900"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s0",
    "chainId": 110001,
    "networkId": 110001,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/0", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 1",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s1-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39901"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s1",
    "chainId": 110002,
    "networkId": 110002,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/1", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 2",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s2-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39902"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s2",
    "chainId": 110003,
    "networkId": 110003,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/2", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 3",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s3-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39903"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s3",
    "chainId": 110004,
    "networkId": 110004,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/3", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 4",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s4-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39904"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s4",
    "chainId": 110005,
    "networkId": 110005,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/4", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 5",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s5-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39905"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s5",
    "chainId": 110006,
    "networkId": 110006,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/5", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 6",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s6-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39906"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s6",
    "chainId": 110007,
    "networkId": 110007,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/6", "standard": "EIP3091"}]
}, {
    "name": "QuarkChain Devnet Shard 7",
    "chain": "QuarkChain",
    "rpc": ["https://devnet-s7-ethapi.quarkchain.io", "http://eth-jrpc.devnet.quarkchain.io:39907"],
    "faucets": [],
    "nativeCurrency": {"name": "QKC", "symbol": "QKC", "decimals": 18},
    "infoURL": "https://www.quarkchain.io",
    "shortName": "qkc-d-s7",
    "chainId": 110008,
    "networkId": 110008,
    "parent": {"chain": "eip155-110000", "type": "shard"},
    "explorers": [{"name": "quarkchain-devnet", "url": "https://devnet.quarkchain.io/7", "standard": "EIP3091"}]
}, {
    "name": "ETND Chain Mainnets",
    "chain": "ETND",
    "rpc": ["https://rpc.node1.etnd.pro/"],
    "faucets": [],
    "nativeCurrency": {"name": "ETND", "symbol": "ETND", "decimals": 18},
    "infoURL": "https://www.etnd.pro",
    "shortName": "ETND",
    "chainId": 131419,
    "networkId": 131419,
    "icon": "ETND",
    "explorers": [{"name": "etndscan", "url": "https://scan.etnd.pro", "icon": "ETND", "standard": "none"}]
}, {
    "name": "Milkomeda C1 Testnet",
    "chain": "milkTAda",
    "icon": "milkomeda",
    "rpc": ["https://rpc-devnet-cardano-evm.c1.milkomeda.com", "wss://rpc-devnet-cardano-evm.c1.milkomeda.com"],
    "faucets": [],
    "nativeCurrency": {"name": "milkTAda", "symbol": "mTAda", "decimals": 18},
    "infoURL": "https://milkomeda.com",
    "shortName": "milkTAda",
    "chainId": 200101,
    "networkId": 200101,
    "explorers": [{
        "name": "Blockscout", "url": "https://explorer-devnet-cardano-evm.c1.milkomeda.com", "standard": "none"
    }]
}, {
    "name": "Milkomeda A1 Testnet",
    "chain": "milkTAlgo",
    "icon": "milkomeda",
    "rpc": ["https://rpc-devnet-algorand-rollup.a1.milkomeda.com"],
    "faucets": [],
    "nativeCurrency": {"name": "milkTAlgo", "symbol": "mTAlgo", "decimals": 18},
    "infoURL": "https://milkomeda.com",
    "shortName": "milkTAlgo",
    "chainId": 200202,
    "networkId": 200202,
    "explorers": [{
        "name": "Blockscout", "url": "https://explorer-devnet-algorand-rollup.a1.milkomeda.com", "standard": "none"
    }]
}, {
    "name": "Akroma",
    "chain": "AKA",
    "rpc": ["https://remote.akroma.io", "https://boot2.akroma.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Akroma Ether", "symbol": "AKA", "decimals": 18},
    "infoURL": "https://akroma.io",
    "shortName": "aka",
    "chainId": 200625,
    "networkId": 200625,
    "slip44": 200625
}, {
    "name": "Alaya Mainnet",
    "chain": "Alaya",
    "rpc": ["https://openapi.alaya.network/rpc", "wss://openapi.alaya.network/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "ATP", "symbol": "atp", "decimals": 18},
    "infoURL": "https://www.alaya.network/",
    "shortName": "alaya",
    "chainId": 201018,
    "networkId": 1,
    "icon": "alaya",
    "explorers": [{"name": "alaya explorer", "url": "https://scan.alaya.network", "standard": "none"}]
}, {
    "name": "Alaya Dev Testnet",
    "chain": "Alaya",
    "rpc": ["https://devnetopenapi.alaya.network/rpc", "wss://devnetopenapi.alaya.network/ws"],
    "faucets": ["https://faucet.alaya.network/faucet/?id=f93426c0887f11eb83b900163e06151c"],
    "nativeCurrency": {"name": "ATP", "symbol": "atp", "decimals": 18},
    "infoURL": "https://www.alaya.network/",
    "shortName": "alayadev",
    "chainId": 201030,
    "networkId": 1,
    "icon": "alaya",
    "explorers": [{"name": "alaya explorer", "url": "https://devnetscan.alaya.network", "standard": "none"}]
}, {
    "name": "Jellie",
    "title": "Twala Testnet Jellie",
    "shortName": "twl-jellie",
    "chain": "ETH",
    "chainId": 202624,
    "networkId": 202624,
    "icon": "twala",
    "nativeCurrency": {"name": "Twala Coin", "symbol": "TWL", "decimals": 18},
    "rpc": ["https://jellie-rpc.twala.io/", "wss://jellie-rpc-wss.twala.io/"],
    "faucets": [],
    "infoURL": "https://twala.io/",
    "explorers": [{
        "name": "Jellie Blockchain Explorer", "url": "https://jellie.twala.io", "standard": "EIP3091", "icon": "twala"
    }]
}, {
    "name": "PlatON Mainnet",
    "chain": "PlatON",
    "rpc": ["https://openapi2.platon.network/rpc", "wss://openapi2.platon.network/ws"],
    "faucets": [],
    "nativeCurrency": {"name": "LAT", "symbol": "lat", "decimals": 18},
    "infoURL": "https://www.platon.network",
    "shortName": "platon",
    "chainId": 210425,
    "networkId": 1,
    "icon": "platon",
    "explorers": [{"name": "PlatON explorer", "url": "https://scan.platon.network", "standard": "none"}]
}, {
    "name": "Haymo Testnet",
    "chain": "tHYM",
    "rpc": ["https://testnet1.haymo.network"],
    "faucets": [],
    "nativeCurrency": {"name": "HAYMO", "symbol": "HYM", "decimals": 18},
    "infoURL": "https://haymoswap.web.app/",
    "shortName": "hym",
    "chainId": 234666,
    "networkId": 234666
}, {
    "name": "ARTIS sigma1",
    "chain": "ARTIS",
    "rpc": ["https://rpc.sigma1.artis.network"],
    "faucets": [],
    "nativeCurrency": {"name": "ARTIS sigma1 Ether", "symbol": "ATS", "decimals": 18},
    "infoURL": "https://artis.eco",
    "shortName": "ats",
    "chainId": 246529,
    "networkId": 246529,
    "slip44": 246529
}, {
    "name": "ARTIS Testnet tau1",
    "chain": "ARTIS",
    "rpc": ["https://rpc.tau1.artis.network"],
    "faucets": [],
    "nativeCurrency": {"name": "ARTIS tau1 Ether", "symbol": "tATS", "decimals": 18},
    "infoURL": "https://artis.network",
    "shortName": "atstau",
    "chainId": 246785,
    "networkId": 246785
}, {
    "name": "CMP-Mainnet",
    "chain": "CMP",
    "rpc": ["https://mainnet.block.caduceus.foundation", "wss://mainnet.block.caduceus.foundation"],
    "faucets": [],
    "nativeCurrency": {"name": "Caduceus Token", "symbol": "CMP", "decimals": 18},
    "infoURL": "https://caduceus.foundation/",
    "shortName": "cmp-mainnet",
    "chainId": 256256,
    "networkId": 256256,
    "explorers": [{"name": "Mainnet Scan", "url": "https://mainnet.scan.caduceus.foundation", "standard": "none"}]
}, {
    "name": "Social Smart Chain Mainnet",
    "chain": "SoChain",
    "rpc": ["https://socialsmartchain.digitalnext.business", "rpcWorking:false"],
    "faucets": [],
    "nativeCurrency": {"name": "SoChain", "symbol": "$OC", "decimals": 18},
    "infoURL": "https://digitalnext.business/SocialSmartChain",
    "shortName": "SoChain",
    "chainId": 281121,
    "networkId": 281121,
    "explorers": []
}, {
    "name": "Polis Testnet",
    "chain": "Sparta",
    "icon": "polis",
    "rpc": ["https://sparta-rpc.polis.tech"],
    "faucets": ["https://faucet.polis.tech"],
    "nativeCurrency": {"name": "tPolis", "symbol": "tPOLIS", "decimals": 18},
    "infoURL": "https://polis.tech",
    "shortName": "sparta",
    "chainId": 333888,
    "networkId": 333888
}, {
    "name": "Kekchain",
    "chain": "kek",
    "rpc": ["https://testnet.kekchain.com"],
    "faucets": [],
    "nativeCurrency": {"name": "KEK", "symbol": "KEK", "decimals": 18},
    "infoURL": "https://kekchain.com",
    "shortName": "KEK",
    "chainId": 420666,
    "networkId": 1,
    "icon": "kek",
    "explorers": [{
        "name": "blockscout", "url": "https://testnet-explorer.kekchain.com", "icon": "kek", "standard": "EIP3091"
    }]
}, {
    "name": "Arbitrum Rinkeby",
    "title": "Arbitrum Testnet Rinkeby",
    "chainId": 421611,
    "shortName": "arb-rinkeby",
    "chain": "ETH",
    "networkId": 421611,
    "nativeCurrency": {"name": "Arbitrum Rinkeby Ether", "symbol": "ETH", "decimals": 18},
    "rpc": ["https://rinkeby.arbitrum.io/rpc"],
    "faucets": ["http://fauceth.komputing.org?chain=421611&address=${ADDRESS}"],
    "infoURL": "https://arbitrum.io",
    "explorers": [{
        "name": "arbiscan-testnet", "url": "https://testnet.arbiscan.io", "standard": "EIP3091"
    }, {"name": "arbitrum-rinkeby", "url": "https://rinkeby-explorer.arbitrum.io", "standard": "EIP3091"}],
    "parent": {"type": "L2", "chain": "eip155-4", "bridges": [{"url": "https://bridge.arbitrum.io"}]}
}, {
    "name": "Arbitrum Görli",
    "title": "Arbitrum Görli Rollup Testnet",
    "chainId": 421613,
    "shortName": "arb-goerli",
    "chain": "ETH",
    "networkId": 421613,
    "nativeCurrency": {"name": "Arbitrum Görli Ether", "symbol": "AGOR", "decimals": 18},
    "rpc": ["https://goerli-rollup.arbitrum.io/rpc/"],
    "faucets": [],
    "infoURL": "https://arbitrum.io/",
    "explorers": [{
        "name": "Arbitrum Görli Rollup Explorer",
        "url": "https://goerli-rollup-explorer.arbitrum.io",
        "standard": "EIP3091"
    }],
    "parent": {"type": "L2", "chain": "eip155-5", "bridges": [{"url": "https://bridge.arbitrum.io/"}]}
}, {
    "name": "Dexalot Testnet",
    "chain": "DEXALOT",
    "rpc": ["https://subnets.avax.network/dexalot/testnet/rpc"],
    "faucets": ["https://sfaucet.dexalot-test.com"],
    "nativeCurrency": {"name": "Dexalot", "symbol": "ALOT", "decimals": 18},
    "infoURL": "https://dexalot.com",
    "shortName": "Dexalot",
    "chainId": 432201,
    "networkId": 432201,
    "explorers": [{
        "name": "Avalanche Subnet Explorer",
        "url": "https://subnets.avax.network/dexalot/testnet/explorer",
        "standard": "EIP3091"
    }]
}, {
    "name": "Weelink Testnet",
    "chain": "WLK",
    "rpc": ["https://weelinknode1c.gw002.oneitfarm.com"],
    "faucets": ["https://faucet.weelink.gw002.oneitfarm.com"],
    "nativeCurrency": {"name": "Weelink Chain Token", "symbol": "tWLK", "decimals": 18},
    "infoURL": "https://weelink.cloud",
    "shortName": "wlkt",
    "chainId": 444900,
    "networkId": 444900,
    "explorers": [{"name": "weelink-testnet", "url": "https://weelink.cloud/#/blockView/overview", "standard": "none"}]
}, {
    "name": "OpenChain Mainnet",
    "chain": "OpenChain",
    "rpc": ["https://baas-rpc.luniverse.io:18545?lChainId=1641349324562974539"],
    "faucets": [],
    "nativeCurrency": {"name": "OpenCoin", "symbol": "OPC", "decimals": 10},
    "infoURL": "https://www.openchain.live",
    "shortName": "oc",
    "chainId": 474142,
    "networkId": 474142,
    "explorers": [{"name": "SIDE SCAN", "url": "https://sidescan.luniverse.io/1641349324562974539", "standard": "none"}]
}, {
    "name": "CMP-Testnet",
    "chain": "CMP",
    "rpc": ["https://galaxy.block.caduceus.foundation", "wss://galaxy.block.caduceus.foundation"],
    "faucets": ["https://dev.caduceus.foundation/testNetwork"],
    "nativeCurrency": {"name": "Caduceus Testnet Token", "symbol": "CMP", "decimals": 18},
    "infoURL": "https://caduceus.foundation/",
    "shortName": "cmp",
    "chainId": 512512,
    "networkId": 512512,
    "explorers": [{"name": "Galaxy Scan", "url": "https://galaxy.scan.caduceus.foundation", "standard": "none"}]
}, {
    "name": "ethereum Fair",
    "chainId": 513100,
    "networkId": 1,
    "shortName": "etf",
    "chain": "ETF",
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "rpc": ["https://rpc.etherfair.org"],
    "faucets": [],
    "explorers": [],
    "infoURL": "https://etherfair.org"
}, {
    "name": "Vision - Vpioneer Test Chain",
    "chain": "Vision-Vpioneer",
    "rpc": ["https://vpioneer.infragrid.v.network/ethereum/compatible"],
    "faucets": ["https://vpioneerfaucet.visionscan.org"],
    "nativeCurrency": {"name": "VS", "symbol": "VS", "decimals": 18},
    "infoURL": "https://visionscan.org",
    "shortName": "vpioneer",
    "chainId": 666666,
    "networkId": 666666,
    "slip44": 60
}, {
    "name": "4GoodNetwork",
    "chain": "4GN",
    "rpc": ["https://chain.deptofgood.com"],
    "faucets": [],
    "nativeCurrency": {"name": "APTA", "symbol": "APTA", "decimals": 18},
    "infoURL": "https://bloqs4good.com",
    "shortName": "bloqs4good",
    "chainId": 846000,
    "networkId": 846000
}, {
    "name": "Vision - Mainnet",
    "chain": "Vision",
    "rpc": ["https://infragrid.v.network/ethereum/compatible"],
    "faucets": [],
    "nativeCurrency": {"name": "VS", "symbol": "VS", "decimals": 18},
    "infoURL": "https://www.v.network",
    "explorers": [{"name": "Visionscan", "url": "https://www.visionscan.org", "standard": "EIP3091"}],
    "shortName": "vision",
    "chainId": 888888,
    "networkId": 888888,
    "slip44": 60
}, {
    "name": "Posichain Mainnet Shard 0",
    "chain": "PSC",
    "rpc": ["https://api.posichain.org", "https://api.s0.posichain.org"],
    "faucets": ["https://faucet.posichain.org/"],
    "nativeCurrency": {"name": "Posichain Native Token", "symbol": "POSI", "decimals": 18},
    "infoURL": "https://posichain.org",
    "shortName": "psc-s0",
    "chainId": 900000,
    "networkId": 900000,
    "icon": "posichain",
    "explorers": [{
        "name": "Posichain Explorer",
        "url": "https://explorer.posichain.org",
        "icon": "posichain",
        "standard": "EIP3091"
    }]
}, {
    "name": "Posichain Testnet Shard 0",
    "chain": "PSC",
    "rpc": ["https://api.s0.t.posichain.org"],
    "faucets": ["https://faucet.posichain.org/"],
    "nativeCurrency": {"name": "Posichain Native Token", "symbol": "POSI", "decimals": 18},
    "infoURL": "https://posichain.org",
    "shortName": "psc-t-s0",
    "chainId": 910000,
    "networkId": 910000,
    "icon": "posichain",
    "explorers": [{
        "name": "Posichain Explorer Testnet",
        "url": "https://explorer-testnet.posichain.org",
        "icon": "posichain",
        "standard": "EIP3091"
    }]
}, {
    "name": "Posichain Devnet Shard 0",
    "chain": "PSC",
    "rpc": ["https://api.s0.d.posichain.org"],
    "faucets": ["https://faucet.posichain.org/"],
    "nativeCurrency": {"name": "Posichain Native Token", "symbol": "POSI", "decimals": 18},
    "infoURL": "https://posichain.org",
    "shortName": "psc-d-s0",
    "chainId": 920000,
    "networkId": 920000,
    "icon": "posichain",
    "explorers": [{
        "name": "Posichain Explorer Devnet",
        "url": "https://explorer-devnet.posichain.org",
        "icon": "posichain",
        "standard": "EIP3091"
    }]
}, {
    "name": "Posichain Devnet Shard 1",
    "chain": "PSC",
    "rpc": ["https://api.s1.d.posichain.org"],
    "faucets": ["https://faucet.posichain.org/"],
    "nativeCurrency": {"name": "Posichain Native Token", "symbol": "POSI", "decimals": 18},
    "infoURL": "https://posichain.org",
    "shortName": "psc-d-s1",
    "chainId": 920001,
    "networkId": 920001,
    "icon": "posichain",
    "explorers": [{
        "name": "Posichain Explorer Devnet",
        "url": "https://explorer-devnet.posichain.org",
        "icon": "posichain",
        "standard": "EIP3091"
    }]
}, {
    "name": "Eluvio Content Fabric",
    "chain": "Eluvio",
    "rpc": ["https://host-76-74-28-226.contentfabric.io/eth", "https://host-76-74-28-232.contentfabric.io/eth", "https://host-76-74-29-2.contentfabric.io/eth", "https://host-76-74-29-8.contentfabric.io/eth", "https://host-76-74-29-34.contentfabric.io/eth", "https://host-76-74-29-35.contentfabric.io/eth", "https://host-154-14-211-98.contentfabric.io/eth", "https://host-154-14-192-66.contentfabric.io/eth", "https://host-60-240-133-202.contentfabric.io/eth", "https://host-64-235-250-98.contentfabric.io/eth"],
    "faucets": [],
    "nativeCurrency": {"name": "ELV", "symbol": "ELV", "decimals": 18},
    "infoURL": "https://eluv.io",
    "shortName": "elv",
    "chainId": 955305,
    "networkId": 955305,
    "slip44": 1011,
    "explorers": [{"name": "blockscout", "url": "https://explorer.eluv.io", "standard": "EIP3091"}]
}, {
    "name": "Etho Protocol",
    "chain": "ETHO",
    "rpc": ["https://rpc.ethoprotocol.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Etho Protocol", "symbol": "ETHO", "decimals": 18},
    "infoURL": "https://ethoprotocol.com",
    "shortName": "etho",
    "chainId": 1313114,
    "networkId": 1313114,
    "slip44": 1313114,
    "explorers": [{"name": "blockscout", "url": "https://explorer.ethoprotocol.com", "standard": "none"}]
}, {
    "name": "Xerom",
    "chain": "XERO",
    "rpc": ["https://rpc.xerom.org"],
    "faucets": [],
    "nativeCurrency": {"name": "Xerom Ether", "symbol": "XERO", "decimals": 18},
    "infoURL": "https://xerom.org",
    "shortName": "xero",
    "chainId": 1313500,
    "networkId": 1313500
}, {
    "name": "Kintsugi",
    "title": "Kintsugi merge testnet",
    "chain": "ETH",
    "rpc": ["https://rpc.kintsugi.themerge.dev"],
    "faucets": ["http://fauceth.komputing.org?chain=1337702&address=${ADDRESS}", "https://faucet.kintsugi.themerge.dev"],
    "nativeCurrency": {"name": "kintsugi Ethere", "symbol": "kiETH", "decimals": 18},
    "infoURL": "https://kintsugi.themerge.dev/",
    "shortName": "kintsugi",
    "chainId": 1337702,
    "networkId": 1337702,
    "explorers": [{"name": "kintsugi explorer", "url": "https://explorer.kintsugi.themerge.dev", "standard": "EIP3091"}]
}, {
    "name": "Kiln",
    "chain": "ETH",
    "rpc": ["https://rpc.kiln.themerge.dev"],
    "faucets": ["https://faucet.kiln.themerge.dev", "https://kiln-faucet.pk910.de", "https://kilnfaucet.com"],
    "nativeCurrency": {"name": "Testnet ETH", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://kiln.themerge.dev/",
    "shortName": "kiln",
    "chainId": 1337802,
    "networkId": 1337802,
    "icon": "ethereum",
    "explorers": [{
        "name": "Kiln Explorer", "url": "https://explorer.kiln.themerge.dev", "icon": "ethereum", "standard": "EIP3091"
    }]
}, {
    "name": "Plian Mainnet Main",
    "chain": "Plian",
    "rpc": ["https://mainnet.plian.io/pchain"],
    "faucets": [],
    "nativeCurrency": {"name": "Plian Token", "symbol": "PI", "decimals": 18},
    "infoURL": "https://plian.org/",
    "shortName": "plian-mainnet",
    "chainId": 2099156,
    "networkId": 2099156,
    "explorers": [{"name": "piscan", "url": "https://piscan.plian.org/pchain", "standard": "EIP3091"}]
}, {
    "name": "PlatON Dev Testnet",
    "chain": "PlatON",
    "rpc": ["https://devnetopenapi2.platon.network/rpc", "wss://devnetopenapi2.platon.network/ws"],
    "faucets": ["https://faucet.platon.network/faucet/?id=e5d32df10aee11ec911142010a667c03"],
    "nativeCurrency": {"name": "LAT", "symbol": "lat", "decimals": 18},
    "infoURL": "https://www.platon.network",
    "shortName": "platondev",
    "chainId": 2203181,
    "networkId": 1,
    "icon": "platon",
    "explorers": [{"name": "PlatON explorer", "url": "https://devnetscan.platon.network", "standard": "none"}]
}, {
    "name": "PlatON Dev Testnet2",
    "chain": "PlatON",
    "rpc": ["https://devnet2openapi.platon.network/rpc", "wss://devnet2openapi.platon.network/ws"],
    "faucets": ["https://devnet2faucet.platon.network/faucet"],
    "nativeCurrency": {"name": "LAT", "symbol": "lat", "decimals": 18},
    "infoURL": "https://www.platon.network",
    "shortName": "platondev2",
    "chainId": 2206132,
    "networkId": 1,
    "icon": "platon",
    "explorers": [{"name": "PlatON explorer", "url": "https://devnet2scan.platon.network", "standard": "none"}]
}, {
    "name": "Musicoin",
    "chain": "MUSIC",
    "rpc": ["https://mewapi.musicoin.tw"],
    "faucets": [],
    "nativeCurrency": {"name": "Musicoin", "symbol": "MUSIC", "decimals": 18},
    "infoURL": "https://musicoin.tw",
    "shortName": "music",
    "chainId": 7762959,
    "networkId": 7762959,
    "slip44": 184
}, {
    "name": "Plian Mainnet Subchain 1",
    "chain": "Plian",
    "rpc": ["https://mainnet.plian.io/child_0"],
    "faucets": [],
    "nativeCurrency": {"name": "Plian Token", "symbol": "PI", "decimals": 18},
    "infoURL": "https://plian.org",
    "shortName": "plian-mainnet-l2",
    "chainId": 8007736,
    "networkId": 8007736,
    "explorers": [{"name": "piscan", "url": "https://piscan.plian.org/child_0", "standard": "EIP3091"}],
    "parent": {"chain": "eip155-2099156", "type": "L2"}
}, {
    "name": "Plian Testnet Subchain 1",
    "chain": "Plian",
    "rpc": ["https://testnet.plian.io/child_test"],
    "faucets": [],
    "nativeCurrency": {"name": "Plian Token", "symbol": "TPI", "decimals": 18},
    "infoURL": "https://plian.org/",
    "shortName": "plian-testnet-l2",
    "chainId": 10067275,
    "networkId": 10067275,
    "explorers": [{"name": "piscan", "url": "https://testnet.plian.org/child_test", "standard": "EIP3091"}],
    "parent": {"chain": "eip155-16658437", "type": "L2"}
}, {
    "name": "Sepolia",
    "title": "Ethereum Testnet Sepolia",
    "chain": "ETH",
    "rpc": ["https://rpc.sepolia.dev", "https://rpc.sepolia.online", "https://www.sepoliarpc.space", "https://rpc.sepolia.org", "https://rpc-sepolia.rockx.com", "https://nunki.htznr.fault.dev/rpc"],
    "faucets": ["http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"],
    "nativeCurrency": {"name": "Sepolia Ether", "symbol": "SEP", "decimals": 18},
    "infoURL": "https://sepolia.otterscan.io",
    "shortName": "sep",
    "chainId": 11155111,
    "networkId": 11155111,
    "explorers": [{"name": "otterscan-sepolia", "url": "https://sepolia.otterscan.io", "standard": "EIP3091"}]
}, {
    "name": "PepChain Churchill",
    "chain": "PEP",
    "rpc": ["https://churchill-rpc.pepchain.io"],
    "faucets": [],
    "nativeCurrency": {"name": "PepChain Churchill Ether", "symbol": "TPEP", "decimals": 18},
    "infoURL": "https://pepchain.io",
    "shortName": "tpep",
    "chainId": 13371337,
    "networkId": 13371337
}, {
    "name": "Plian Testnet Main",
    "chain": "Plian",
    "rpc": ["https://testnet.plian.io/testnet"],
    "faucets": [],
    "nativeCurrency": {"name": "Plian Testnet Token", "symbol": "TPI", "decimals": 18},
    "infoURL": "https://plian.org",
    "shortName": "plian-testnet",
    "chainId": 16658437,
    "networkId": 16658437,
    "explorers": [{"name": "piscan", "url": "https://testnet.plian.org/testnet", "standard": "EIP3091"}]
}, {
    "name": "IOLite",
    "chain": "ILT",
    "rpc": ["https://net.iolite.io"],
    "faucets": [],
    "nativeCurrency": {"name": "IOLite Ether", "symbol": "ILT", "decimals": 18},
    "infoURL": "https://iolite.io",
    "shortName": "ilt",
    "chainId": 18289463,
    "networkId": 18289463
}, {
    "name": "SmartMesh Mainnet",
    "chain": "Spectrum",
    "rpc": ["https://jsonapi1.smartmesh.cn"],
    "faucets": [],
    "nativeCurrency": {"name": "SmartMesh Native Token", "symbol": "SMT", "decimals": 18},
    "infoURL": "https://smartmesh.io",
    "shortName": "spectrum",
    "chainId": 20180430,
    "networkId": 1,
    "explorers": [{"name": "spectrum", "url": "https://spectrum.pub", "standard": "none"}]
}, {
    "name": "quarkblockchain",
    "chain": "QKI",
    "rpc": ["https://hz.rpc.qkiscan.cn", "https://jp.rpc.qkiscan.io"],
    "faucets": [],
    "nativeCurrency": {"name": "quarkblockchain Native Token", "symbol": "QKI", "decimals": 18},
    "infoURL": "https://quarkblockchain.org/",
    "shortName": "qki",
    "chainId": 20181205,
    "networkId": 20181205
}, {
    "name": "Excoincial Chain Volta-Testnet",
    "chain": "TEXL",
    "icon": "exl",
    "rpc": ["https://testnet-rpc.exlscan.com"],
    "faucets": ["https://faucet.exlscan.com"],
    "nativeCurrency": {"name": "TExlcoin", "symbol": "TEXL", "decimals": 18},
    "infoURL": "",
    "shortName": "exlvolta",
    "chainId": 27082017,
    "networkId": 27082017,
    "explorers": [{
        "name": "exlscan", "url": "https://testnet-explorer.exlscan.com", "icon": "exl", "standard": "EIP3091"
    }]
}, {
    "name": "Excoincial Chain Mainnet",
    "chain": "EXL",
    "icon": "exl",
    "rpc": ["https://rpc.exlscan.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Exlcoin", "symbol": "EXL", "decimals": 18},
    "infoURL": "",
    "shortName": "exl",
    "chainId": 27082022,
    "networkId": 27082022,
    "explorers": [{"name": "exlscan", "url": "https://exlscan.com", "icon": "exl", "standard": "EIP3091"}]
}, {
    "name": "Auxilium Network Mainnet",
    "chain": "AUX",
    "rpc": ["https://rpc.auxilium.global"],
    "faucets": [],
    "nativeCurrency": {"name": "Auxilium coin", "symbol": "AUX", "decimals": 18},
    "infoURL": "https://auxilium.global",
    "shortName": "auxi",
    "chainId": 28945486,
    "networkId": 28945486,
    "slip44": 344
}, {
    "name": "Joys Digital Mainnet",
    "chain": "JOYS",
    "rpc": ["https://node.joys.digital"],
    "faucets": [],
    "nativeCurrency": {"name": "JOYS", "symbol": "JOYS", "decimals": 18},
    "infoURL": "https://joys.digital",
    "shortName": "JOYS",
    "chainId": 35855456,
    "networkId": 35855456
}, {
    "name": "Aquachain",
    "chain": "AQUA",
    "rpc": ["https://c.onical.org", "https://tx.aquacha.in/api"],
    "faucets": ["https://aquacha.in/faucet"],
    "nativeCurrency": {"name": "Aquachain Ether", "symbol": "AQUA", "decimals": 18},
    "infoURL": "https://aquachain.github.io",
    "shortName": "aqua",
    "chainId": 61717561,
    "networkId": 61717561,
    "slip44": 61717561
}, {
    "name": "Joys Digital TestNet",
    "chain": "TOYS",
    "rpc": ["https://toys.joys.cash/"],
    "faucets": ["https://faucet.joys.digital/"],
    "nativeCurrency": {"name": "TOYS", "symbol": "TOYS", "decimals": 18},
    "infoURL": "https://joys.digital",
    "shortName": "TOYS",
    "chainId": 99415706,
    "networkId": 99415706
}, {
    "name": "Gather Mainnet Network",
    "chain": "GTH",
    "rpc": ["https://mainnet.gather.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Gather", "symbol": "GTH", "decimals": 18},
    "infoURL": "https://gather.network",
    "shortName": "GTH",
    "chainId": 192837465,
    "networkId": 192837465,
    "explorers": [{"name": "Blockscout", "url": "https://explorer.gather.network", "standard": "none"}]
}, {
    "name": "Neon EVM DevNet",
    "chain": "Solana",
    "rpc": ["https://devnet.neonevm.org", "https://proxy.devnet.neonlabs.org/solana"],
    "faucets": ["https://neonfaucet.org"],
    "icon": "neon",
    "nativeCurrency": {"name": "Neon", "symbol": "NEON", "decimals": 18},
    "infoURL": "https://neon-labs.org",
    "shortName": "neonevm-devnet",
    "chainId": 245022926,
    "networkId": 245022926,
    "explorers": [{
        "name": "native", "url": "https://devnet.explorer.neon-labs.org", "standard": "EIP3091"
    }, {"name": "neonscan", "url": "https://devnet.neonscan.org", "standard": "EIP3091"}]
}, {
    "name": "Neon EVM MainNet",
    "chain": "Solana",
    "rpc": ["https://mainnet.neonevm.org", "rpcWorking:false"],
    "faucets": [],
    "icon": "neon",
    "nativeCurrency": {"name": "Neon", "symbol": "NEON", "decimals": 18},
    "infoURL": "https://neon-labs.org",
    "shortName": "neonevm-mainnet",
    "chainId": 245022934,
    "networkId": 245022934,
    "explorers": [{
        "name": "native", "url": "https://mainnet.explorer.neon-labs.org", "standard": "EIP3091"
    }, {"name": "neonscan", "url": "https://mainnet.neonscan.org", "standard": "EIP3091"}]
}, {
    "name": "Neon EVM TestNet",
    "chain": "Solana",
    "rpc": ["https://testnet.neonevm.org"],
    "faucets": [],
    "icon": "neon",
    "nativeCurrency": {"name": "Neon", "symbol": "NEON", "decimals": 18},
    "infoURL": "https://neon-labs.org",
    "shortName": "neonevm-testnet",
    "chainId": 245022940,
    "networkId": 245022940,
    "explorers": [{
        "name": "native", "url": "https://testnet.explorer.neon-labs.org", "standard": "EIP3091"
    }, {"name": "neonscan", "url": "https://testnet.neonscan.org", "standard": "EIP3091"}]
}, {
    "name": "OneLedger Mainnet",
    "chain": "OLT",
    "icon": "oneledger",
    "rpc": ["https://mainnet-rpc.oneledger.network"],
    "faucets": [],
    "nativeCurrency": {"name": "OLT", "symbol": "OLT", "decimals": 18},
    "infoURL": "https://oneledger.io",
    "shortName": "oneledger",
    "chainId": 311752642,
    "networkId": 311752642,
    "explorers": [{
        "name": "OneLedger Block Explorer", "url": "https://mainnet-explorer.oneledger.network", "standard": "EIP3091"
    }]
}, {
    "name": "Gather Testnet Network",
    "chain": "GTH",
    "rpc": ["https://testnet.gather.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Gather", "symbol": "GTH", "decimals": 18},
    "infoURL": "https://gather.network",
    "shortName": "tGTH",
    "chainId": 356256156,
    "networkId": 356256156,
    "explorers": [{"name": "Blockscout", "url": "https://testnet-explorer.gather.network", "standard": "none"}]
}, {
    "name": "Gather Devnet Network",
    "chain": "GTH",
    "rpc": ["https://devnet.gather.network"],
    "faucets": [],
    "nativeCurrency": {"name": "Gather", "symbol": "GTH", "decimals": 18},
    "infoURL": "https://gather.network",
    "shortName": "dGTH",
    "chainId": 486217935,
    "networkId": 486217935,
    "explorers": [{"name": "Blockscout", "url": "https://devnet-explorer.gather.network", "standard": "none"}]
}, {
    "name": "IPOS Network",
    "chain": "IPOS",
    "rpc": ["https://rpc.iposlab.com", "https://rpc2.iposlab.com"],
    "faucets": [],
    "nativeCurrency": {"name": "IPOS Network Ether", "symbol": "IPOS", "decimals": 18},
    "infoURL": "https://iposlab.com",
    "shortName": "ipos",
    "chainId": 1122334455,
    "networkId": 1122334455
}, {
    "name": "Aurora Testnet",
    "chain": "NEAR",
    "rpc": ["https://testnet.aurora.dev/"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://aurora.dev",
    "shortName": "aurora-testnet",
    "chainId": 1313161555,
    "networkId": 1313161555,
    "explorers": [{"name": "aurorascan.dev", "url": "https://testnet.aurorascan.dev", "standard": "EIP3091"}]
}, {
    "name": "Aurora Betanet",
    "chain": "NEAR",
    "rpc": ["https://betanet.aurora.dev", "http://localhost:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "Ether", "symbol": "ETH", "decimals": 18},
    "infoURL": "https://aurora.dev",
    "shortName": "aurora-betanet",
    "chainId": 1313161556,
    "networkId": 1313161556
}, {
    "name": "Harmony Mainnet Shard 1",
    "chain": "Harmony",
    "rpc": ["https://api.s1.t.hmny.io", "https://s1.api.harmony.one"],
    "faucets": [],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-s1",
    "chainId": 1666600001,
    "networkId": 1666600001
}, {
    "name": "Harmony Mainnet Shard 2",
    "chain": "Harmony",
    "rpc": ["https://api.s2.t.hmny.io", "https://s2.api.harmony.one"],
    "faucets": [],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-s2",
    "chainId": 1666600002,
    "networkId": 1666600002
}, {
    "name": "Harmony Mainnet Shard 3",
    "chain": "Harmony",
    "rpc": ["https://api.s3.t.hmny.io"],
    "faucets": [],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-s3",
    "chainId": 1666600003,
    "networkId": 1666600003
}, {
    "name": "Harmony Testnet Shard 0",
    "chain": "Harmony",
    "rpc": ["https://api.s0.b.hmny.io"],
    "faucets": ["https://faucet.pops.one"],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-b-s0",
    "chainId": 1666700000,
    "networkId": 1666700000,
    "explorers": [{"name": "Harmony Testnet Block Explorer", "url": "https://explorer.pops.one", "standard": "EIP3091"}]
}, {
    "name": "Harmony Testnet Shard 1",
    "chain": "Harmony",
    "rpc": ["https://api.s1.b.hmny.io"],
    "faucets": [],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-b-s1",
    "chainId": 1666700001,
    "networkId": 1666700001
}, {
    "name": "Harmony Testnet Shard 2",
    "chain": "Harmony",
    "rpc": ["https://api.s2.b.hmny.io"],
    "faucets": [],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-b-s2",
    "chainId": 1666700002,
    "networkId": 1666700002
}, {
    "name": "Harmony Testnet Shard 3",
    "chain": "Harmony",
    "rpc": ["https://api.s3.b.hmny.io"],
    "faucets": [],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-b-s3",
    "chainId": 1666700003,
    "networkId": 1666700003
}, {
    "name": "Harmony Devnet Shard 0",
    "chain": "Harmony",
    "rpc": ["https://api.s1.ps.hmny.io", "https://api.s1.ps.hmny.io"],
    "faucets": ["http://dev.faucet.easynode.one/"],
    "nativeCurrency": {"name": "ONE", "symbol": "ONE", "decimals": 18},
    "infoURL": "https://www.harmony.one/",
    "shortName": "hmy-ps-s0",
    "chainId": 1666900000,
    "networkId": 1666900000,
    "explorers": [{"name": "Harmony Block Explorer", "url": "https://explorer.ps.hmny.io", "standard": "EIP3091"}]
}, {
    "name": "DataHopper",
    "chain": "HOP",
    "rpc": ["https://23.92.21.121:8545"],
    "faucets": [],
    "nativeCurrency": {"name": "DataHoppers", "symbol": "HOP", "decimals": 18},
    "infoURL": "https://www.DataHopper.com",
    "shortName": "hop",
    "chainId": 2021121117,
    "networkId": 2021121117
}, {
    "name": "Pirl",
    "chain": "PIRL",
    "rpc": ["https://wallrpc.pirl.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Pirl Ether", "symbol": "PIRL", "decimals": 18},
    "infoURL": "https://pirl.io",
    "shortName": "pirl",
    "chainId": 3125659152,
    "networkId": 3125659152,
    "slip44": 164
}, {
    "name": "OneLedger Testnet Frankenstein",
    "chain": "OLT",
    "icon": "oneledger",
    "rpc": ["https://frankenstein-rpc.oneledger.network"],
    "faucets": ["https://frankenstein-faucet.oneledger.network"],
    "nativeCurrency": {"name": "OLT", "symbol": "OLT", "decimals": 18},
    "infoURL": "https://oneledger.io",
    "shortName": "frankenstein",
    "chainId": 4216137055,
    "networkId": 4216137055,
    "explorers": [{
        "name": "OneLedger Block Explorer",
        "url": "https://frankenstein-explorer.oneledger.network",
        "standard": "EIP3091"
    }]
}, {
    "name": "Palm Testnet",
    "chain": "Palm",
    "icon": "palm",
    "rpc": [
        "https://palm-testnet.infura.io/v3/${INFURA_API_KEY}"
    ],
    "faucets": [],
    "nativeCurrency": {"name": "PALM", "symbol": "PALM", "decimals": 18},
    "infoURL": "https://palm.io",
    "shortName": "tpalm",
    "chainId": 11297108099,
    "networkId": 11297108099,
    "explorers": [{
        "name": "Palm Testnet Explorer", "url": "https://explorer.palm-uat.xyz", "standard": "EIP3091", "icon": "palm"
    }]
}, {
    "name": "Ntity Mainnet",
    "chain": "Ntity",
    "rpc": ["https://rpc.ntity.io"],
    "faucets": [],
    "nativeCurrency": {"name": "Ntity", "symbol": "NTT", "decimals": 18},
    "infoURL": "https://ntity.io",
    "shortName": "ntt",
    "chainId": 197710212030,
    "networkId": 197710212030,
    "icon": "ntity",
    "explorers": [{
        "name": "Ntity Blockscout", "url": "https://blockscout.ntity.io", "icon": "ntity", "standard": "EIP3091"
    }]
}, {
    "name": "Haradev Testnet",
    "chain": "Ntity",
    "rpc": ["https://blockchain.haradev.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Ntity Haradev", "symbol": "NTTH", "decimals": 18},
    "infoURL": "https://ntity.io",
    "shortName": "ntt-haradev",
    "chainId": 197710212031,
    "networkId": 197710212031,
    "icon": "ntity",
    "explorers": [{
        "name": "Ntity Haradev Blockscout",
        "url": "https://blockscout.haradev.com",
        "icon": "ntity",
        "standard": "EIP3091"
    }]
}, {
    "name": "Molereum Network",
    "chain": "ETH",
    "rpc": ["https://molereum.jdubedition.com"],
    "faucets": [],
    "nativeCurrency": {"name": "Molereum Ether", "symbol": "MOLE", "decimals": 18},
    "infoURL": "https://github.com/Jdubedition/molereum",
    "shortName": "mole",
    "chainId": 6022140761023,
    "networkId": 6022140761023
}, {
    "name": "Godwoken Testnet (V1)",
    "chain": "GWT",
    "rpc": ["https://godwoken-testnet-web3-v1-rpc.ckbapp.dev"],
    "faucets": ["https://homura.github.io/light-godwoken"],
    "nativeCurrency": {"name": "CKB", "symbol": "CKB", "decimals": 8},
    "infoURL": "https://www.nervos.org",
    "shortName": "gw-testnet-v1-deprecated",
    "chainId": 868455272153094,
    "networkId": 868455272153094,
    "status": "deprecated",
    "explorers": [{"name": "GWScan Block Explorer", "url": "https://v1.aggron.gwscan.com", "standard": "none"}]
},{
    name: "xrp (not found chain)",
    chain: 'xrp',
    rpc: [],
    chainId: 'xrp',
    shortName: 'xrp',
    nativeCurrency: {symbol: 'xrp'}
},{
        "name": "Ronin Mainnet",
        "chain": "Ronin",
        "rpc": ["https://api.roninchain.com/rpc"],
        "faucets": [],
        "nativeCurrency": {"name": "", "symbol": "RON", "decimals": 18},
        "infoURL": "",
        "shortName": "Ronin",
        "chainId": 2020,
        "networkId": 2020,
        "explorers": [{"name": "", "url": "https://explorer.roninchain.com/", "standard": ""}]
},{
    name: "columbus-5 (not found chain)",
    chain: 'columbus-5',
    rpc: [],
    chainId: 'columbus-5',
    shortName: 'columbus-5',
    nativeCurrency: {symbol: 'columbus-5'}
},
    {
        "name": "ethw",
        "chain": "ethw",
        "rpc": ["https://mainnet.ethereumpow.org"],
        "faucets": [],
        "nativeCurrency": {"name": "ethw", "symbol": "ethw", "decimals": 18},
        "infoURL": "http://smartbch.org/",
        "shortName": "smartbchtest",
        "chainId": 10001,
        "networkId": 10001,
        "explorers": [{"name": "ethw Explorer", "url": "https://www.oklink.com/en/eth", "standard": "none"}]
    },
];

module.exports = {
    OUTER_CHAIN_LIST
}

/**
 {
        "name": "",
        "chain": "",
        "rpc": [""],
        "faucets": [],
        "nativeCurrency": {"name": "", "symbol": "", "decimals": 0},
        "infoURL": "",
        "shortName": "",
        "chainId": 0,
        "networkId": 0,
        "explorers": [{"name": "", "url": "", "standard": ""}]
    },
 * */
