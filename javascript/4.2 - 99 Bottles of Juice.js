/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
let bottle, bottle1, bottle2;
let output;

while (num > 0) {
  bottle1 = (num == 1) ? "bottle" : "bottles";
  bottle2 = (num == 2) ? "bottle" : "bottles";

  output = num + " " + bottle1 + " of juice on the wall! " + num + " " + bottle1 + " of juice! Take one down, pass it around... " + (num - 1) + " " + bottle2 + " of juice on the wall!";

  console.log(output);
  num--;
}
