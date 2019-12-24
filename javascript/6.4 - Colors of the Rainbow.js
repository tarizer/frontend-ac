/*
 * Programming Quiz: Colors of the Rainbow (6-4)

 * var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

let rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);