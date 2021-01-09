const connection = require('../utils/connection.js');
const deviceModel = require('../model/deviceModel.js');
const userController = require('../controller/userController.js');;

const mysql = require('mysql');
const config = require('../utils/config.js');
const verification = require('../utils/verification.js');
var deviceController = {
    load: function (res,req) {
        connection.create(function(db) {
            deviceModel.load(db,function(result) {

                res.status(200).json(result);
            })
        });
    },
    loadDeviceUser:function (res,req,token) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (u_id) {
                if (u_id === "0"){

                }else{
                    deviceModel.loadDevicesUser(db, u_id, function (result) {
                        res.status(200).json(result);
                    }).then(r => "test");
                }
            });
        });
    },
    deleteDevice:function (res,req,token) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (u_id) {
                if (u_id === "0"){

                }else{
                    deviceModel.checkDeviceUser(db,id,u_id,function (result) {
                        if (result === true){
                            deviceModel.delete(db,id,function (result) {
                                res.status(200).json(result);
                            });
                        }else{

                        }
                    });
                }
            });
        });
    },
    insert:function (res,req,u_id,s_id,name,info,star) {

    },
    starDevice:function (res,req,token,id) {

    },
    unStarDevice:function (res,req,token,id) {

    }
}
module.exports = deviceController;