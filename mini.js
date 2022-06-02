const fs = require('fs')
const path = require('path')
let buildPath = '/opt/grafana/grafana/public/build/';


const decomment = require('decomment');


function removeJsComments(code)
{

    code = decomment(code)
    code = code.replace(/\s/g, '');
    return code
}

fs.readdir(buildPath, function (err, files){
    files.map((filename, index) => {
        let filedir = path.join(buildPath, filename);
        let stat = fs.statSync(filedir);

        if(stat.isFile()){
            let content = fs.readFileSync(filedir).toString();
            content = removeJsComments(content);
            fs.writeFileSync(filedir, content)
        }
    })
})



