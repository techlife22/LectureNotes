/*
FIZZBUZZ CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
*/

let FB = 15;

let result = "";

if (FB % 3 == 0) {
    result += "Fizz"
}

if (FB % 5 == 0) {
    result += "Buzz"
}

console.log(result);

//else if
let FB = 3;

if (FB % 3 == 0 && FB % 5 == 0){
    console.log("Fizz Buzz");
} else if (FB % 5 == 0){
    console.log("Buzz");
} else if (FB % 3 == 0){
    console.log("Fizz");
} else {
    console.log(FB)
}

//switch
switch (true){
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log("Fizz Buzz");
        break;
    case (FB % 3 == 0):
        console.log("Fizz");
        break;
    case (FB % 5 == 0):
        console.log("Buzz");
        break;
    default:
        console.log(FB);
}

//ternary
(FB % 5 == 0) ? (FB % 3 == 0) ? 
console.log("Fizz Buzz") : 
console.log("Buzz") : 
(FB % 3 == 0) ? 
console.log("Fizz") :
        console.log(FB)








        /*
FIZZBUZZ EXERCISE (conditionals and loops)
************
-Create a function that when invoked:
    - executes a for loop running between the numbers 0 - 100
    - for multiples of 3, instead of the number, console.log "Fizz"
    - for multiples of 5 console.log "Buzz";
    - for numbers which are multiples of BOTH 3 and 5, console.log "FizzBuzz".
    - for any other number, console.log the value
*/
//Else If
function fizzBuzz() {
    for (let i = 0; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

//Switch
function fizzBuzz() {
    for (let FB = 0; FB <= 100; FB++) {
        switch (true) {
            case (FB % 3 === 0 && FB % 5 === 0):
                console.log('Fizz Buzz');
                break;
            case (FB % 5 === 0):
                console.log('Buzz');
                break;
            case (FB % 3 === 0):
                console.log('Fizz');
                break;
            default:
                console.log(FB);
        }
    }
}

fizzBuzz();


//another way below
let FB = (x) => {
    for (i = 0; i <= x; i ++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

FB(100);