let weather = 85;

if (weather < 70) {
    console.log("Wear a jacket!")
} else {
    console.log("No jacket necessary!")
}
//Mine below. Make sure you use == for the if statement
let fName = "Brandon";
if (fName == "Steve") {
    console.log("Hello, my name is " + fName + ".");
} else {
    console.log("Hello, is your name " + fName + "?");
}

//let fName = "Brandon";
//if (fName == "Brandon") {
//    console.log(fName);
//} else {
//    console.log("Hello, what is your name?")
//}

/*
Use this string: let name = 'zAchARy';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

//Bronze
let myName = "zAchARy";
if (myName.charAt(0) === myName.charAt(0).toLocaleUpperCase()) {
    console.log(myName);
} else {
    console.log("Hey, this isn't written correctly");
}

//Silver
if (myName [0] === myName[0].toLocaleUpperCase()){
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}
//gold
let rusults = "";
if (myName [0] === myName[0].toLocaleUpperCase()){
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}


/*
//Instructors data:
let weather = 150;

if (weather < 70) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary!");
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    
Silver:
    If It is your name, console log 'Hello, my name is <name>'
    
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
/*
//Bronze
let nameOne = "Rachel";

if (nameOne == "Rachel"){
    console.log(nameOne);
} else {
    console.log("Hello, what is your name?");
}

//Silver
let nameTwo = "Rachel";

if (nameTwo == "Rachel"){
    console.log(`Hello, my name is ${nameTwo}`);
    console.log("Hello, my name is " + nameTwo);
} else {
    console.log("Hello, what is your name?");
}

//Gold
let nameThree = "Brian";

if (nameThree == "Rachel"){
    console.log(`Hello, my name is ${nameThree}`);
    console.log("Hello, my name is " + nameThree);
} else {
    console.log(`Hello, is your name ${nameThree}?`);
}

/*
Use this string: let name = 'zAchARy';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that first letter of a string plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
/*
//Bronze
let myName = "ZAchARy";

if (myName.charAt(0) === myName.charAt(0).toUpperCase()) {
    console.log(myName);
} else {
    console.log("Hey, this isn't written correctly");
}

//Silver

if (myName[0] === myName[0].toUpperCase()){
    console.log(myName[0]);
} else {
    console.log(myName.substr(1).toLowerCase());
}

//Gold
let results = "";

if (myName[0] === myName[0].toUpperCase()){
    results = myName[0] + myName.substr(1).toLowerCase();
} else {
    results = myName[0].toUpperCase() + myName.substr(1).toLowerCase();
}
console.log(results)

// console.log(results += myName.substr(1).toLowerCase());
*/

//Else If Statements


/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 21;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything!");
} else if (age >= 25) {
    console.log("Rent a car!");
} else if (age >= 21) {
    console.log("You can drink");
} else {
    console.log("You can vote!");
}

if (age >= 25) {
    console.log("You can rent a car")
} else if (age < 25 && age >= 21){
    console.log("You can drink!");
} else if (age < 21 && age >= 18){
    console.log("You can vote!");
} else {
    console.log("Sorry, you are too young to do anything!");
}
