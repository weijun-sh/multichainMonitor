var express = require('express');
var path = require('path');
var app = express();
var axios = require('axios');
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'test')));
let proxyPrometheus = require('./proxy-prometheus')
const viewsPath = path.join(__dirname, 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
let access = 'admin';
const getAccess = () => {
  return access;
}; // 代码中会兼容本地 service mock 以及部署站点的静态数据

proxyPrometheus.init(app).proxy()

app.listen(20500, function () {});
