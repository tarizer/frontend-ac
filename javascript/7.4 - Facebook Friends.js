/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here

facebookProfile = {
  name: "Tarik",
  friends: 5,
  messages: ["message1", "message2", "message3"],

  postMessage: (message) => facebookProfile.messages.push(message),
  deleteMessage: (index) => facebookProfile.messages.splice(index,1),
  addFriend: () => ++facebookProfile.friends,
  removeFriend: () => --facebookProfile.friends

}

console.log(facebookProfile.postMessage("hello!"));
console.log(facebookProfile);

console.log(facebookProfile.deleteMessage(2));
console.log(facebookProfile);

console.log(facebookProfile.addFriend());
console.log(facebookProfile);

console.log(facebookProfile.removeFriend());
console.log(facebookProfile);
