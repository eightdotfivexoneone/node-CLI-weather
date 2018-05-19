// Here we include the weather-js so we can use it in our Node application.
var moment = require("moment");
let weather = require("weather-js");

let where = process.argv[3];
weather.find({ search: where, degreeType: "F" }, function(err, result) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript

  console.log(JSON.stringify(result, null, 2));

});