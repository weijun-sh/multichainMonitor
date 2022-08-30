const path = require("path")
const fs = require('fs');
const art = require('art-template');

function renderView(templatePath, datasource){
    return new Promise((resolve, reject) => {

        fs.readFile(templatePath, (err, data) => {
            if(err){
                console.log("read error ==>", err)
                reject(err)
                return;
            }
            let html = art.render(data.toString(), datasource)
            resolve(html)
        })
    })
}

module.exports = {
    renderView
}

