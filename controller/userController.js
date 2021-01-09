const connection = require('../utils/connection.js');
const userModel = require('../model/userModel.js');
const serverModel = require('../model/serverModel.js');

var userController = {
    getIdFromToken: function (db,token,callback) {
        userModel.checkToken(db,token,new function (result) {
            callback(result);
        });
    },
    getSevers:function (res,req,token) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (result) {

            })
        });
    },
    deleteServersUser:function (res,req,token) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (u_id) {
                if (u_id === "0"){

                }else{
                    serverModel.deleteServersUser(db,u_id,function (result) {
                        res.status(200).json(result);
                    });
                }
            });
        });
    },
    disableUser:function (res,req,id) {
        connection.create(function(db) {
            userModel.disable(db,id,function (result) {
                res.status(200).json(result);
            });
        });
    },
    enableUser:function (res,req,id) {
        connection.create(function(db) {
            userModel.enable(db,id,function (result) {
                res.status(200).json(result);
            });
        });
    },
    deleteUser:function (res,req,id) {
        connection.create(function(db) {
            userModel.delete(db,id,function (result) {
                res.status(200).json(result);
            });
        });
    },
    insert:function (res,req,name,lastName,email,password) {
        connection.create(function(db) {
            userModel.create(db,name,lastName,email,password,function (result) {
                res.status(200).json(result);
            });
        });
    },
    update:function (res,req,token,name,lastName) {
        connection.create(function(db) {
            userController.getIdFromToken(db,token,function (u_id) {
                if (u_id === "0"){

                }else{
                    userModel.update(db,u_id,name,lastName,function (result) {
                        res.status(200).json(result);
                    });
                }
            });
        });
    }

}
module.exports = userController;