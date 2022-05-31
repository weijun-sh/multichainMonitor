const path = require("path");
const express = require("express");
const axios = require("axios");
const fs = require("fs");

const staticPath = path.join(__dirname,'static');
let html = '<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="shortcut icon" href="./favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/><meta name="theme-color" content="#000000"/><script>const GLOBAL_CONSOLES_LINK="",GLOBAL_AGENT_MODE="false"</script><link rel="manifest" href="./manifest.json" crossorigin="use-credentials"/><title>Prometheus Time Series Collection and Processing Server</title><script defer="defer" src="./static/js/main.b0a7c7cf.js"></script><link href="./static/css/main.faad45b4.css" rel="stylesheet"></head><body class="bootstrap"><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>';

let proxy = {
    app: null,
    init: function (app){
        this.app = app;
        app.use(express.static(staticPath));

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
