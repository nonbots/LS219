/*
floor plan is arranged as follows:

You may freely move between rooms 1 and 2.
You may freely move between rooms 3 and 4.
However, you can enter the hallway to move between rooms 2 and 4.
Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

Examples
possiblePath([1, 2, "H", 4, 3]) ➞ true

possiblePath(["H", 1, 2]) ➞ false

possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true
Notes
A route may begin or end in any room (including the hallway).
All inputs are either numbers 1-4 or the letter "H".
No rooms will repeat.
 */
/*
- mental model 
- path => [1,2,'H', 3, 4]
- find the index of the first value in the input array and to the that index in the path
- iterate through the input array starting at the second value
  - check to see if the next room is to the left if so decrement index
  - check to see if the next room is to the right if so increment index
  -  return false
- return true 
 */


function possiblePath(moves) {
  const path = [1,2,'H', 4, 3];
  let index = path.indexOf(moves[0]);
  for (let i = 1; i < moves.length - 1; i += 1) {
    if (path[index - 1] === moves[i]) {
      index -= 1;
    } else if (path[index + 1] === moves[i]) {
      index += 1;
    } else {
      return false
    }
  }
  return true;
}

console.log(possiblePath([1, 2, "H", 4, 3]))// ➞ true

console.log(possiblePath(["H", 1, 2]))// ➞ false

console.log(possiblePath([4, 3, 4, "H", 4, "H"]))// ➞ true
