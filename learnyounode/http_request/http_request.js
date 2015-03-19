var path = process.argv[2]
var http = require('http')

http.get(path, function(response) {
	response.on("data", function(data){
		console.log(data.toString())
	})
})