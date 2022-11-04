const path =require("path") ;
const {fileSaveObj, fileGetObj, fileIsExit} = require("../utils/fileSys");
const fs = require("fs");

const systemStoragePath = path.join(__dirname, './', 'SYS_STORAGE.json')
global.systemStorage = null;

const INIT_DATA = {
    monitor: {

    },
    chainList: {
        msgList: [],
        history: [],
    }
}

function systemStorageSave(obj){
    let result = fileSaveObj(systemStoragePath, obj);
    if(result){
        global.systemStorage = obj
    }

}

function systemStorageGet(){
    let obj = fileGetObj(systemStoragePath);
    return obj
}


function systemStorageInit(){
    let exits = fileIsExit(systemStoragePath);

    if(!exits){
        systemStorageSave(INIT_DATA);
        global.systemStorage = INIT_DATA;
        console.log("初始化system storage")
    }else {
        console.log("system storage 已经 初始化");
        let obj = systemStorageGet();
        if(obj){
            global.systemStorage = systemStorageGet();
        }else {
            systemStorageSave(INIT_DATA);
            global.systemStorage = INIT_DATA;
            console.log("system storage 重新初始化 ");
        }
    }
}

function listenSync(){

    const filePath = path.join(__dirname, 'SYS_STORAGE.json');
    fs.watchFile(filePath, (cur, prv) => {
        if (filePath) {
            global.systemStorage = systemStorageGet()
        }
    })
}
listenSync()
module.exports = {
    systemStorageInit,
    systemStorageSave,
    systemStorageGet
}
