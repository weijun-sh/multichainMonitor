
function toChainLink({hash, chainid, bridge}) {
    if (!hash) {
        return null
    }
    let bridgeParam = '';
    let chainParam = '';
    let hashParam = '';
    if(bridge){
        bridgeParam = `&bridge=${bridge}`
    }
    if(chainid){
        chainParam = `&chainid=${chainid}`
    }
    hashParam = `hash=${hash}`
    let href = `http://1.15.228.87:20520/transition/chain?${hashParam}${chainParam}${bridgeParam}`;
    return href
}

let monitorColumns = [{
    title: "#",
    dataIndex: "rowKey",
    key: "rowKey",
    csvWidth: 4,
    render: (text, record) => {
        return record.rowKey
    }
}, {
    title: '桥或路由',
    dataIndex: 'bridge',
    key: 'bridge',
    render: (text, record) => {
        return record.bridge
    }
}, {
    title: '更新时间',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: (text, record) => {
        return `${record.diffText} <br/>${record.timestampText}`
    }
}, {
    title: "注册时间",
    dataIndex: 'inittime',
    key: 'inittime',
    render: (text, record) => {
        return `${record.initFromNowText} ago<br/>${record.inittimeText}`
    }
}/*, {
    title: "详情",
    dataIndex: 'detail',
    key: 'detail',
    render: (text, record) => {
        const {txid, fromChainID, bridge} = record
        //console.log("record ==>", record)
        let href =toChainLink({
            hash: txid,
            chainid: fromChainID,
            bridge: bridge.data
        });
        //console.log("href ==>", href, bridge.data)
        return `<a  href=${href}>详情</a>`
    }
}*/];

module.exports = {
    monitorColumns
}
