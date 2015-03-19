var http = require('http')
var port = process.argv[2]


var server = http.createServer(function(req, res){
	// request handling logic
	var map = require('through2-map')
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})
server.listen(port)