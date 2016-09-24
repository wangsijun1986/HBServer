/**
 * Created by wangsijun on 2016/5/12.
 */
'use static'

var getClientIP = function(req){
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}
module.exports = getClientIP;