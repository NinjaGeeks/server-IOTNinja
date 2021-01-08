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

    }

}
module.exports = deviceModel;