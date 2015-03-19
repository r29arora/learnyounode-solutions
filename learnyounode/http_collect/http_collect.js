var path = process.argv[2]
var http = require('http')

http.get(path, function(response) {
	response.setEncoding('utf8')
	var finalString = ""
	response.on('data', function(chunk)
	{
		finalString += chunk
	})
	response.on('end', function(data)
	{
		console.log(finalString.length)
		console.log(finalString)
	})
})