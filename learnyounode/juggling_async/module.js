module.exports = function(path, callback) {
	var http = require('http')
	var string = ""
	http.get(path, function(response) {
		response.setEncoding('utf8')
		string = ""
		response.on('data', function(data) {
			string += data
		})

		response.on('end', function(data) {
			callback(string)
		})

	})
}