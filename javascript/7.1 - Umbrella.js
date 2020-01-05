/*
 * Programming Quiz: Umbrella (7-1)
 */

const umbrella = {
  color: "pink",
  isOpen: true,
  // eslint-disable-next-line object-shorthand
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    }
    umbrella.isOpen = true;
    return "Julia opens the umbrella!";
  },
  close: () =>
    umbrella.isOpen === true
      ? ((umbrella.isOpen = false), "Julia closes the umbrella!")
      : "The umbrella is already closed!"
};

console.log(umbrella.open());
console.log(umbrella.close());
console.log(umbrella.close());
console.log(umbrella.open());
