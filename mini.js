const fs = require('fs')
const path = require('path')
let buildPath = '/opt/grafana/grafana/public/build/';

function removeJsComments(code)
{
    return code.replaceAll(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n').
    replaceAll(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n').
    replaceAll(/\s+/g, '');
}

fs.readdir(buildPath, function (err, files){
    files.map((filename, index) => {
        let fileDir = path.join(buildPath, filename);
        let stat = fs.statSync(fileDir);

        if(stat.isFile()){
            let content = fs.readFileSync(fileDir).toString();
            content = removeJsComments(content);
            fs.writeFileSync(fileDir, content)
        }
    })
})



