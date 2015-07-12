fs = require('fs');
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

var unsortedStr = fs.readFileSync('IntegerArray.txt', 'utf8')
		   .split('\r\n')
		   .slice(0,100000);
//console.log(preMerge);
var unsortedInt = [];
for (i in unsortedStr) {
	unsortedInt[i] = parseInt(unsortedStr[i]);
}
console.log(unsortedInt);