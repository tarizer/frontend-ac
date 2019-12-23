/*
 * Programming Quiz: Factorials (4-7)
 */

let number = 12;
let solution = 1;

for (let i = number; i > 0; i--) {
  solution *= i;
}

console.log(solution);