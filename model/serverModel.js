
const connection = require('../utils/connection.js');
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
          var sql = 'INSERT INTO Server (name,address,port,connection,status,create_at,update_at) VALUES (?,?,?,?,?,?,?)';
          db.query(sql,[name,address,port,connection,status,"",""], function (err, result, fields) {
               if (err) throw err;
               var status = "true";
               var group = {status:status};
               callback(group);
          });
     },
     delete:function (db,id,callback) {

     }
}
 module.exports = serverModel;