const {renderView} = require("../monitor/viewEngin");
const {monitorColumns} = require("../monitor/monitorColumns");
const express = require("express");
const router = express.Router();
const {analysis} = require('../monitor/index')
router.get('/view', function (req, res){
    let theme = "未到账交易监控"
    analysis().then(({
                         showList,
                         statistics,
                         recordInTimeText,
                         recordInTime,
                         topListNumber,
                         timeOutValue,
                     }) => {
        let html = renderView({
            showList: showList,
            columns: monitorColumns,
            statistics: statistics,
            title: theme,
            recordInTimeText: recordInTimeText,
            recordInTime: recordInTime,
            topListNumber: topListNumber,
            timeOutValue: timeOutValue
        });
        res.send(html)
    })

})

module.exports = {
    router
}
