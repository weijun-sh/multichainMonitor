var fs = require('fs');

function readFileSync(path){
    let data = fs.readFileSync(path)
    data = data.toString();

    return data;
}

function file2Obj(path){
    let data = readFileSync(path);
    try {
        return JSON.parse(data.toString())
    }catch (err){
        return null
    }
}
