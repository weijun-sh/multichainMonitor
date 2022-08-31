
function renderView(templatePath, datasource) {
    return staticView(datasource);
}

function staticView(datasource) {
    const {list, columns, title} = datasource;

    let titles = columns.map(item => {
        return `<td>${item.title}</td>`
    }).join("")


    let rows = list.map(record => {

        let tds = columns.map(item => {
            if (record[item.dataIndex]) {
                let td = `<td>${record[item.dataIndex].text}</td>`;
                return td
            }
            return ''
        }).join('')

        return `<tr>${tds}</tr>`
    })

    return new Promise(resolve => {
        let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
            </head>
            <style>
                table{
                    margin: 10px;
                    border-top: 1px solid #ccc;
                    border-left: 1px solid #ccc;
                }
                thead{
                    background: antiquewhite;
                }
                td{
                    padding: 2px 4px;
                    border-bottom: 1px solid #ccc;
                    border-right: 1px solid #ccc;
                    font-size: 12px;
                }
/*                td:nth-child(2){
                    width: 44px;
                    white-space: break-spaces;
                    overflow: hidden;
                    line-break: anywhere;
                }*/
                h1{
                text-align: center;
                }
            </style>
            <body>
                <h3>${title}</h3>
                <table >
                    <thead>
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
        resolve(html)
    })



}

module.exports = {
    renderView
}

