
function renderView(datasource) {
    const {list, columns, title} = datasource;

    let tdStyle=`style="padding: 2px 4px;border-bottom: 1px solid #ccc;border-right: 1px solid #ccc;font-size: 12px;"`
    let titles = columns.map(item => {
        return `<td ${tdStyle}>${item.title}</td>`
    }).join("")


    let rows = list.map(record => {

        let tds = columns.map(item => {
            if (record[item.dataIndex]) {
                let td = `<td ${tdStyle}>${record[item.dataIndex].text}</td>`;
                return td
            }
            return ''
        }).join('')

        return `<tr>${tds}</tr>`
    }).join('')


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
                
            </body>
            </html>
    
        `
    return html
}


module.exports = {
    renderView
}

