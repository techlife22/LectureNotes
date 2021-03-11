/*
Constructor Functions:
-can be thought of as a reusable skeleton object
-can add the constructor function the same way we add to objects- dot notation.
-It is good practice to capitalize your constructor functions
-A constructor function is like a blueprint for a object

*/
//Option 1 Create several objects
let artist1 = {
    name: "Queen",
    albums: 15,
    allMembersAlive: false
}

let artist2 = {
    name: "Fleetwood Mac",
    albums: 18,
    allMembersAlive: false
}

let artist3 = {
    name: "Stevie Wonder",
    albums: 12,
    allMembersAlive: true
}
//(1)       (2)             (3)


function Artist(name, albums, allMembersAlive) {
    //(4) (5)   (6)
    this.name = name;
    this.albums = albums;
    this.allMembersAlive = allMembersAlive
}
//            (7    (8))
let artist = new Artist('Lizzo', 3, true)
let artist4 = new Artist('pink floyd', 3, true)
console.log(artist, artist4);

function Car(make, model, miles, hasBeenCrashed) {
    this.make = make;
    this.model = model;
    this.miles = miles;
    this.hasBeenCrashed = hasBeenCrashed
}
let car = new Car("Honda", "CRS", 1000, true)
console.log(car);

/*
1. function keyword
2. Capitalized function name
3. Parameters: values of the object once the function is in use.
4. 'This' : gives the ability to refer back to what was called or activated it. In this case, "this" will refer to out Artist being created.
5. Key of our new object that is being created
6. referring to the parameter that is being passed to the function
7/8. "new" keyword calling the Artist function, creating a new 'Artist' with values passed in as parameters.

*/