var net = require('net')
var port = process.argv[2]

var server = net.createServer(function(socket){
	//socket stuff
	var date = new Date()
	var year = date.getFullYear()
	var month = date.getMonth()
	var day = date.getDate()
	var hour = date.getHours()
	var min = date.getMinutes()
	if (month < 10) {
		month = "0" + (Number(month)+1).toString()
	}
	if (hour < 10) {
		hour = "0" + hour
	}
	if (min < 10) {
		min = "0" + min
	}
	if (day < 10) {
		day = "0" + day
	}
	socket.end(year + "-" + month + "-" + day + " " + hour + ":" + min)
})
server.listen(port)