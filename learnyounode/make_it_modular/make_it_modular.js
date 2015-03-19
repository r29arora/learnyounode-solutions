var module = require('./module.js')

var dir = process.argv[2]
var ext = process.argv[3]

module(dir, ext, function callback(err, list) {
	for (var y = 0; y < list.length; y++) {
		var currentString = list[y]
		console.log(currentString)
	}
})

