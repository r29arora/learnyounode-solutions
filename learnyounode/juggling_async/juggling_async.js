var paths = []
paths.push(process.argv[2])
paths.push(process.argv[3])
paths.push(process.argv[4])

var module = require('./module.js')

module(paths[0], function response1(string) {
	console.log(string)

	module(paths[1], function response2(string) {
		console.log(string)

		module(paths[2], function response3(string) {
			console.log(string)
		})

	})

})