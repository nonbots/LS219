/*
 Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.) and returns the sum of every separate number in each string in the array.

Examples
sum(["1", "five", "2wenty", "thr33"]) ➞ 36

sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099

sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759
Notes
Numbers in strings can be negative, but will all be base-10 integers.
Negative numbers may directly follow another number.
The hyphen or minus character ("-") does not only occur in numbers.
Arrays may be ragged or empty.
*/


/*
- input: 
  - array of strings with random nested arrays 
- return:
  - integer ( the sum of every number in each string) 

- ex: 


- mental model 
  - flaten the array => one array of strings 
  - reduce the return summations from the callback 
  - filter out from only numbers and - in each string 
    - use regex to match for contiguous digits and - (.match(/[-][0-9]+|[0-9]+/g)
    - get the summation of all the numbers
 
 - 
 */
 
function sum(elem) {
  return elem.flat(Infinity).reduce((accum, str) => {
    const nums = str.match(/-?\d+/g);
    return nums ? nums.reduce((accum, str) => Number(str) + accum, 0) + accum : accum;
  }, 0);
}

console.log(sum(["1", "five", "2wenty", "thr33"]))// ➞ 36

console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]))// ➞ 1099

console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]))// ➞ 759
