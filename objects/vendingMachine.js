/*
Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).
Examples
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
Notes
The products are fixed and you can find them in the Tests tab.
If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.
 */
/*
- input: 
  - products in the vending machine
  - integer the money put into the machine 
  - string to identify the product in the machine 

- output
  - string "invalid" if the product does not exist 
  - string "not enough money" if the money put into the machine is not enough 
  - object with product name and change in an array of coins
 
 - filter out for the product with the number 
 - if array is empty return "invalid"
 
 - if the cost is greater than input money return "not enough change 
 - get the difference = cost - input money
 - init change to empty array
 - while difference is not equal to 0 
  - iterate through the coins array 
    -if current coin is equal or less than input money 
      - add the coin to change
      - and decrement difference
 return object with change
 */
const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

const coins = [500, 200, 100, 50, 20, 10];

console.log(vendingMachine(products, 200, 7)) //➞ { product: "Crackers", change: [ 50, 20, 10 ] }

console.log(vendingMachine(products, 500, 0))// ➞ "Enter a valid product number"

console.log(vendingMachine(products, 90, 1))// ➞ "Not enough money for this product"

function vendingMachine(products, moneyInput, id) {
    const product = products.filter(product => product.number === id)[0];
  if (!product) return "invalid number";
  if (moneyInput < product.price) return "not enough money";
  const change = [];
  let difference = moneyInput - product.price;
  while(difference !== 0) {
    for (let i = 0 ; i < coins.length; i += 1) {
      if (coins[i] <= difference) {
        change.push(coins[i]);
        difference -= coins[i];
      }
    }
  }
 return {product:product.name, change: change};
}
