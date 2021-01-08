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
                callback("false");
            }else{
                callback("true");
            }
        });
    },
    create:async function(db,user_id){

    },
    createToken:async function(db,user_id,token,device_id){

    },
    disable:async function(){

    },
    enable:async function(){

    },
    delete:async function(){

    }
}
module.exports = userModel;