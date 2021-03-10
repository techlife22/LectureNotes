/*
-loops offer an easy way to do something repeatedly or loop over something. 
-There are my kinds of loops, but they all roughly do the same thing.
--It will repeat wuntil a specified condition evaluates to true
    -for statement
    -do while statement
    -while statement
    -labeled statement
    -break statement
    -for in statement
    -for of stateent
Note: there is a danger of infinite loops. There are three main parts to a loop:
1. -initial expression
2. -condition
3. -increment expression
*/


//    1.         2.     3.
//for (let i = 0; i < 10; i++) {
//    console.log(i);
// }
// console.log(i);


//Challenge: using a for loop, count to 20, by 2's
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }


//Challenge: using a for loop, count from 10 to 0, going down by 1
// for (let i = 10; i >= 0; i--){
//     console.log(i);
// }

//Challenge: using a for loop, count from 0, going down by 2's to -24
// for (let i = 0; i >= -24; i -= 2)
//     console.log(i);

// Challenge: using a for loop, go through a name and display each letter individually

for (let fname = "Kenn"; fname.length; fname++){
    alert(fname.charAt(1));
}
    
    
