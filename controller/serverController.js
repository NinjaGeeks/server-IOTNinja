const connection = require('../utils/connection.js');
const serverModel = require('../model/serverModel.js');

const mysql = require('mysql');
const config = require('../utils/config.js');
const verification = require('../utils/verification.js');
var serverController = {
    load: function (res,req) {
        connection.create(function(db) {
            serverModel.load(db,function(result) {
                res.status(200).json(result);
            })
        });
    },
    add: function (res,req,name,address,port,con,status) {
        verification.addServer(name,address,port,con,status,function (data) {
            if (data == "ok"){
                connection.create(function(db) {
                    serverModel.add(db,name,address,port,con,status,function (result) {
                        res.status(200).json(result);
                    })
                });
            }else{

            }
        });
    }

}
module.exports = serverController;