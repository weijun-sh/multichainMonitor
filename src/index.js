const {monitorColumns} = require("./monitor/monitorColumns");
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
var {MAINTENANCE_CONF} = require('./config/index')
const {renderView} = require("./monitor/viewEngin");
const {analysis} = require("./monitor");
const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// 解析 application/json
app.use(bodyParser.json({limit: '50mb'}));
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));

app.all("*", function (req, res, next) {
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers', 'content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    if (req.method.toLowerCase() === 'options')
        res.send(200); // 让options 尝试请求快速结束
    else
        next();
})

app.get('/view', function (req, res){
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


app.listen(MAINTENANCE_CONF.SERVER_PORT, function () {
    console.log("start ==>", new Date().toLocaleString())
});
