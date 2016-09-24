var mysqlOperation = require('../../dbHelper/mysqlOperation.js');

var mysql = new mysqlOperation();

var adminDb = function(){
    return this.prototype = {
        getAdminDetails:getAdminDetails,
        getAdminList:getAdminList,
        addAdmin:addAdmin
    };
};
function addAdmin(admin,callback){
    var query = 'insert into adminInfo(UserName,NickName,Password,Email,PhoneNumber,AuthorityLevel,CurrentHost)' +
        'values(?,?,?,?,?,?,?)';
    var params = [admin.UserName,admin.NickName, admin.Password, admin.Email, admin.PhoneNumber, admin.AuthorityLevel, '192.168.1.105']
    mysql.paramsQuery(query,params,function(err,data) {
        if(err){
            callback(err,null);
        }
        else{
            callback(null,data.insertId);
        }
    });
}

function getAdminDetails(adminId,callback){
    var query = 'select * from adminInfo where AdminId=?';
    mysql.paramsQuery(query,[adminId],function(err,data) {
        if(err){
            callback(err,null);
        }
        else{
            callback(null,parsedPassword(data));
        }
    });
}

function getAdminList(callback) {
    var query = 'select * from adminInfo';
    mysql.query(query,function (err, data) {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null,data);
        }
    });
}

function parsedPassword(data){
    for(var i in data){
        var pwd = data[i]['Password'];
        pwd = pwd.substring(0,1)+pwd.substring(1,pwd.length).replace(/\w*/,'*')
        data[i]['Password'] = pwd
    }
    return data;
}
module.exports = adminDb