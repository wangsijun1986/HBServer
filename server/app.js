var express = require('express');   //Server框架
var bodyParser = require('body-parser');  //解析HTTP正文
var methodOverride = require('method-override');  //支持DELETE和PUT
var jwt = require('express-jwt'); //Express token支持

var config = require('./config/config');
var logger = require('./lib/common/logger');
var app = express();
var port = process.env.PORT || 3000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

process.on('uncaughtException',function(err){
  console.log(err);
});

var routes = require('./lib');

//Apply middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());

//app.disable('etag');  //关闭etag
//app.use(require('./lib/cache/eTags'));

//过滤不需要权限验证的文件
//app.use('/'+config.version.major,jwt({secret:config.encryptionKey}).unless({path:[
//         '/'+config.version.major+'/config/client',
//         '/'+config.version.major+'/user/auth',
//        '/' + config.version.major + '/user/session/verify',
//        '/' + config.version.major + '/user/session'
//]}));

app.use(express.static(__dirname +'/../../HBClient/client'));

routes.attachRoutes(app);

var server = app.listen(port,function(){
    logger.info('Server listening on port %d'+port);
    console.log('using env:'+ config.env);
    console.log('data source:'+ (config.fakes ? 'fake':'live'));
});

module.exports = server;
//var cleanup = require('./lib/common/cleanup')(server);

//var path = require('path');
// var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
//
//var routes = require('./routes/index');
//var users = require('./routes/users');
//
//var app = express();
//
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//
//// uncomment after placing your favicon in /public
////app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
////app.use(express.static(path.join(__dirname, 'public')));
//express.static('F:\Drivecaminc.loc\Nova.Web\client')
//app.use('/', routes);
//app.use('/users', users);
//
//// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});
//
//// error handlers
//
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});
//
//
//module.exports = app;
