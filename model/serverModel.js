
const moment = require('moment');
var serverModel = {
     load: async function (db,callback) {
          var sql = "SELECT * FROM Server";
          db.query(sql, function (err, result, fields) {
               if (err) throw err;
               var status = "true";
               var group = {status: status, data: result};
               callback(group);
          });
     },
     add:function (db,name,address,port,connection,status,callback) {
          console.log(status);
          var sql = 'INSERT INTO Server (name,address,port,connection,status,create_at,update_at) VALUES (?,?,?,?,?,?,?)';
          db.query(sql,[name,address,port,connection,status,moment().format("YYYY-MM-DD HH:mm:ss"),moment().format("YYYY-MM-DD HH:mm:ss")], function (err, result, fields) {
               if (err) throw err;
               var status = "true";
               var group = {status:status};
               callback(group);
          });
     },
     delete:function (db,id,callback) {
          var sql = "DELETE FROM Server WHERE id =?";
          db.query(sql,[id], function (err, result) {
               if (err) throw err;
               var status = "true";
               var group = {status:status};
               callback(group)
          });
     },
     deleteServersUser:function (db,id,callback) {
          var sql = "DELETE FROM Server WHERE user_id =?";
          db.query(sql,[id], function (err, result) {
               if (err) throw err;
               var status = "true";
               var group = {status:status};
               callback(group)
          });
     },
     deleteAll:function (db,callback) {
          var sql = "DELETE FROM Server";
          db.query(sql, function (err, result) {
               if (err) throw err;
               var status = "true";
               var group = {status:status};
               callback(group)
          });
     },
     loadServerUser:function (db,id,callback) {
          var sql = "SELECT * FROM Server where u_id=?";
          db.query(sql,id, function (err, result, fields) {
               if (err) throw err;
               var status = "true";
               var group = {status: status, data: result};
               callback(group);
          });
     },
     checkServerUser:function (db,id,u_id,callback) {
          var sql = 'select u_id from Server where id=?';
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
 module.exports = serverModel;