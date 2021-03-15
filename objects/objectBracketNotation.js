/*
-Object bracket notation can also allow us to find a value in an object
-Using object bracket notation can be handy if we want to store a key in a variable and then use that variable to parse through an object.
-this works because all keys in an object are strings
-have to use bracket notation if the key has a space in it
*/

let garden = {
    vegetable: "zuchini",
    flower: "sunflower",
    fruit: "grape",
    water: true,
    sun: true,
    size: 10
}
let test = Object.keys(garden);
console.log(test);
console.log(typeof test[3]);

console.log(garden.vegetable);
console.log(garden["vegetable"]);

let baking = {};
baking["zuchini"] = "better make some bread";
console.log(baking);
