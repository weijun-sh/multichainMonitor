var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var axios = require('axios');
let nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
var {EmailConfig, EmailReceiverList} = require('./staticConfig')
app.use(express.static(path.join(__dirname, 'dist')));

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

let transporter = nodemailer.createTransport({
    host: 'smtp.163.com:465',
    service: "163", //邮箱类型 例如service:'163'
    secure: true, //是否使用安全连接，对https协议的
    port: 465, //qq邮件服务所占用的端口
    auth: {
        user: EmailConfig.auth_user,//开启SMTP的邮箱，发件人
        pass: EmailConfig.auth_pass// qq授权码
    }
})

app.post('/send/email', function (req, res) {
    const {subject, to, html, cc} = req.body;
    let options = {};
    options.subject = subject;
    options.to = to;
    options.html = html;
    options.cc = cc;
    options.from = EmailConfig.from;
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log("发送失败", err);
            res.send({
                code: 1,
                data: null,
                msg: '发送失败'
            })
        } else {
            console.log("发送成功")
            res.send({
                code: 0,
                data: null,
                msg: '发送成功'
            })
        }
    })
});

app.post('/add/todolist', function (req, res) {

    let time = new Date().getTime();
    let filePath = path.join(__dirname, "filelist", String(time))
    fs.writeFile(filePath, JSON.stringify(req.body), function (err) {
        if (err) {
            res.send({
                code: 1,
                data: err,
                msg: 'err'
            })
            return;
        }
        res.send({
            code: 0,
            data: null,
            msg: 'success'
        })
    })

});

app.get('/get/todolist', function (req, res) {
    let dirPath = path.join(__dirname, "filelist");


    let dirs = fs.readdirSync(dirPath)
    let list = dirs.map((filename, index) => {
        let filePath = path.join(__dirname, "filelist", filename);

        let content = fs.readFileSync(filePath)
        content = JSON.parse(content.toString())
        content.id = filename;

        return content;
    })

    res.send({
        code: 0,
        data: list,
        msg: 'success'
    })
});

app.post('/delete/todolist', function (req, res) {
    let id = req.body.id;
    console.log("id ==>", req.body)
    let filePath = path.join(__dirname, "filelist", id);
    fs.unlink(filePath, function (err){
        if(err){
            res.send({
                code: 1,
                data: err,
                msg: '删除失败'
            })
            return
        }
        res.send({
            code: 0,
            data: null,
            msg: 'success'
        })
    });


});

app.get("/email/receivers", function (req, res) {
    res.send({
        code: 0,
        data: EmailReceiverList,
        msg: 'success'
    })
})


app.listen(20520, function () {
});
