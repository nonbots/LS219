/*
Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result once gravity is switched on.

Examples
switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]

switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]) ➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]

switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]) ➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]
Notes
Each block falls individually, meaning there are no rigid objects. Think about it like falling sand in Minecraft as opposed to the rigid blocks in Tetris.
 */
/*
- mental model: 
  - iterate through each col
    - iterate through each row starting at the bottom
    - if the current element is not a # 
      - init notFoundHash to true
      - iterate the previous element
        - if elment is a # 
          - notFoundHash set to false  
 *        - swap the hash 
 *    if true break out of col and got to the next 
 */
function switchGravityOn(matrix) {
  for (let col = 0; col < matrix[0].length; col += 1) {
    for (let row = matrix.length - 1; row > 0; row -= 1) {
      const curElem = matrix[row][col];
      let swapped = false;
      if (curElem === '-') {
        for (let innerRow = row - 1; innerRow >= 0; innerRow -= 1) {
          //console.log({col, innerRow});
          const nextElem = matrix[innerRow][col];
          if (nextElem === '#') {
            console.log({curElem, nextElem});
            swapped = true;
            matrix[row][col] = '#';
            matrix[innerRow][col] = '-';
            break;
          }
        }
      }
    if (!swapped) break;
    }
  }
  return matrix;
}
console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]));
/*
➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]
*/
console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]))
/*
➞ [
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
]
*/
console.log(switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]))
/*
➞ [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]
*/
