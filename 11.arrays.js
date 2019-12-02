// Arrays

/* Arrays are a specific way of organizing data.  In the past,
    we have used individual variables to represent each kind of
    data, even though they were often holding the same kind of
    information.

    For example:

    function rolldice() {
        let result = Math.ceil(Math.random() * 6);
        return result;
    }

    roll1 = rolldice();
    roll2 = rolldice();
    roll3 = rolldice();

    In this example, we needed a different variable name to store
    each roll, even though they were all the rolls of a die.

    Enter the array. The array is a variable structure that keeps track of 
    a lot of data at the same time. Even better, it uses the same variable 
    name so that it's easy to access your data. The difference is that the array 
    adds an index to help you determine which particular piece of data 
    you are dealing with. Think of arrays like a deck of cards. 
    You might want to know what is on card 1, or card 5, etc.
    Once you declare an array, you can have as many different "elements" in the
    array as you care to add.

    example:
*/
console.log("====================")
console.log("example 1")
let deck = [];
deck[0] = "Ace";
deck[1] = "Blue";
deck["green"] = "Red";
console.log(deck[0])
console.log("==============")

/*  note that the index can be a word or a number.  Sometimes numbers are easier to work with
    because we can cycle through them with a for loop, but there are applications for both.

    Note that a word that is NOT enclosed in quotation marks is treated as a variable!
*/
let green = 2;
deck["green"] = "red";
deck[green] = "blue";

console.log("with quotation marks:" + deck["green"] )
console.log("without quotation marks: " + deck[2])

/*
var score = [22,23,28,25,20]

Arrays can store data directly into the array at declaration. Note that 
the declaration uses square brackets to indicate an array and that each 
new data is separated by a comma. To retrieve the value from an array, we 
use the variable name as well as square brackets to include the index. 
Note that the first element in the array has an index of 0, not 1.

===========================================================================
*/
console.log("====================")
console.log("example 2");

var score = []

score[0]=20;
score[1]=30;
score[2]=40;

console.log(score[0]);
console.log(score[1]);
console.log(score[2]);
/*
You can assign values to specific elements in the array, but then you need 
to know which element you want to keep track of. You might need to use a variable to do so:
*/


var score = []
var i = 0;

score[i]=20;
i++;

score[i]=30;
i++;
score[i]=40;

console.log(score[0]);
console.log(score[1]);
console.log(score[2]);

/*
======================================================================================

A better way is to use some of the specific array related methods/properties. 
One of these is the array.length; This will tell you how many elements are in the array:

*/
console.log("====================")
console.log("example 3");
var score = []
console.log( score.length );
// this should show 0 because there are no elements

score[ score.length ]=20;
// this should enter 20 into score[0];
// new score.length = 1

score[ score.length ]=30;
// this should enter 30 into score[1] because there
// are now 1 elements in the array

console.log(score[0]);
console.log(score[1]);

/*
========================================================================================

Another important method is the array.push(). This will add an element to the 
end of the array, no matter how many elements you already have:


*/
console.log("====================")
console.log("example 4");
var score = []

score.push(10);
score.push(20);
score.push(40);
score.push(50);

var numScores = score.length;

for (i = 0 ; i < numScores; i++) {
	console.log(score[i])
}


/*
Note here the use of the for loop to help us cycle through all of the elements in the array!
*/

/*
Assignments:
1.  Create a program that has the user enter in 10 scores
    using variable assignment. Display those values back to the user.
2.  Do assignment #1, but also find the average of those 10 values

3.  Do assignment #1 and 2, but use a for loop using the array.length
    so that the program can work with any number of scores

4. Use the array declaration below:
    var score = [6,1,29,11,3,4,6,3,34,65,34,23,4,2,4,67,2,3]
    Cycle through the elements of the array and store all of the numbers
    larger than 10 into a separate array.

5.  Same as #4, but sort all of the odd numbers into a separate array.
    You will need to use the modulus operator to help you determine the odd
    numbers.
*/