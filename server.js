const express = require('express')

var app = express()
app.get('/',function(req,res){
	res.end("Hello openshift");
}
);




var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, ip, function () {
    console.log( "Listening on " + ip + ", server_port " + port  );
});