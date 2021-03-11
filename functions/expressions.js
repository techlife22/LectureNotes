/*
    Function expressions do not get hoisted. They are stored within variables. Variables do not get hoisted.
Function declarations do get hoisted.
   (1.)
let hey = function hi (){
    console.log("Hi");
}

    1. The variable hey is not representative of the function hi()

*/

let hey = function hi() {
  console.log("Hi");
};

hey();
