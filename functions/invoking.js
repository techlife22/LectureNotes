/*

  function hi() {
  console.log ("Hi");
  }
 (1.)
hi()

1- This is where we call or invoke the function


    Writing the function body is like buying a VHS tape, but you can't watch it unless you play () it.
*/



function hi() {
    console.log("Hi");
}
hi;
hi(); //this is the correct way to invoke a function
console.log(hi);
console.log(hi());

//create a function that , when invoked, lists out the numbers 1-10

function numbers() {
    for (let i = 1; i <= 10; i++)
        console.log(i);
}
numbers();

//given the array, create a function that lists out the values individually
let arr = ['This', 'is', 'really', 'cool'];
function cool() {
    for (word of arr) {
        console.log(word);
    }
    
}
cool();