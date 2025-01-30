/*
Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).

Examples
doesBrickFit(1, 1, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 1, 1, 1) ➞ true

doesBrickFit(1, 2, 2, 1, 1) ➞ false
Notes
You can turn the brick with any side towards the hole.
We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
You can't put a brick in at a non-orthogonal angle.
 */
/*
- input: integers (brick height, width, and depth) (hole width and height)
- output: boolean
-mental model 
 - get the min dimension for the brick sort in descending 
 - sort the hole in descending order.
  - does the first and second dimension of the brick fit in the hole 

 - doesFit? (brick dimension, hole dimension) => boolean 
   - if the first dimension of the brick is equal of less than the first dimesion of the hole 

*/
function doesBrickFit (...dimensions) {
  const brickDimensions = dimensions.slice(0, 3).sort((a,b) => b - a).slice(1) ;
  const holeDimensions = dimensions.slice(3).sort((a,b) => b - a);
  console.log(brickDimensions, holeDimensions);
  if (doesFit(brickDimensions[0], holeDimensions[0]) && doesFit(brickDimensions[1], holeDimensions[1])) return true;
  return false; 
}

function doesFit(brickDim, holeDim) {
 return brickDim <= holeDim;
}
console.log(doesBrickFit(1, 1, 1, 1, 1))// ➞ true
console.log(doesBrickFit(1, 2, 1, 1, 1))// ➞ true
console.log(doesBrickFit(1, 2, 2, 1, 1))// ➞ false
console.log(doesBrickFit(2, 1, 2, 1, 2))// ➞ true
console.log(doesBrickFit(2, 2, 2, 1, 2))// ➞ false
