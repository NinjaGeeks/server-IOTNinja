var verification = {
    addServer: function (name,address,port,con,status,callback) {
        if (name == ""){
            callback("You did not enter the Nameٔ");
        }else if (address == ""){
            callback("You did not enter the Address ");
        }else if (port == ""){
            callback("You did not enter the Port");
        }else if (con == ""){
            callback("You did not enter the Connection");
        }else if (status == ""){
            callback("You did not enter the Status");
        }else if(!port.isNaN(port)) {
            callback("Port is Number");
        }else if(con != "UTP" || con != "MQTT" ) {
            callback("Connection is Not supported");
        }else{
            callback("ok");
        }
    }
}

module.exports = verification;