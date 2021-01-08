var verification = {
    addServer: function (name,address,port,con,status,callback) {
        if (name === "" || name == null){
            callback("You did not enter the Nameٔ");
        }else if (address === "" || address== null){
            callback("You did not enter the Address ");
        }else if (port === "" || port ==null){
            callback("You did not enter the Port");
        }else if (con === "" || con == null){
            callback("You did not enter the Connection");
        }else if (status === "" || status == null){
            callback("You did not enter the Status");
        }else if(isNaN(port) === true) {
            callback("Port is Number");
        }else if(con !== "UTP" || con !== "MQTT" || con !== "utp") {
            callback("ok");
        }else{
            callback("Connection is Not supported");
        }
    }
}

module.exports = verification;