/*
You want to introduce a discount for your online store. Every customer gets a 25% discount on the most expensive item in the shopping cart. The discount will be calculated on just one item, even if the customer buys more than one of the most expensive item.

Create a function that takes an object and returns the total price after discount.

Examples
twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]) ➞ 58124.25

twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]) ➞ 86.96
Notes
The total returned price is calculated upon two decimals.
 */


/*
rule:
every customer gets a .25 discount for the most expensive item in the cart
input: array of objects
output: total price with the discount out to 2 decimals 

mental model 
- tranforms the array of objects to an array of the price 
- sort the price in descending order 
- mutate the value to be include the .25 discount price * (1-.25)
- sum up the price and round to the second decimal
 */

function twentyFiveOnOne(items) {
  const prices = items.map(item => `${item.price} `.repeat(item.quantity).match(/\S+/g)).flat().map(price => +price).sort((a,b) => b - a);
  console.log({prices});
  prices[0] = prices[0] * (1 - .25); 
  return +prices.reduce((accum, price) => price + accum).toFixed(2);
}
console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]))// ➞ 58124.25

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]))// ➞ 86.96
