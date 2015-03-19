
module.exports = function(dir, ext, callback) {
	var fs = require('fs')
	fs.readdir(dir, function returnVal(err, list)
	{
		if (err) {
			return callback(err)
		}
		var dirs = [];
		for (var  x = 0; x < list.length; x++)
		{
			var splitList = list[x].split('.')
			if (splitList[1] == ext)
			{
				dirs.push(list[x])
			}
		}
		callback(null, dirs)
	})
}