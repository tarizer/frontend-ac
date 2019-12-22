/*
 * Programming Quiz: Musical Groups (3-3)

Write a series of conditional statements that:

Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4

 */

// change the value of `musicians` to test your conditional statements
let musicians = 3;
let message = "";

// your code goes here

if (!Number.isInteger(musicians) || musicians <= 0 ) {
  message = "not a group";
} else {
  switch (musicians) {
    case 1:
      message = "solo";
      break;
    case 2:
      message = "duet";
      break;
    case 3:
      message = "trio";
      break;
    case 4:
      message = "quartet";
      break;
    default:
      message = "this is a large group";
  }
}

console.log(message);