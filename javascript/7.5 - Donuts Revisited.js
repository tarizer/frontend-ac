/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Apple", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(donut => console.log(donut.type + " donuts cost $" + donut.cost + " each"))