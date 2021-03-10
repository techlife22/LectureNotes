/*
-a falsy value that is considered false when encountered in a boolean context
 -false
 -0
 -empty strings "","",""
 -null
 -undefined
 -Nan


 -This mean that when JS is expecting a Boolean and it is given one of the values above , it will always evaluate to "falsy".

*/

//let isOn = true;
//if (isOn == true) {
//   console.log("The light is on");
//}
//Or write is like this:
let isOn = true;
if (isOn) {
  console.log("The light is on");
}

isOn = false;

if (isOn == true) {
  console.log("The light is off");
}

let weather = 55;
if (weather < 70) {
  console.log("Wear a jacket!");
}
