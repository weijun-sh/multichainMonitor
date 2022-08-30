
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
        return `${record.diffText}\n${record.timestampText}`
    }
}, {
    title: "注册时间",
    dataIndex: 'inittime',
    key: 'inittime',
    render: (text, record) => {
        return `${record.initFromNowText} ago\n${record.inittimeText}`
    }
}];

module.exports = {
    monitorColumns
}
