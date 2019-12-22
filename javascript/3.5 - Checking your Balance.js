/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
// Logic is ugly but just following the given flowchart

var balance = 325.00;
var checkBalance = true;
var isActive = false;
let message = "";

// your code goes here
if (checkBalance) {
  if (isActive && balance > 0) {
    message = "Your balance is $" + balance.toFixed(2) + ".";
  } else if (!isActive) {
      message = "Your account is no longer active.";
  } else if (balance === 0) {
        message = "Your account is empty.";
  } else {
        message = "Your balance is negative. Please contact bank.";
  }
} else {
  message = "Thank you. Have a nice day!";
}

console.log(message);