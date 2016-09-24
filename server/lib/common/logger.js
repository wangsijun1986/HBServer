/**
 * Remote logging module.
 *
 * TBD: move this out to its own server to accept HTTP POST requests.
 *
 */

/* DISABLE UNTIL WE REPLACE WITH NEW DISTRIBUTED LOGGING

 var config = require('../../config/config');
 var http = require('http');
 var net = require('net');

 http.globalAgent.maxSockets = 100; // need to determine this dynamically for tuning

 var client = new net.Socket();



 if(config.logger && config.logger.host && config.logger.host) {
 client.connect(config.logger.port, config.logger.host, function() {
 console.log('Logger connected to: ' + config.logger.host + ':' + config.logger.port);
 });
 }

 client.on('error', function(err) {
 client = null;
 console.log('Error connecting to logger - ' + err);
 });

 function stash(level, msg, callback) {
 var payload = { level: level, message: msg };
 if(config.logger && level > config.logger.level && callback) {
 callback();
 } else {
 if(client){
 client.write(JSON.stringify(payload));
 }
 else {
 console.log(JSON.stringify(payload));
 }
 if(callback) callback();
 }
 }
 */

function stash(level, msg, callback) {
    console.log('Level: ' + level + ', ' + msg)
    if(callback)
        callback()
}

var logger = {
    error: function(msg, callback) { stash(0, msg, callback); },
    warn:  function(msg, callback) { stash(1, msg, callback); },
    info:  function(msg, callback) { stash(2, msg, callback); },
    debug: function(msg, callback) { stash(3, msg, callback); }
};

module.exports = logger;
