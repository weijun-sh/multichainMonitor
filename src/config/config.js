const {ONE_MINUTE, ONE_HOUR} = require("../const/timeValue");


const MAINTENANCE_CONF = {
    RECORD_THRESHOLD: 2,
    TO_LIST : ["zhangguozeQQ", "zhangguoze163"],
    TIMEOUT_VALUE: ONE_MINUTE * 15,
    NOT_OVER_TIME: 24 * ONE_HOUR,
    TOP_LIST_NUMBER: 20,
    MONITOR_INTERVAL: ONE_HOUR
}

const SERVER_URL = {
    URL_MAINTENANCE: 'http://112.74.110.203:20522/rpc',
    URL_EMAIL : 'http://127.0.0.1:7777',
}

module.exports = {
    MAINTENANCE_CONF,
    SERVER_URL
}
