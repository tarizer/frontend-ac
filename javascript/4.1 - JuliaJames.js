/*
 * Programming Quiz: JuliaJames (4-1)
 */

let x = 1;

while (x <= 20) {

  let output = "";
  if (x % 3 === 0) {
    output = "Julia";
  }
  if (x % 5 === 0) {
    output += "James";
  }

  if (output === "") { // if number is not divisible by 3 or 5 print the number
    output = x;
  }

  console.log(output);
  x++;
}


