const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const {MAINTENANCE_CONF} = require('./config/index')
const chainlist = require('./chainlist/index')
const {StorageTesting} = require("./fileStorage/index");
//const monitor = require("./monitor/index")
const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use('/chainlist',chainlist.router)

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
    if (req.method.toLowerCase() === 'options'){
        res.send(200); // 让options 尝试请求快速结束
    }
    else{
        next();
    }
})

StorageTesting()


app.listen(MAINTENANCE_CONF.SERVER_PORT, function () {
    console.log("start ==>", new Date().toLocaleString())
});
