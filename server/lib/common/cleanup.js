var logger = require('./logger');

function init(server) {

    process.on('SIGINT', function () {
        logger.error("SIGINT: Closing");
        shutdown();
    });

    process.on('SIGTERM', function () {
        logger.error("SIGTERM: Closing");
        shutdown();
    });

    var shutdown = function () {
        logger.info("Received kill signal... shutting down.");
        server.close(function () {
            logger.info("Closed out remaining connections.");
            process.exit();
        });

        setTimeout(function () {
            logger.error("Could not close connections in time, forcefully shutting down");
            process.exit();
        }, 10 * 1000);
    }
}

module.exports = init;