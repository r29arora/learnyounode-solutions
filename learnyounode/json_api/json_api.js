var port = process.argv[2]
var http = require('http')

var server = http.createServer(function(req, res) {
	//request handling magic
	res.writeHead(200, {'Content-Type' : 'application/json'})
	var url = require('url')
	var data = url.parse(req.url, true)
	var query = data["query"]
	var iso = query["iso"]
	var date = new Date(iso)
	var pathname = data["pathname"]
	if (pathname == "/api/parsetime")
	{
		res.end(JSON.stringify({"hour" : date.getHours(), "minute" : date.getMinutes(), "second" : date.getSeconds()}))
	}
	else if (pathname == "/api/unixtime")
	{
		res.end(JSON.stringify({"unixtime" : date.getTime()}))
	}

})
server.listen(port)