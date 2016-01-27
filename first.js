var http = require('http');

http.createServer(function(req,res){
	res.end('hallo daar, first test')

}).listen(80,function() {
	console.log ('listening on port 80')
})

