//Arrow functions


/*Syntax
/*declaration: //   name            //parameters & fat arrow section            phat arrow
let phatArrow = (/* parameter1, parameter2, etc* */ // => console.log('fat arrow')

/*
1   2               3              4                            5
let phatArrow = (param1, param2) => console.log("fat arrow") phatArrow()
1.declaration
2.name
3.parameters and fat arrow section
4.phat arrow
5. Call the function

consise body arrow functions
-return by default
-run when they are called upon (phatArrow())
-may only be one line long
*/

//let fish = () => console.log('Bobby and Jalen had fish for lunch');
//fish();

/*
Block body arrow functions
-Do not return by default. Must include a return statement.
-run when they are call upon
-may consist of more than one line, given they are wrapped in {}.
*/

let myName = (fname, lname) => {
    return `My name is ${fname} ${lname}`;
}
console.log(myName("brandon", "beason"));

//Consise vs Block Body functions
//Consise =>
//-returns implicitly (no return statement needed)
//-must be contained into one line

//Block =>
/*
-does not contain an explicit return statement, we have to include it (return xyz)
-can be multiple lines as long has they are in {}
*/
//consise: 
let apples = x => console.log(`There are ${x} apples.`);
apples(100);

//block
let apples1 = x => {
    console.log(`There are ${x}. `);
}
apples1(1000);
//Note: More than one parameter will require ()
//the default return of an arrow function is undefined
