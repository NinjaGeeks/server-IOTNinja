var express = require('express');
var router = express.Router();
const server = require('../controller/serverController.js');
const catchdata = require('../utils/redisData.js');

/* GET home page. */
router.get('/get', function(req, res, next) {
    server.load(res,req);
});
router.post('/add',function (req,res,next) {
    //var status = req.body.address;
    //var group = {status:status};
    //res.status(200).json(group);
     server.add(res,req,req.body.name,req.body.address,req.body.port,req.body.conection,req.body.state);
});
router.get('/set', function(req, res, next) {
    catchdata.set("test","test",function () {
        console.log("ok");
    });
});
module.exports = router;
