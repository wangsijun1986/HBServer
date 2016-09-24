//var cache = require('../../lib/cache/cache');
var logger = require('../../lib/common/logger');

var handler = {
    request: function(req, res, name) {
        return function (err, data) {
            if (err) {
                logger.error(err);
                res.status(err.code).send(err.message);
            } else if (data) {
                //cache.addCacheHeaders(res, data);
                if (typeof req.etag !== 'undefined' && req.etag === data.Etag) {
                    res.status(304).end();
                } else {
                    res.status(200).send({data:data});
                }
            } else {
                res.status(404).send({
                    error: name + ' not found'
                });
            }
        }
    }
};

module.exports = handler;