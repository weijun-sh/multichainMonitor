const {monitorColumns} = require("./monitor/monitorColumns");
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'dist')));
let todoModule = require('./routers/todo')
const {renderView} = require("./utils/viewEngin");
const {analysis} = require("./monitor");
const {sendTimeoutEmail} = require("./monitor/utils");
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

app.get('/view', function (req, res){
    let filePath = path.join(__dirname, './views/arrivalTimeout.html');

    analysis().then(list => {
        list = list.map((item, index) => {
            item.rowKey = index + 1;
            return item
        });
        let showList = [];
        showList = list.map(item => {
            let record = {
                ...item
            }
            monitorColumns.forEach(cItem => {
                let value = record[cItem.dataIndex];
                let text = cItem.render(value, record);
                record[cItem.dataIndex] = {
                    data: value,
                    text: text
                }
            })
            showList.push(record)
            return record;
        });

        renderView(filePath, {
            list: showList,
            columns: monitorColumns
        }).then((html) => {
            res.send(html)
            sendTimeoutEmail(html)
        })
    })

})

app.use('/todo', todoModule)



app.listen(20520, function () {
});
