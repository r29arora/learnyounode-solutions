var fs = require('fs')
var path = process.argv[2]

var buffer = fs.readFileSync(path).toString()

var counter = 0; 
for (var x = 0; x < buffer.length; x++)
{
	if (buffer[x] == "\n") counter++;
}

console.log(counter)