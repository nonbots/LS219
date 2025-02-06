/*
Create a function that determines how many number pairs are embedded in a space-separated string. The first numeric value in the space-separated string represents the count of the numbers, thus, excluded in the pairings.

Examples
number_pairs("7 1 2 1 2 1 3 2") ➞ 2
// (1, 1), (2, 2)

number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
// (10, 10), (20, 20), (10, 10)

number_pairs("4 2 3 4 1") ➞ 0
// Although two 4's are present, the first one is discounted.
Notes
Always take into consideration the first number in the string is not part of the pairing, thus, the count. It may not seem so useful as most people see it, but it's mathematically significant if you deal with set operations.
 */
/*
- rules: 
  - how many pairs are embedded in a space-separated string
  - the first number in the string is the count of the next numbers 
- input: string
- output: number 

- mental model 
 - convert to an array of numbers
 - create and occurrence object
    - iterate through the array of numbers starting at the second number
    - if the number is in the object increment value by 1 else add 1 to key
 - get the values and the the sum of each pair count
  - get the values of the obj
  - for each number from values
    - divide the mumber by 2 and round down
  - add the number to to previous sum and return 
 */

function number_pairs(str) {
  const nums = str.split(" ").slice(1);
  const occur = {};
  nums.forEach(num => num in occur ? occur[num] += 1 : occur[num] = 1);
  const counts = Object.values(occur);
  console.log({counts});
  return counts.reduce((accum, count) => accum + Math.floor(count/2), 0);
}

console.log(number_pairs("7 1 2 1 2 1 3 2"))// ➞ 2
// (1, 1), (2, 2)

console.log(number_pairs("9 10 20 20 10 10 30 50 10 20"))// ➞ 3
// (10, 10), (20, 20), (10, 10)

console.log(number_pairs("4 2 3 4 1"))// ➞ 0
// Although two 4's are present, the first one is discounted.
