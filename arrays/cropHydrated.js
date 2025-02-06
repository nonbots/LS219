/*You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?

Examples
cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]) ➞ true

cropHydrated([
  [ "c", "c", "c" ]
]) ➞ false
// There isn"t even a water source.

cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]) ➞ false
*/
/*
-iterate through the elements
  - if the element is a W
    - iterate through the row (3 tiles)
      - if row at index is defined 
        - iterate through the col (3 tiles)
         - if col at row is defined and the tiles is c
         - update to h
 - get a flatten the fiels and check if c exist return false 
 - return true
*/


function cropHydrated (field) {
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field[i].length; j += 1) {
      const curEle = field[i][j];
      console.log({curEle});
      if (curEle === 'w') {
        for (let k = i - 1; k < i + 2; k += 1) {
          if (field[k]) {
            for (let l = j - 1; l < j + 2; l += 1) {
              const neighbor = field[k][l];
              if (neighbor && neighbor === 'c'){
                field[k][l] = 'h';
              }
            }
          }
        }
      }
    }
  }
  console.log({field});
  //return field.flat().join("").match(/c/g) === null ? true : false;
  return !(/c/.test(field.flat().join("")));
}
console.log(cropHydrated([ [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]))// ➞ true

console.log(cropHydrated([
  [ "c", "c", "c" ]
]))// ➞ false
// There isn"t even a water source.

console.log(cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]))// ➞ false
