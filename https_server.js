var https = require('https');

var PORT = 8000;

var HOSTNAME = '127.0.0.1';

var fs = require('fs');

var https_options = {

  key: fs.readFileSync("/root/gdmedinan.codes.key"),

  cert: fs.readFileSync("/root/CA.gdmedinan.codes.crt"),

  ca: [

          fs.readFileSync('/root/CA.gdmedinan.codes.crt'),

          fs.readFileSync('/root/intermendiate.gdmedinan.codes.crt')

       ]
};

https.createServer(https_options, function (req, res) {

 res.writeHead(200);

 res.end("Welcome to Node.js HTTPS Server");

}).listen(PORT, HOSTNAME, () => {
        console.log(`sERVER RUNNING AT HTTP://${HOSTNAME}:${PORT}/`)});
