// Load required modules
var https = require("https");              // http server core module
var fs = require('fs');
const path = require('path');
var express = require("express");           // web framework external module
const proxy = require('express-http-proxy');
const config = require('./config');
const helmet = require('helmet');
const compression = require('compression')
var serveStatic = require('serve-static');  // serve static files
var socketIo = require("socket.io");        // web socket external module
var easyrtc = require("easyrtc");               // EasyRTC external module

const port = config.port || process.env.PORT;

// Set process name
process.title = "node-easyrtc";

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var app = express();
// app.use(serveStatic('src', { 'index': ['index.html'] }));
// app.use('/node_modules', express.static(__dirname + '/node_modules/'));

// 设置 HTTP 头
// reference: http://expressjs.com/zh-cn/advanced/best-practice-security.html
app.use(helmet());

// 开启 gzip 压缩
// reference: http://expressjs.com/zh-cn/advanced/best-practice-performance.html
app.use(compression());


app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', proxy(config.api, {
  proxyReqPathResolver: function (req, res) {
    return require('url').parse("" + req.url).path;
  }
}));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

console.log("the dirname:" + __dirname);
// Start Express http server on port
var webServer = https.createServer({
  key: fs.readFileSync(path.join(__dirname, "/dist/assets/ssl/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "/dist/assets/ssl/certificate.pem"))
}, app).listen(port);

// Start Socket.io so it attaches itself to Express server
var socketServer = socketIo.listen(webServer, { "log level": 1 });

easyrtc.setOption("logLevel", "debug");

// Overriding the default easyrtcAuth listener, only so we can directly access its callback
easyrtc.events.on("easyrtcAuth", function (socket, easyrtcid, msg, socketCallback, callback) {
  easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, function (err, connectionObj) {
    if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
      callback(err, connectionObj);
      return;
    }

    connectionObj.setField("credential", msg.msgData.credential, { "isShared": false });

    console.log("[" + easyrtcid + "] Credential saved!", connectionObj.getFieldValueSync("credential"));

    callback(err, connectionObj);
  });
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on("roomJoin", function (connectionObj, roomName, roomParameter, callback) {
  console.log("[" + connectionObj.getEasyrtcid() + "] Credential retrieved!", connectionObj.getFieldValueSync("credential"));
  easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);
});

// Start EasyRTC server
var rtc = easyrtc.listen(app, socketServer, null, function (err, rtcRef) {
  console.log("Initiated");

  rtcRef.events.on("roomCreate", function (appObj, creatorConnectionObj, roomName, roomOptions, callback) {
    console.log("roomCreate fired! Trying to create: " + roomName);

    appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
  });
});

//listen on port
// webServer.listen(port, function () {
//   console.log('listening on https://localhost:' + port);
// });
