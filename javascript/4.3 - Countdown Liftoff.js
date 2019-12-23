/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

let seconds = 60;
let message;

while (seconds) {

  switch (seconds) {
    case 50:
      message = "Orbiter transfers from ground to internal power";
      break;
    case 31:
      message = "Ground launch sequencer is go for auto sequence start";
      break;
    case 16:
      message = "Activate launch pad sound suppression system";
      break;
    case 10:
      message = "Activate main engine hydrogen burnoff system";
      break;
    case 6:
      message = "Main engine start";
      break;
    default:
      message = "T-" + seconds + " seconds";
  }
  console.log(message);
  seconds--;
}
console.log("Solid rocket booster ignition and liftoff!");