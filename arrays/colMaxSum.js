/*
Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

Example
nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
n = 4
Gives the array:

[[4, 14, 12,  7],
[14, 16, 5, 13],
[7, 16, 11, 19]]

// 1, 2, 3, 4 (column)
// 25, 46, 28, 39 (sum)
You would return 2, as the 2nd column has the greatest sum.

Notes
Nums will always divide into equal-length groups.
 */
/*
- input: 
  - array of numbers 
  - integer (n)
- rules:
  - split the number into n-sized groups 
  - the groups are stack on top of each other
- output: column number with the greatest sum (integer)
- if  two columns ar ethe same return the one with the smalles column number

- mental model 

- get the sub ararys in n size 
- iterate through the colum and each row to get the colum sum 
- init the colNumber to 1;
- init greatestSum to the first col
- iterate through the sum
  - if the current sum is greater than the greater sum 
    - reassign the colNumber to current index  + 1
 *  - reassign the greatestSum to the curren value
 */

function test(nums, size) {
  const matrix = [];
  for (let start = 0; start <= nums.length  - size; start += 4) {
    matrix.push(nums.slice(start, start + size));
  }
  console.log({matrix});
  let colNumber;
  let colSum;
  for (let col = 0; col < matrix[0].length; col += 1) {
    let sum = 0; 
    for (let row = 0; row < matrix.length; row += 1) {
      sum += matrix[row][col]; 
    }
    if (col === 0) {
      colNumber = 1;
      colSum = sum;
    }
    if (sum > colSum) {
      colNumber = col + 1;
      colSum += sum;
    }
  }
  return colNumber;
}

console.log(test([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4));



