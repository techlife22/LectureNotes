let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];
//regular for loop:
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

food.forEach((foodItem) => console.log(foodItem));

//forEach method cannot return a value. Cannot use the "return" keyword

//capitalize it:  food.forEach(foodItem => console.log(foodItem.toUpperCase());
//console.log(foodItem);

food.forEach((foodItem, index) => console.log(foodItem, index)); //index is the place number of the item

/*
CHALLENGE
************

    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

//let movies = ["Rocky", "It", "Rambo", "Annie"]
//movies.forEach(myMovies => console.log(myMovies));
let movies = ["Rocky", "It", "Rambo", "Annie"];
movies.push("ET");
console.log("Push: " + movies);

movies.splice(1, 1, "Bull Durham");
console.log("Splice: " + movies);
