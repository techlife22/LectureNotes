// *****
//Types
//***** 

/*
Booleans

-are ONLY true/false values

*/
let on = true;
console.log(on);

let off = false;
console.log(off);

/*
NULL
-Null is like an empty bucket, it has the capacity to be filled, but it is currently not

*/

let emptyBucket = null
emptyBucket = 'water';
console.log(emptyBucket);

/*
Undefined
-currently has no value assigned
-acts as the means (plastic/metal) to create the bucket

*/

//let metal; // correct way to assign undefined variable
//console.log(metal);

//Null vs undefined
//Null is like an empty bucket, the bucket is there , but there is nothing in it.
//Undefined is like the materials we will use to create the bucket

//we can also think of these two variables as pizza boxes. 
//Null- empty pizza box waiting for a pizza
//undefined- unassembled box 

let emptyBox = null;
let unassembledBox;

/*
NUMBERS
- In Javscript numbers are literally just numbers
- You can add, subtract, multiply, and divide 
- You can use decimals
*/
let degrees = 90;
console.log(degrees)
// will console.log() as 999999999999999
let precise = 999999999999999
console.log(precise)
// will console.log() as 10000000000000000
let rounded = 9999999999999999
console.log(rounded)
// will console.log() as 0.30000000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite)

/*
A string is a any value in between a set of quotes or backticks
-A string can be denoted by '', ""
-'string' === "string" === `string`
//numbers vs strings
let addition = 1050 + 100

*/
console.log(typeof addition);

/*

OBJECTS
-can be denoted by {}
-stores two things -- key and a value
-we can access these values by digging into the objects wiht dot notation. object.value


*/
//Say we want to create an app like spotify
//we want to take in an artists name, amount of albums
//they've produced , all members are still alive?

let artist = {
    //key     //value
    name: 'Queen',
    albums: 13,
    allMembersAlive: false
}
console.log(artist);
//example of dot notation
console.log(artist.allMembersAlive);
console.log(typeof artist.name)


/*

arrays
let list = [ 'item1', 'item2', 'item3']
              (0)         (1)    (2)        
Denotes by []


*/
let burritos = ['large', 4, true];
console.log(typeof burritos);

let add = 100 + 300;
console.log(add);

let concat = 'Corynne' + 'Moody';
console.log(concat);


//Challenge//

let firstName = "Brandon";
let lastName = "Beason";
let houseNumber = 8655;
let street = "North Meridian Street";
let city = "Indianapolis";
let state =  "Indiana";
let zipcode =  46260;
console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

//or do this:
let info = {
    firstName: "Brandon",
    lastName: "Beason",
}
console.log(info);