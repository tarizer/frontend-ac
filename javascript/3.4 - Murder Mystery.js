/*
 * Programming Quiz: Murder Mystery (3-4)

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
 */

// change the value of `room` and `suspect` to test your code
var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = true;

if (room == "ballroom" && suspect == "Mr. Kalehoff") {
  weapon = "poison";
} else if (room == "gallery"  && suspect == "Ms. Van Cleve") {
  weapon = "trophy";
} else if (room == "billiards room" && suspect == "Mrs. Sparr") {
  weapon = "pool stick";
} else if (room == "dining room" && suspect == "Mr. Parkes") {
  weapon = "knife";
} else {
  solved = false;
}

if (solved) {

  let message = suspect + " did it in the " + room + " with the " + weapon + "!";
	console.log(message);
}
