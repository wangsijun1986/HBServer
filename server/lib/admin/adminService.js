'use static'
var adminTable = require('../../db_sql/text/admin-my.js');
var adminModule = require('../../modules/admin/adminModule.js');

var adminService = {
    addAdmin:addAdmin,
    updateAdmin:updateAdmin,
    getAdmin:getAdmin,
    getAdminList:getAdminList,
    deleteAdmin:deleteAdmin
}
function init(){
    return new adminTable();
}
function addAdmin(admin,callback){
    init().addAdmin(admin,function(err,result){
        if(err){
            callback(err,null);
        }
        else{
            getAdmin(result,callback);
        }
    });
}

function updateAdmin(){

}

function getAdmin(adminId,callback){
    init().getAdminDetails(adminId,function(err,result){
        if(err){
            callback(err,null);
        }else{
            callback(null,adminModule.getSingleAdmin(result[0]));
        }
    });
}

function getAdminList(callback){
    init().getAdminList(function(err,result){
        if(err){
            callback(err,null);
        }else{
            var data = [];
            for(var item in result){
                data.push(adminModule.getSingleAdmin(result[item]));
            }
            callback(null,data);
        }
    })
}

function deleteAdmin(){

}

module.exports = adminService;
