"use strict";

/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence. The function should then only return the elements where
 * the last name is "Simpson".
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test2() {
  let results;

  // Write your code here.  The pre-written lines above and below are just suggestions, feel free to delete
  // them and start fresh.
  let simpsons = require('./test_data.json');

  //loops through each item in array
  for (let character in simpsons){

  	//creates new key example, puts the example phrase as its value
  	simpsons[character].example = simpsons[character].first_name + " " + simpsons[character].last_name + " says " + simpsons[character].catchphrase;
  }

  //returns new json
  results = filterForSimpsons(simpsons);
  console.log(results);

  return results;
};

//filters for characters with the last name 'Simpson' using Array.prototype.filter()
function filterForSimpsons(characters){
	let simpsonsFamily = characters.filter(char => char.last_name == 'Simpson');
	return simpsonsFamily;
}
