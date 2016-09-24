/**
 * Created by wangsijun on 2016/4/7.
 */
var mysqlOperation = require('../../dbHelper/mysqlOperation.js');

var mysql = new mysqlOperation();

var user = function(){
    return this.prototype = {
        getUserDetails:getUserDetails
    };
};

function getUserDetails(userId,callback){
    var query = 'select * from user where UserId=userid';
    mysql.paramsQuery(query,{userid:userId},function(err,data) {
        if(err){
            callback(err,null);
        }
        else{
            callback(null,data);
        }
    });
};

module.exports = user;