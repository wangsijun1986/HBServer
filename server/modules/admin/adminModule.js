'use static';

var adminModule = {
    getSingleAdminDB:getSingleAdminDB,
    getSingleAdmin:getSingleAdmin,
    module:{
        AdminId:"Id",
        UserName:"name",
        NickName:"nick",
        Password:"pwd",
        Email:"email",
        PhoneNumber:"phone",
        AuthorityLevel:"level",
        CreateDatetime:"createTime",
        LastLoginDatetime:"loginTime",
        CurrentHost:"host"
    },
    domain:{
        Id:"AdminId",
        name:"UserName",
        nick:"NickName",
        pwd:"Password",
        email:"Email",
        phone :"PhoneNumber",
        level :"AuthorityLevel",
        createTime :"CreateDatetime",
        loginTime :"LastLoginDatetime",
        host :"CurrentHost"
    }
};

function getSingleAdminDB(req){
    var admin ={};
    for(var item in req["body"]){
        admin[adminModule.domain[item]] = req["body"][item];
    }
    return admin;
}

function getSingleAdmin(admin){
    var result ={};
    for(var item in admin){
        result[adminModule.module[item]] = admin[item];
    }
    return result;
}

module.exports = adminModule;