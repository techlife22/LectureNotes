async function myFunction() {
  //we can now use the "await" keyword
}

/*or make it as:     const myFunction = async () => {
    //we can now use the "await" keyword

/}

-Two key differences between regular functions and async functions: 
    -Async functions: 
        -unlocks the use of the await keyword
        -Always returns a promise

*/

//Throw an error

async function fn() {
  throw Error("This is a mistake!");
}

fn().then(console.log).catch(console.log);

//async function

async function fn() {
  return Promise.reject("Hello");
}
fn().then(console.log).catch(console.log);
//Promise return normal function

function myFn() {
  return Promise.resolve("Hello");
}
myFn().then(console.log);

//lockboxes
function firstLockBox() {
  return new Promise(function (resolve, reject) {
    if (true) {
      resolve(12345);
    } else {
      reject(Error("Unexpected Error!"));
    }
  });
}

function secondLockBox(key) {
  return new Promise(function (resolve, reject) {
    if (key === 12345) {
      resolve(98765);
    } else {
      reject(Error("Wrong Key!"));
    }
  });
}

function thirdLockBox(key) {
  return new Promise(function (resolve, reject) {
    if (key === 98765) {
      resolve("Treasure!");
    } else {
      reject(Error("Wrong Key!"));
    }
  });
}

// async function

async function openBoxes() {
  let firstBox = await firstLockBox();
  let secondBox = await secondLockBox(firstBox);
  let thirdBox = await thirdLockBox(secondBox);
  console.log(firstBox);
  console.log(secondBox);
  console.log(thirdBox);
}
openBoxes();
//Hello world runs because it will execute before the async function
openBoxes();
console.log("Hello World");

//Instructors code for this lesson:

async function myFunction() {
    //await
}

const myFunc = async () => {
    //await
}

/*
Two key differences between regular functions and async function:
    -Async Functions:
        -Unlocks the use of the await keyword
        -Always returns a promise
*/

async function fn() {
    // throw Error("This is a mistake!");
}

// fn()
// .then(console.log)
// .catch(console.log)


//promise returning normal function
function myFn() {
    return Promise.resolve("Hello");
}

// myFn().then(console.log);


function firstLockBox() {
    return new Promise(function(resolve, reject) {
        if(true) {
            resolve(12345);
        } else {
            reject(Error("Unexpected Error!"));
        }
    })
}

function secondLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 12345) {
            resolve(98765);
        } else {
            reject(Error("Wrong Key!"));
        }
    })
}

function thirdLockBox(key) {
    return new Promise(function(resolve, reject) {
        if(key === 98765) {
            resolve("Treasure!");
        } else {
            reject(Error("Wrong Key!"))
        }
    })
}

async function openBoxes() {
    let firstBox = await firstLockBox();
    let secondBox = await secondLockBox(firstBox);
    let thirdBox = await thirdLockBox(secondBox);
    console.log("first: ", firstBox);
    console.log("second: ", secondBox);
    console.log("third: ", thirdBox);
}

openBoxes();



let fetchRickandMorty = async () => {
    let results = await fetch("https://rickandmortyapi.com/api/character/");
    let json = await results.json();
    return json;
}

fetchRickandMorty().then(handleResults);

function handleResults(results) {
    console.log(results)
    //display results to the screen using DOM
}

