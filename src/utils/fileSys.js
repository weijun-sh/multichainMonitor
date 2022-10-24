const fs = require('fs');
const path = require('path');

function fileIsExit(path){
    let result = fs.existsSync(path)
    return result;
}

function fileDelete(path){
    fs.unlinkSync(path);
}

function fileWriteSync(path, str){
    fs.writeFileSync(path, new Buffer(str))
}

function fileReadSync(path){
    let buffer = fs.readFileSync(path, 'utf8')
    let str = String(buffer);
    return str;
}

function fileSaveObj(path, obj){
    try{
        let save = JSON.stringify(obj)
        fileWriteSync(path, save)
        return true
    }catch (e){
        console.log("file save obj fail", e)
        return false
    }
}

function fileGetObj(path){
    try{
        let content = fileReadSync(path)
        let obj = JSON.parse(content)
        return obj
    }catch (e){
        console.log("file get obj fail", e)
        return null
    }
}

module.exports = {
    fileGetObj,
    fileSaveObj,
    fileIsExit
}
