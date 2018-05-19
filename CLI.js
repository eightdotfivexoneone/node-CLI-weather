
// step 1 in files: require the files and modules necessary to do your work
// last step in files: module.exports stuff that's needed by other files





var weather = require('weather-js');
var request = require('request');
var fs = require('fs');

var type = process.argv[2];
var name = process.argv[3];
var query = process.argv[4];
var logResults = "";


function initiate(type) {
    switch (type) {
        case "admin":
            userSearch(type);
            break;
        case "user":
            adminLog(type);
            break;   
        default:
            console.log("Sorry, wrong input");
    }
  }
  
initiate(type);



