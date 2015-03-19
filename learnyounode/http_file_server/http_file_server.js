var http = require('http')
var port = process.argv[2]
var path = process.argv[3]
var fs = require('fs')
var requests = []



var server = http.createServer(function(req, res){
	// request handling logic
	var src = fs.createReadStream(path)
	src.pipe(res)

})
server.listen(port)