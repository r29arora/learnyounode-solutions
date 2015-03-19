var fs = require('fs')
var path = process.argv[2]

var buffer = fs.readFile(path, function callback(err, data)
{
	console.log(data.toString().split('\n').length -1)
})