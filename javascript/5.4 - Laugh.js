/*
 * Programming Quiz: Laugh (5-4)
 */

let laugh = function (num) {
  let output = "";

  while (num--) {
    output += "ha";
  }
  return output + "!";
}

console.log(laugh(5));
