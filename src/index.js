const express = require('express');
const app = express();
const path = require('path');
const {MAINTENANCE_CONF} = require('./config/index')

const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

const fileStorage = require('./fileStorage/index');
fileStorage.systemStorageInit()

const bodyParser = require('body-parser')

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

const monitorRouter = require('./routers/monitorRouter')
const storageRouter = require('./routers/storageRouter')
const chainRouter = require('./routers/chainListRouter')
const chainListTestingRouter = require('./routers/chainListTesting')
app.use('/chainlist',chainRouter.router)
app.use('/storage', storageRouter.router)
app.use('/monitor', monitorRouter.router)
app.use('/chainlistTest', chainListTestingRouter.router)

app.listen(MAINTENANCE_CONF.SERVER_PORT, function () {
    console.log("start ==>", new Date().toLocaleString())
});
