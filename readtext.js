fs = require('fs');

var output;
//Asynchronous file-reading. 
//This is basically a super simple callback function
/*
fs.readFile('IntegerArray.txt', 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
 	lines = data.split('\r\n').slice(0,100000);
	return lines;
});*/

output = fs.readFileSync('IntegerArray.txt', 'utf8').split('\r\n').slice(0,100000);
console.log(output);