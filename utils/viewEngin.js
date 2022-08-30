const path = require("path")
const fs = require('fs');
const art = require('art-template');

function renderView(){
    return new Promise((resolve, reject) => {
        let filePath = path.join(__dirname, '../views/arrivalTimeout.html')
        fs.readFile(filePath, (err, data) => {
            if(err){
                console.log("read error ==>", err)
                reject(err)
                return;
            }
            let html = art.render(data.toString(), {

            })
            resolve(html)
        })
    })
}

module.exports = {
    renderView
}

