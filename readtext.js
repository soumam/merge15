fs = require('fs');
fs.readFile('/Users/soumamondal/DEV/js/merge/IntegerArray.txt', 
			'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data);
});

