const path = require("path");
const express = require("express");
const axios = require("axios");
const fs = require("fs");

const staticPath = path.join(__dirname,'static');

let proxy = {
    app: null,
    init: function (app){
        this.app = app;
        app.use(express.static(staticPath));
        app.get('/webview/9090', function (req, res){
            axios.get(`http://localhost:9090`).then((result) => {
                console.log("home page ==>")
                res.send(result.data)
            }).catch(() => {
                res.send("error")
            })
        })

        app.get('/webview/*', function (req, res){
            let {originalUrl} = req;
            originalUrl = originalUrl.replace('\/webview', '');
            originalUrl = originalUrl.replace('\/9090', '');
            console.log("org ==>", originalUrl)
            let source = `http://localhost:9090${originalUrl}`
            console.log("get ==>", originalUrl, source);
            axios.get(source).then((result) => {
                console.log("originalUrl ==>", originalUrl)
                if(originalUrl.indexOf('static') !== -1){
                    let noStaticPath = originalUrl.replace('\/static', '');
                    let targetPath = path.join(staticPath, noStaticPath);
                    console.log('url ==>', originalUrl);
                    console.log('targetPath ==>', targetPath);

                    fs.writeFileSync(targetPath, result.data)
                    res.sendFile(targetPath);
                    return;
                }
                res.send(result.data)
            }).catch((err) => {
                res.send("error" + err.toString())
            })

        });
        return this;
    },
    proxy: function (){

    }
}

module.exports = proxy;
