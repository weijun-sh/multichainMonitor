const {innerStart} = require("./hooks/inter") ;
const {OUTER_CHAIN_LIST} = require("./constant/rpcs");




function startChainList(){

    let chain = OUTER_CHAIN_LIST[0];
    chain.isInner = true;
    innerStart(chain).then((res) => {
        console.log("res ==>", res)
    }).catch((err) => {
        console.log("res ==>", err)
    })



}
startChainList()
module.exports = {
    startChainList
};
