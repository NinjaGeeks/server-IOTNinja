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
    }

}
module.exports = userController;