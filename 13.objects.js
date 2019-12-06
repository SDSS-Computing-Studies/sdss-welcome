// OBJECTS are BETTER than ARRAYS

/*

computer is an object

computer.case
computer.cpu
- computer.cpu.brand = "amd"
- computer.cpu.model = "ryzen"
- computer.cpu.series = "2600x"

note: 
    computer.cpu.series 
    is same/equivalent to
    computer.cpu["series"]

computer.ram
- computer.ram.brand = "corsair"
- computer.ram.type = "DDR4"
- computer.ram.size = 16
computer.gpu
- computer.gpu.brand = "Asus"
- computer.gpu.model = "ROG STRIX 2080Ti"
computer.psu

computer.mobo


You can think about a car as an object. You can break it down into 
pieces, like the interior, or the engine or the exterior. In turn, 
each could be broken down into more pieces. For example, the interior 
could be broken into seats, steering wheel, floormats, etc. Eventually, 
you will start looking at the individual properties of things, 
like the seat color, or the seat material.

This is a good analogy for the hierarchy of an object.

As you move through the hierarchy of an object, you create 
child objects, until you get to the properties of the last object.

Example:
car.interior.seats.material = "leather";
car.interior.seats.color = "black";
car.exterior.body.color = "silver";

Notice that in a car, you might have two different colors. It doesn't make 
sense to just call the variable "color", because you would need to know 
which color you are talking about. Instead, by creating this hierarchy of 
objects, you can create variables that are more meaningful, but all part 
of the same basic "object", the car.

Note the relationship between two objects in a hierarchy. In this case, 
seats are a child of the interior, and the interior is the parent of the seats.

Note that the base object "car" is just a variable. However, declaring it as 
an object is a bit different.

Note that when you declare an object, there is a "key" and a "value".  The
key is like the variable name, and the value is what it is equal to.

In our example for the object car.interior.seats, there is a key called "material"
which has a value of "leather".

Note that a value can also be its own key if you have an object within in object!

The variable car has a key called "interior", for which "seats" is the value,
even though seats is its own object.

*/

// Variable Declarations

// regular variable
var myVariable;

// array
var myArray = [];

// object
var myObject = {};

myObject.name = "Grass";
myObject.color = "green";
myObject.value = 3.25;


console.log(myObject.name);
console.log(myObject.color);

console.log('=================================================');

function displayAll(input) {
    // this is a useful function for displaying all of the keys and values
    // for an object
    // it uses an object as the input parameter
    // it takes all of the keys for the object, and then 
    // executes a block of code for each key of the object
    Object.keys(input).forEach(key => {
        console.log(key + " " + input[key]); 
      });
    
}

var myChar = {
    name : "Ronan the Barbarian",
    type : "Barbarian",
    maxHP : 100,
    currHP : 83,
    attack : 18,
    defense : 6,
    weapon : 3
}

var sidekick = {
    name : "George",
    type : "Titan",
    maxHP : 1000,
    currHP : 900,
    attack : 200,
    defense : 100,
    weapon : 30
}

console.log("Character's name is " + myChar.name)

console.log("Sidekick is named " + sidekick.name)
console.log("Class:" + myChar.type);
console.log("==")
displayAll(myChar);

/*

Assignment:
1.  Create an object to represent something that has statistics 
    (eg an athlete, a game character, a thing in real life). 
    Assign values to that object that can be used.

2.  Change the following code to use 2 objects. One object for 
    the player and one object for the opponent:

    // Begin Code

        var charName = "Conan";
        var charClass = "Fighter";
        var charTHAC0 = 20;
        var charAC = 2;
        var charHP = 15
        var weapon = "Sword";
        var weaponEnchant = 1;
        var weaponDamage = 8;
        
        var monsterName = "Orgo the Orc";
        var monsterTHAC0 = 20;
        var monsterAC = 4;
        var monsterDamage = 10;
        var monsterHP = 20;
        
        function display() {
            // This function should display the current hp of the character and the monster

        }
        
    // End Code


*/