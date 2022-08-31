const {getTopList} = require("./arrays");
var moment = require('moment');
const Types = {
    IN: 'swapin',
    OUT: 'swapout',
    Router: 'router'
}
function renderView(datasource) {
    const {showList, columns, title, statistics, recordInTimeText, topListNumber, timeOutValue, recordInTime} = datasource;
    const {group, total} = statistics;

    let tdStyle=`style="padding: 2px 4px;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;font-size: 12px;"`
    let titles = columns.map(item => {
        return `<td ${tdStyle}>${item.title}</td>`
    }).join("")

    console.log("构造 table ==>")
    //only show front 10 records
    let rows = getTopList(showList, topListNumber).map(record => {

        let tds = columns.map(item => {
            if (record[item.dataIndex]) {
                let td = `<td ${tdStyle}>${record[item.dataIndex].text}</td>`;
                return td
            }
            return ''
        }).join('')

        return `<tr>${tds}</tr>`
    }).join('')

    let sta = Object.keys(Types).map(type => {
        let value = group[type];
        let length = 0;
        if(value){
            length = value.length;
        }
        return `<li>${Types[type]}: ${length}</li>`
    }).join("");

    function formatDuring(time){
        return time.toString().replace('PT', '').toLowerCase()
    }

    console.log("成功构建html ==>")
    let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
            </head>
            <style>
            </style>
            <body>
                <h3>${title}</h3>
                <div style="background: blanchedalmond;padding: 10px;border-radius: 10px;margin-bottom: 10px;">
                    <div style="font-size: 13px">共计: ${total}条记录 </div>
                    <ol style="font-size: 13px; margin-top: 4px">
                        ${sta}
                    </ol>
                    <div style="font-size: 12px">
                        ${formatDuring(moment.duration(recordInTime, 'hours'))}内, 
                        超过${formatDuring(moment.duration(timeOutValue, 'milliseconds').humanize())} 未到账统计
                    </div>
                    <a style="font-size: 12px" href="http://1.15.228.87:20520/#/transition/unascertained">监控运维系统-未到账复查</a>
                    <div style="color: cornflowerblue; font-size: 12px">统计时间: ${moment().format('YYYY-MM-DD HH:mm:ss')}</div>
                </div>
                <span style="font-size: 12px">仅展示前${topListNumber}条记录</span>
                <table style="border-top: 1px solid #ccc;border-left: 1px solid #ccc;">
                    <thead style="background: antiquewhite">
                        <tr>
                        ${titles}
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
                <footer style="font-size: 12px; margin-top: 10px; width: 100vw;text-align: center">
                    Copyright © 2022 Multichain 监控运维系统 All rights reserved.
                </footer>
            </body>
            </html>
    
        `
    return html
}


module.exports = {
    renderView
}

