let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (fooditem of food) {   //best way to loop through an array
    console.log(fooditem);
}

food.push("Pizza");  //let food.push=food.push("Pizza"); console.log(foodpush);
console.log("Push:", food);

food.splice(1, 1, "Banana");   //to see what was deleted: foodSplice=food.splice (1,2,"Banana"); console.log(foodSplice); console.log (food);
console.log(food);
//pop removes the last item
food.pop();
console.log(food);
//to see what it removed:
let foodPop = food.pop();
console.log(foodPop);
console.log(food);

//shift removes the first . opposite of pop
let foodShift = food.shift();
console.log(foodShift);
console.log("Shift: ", food);

food.unshift("Popcorn", "Steak"); //adds new elements the start. Opposite of .push.
//to show the elements returned:
let foodUnshift = food.unshift("Popcorn", "Steak");
console.log(foodUnshift);
console.log("Unshift: ", food);