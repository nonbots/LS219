/*
Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

 arr,  x,  y
arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
x will hold the row coordinate, while y will hold the column coordinate.
You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

Examples
lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1) ➞ 1


[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]
lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0) ➞ -1


[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]
 /*
- input: 
- output: integer (lowest value neighbor with given the center element)
 
 - mental model
  - get the positon 
  - init the lowestValue ot the value of the position
    - iterate through the row (3 rows) 
      if defined
      - iteratte through the column (3 cols)
        if defined 
         if the value is lower than the lowestValue
          - reassign the lowestValue to value
  */
  function lowestElement (matrix, rowInput, colInput) {
    let lowestValue = matrix[rowInput][colInput];
    for (let row = rowInput - 1; row < rowInput + 2; row += 1) {
      if (matrix[row]) {
        for (let col = colInput - 1 ; col < colInput + 2; col += 1) {
          if (matrix[row][col]) {
            if (matrix[row][col] < lowestValue) lowestValue = matrix[row][col];
          }
        }
      }
    }
    return lowestValue;
  }
console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1))// ➞ 1

/*
 *
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]
*/
console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0))
//➞ -1

/*
[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]
*/
