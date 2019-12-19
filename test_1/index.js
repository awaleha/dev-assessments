"use strict";
/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  let results;

  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.
  
  //grabs json,
  let simpsons = require('./test_data.json');

  //loops through each item in array
  for (let character in simpsons){

  	//creates new key 'example', creates a phrase comprised of characters name and catchphrase as the value
  	simpsons[character].example = simpsons[character].first_name + " " + simpsons[character].last_name + " says " + simpsons[character].catchphrase;
  }

  //returns new json
  results = simpsons;
  console.log(simpsons);

  return results;
};


