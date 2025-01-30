/*
 Count How Many Times an Element is Repeated
Given an array, create a function that returns an object detailing how many times each element was repeated. Sort the object by value in descending order.

Examples
countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }

countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) ➞ { null: 3, Infinity: 2}
//countRepetitions(["Infinity"], "null", ["Infinity"], "null", "null"]) ➞ { null: 3, [Infinity]: 2}
Notes
The array elements can be anything.
 */
/*
- input: array of strings 
- output: object where keys are the string and value is the number of this the string occurs
- iterate through each element
  - if element exist increment value by 1 exist add the element and set value to 1
- convert to entries and sort descending by value 
- convert back to object 
*/
function countRepetitions(elems) {
  const occur = {};
  elems.forEach(elem => {
    elem in occur ? occur[elem] += 1 : occur[elem] = 1;   
  });
  console.log(occur);
  const sorted = Object.entries(occur).sort((a,b) => b[1] - a[1]);
  console.log(sorted);
  return new Map(sorted);
}

console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]))// ➞ { cow: 3, cat: 2, dog: 1 }

console.log(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]))// ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

console.log(countRepetitions(["Infinity", "null", "Infinity", "null", "null"]))// ➞ { null: 3, Infinity: 2}
