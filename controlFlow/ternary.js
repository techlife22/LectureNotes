// A ternary basicaly acts as a shortcut to writing if, if/else, and else/if statements

let num = 0;

//ternary
num > 0 ? console.log("yes") : console.log("no"); //don't have to use () at the condition

//instead of
// if (num > 0) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// num == 0
//   ? console.log("Hello")
//   : num < 0
//   ? console.log("Hi")
//   : console.log("Goodbye");

// if (num == 0) {
//     console.log("hello");
// } else if (num < 0 > {
//     console.log("Hi")
// }
let age = 30;
age >= 25
  ? console.log("Yay! You can drive a car!")
  : age >= 21
  ? console.log("Yay, you can drink!")
  : age >= 18
  ? console.log("Yay! You can vote!")
  : console.log("Sorry you are too young to do anything fun.");
