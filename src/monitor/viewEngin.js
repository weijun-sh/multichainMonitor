var moment = require('moment');

function renderView(datasource) {
    const {showList, columns, title, statistics, topListNumber, timeOutValue, recordInTime} = datasource;
    const {group, total} = statistics;

    let tdStyle=`style="padding: 2px 4px;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;font-size: 12px;"`
    let titles = columns.map(item => {
        return `<td ${tdStyle}>${item.title}</td>`
    }).join("")

    //console.log("构造 table ==>")
    //only show front 10 records
    let rows = showList.map(record => {

        let tds = columns.map(item => {
            if (record[item.dataIndex]) {
                let td = `<td ${tdStyle}>${record[item.dataIndex].text}</td>`;
                return td
            }
            return ''
        }).join('')

        return `<tr>${tds}</tr>`
    }).join('')

    let bridgeNumbers = 0;
    let routerNumbers = 0;
    if(group.IN){
        bridgeNumbers += group.IN.length
    }
    if(group.OUT){
        bridgeNumbers += group.OUT.length
    }
    if(group.Router){
        routerNumbers += group.Router.length
    }

    let summarySta = `
        <li>bridge: ${bridgeNumbers}</li>
        <li>router: ${routerNumbers}</li>
    `

    function formatDuring(time){
        return time.toString().replace('PT', '').toLowerCase()
    }

    console.log("成功构建html ==>");

    let hiddenTable =  `display: ${showList.length > 0 ?'table': 'none'}`;

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
                        ${summarySta}
                    </ol>
                    <div style="font-size: 12px">
                        说明:${formatDuring(moment.duration(recordInTime, 'hours'))}内, 
                        超过${formatDuring(moment.duration(timeOutValue, 'milliseconds').humanize())}(非Anycall) 未到账统计
                    </div>
                    <span style="font-size: 12px">请点击</span>
                    <a style="font-size: 12px" href="http://1.15.228.87:20520/#/transition/unascertained">
                        监控运维系统-未到账复查
                    </a>
                    <span style="font-size: 12px">查看详情</span>
                    
                </div>
                <br/>
                <table style="border-top: 1px solid #ccc;border-left: 1px solid #ccc;${hiddenTable}">
                    <thead style="background: antiquewhite">
                        <tr>
                        ${titles}
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
                <div style="color: cornflowerblue; font-size: 12px">统计时间: ${moment().format('YYYY-MM-DD HH:mm:ss')}</div>
                <footer style="font-size: 12px; margin-top: 10px; width: 100vw;text-align: center">
                     Multichain 监控运维系统 
                </footer>
            </body>
            </html>
    
        `
    return html
}


module.exports = {
    renderView
}

