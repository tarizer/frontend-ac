/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = test2 = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function (element, index, arrayRef) {
  if (element % 3 === 0) {
    arrayRef[index] = element + 100;
  }
  // myArray[index] = (element % 3 === 0) ? element + 100 : element; // Another way
});

// console.log(test);

// Use map to do the same thing

// let newTest = test2.map(function (element) {
//   return (element % 3 === 0) ? element + 100 : element ;
// });

let newTest = test2.map(element => (element % 3 === 0) ? element + 100 : element);

console.log(newTest);