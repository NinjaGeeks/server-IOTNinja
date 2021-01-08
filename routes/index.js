var express = require('express');
var router = express.Router();
const server = require('../controller/serverController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    server.load(res,req);
});

module.exports = router;
