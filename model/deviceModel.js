var deviceModel =  {
    load: async function (db,callback) {
        var sql = "SELECT * FROM Users";
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status: status, data: result};
            callback(group);
        });
    },
    loadDevicesServer:async function(db,id,callback){

    },
    loadDevicesUser:async function(db,id,callback){

    },
    deleteDevice:async function(db,id,callback){

    },
    deleteDevicesUser:async function(db,id,callback){

    },
    deleteDevicesServer:async function(db,id,callback){

    },
    deleteAll:async function(db,id,callback){

    },
    changeStateDevice:async function(db,id,callback){

    },
    starDevice:async function(db,id,callback){

    },
    removeStarDevice:async function(db,id,callback){

    },

}
module.exports = deviceModel;