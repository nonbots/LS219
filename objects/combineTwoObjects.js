/*
 Take two objects with similar key values and combine them into a new object summing any values that belong to the same category.

There's a married couple, Hank and his spouse Sheila. Hank works at a power plant making $70,000 a year, and Sheila is a teacher making $40,000 a year. They both earn rental income from separate rental properties, Hank will get $12,000 and Sheila $10,000. The new object will show their separate income but combine the rental income because it fits the same category.

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}
Arguments
user1Income (Object) ⁠— an income object for user1
user2Income (Object) ⁠— an income object for user2
returns: A new object with like values combined
Challenges
They won't have the same number of key-value pairs.
The return object must return the values ordered from lowest to highest so your answers can match the test answers.
 * /

/*
mental model 
- get a set of the keys 
- iterate through the keys
  - if the key in both object 
    add the key to the new object and the sum vaule
  - else if (key is in first obj)
    add the key and value to the first object
  - else add the key an value to the second object
- sort by value and return object
*/
/*
create a new object with the first properties of the first object 
- iterate through the second object 
check if the properties in the second object exist in the new object if not add it if yes change the value at key 
-change to array, sort by value in descending order and change back to an object
 */
const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}

/*
becomes ➞ {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
}
*/

function combineObjects(obj1, obj2) {
  const uniqueKeys = Array.from(new Set([...Object.keys(obj1), ...Object.keys(obj2)]));
  console.log({uniqueKeys});
  const result = {};
  for (let i = 0; i < uniqueKeys.length; i += 1) {
    if (uniqueKeys[i] in obj1 && uniqueKeys[i] in obj2) {
      result[uniqueKeys[i]] = obj1[uniqueKeys[i]] + obj2[uniqueKeys[i]];
    } else if (uniqueKeys[i] in obj1) {
      result[uniqueKeys[i]] = obj1[uniqueKeys[i]];  
    } else {
      result[uniqueKeys[i]] = obj2[uniqueKeys[i]];  
    }
  }
  return Object.fromEntries(Object.entries(result).sort((a, b) => b[1] - a[1]));
}
console.log(combineObjects(user1, user2));
