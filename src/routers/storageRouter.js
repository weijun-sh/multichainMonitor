const express = require('express')
const router = express.Router();

router.get('/view', function (req, res){
    res.render('storage.ejs', {
        storage: global.systemStorage,
    })

})

module.exports = {
    router,
}
