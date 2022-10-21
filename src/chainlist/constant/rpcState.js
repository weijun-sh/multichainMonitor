const STATUS_LOADING = 'loading'
const STATUS_SUCCESS = 'success'
const STATUS_ERROR = 'error';

function getRpcData(status, data) {
    let obj = {};
    switch (status) {
        case STATUS_LOADING:
            obj = {
                status: STATUS_LOADING,
                data: data
            };
            return obj

        case STATUS_ERROR:
            obj = {
                status: STATUS_ERROR,
                data: data
            }
            return obj;
        case STATUS_SUCCESS:
            obj = {
                status: STATUS_SUCCESS,
                data: data
            }
            return obj;
    }
}

module.exports = {
    getRpcData,
    STATUS_LOADING,
    STATUS_SUCCESS,
    STATUS_ERROR
}

