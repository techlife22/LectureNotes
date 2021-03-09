/*
-Properties are qualities associated with a data type
-strings only have one singular property for us to access-- the length property
-

*/

let myName = "Brandon";
console.log(myName.length);//don't need parenthesis because it's a property and not a function

/*
-Methods are tools that can helpl us manipulate data
-.property vs [.method() - (pre-built function associated to different data types)]

*/

let myNameIs = "Brandon";
console.log(myNameIs.toLocaleUpperCase()); //functions need parenthesis to run

let home = "My home is Indianapolis."
console.log(home.includes("Indianapolis"));


function splitString(StringToSplit, separater) {
    const arrayOfStrings = stringToSplit.split(separater)
}
console.log(The)
// this is done like this: 
let sent = "This string will be split into differenet parts.";
let splitString = sent.split(" ");
console.log(stringToSplit.split(" "));
