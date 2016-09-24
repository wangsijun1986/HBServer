/**
 * Created by wangsijun on 2016/4/7.
 */
var mssql = require('mssql');
var config = {
    user:'',
    password:'',
    server:'localhost',
    database:''
}
var mssqlOperation = function(){
    return this.prototype = {
        queryRun:queryRun,
        storedProcedureRun:storedProcedureRun
    }
}

function queryRun(query,callback){
    mssql.connect(config).then(function() {
        // Query
        var request = new mssql.Request();
        request.query(query).then(function(recordset) {
            console.dir(recordset);
            callback(null,recordset);
        }).catch(function(err) {
            // ... error checks
            callback(err,null);
        });
    }).catch(function(err) {
        // ... error checks
        callback(err,null);
    });
}

function storedProcedureRun(spname,params,callback){
    mssql.connect(config).then(function() {
        // Stored Procedure
        var request = new mssql.Request();
        request.input('input_parameter', mssql.Int, value);
        request.output('output_parameter', mssql.VarChar(50));
        request.execute('procedure_name').then(function(recordsets) {
            console.dir(recordsets);
            callback(null,recordset);
        }).catch(function(err) {
            // ... error checks
            callback(err,null);
        });
    }).catch(function(err) {
        // ... error checks
        callback(err,null);
    });
}


module.exports = mssqlOperation;