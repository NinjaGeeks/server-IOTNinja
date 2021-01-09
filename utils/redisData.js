const app = require('../app.js');
var redisData = {
    set:async function (key,value,callback) {
        app.client.set(key, value, 'EX', 60 * 60 * 24, callback);
    },
    get:function (key,callback) {
        app.client.get(key,callback);
    }

}
module.exports = redisData;