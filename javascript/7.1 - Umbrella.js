/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  close: (() => (umbrella.isOpen === true) ? (umbrella.isOpen = false,  "Julia closes the umbrella!") : "The umbrella is already closed!")

};

console.log(umbrella.open());
console.log(umbrella.close());
console.log(umbrella.close());
console.log(umbrella.open());