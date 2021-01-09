var userModel =  {
    load: async function (db,callback) {
        var sql = "SELECT * FROM Users";
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
    create:async function(db,name,lastName,email,password,callback){
        var sql = 'INSERT INTO Users (name,lname,email,password,status,create_at,update_at) VALUES (?,?,?,?,?,?,?)';
        db.query(sql,[name,lastName,email,password,0,moment().format("YYYY-MM-DD HH:mm:ss"),moment().format("YYYY-MM-DD HH:mm:ss")], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group);
        });
    },
    update:async function(db,id,name,lastName,callback){
        var sql = "UPDATE Users SET name = ?,lname=?  WHERE id = ?";
        db.query(sql,[name,lastName,id], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    },
    createToken:async function(db,user_id,token,device_id,callback){
        var sql = 'INSERT INTO UsersToken (u_id,token,device_id,create_at,update_at) VALUES (?,?,?,?,?)';
        db.query(sql,[user_id,token,device_id,moment().format("YYYY-MM-DD HH:mm:ss"),moment().format("YYYY-MM-DD HH:mm:ss")], function (err, result, fields) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group);
        });
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
    },
    deleteToken:async function(db,id,device,callback){
        var sql = "DELETE FROM UsersToken WHERE u_id=? and device_id=?";
        db.query(sql,[id,device], function (err, result) {
            if (err) throw err;
            var status = "true";
            var group = {status:status};
            callback(group)
        });
    }
}
module.exports = userModel;