/**
 * Created by wangsijun on 2016/4/7.
 */
var mssqlOperation = require('../../dbHelper/mssqlOperation.js');

var mssql = new mssqlOperation();

var user1 = function(){
    return this.prototype = {
        getUserDetails:getUserDatails
    };
}

function getUserDatails(userId,callback){
    var query ='select * from user where id='+userId;
    mssql.queryRun(query,function(err,data) {
        if(err){
            callback(err,null);
        }
        else{
            callback(null,data);
        }
    });
};

module.exports = user1;