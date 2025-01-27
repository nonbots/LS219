/*
Validating a Set in the Set Game
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.
Examples
isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
]) ➞ true

isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]) ➞ false
Notes
A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.
You can play Set by checking the Resources tab.
*/

/*
- input: array of card objects
- output: boolean (true if cards are sets else false)

- rules:
  - set: all cards have the on least on property that are the  same or all cards have  different properties
  - properties includes: colors, numbers, shades and shapes.

- examples:
  Colors: red, purple, green
  Numbers: 1, 2, 3
  Shades: empty, lined, full
  Shapes: squiggle, oval, diamond
  Here, a set is represented by an array containing three cards.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes

The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.

- all have to be the same or all have to be different 
- mental model:

SOLUTION 1
- get the keys for the object from input => array of keys (properties)
- iterate through the keys 
  - iterate throuh the array of objects and get the values of each property and  add them to the set 
  - if the propertiesa are not unique and not all the same for all cards return false
- return true
 */

/*function isSet (cards) {
  const props = Object.keys(cards[0]);
  for (let i = 0; i < props.length; i += 1) {
    const prop = props[i];
    const set = new Set();
   for (let j = 0; j < cards.length; j += 1) {
     set.add(cards[j][prop]); /// the dot operator using the actual string to look up the keys; use [] for variables
   }
    console.log({set});
    if (set.size !== 1 &&  set.size !== cards.length) return false; //properties are not unique and not all the same for all cards 
  }
  return true;
}
*/
/*
SOLUTION 2
 - init a result array to an empty array 
 get an array of subarrays where the subarrays consist of the of the values of the card 
  - iterate through the cards and add the values to the result array 
  - iterate through each property value
    - init a set to empty set
    - iterate through each card
    - add the values to the set
  - check if the values are not unique and not all the same for all card return false
- return true
 */

function isSet (cards) {
  const propValues = cards.map(card => Object.values(card));
  console.log({propValues});
  for (let propIdx = 0; propIdx < propValues[0].length; propIdx += 1) {
    const set = new Set();
    for (let cardIdx = 0; cardIdx < propValues.length; cardIdx +=1) {
      //console.log(propValues[cardIdx][propIdx]);//change the card on each iteration in the inner loop
      set.add(propValues[cardIdx][propIdx]);
    }
    if (set.size !== 1 &&  set.size !== cards.length) return false; //properties are not unique and not all the same for all cards 
  }
  return true;
}

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])) //➞ true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])) //➞ true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]))// ➞ false


