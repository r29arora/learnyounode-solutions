var fs = require('fs')
var dir = process.argv[2]
var ext = process.argv[3];

fs.readdir(dir, function callback(err, list) {
	for (var x = 0; x < list.length; x++)
	{
		var currentString = list[x]
		var splitList = currentString.split('.')
		if (splitList[1] == ext)
		{
			console.log(currentString)
		}
	}
})