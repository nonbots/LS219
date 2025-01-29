/* You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

Examples
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
Notes
The input array will never be empty.
Objects will always have a name and quantity over 0.
The returned object should have each fruit in the same order as the original.
 * /
/*
- mental model 
  - input: array of objects where objects bunch up the quanity of the fruit
  - output: array of object where object respresent one quanity

- iterate through the array of objects 
  - iterate quanitiy times
    - add th object 
- reutrn the object 
 */

/*function splitBunches(bunches) {
  const result = [];
  bunches.forEach(bunch => {
    for (let count = 1; count <= bunch.quantity; count += 1) {
      result.push({...bunch, quantity: 1});
    }
  });
  return result;
}*/

function splitBunches(bunches) {
  return bunches.flatMap(bunch => {
    const arr = Array.from({ length: bunch.quantity }, () => ({ name: bunch.name, quantity: 1 }))
    console.log("ARR", arr);
    return arr;
  });
}
console.log(splitBunches([
  { name: "grapes", quantity: 2 }
]))
/* ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]
*/

console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
])) 
/*➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]*/
