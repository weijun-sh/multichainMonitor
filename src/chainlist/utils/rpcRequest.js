const axios = require('axios') ;

const axiosInstance = axios.create({})

function rpcRequest(options) {

    const {method, params, url,  data = {}, sendOption = {}} = options;
    return new Promise(async (resolve, reject) => {
        const {
            timeout = 900,
        } = sendOption;

        let timeoutValue = timeout * 1000
        let requestStart = Date.now();

        axiosInstance(url, {
            method,
            params,
            timeout: timeoutValue,
            data : data,
        }).then((response) => {
            let now = Date.now();
            response.latency = now  - requestStart
            if (response.status === 200) {
                return response
            }
            throw new Error()
        }).then((res) => {
            resolve && resolve(res)
        }).catch((err) => {
            //console.log("rpc err ==>", err)
            reject && reject(new Error("未知错误"));
        })

    })
}

module.exports = {
    rpcRequest
}
