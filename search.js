var cli = require("./cli.js");
var fs = require("fs");
var moment = require('moment');

var input1 = process.argv[2];
var input2 = process.argv[3];

function writeLog(a, b) {
		
    fs.appendFile("log.txt", "\n" + a + ", " + b, function (err) {
        if (err) {console.log("error!")} else
        console.log("date =  " + Date.now());
      });
} // end of writeLog

writeLog(input1, input2);