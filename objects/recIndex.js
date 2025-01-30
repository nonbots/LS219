/*
Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

Examples
recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

recurIndex("") ➞ {}

recurIndex(null) ➞ {}
Notes
You can solve this challenge via a recursive approach, alternatively.
 */

/*
- mental model 
  - iterate through the input characters
    - if current char is not in occur object 
      - add the char as key and the index to an array as value
    - else 
      - add index to the array value 
    - if the array has a length of 2 return the char and the array value in an object
 */

function recurIndex(element) {
  if (element === null) return {};
  const occur = {};
  for (let i = 0; i < element.length; i += 1) {
    element[i] in occur ? occur[element[i]].push(i) : occur[element[i]] = [i];
    if (occur[element[i]].length === 2) return {[element[i]]: occur[element[i]]};
  }
  return {};
}

console.log(recurIndex("DXTDXTXDTXD"))// ➞ {"D": [0, 3]}

console.log(recurIndex("YXZXYTUVXWV"))//➞ {"X": [1, 3]}

console.log(recurIndex("YZTTZMNERXE"))// ➞ {"T": [2, 3]}

console.log(recurIndex("AREDCBSDERD"))// ➞ {"D": [3, 7]}

console.log(recurIndex(""))//➞ {}

console.log(recurIndex(null))// ➞ {}
