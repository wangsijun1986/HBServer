/**
 * Created by wangsijun on 2016/4/17.
 */
var env = process.env.NODE_ENV || 'default';
var config = require('./config.' + env);

if(!config.encryptionKey) config.encryptionKey = '42'; // we'll use private/public key-pair in production

// Convenient alias for process.env.NODE_ENV
config.env = env;

//Let the client know what environment is currently running
//config.client.environment = env;
//
//config.fakes = process.env.ARC_SERVICE_FAKES || config.fakes;

module.exports = config;
