const axios = require('axios') ;

const CancelToken = axios.CancelToken;
axios.interceptors.response.use(response => {
    return Promise.resolve(response)
}, error => {
    let orgConfig = error.config;
    let shouldError = false;

    if(orgConfig && orgConfig.retry && orgConfig.retry.counter > 0){
        if(error.message.includes("timeout")){
            shouldError = true;
        } else if( error.code === "ERR_NETWORK"){
            shouldError = true;
        }

        let delayRequest = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, orgConfig.retry.timeout)
        })

        orgConfig.retry.counter--;
        if(shouldError){
            return delayRequest.then(() => {
                return axios.request(orgConfig)
            })

        }
    }

    return Promise.reject(error)
})

function http(options) {
    const {method, params, url, toastError = true, timeout = 300, data = {}, sendOption = {}} = options;
    return new Promise((resolve, reject) => {
        const {getCancel, mock = {data: null, time: null}, retry = {timeout: 3000, counter: 5}} = sendOption;
        let cancelToken = new CancelToken(function executor(c) {
            getCancel && getCancel(c);
        });

        if(mock && mock.data){
            setTimeout(() => {
                resolve(mock.data);
            }, (mock.time || 300))
            return;
        }
        axios(url, {
            method,
            params,
            timeout: timeout * 1000,
            data,
            cancelToken,
            retry
        }).then((response) => {
            if (response.status === 200) {
                return response.data
            }
            throw new Error({
                statusText: response.statusText,
                message: '请求状态非 statusText 200',
                response: response
            })
        }).then((res) => {
            if (res.code === 0 || (res.result && res.result.code === 0)) {
                resolve(res, res.data)
                return;
            }

            if (toastError) {
                let msg = res.msg || res.error.message
                console.log(msg, 3,)
            }
            reject && reject(res)

            console.log("request res", "res", res, "data", data,"params", data.params)

        }).catch((err) => {
            if(typeof err.message === 'string'){
                if (err.message.indexOf('canceled') !== -1) {
                    console.log("取消请求", "data",  data, 'params', data.params);
                    reject(new Error("取消请求"))
                    return;
                }else if (err.message.indexOf('cross') !== -1) {
                    console.log("跨域失败", "data",  data, 'params', data.params);
                    reject(new Error("跨域失败"));
                    return;
                }else if (err.message.indexOf('timeout') !== -1) {
                    console.log(" 请求超时",'err', err, "data",  data, 'params', data.params);
                    reject(new Error("请求超时"));
                    return;
                }else if (err.message.indexOf('statusText') !== -1) {
                    console.log("网络错误",'err', err, "data",  data, 'params', data.params);
                    reject(new Error("网络错误"));
                    return;
                }else {
                    console.log('请求失败', 'err', err, "data",  data,'params', data.params)
                    reject(new Error("请求失败"));
                    return;
                }
            }

            console.log('未知错误', 'err', err, "data",  data,'params', data.params)
            reject && reject(new Error("未知错误"));
        })
    })
}

module.exports = {
    http
}
