var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var axios = require('axios');
let nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
const {getUnList} = require('./monitor/index')
var {EmailConfig, EmailReceiverList} = require('./staticConfig')
app.use(express.static(path.join(__dirname, 'dist')));
let todoModule = require('./routers/todo')
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
    if (req.method.toLowerCase() == 'options')
        res.send(200); // 让options 尝试请求快速结束
    else
        next();
})

app.use('/todo', todoModule)



app.listen(20520, function () {
});
