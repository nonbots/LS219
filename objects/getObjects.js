/*
Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.

Examples
getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}) ➞    {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
}
Notes
Check the examples above for clarification.
*/
/*
/10:23
- iterate through the object 
  - store the mark as key the age as value in a array 
  400: [18, 17]
  - iterate through new object 
    - for each key get the max age 
    - find the object with the age and the mark by interating through the object 
    add the object and kwy to the result object 

*/
/*function getObject (obj) {
  const result = {};
  const markAgeObj = {};
  for (let key in obj) {
   obj[key].marks in markAgeObj ? markAgeObj[obj[key].marks].push(obj[key].age) : markAgeObj[obj[key].marks] = [obj[key].age];
  }
  let index = 0;
  for (let key in obj) {
     if (obj[key].age === Math.max(...markAgeObj[obj[key].marks])) {
      result[index] = obj[key];
      index += 1;
     }     
    }
  return result;
}
*/
console.log(getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}))
/*➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}
*/
console.log(getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}))
/*➞    {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
}
*/
function getObject(gradeObj){
  let resultObj = {};
  let gradeTable = {};
  let num = 0;

  let sortedByAge = Object.fromEntries(Object.entries(gradeObj).sort((a, b) => b[1].age - a[1].age).map((sub, idx) => [idx, sub[1]]));
  console.log(sortedByAge);
  for (const key in sortedByAge){
    if (!gradeTable[sortedByAge[key].marks]){
      gradeTable[sortedByAge[key].marks] = 1;
      resultObj[num] = sortedByAge[key];
      num += 1;
    } 
  }
  console.log(resultObj)
}

