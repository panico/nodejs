var https = require('https');

var fs = require('fs');

var https_options = {

  key: fs.readFileSync("/root/gdmedinan.codes.key"),

  cert: fs.readFileSync("/root/CA.gdmedinan.codes.crt"),

  ca: [

          fs.readFileSync('/root/CA.gdmedinan.codes.crt'),

          fs.readFileSync('/root/intermendiate.gdmedinan.codes.crt')

       ]
};

https.createServer(options, function (req, res) {

 res.writeHead(200);

 res.end("Welcome to Node.js HTTPS Servern");

}).listen(8443)
