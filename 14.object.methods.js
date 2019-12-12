/*

OBJECT METHODS

An Object Method is a fancy way of saying "a function that is part of an object".

You may recall using the Math.round() or Math.ceil() functions.  These are functions
that are child functions of a Math.object.  As you can see, when you are invoking
or calling the function, you need to include the object name with the appropriate
dot notation to include the function within the object hierarchy.

Note that if you try to just use ceil() or round() without the object name at the
beginning of the dot notation, the function is not recognized because it is
defined as being within the object.

*/

x =  Math.round(12.3);
console.log(x);

y = Math.round(12.4);
console.log(y);

/* To create your own functions/methods within an object, you need to declare your
function a bit differently than you normally might:

*/
function dothis(inputs) {

}

var game = {
    hp : 10,
    maxHP : 10,
    attack: 4,
    fight : function() {
        game.hp = game.hp - 1;
        game.display();
    },
    heal : function() {
        game.hp = game.hp + 1;
        game.display();
    },
    display: function() {
        console.log("You currently have " + game.hp + "hp")
    }
}

/*
copy and paste this to a Broswer console to try using the function commands
*/

/* Assignment:

We will add a game object using

var game = {

}

You will add the character object and monster object to your game object 

We will extend the game that program that you started building last class with the monster 
and the character.

Add the following function methods:

display() - will display the current status of both the character and the monster.
            HP is very important for this function

isHit(attacker THAC0,defender AC)
        - uses the attacker THAC0 and compares it with the defender AC to
        determine if the target is hit.
        - generate target number as THAC0 - AC
        - generate a random number from 1-20
        - if the random number is greater than or equal to the target number
        return true to indicate hit otherwise retrun false to indicate miss

damage(damage,enchant)
        - generates a random number from 1 to damage and adds any enchant
            bonuses
        returns the total damage

attack() 
    - does one character attack and one monster attack
    each attack consists of
    1. check to see if a hit has been scored using the isHit function
        (ie is it true or false)
    2. if a hit is scored, determine the damage using the damage function
    3. update current hitpoints for the target

    once the attack is done, display the damage.

*/
