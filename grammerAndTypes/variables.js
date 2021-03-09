/*
-Variables are named containers for stroing data values
-we name the variables so we can refer to them and the values they hold at a later time
*/

let a = 2;

/*
(1)    (2)   (3)   (4)
let    b    =     2;
1. JS keyword to denote the creation of a variable
2.The name of the variable, in which the developer refers to in order to grab the value stored
3.Assignment operator
4.The initial value



*/

//The declaration is to the left of the assignment operator(=)
//This is where the variable is created by utilising a designated JS keyword (var, let, const) and giving it a name

let x; //allowed as declared, but it is undefined

//The initialization is to the right side of the assignment operator (=)
//This is where the developer sets the value for the declared variable
//      (1)
//let x = 30;
//1. Initialization

let y;
console.log("Declaration:",y);
y = 10;
console.log("initializaton",y);

y = 35;
console.log("initialization 2:", y);
let r = 44;
console.log(r);
let w = 54;
console.log("initialization 3:", w)
