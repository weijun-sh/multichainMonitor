const {EmailConfig, EmailReceiverList} = require("../staticConfig");
const path = require("path");
const fs = require("fs");
const {emailTransporter} = require("../utils/email");

let express = require('express');
let router = express.Router();

router.post('/send', function (req, res) {
    const {subject, to, html, cc} = req.body;
    let options = {};
    options.subject = subject;
    options.to = to;
    options.html = html;
    options.cc = cc;
    options.from = EmailConfig.from;
    emailTransporter.sendMail(options, (err, info) => {
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

router.post('/add', function (req, res) {

    let time = new Date().getTime() + "";
    let filePath = path.join(__dirname, "loglist", String(time));
    let content = req.body;
    content.id = time;

    fs.writeFile(filePath, JSON.stringify(content), function (err) {
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

router.get('/get', function (req, res) {
    let dirPath = path.join(__dirname, "loglist");


    let dirs = fs.readdirSync(dirPath)
    let list = dirs.map((filename, index) => {
        let filePath = path.join(__dirname, "loglist", filename);

        let content = fs.readFileSync(filePath)
        content = JSON.parse(content.toString())

        return content;
    })

    res.send({
        code: 0,
        data: list,
        msg: 'success'
    })
});

router.post('/delete', function (req, res) {
    let id = req.body.id;
    console.log("id ==>", req.body)
    let filePath = path.join(__dirname, "loglist", id+"");

    let content = fs.readFileSync(filePath)
    content = JSON.parse(content.toString())
    content.isDeleted = true;

    fs.writeFile(filePath, JSON.stringify(content), function (err) {
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

router.get("/receivers", function (req, res) {
    res.send({
        code: 0,
        data: EmailReceiverList,
        msg: 'success'
    })
})

module.exports = router;
