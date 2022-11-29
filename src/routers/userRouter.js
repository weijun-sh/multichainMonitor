const express = require('express')
const router = express.Router();


router.post("/machine/login", function (req, res){
    const {user, password} = req.body;
    console.log("params ==>", user, password)

    res.send({
        data: null,
        code: 0,
        message: "success"
    })
})

module.exports = {router} ;
