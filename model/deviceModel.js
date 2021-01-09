var deviceModel =  {
    load: async function (db,callback) {
        var sql = "SELECT * FROM Devices";
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status: status, data: result};
            callback(group);
        });
    },
    loadDevicesServer:async function(db,id,callback){
        var sql = "SELECT * FROM Devices where s_id=?";
        db.query(sql,[id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status: status, data: result};
            callback(group);
        });
    },
    loadDevicesUser:async function(db,id,callback){
        var sql = "SELECT * FROM Devices where u_id=?";
        db.query(sql,[id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status: status, data: result};
            callback(group);
        });
    },
    delete:async function(db,id,callback){
        var sql = "DELETE FROM Devices WHERE id =?";
        db.query(sql,[id], function (err, result) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    deleteDevicesUser:async function(db,id,callback){
        var sql = "DELETE FROM Devices WHERE u_id=?";
        db.query(sql,[id], function (err, result) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    deleteDevicesServer:async function(db,id,callback){
        var sql = "DELETE FROM Devices WHERE s_id=?";
        db.query(sql,[id], function (err, result) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    deleteAll:async function(db,id,callback){
        var sql = "DELETE FROM Devices";
        db.query(sql, function (err, result) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    changeStateDevice:async function(db,id,status,callback){
        var sql = "UPDATE Devices SET status=?  WHERE id=?";
        db.query(sql,[status,id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    starDevice:async function(db,id,callback){
        var sql = "UPDATE Devices SET star=?  WHERE id=?";
        db.query(sql,[1,id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    removeStarDevice:async function(db,id,callback){
        var sql = "UPDATE Devices SET star=?  WHERE id=?";
        db.query(sql,[0,id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    checkDeviceUser:function (db,id,u_id,callback) {
        var sql = 'select u_id from Devices where id=?';
        db.query(sql, [id],function (err, result, fields) {
            if (err) throw err;
            if (result.count() === 0) {
                callback(0);
            }else{
                if(result['u_id'] === u_id){
                    callback(true);
                }else{
                    callback(false);
                }
            }
        });
    }
}
module.exports = deviceModel;