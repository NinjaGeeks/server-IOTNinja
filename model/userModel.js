var userModel =  {
    load: async function (db,callback) {
        var sql = "SELECT * FROM Server";
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status: status, data: result};
            callback(group);
        });
    },
    checkToken: async function(db,token,callback){
        var sql = 'select user_id from UsersToken where token = ?';
        db.query(sql, [token],function (err, result, fields) {
            if (err) throw err;
            if (result.count() === 0) {
                callback(0);
            }else{
                callback(result['user_id']);
            }
        });
    },
    create:async function(db,user_id){

    },
    createToken:async function(db,user_id,token,device_id){

    },
    disable:async function(db,user_id,callback){
        var sql = "UPDATE Users SET status = ?  WHERE id = ?";
        db.query(sql,[0,user_id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    enable:async function(db,user_id,callback){
        var sql = "UPDATE Users SET status = ?  WHERE id = ?";
        db.query(sql,[1,user_id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    delete:async function(db,id,callback){
        var sql = "DELETE FROM Users WHERE id =?";
        db.query(sql,[id], function (err, result) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    }
}
module.exports = userModel;