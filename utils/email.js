const nodemailer = require("nodemailer");
const {EmailConfig} = require("../staticConfig");

let emailTransporter = nodemailer.createTransport({
    host: 'smtp.163.com:465',
    service: "163", //邮箱类型 例如service:'163'
    secure: true, //是否使用安全连接，对https协议的
    port: 465, //qq邮件服务所占用的端口
    auth: {
        user: EmailConfig.auth_user,//开启SMTP的邮箱，发件人
        pass: EmailConfig.auth_pass// qq授权码
    }
})


module.exports = {
    emailTransporter
}
