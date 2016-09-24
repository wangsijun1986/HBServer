/**
 * Created by wangsijun on 2016/4/24.
 */
var fs = require('fs');

module.exports = function(localeId,callback){
    var translations=JSON.parse(fs.readFileSync('../../config/lang/'+localeId+'.json'));
    var results = {
        version:'1.0',
        lang:translations.lang,
        localeId:localeId,
        translations:translations
    }
    callback(null,results);
}