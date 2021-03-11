/*
-first pass: stores our variable/fundction declarations, but does not assign values. Anythign that needs hoisted is hoisted here.
-second pass: assigns the values to our variables and executes any hoisted source code.

*/
//console.log(myName);
//let myName = "Brandon";

b();

function b() {
    console.log("I have been hoisted.");
}

