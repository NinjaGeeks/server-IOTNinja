const connection = require('../utils/connection.js');
const serverModel = require('../model/serverModel.js');
const userController = require('../controller/userController.js');

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
            if (data === "ok"){
                connection.create(function(db) {
                    serverModel.add(db,name,address,port,con,req.body.state,function (result) {
                        res.status(200).json(result);
                    })
                });
            }else{
                var status = "false";
                var group = {status:status,message:data};
                res.status(200).json(group);
            }
        });
    },
    loadServerUser:function (res,req,token) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (id) {
                if (id === "0"){

                }else{
                    serverModel.loadServerUser(db,id,function (result) {
                        res.status(200).json(result);
                    });
                }
            })
        });
    },
    deleteServer:function (res,req,token,id) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (u_id) {
                if (u_id === "0"){

                }else{
                    serverModel.checkServerUser(db,id,u_id,function (result) {
                        if (result === true){
                            serverModel.delete(db,id,function (result) {
                                res.status(200).json(result);
                            });
                        }else{

                        }
                    });
                }
            });
        });
    },
    deleteAll:function (res,req) {
        connection.create(function(db) {
            serverModel.deleteAll(db,function (result) {
                res.status(200).json(result);
            });
        });
    }
}
module.exports = serverController;