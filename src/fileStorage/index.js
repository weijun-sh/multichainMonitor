const path =require("path") ;
const {fileSaveObj, fileGetObj, fileIsExit} = require("../utils/fileSys");

const systemStoragePath = path.join(__dirname, './', 'SYSTEM_STORAGE.json')

const INIT_DATA = {
    monitor: {

    },
    chainList: {

    }
}



function systemStorageSave(obj){
    fileSaveObj(systemStoragePath, obj)
}

function systemStorageGet(){
    let obj = fileGetObj(systemStoragePath);
    return obj
}


function systemStorageInit(){
    let exits = fileIsExit(systemStoragePath);

    if(!exits){
        systemStorageSave(INIT_DATA);
        console.log("初始化system storage")
    }else {
        console.log("system storage 已经 初始化")
    }
}
systemStorageInit()

function StorageTesting(){


}

module.exports = {
    StorageTesting
}
