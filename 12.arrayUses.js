/*
One of the important things you can do with an array is sort them. 
Imagine having arrays that contain information for a classroom. 
You might want to sort the students into alphabetical order and 
redisplay them. More advanced programs might be able to sort 
students by Firstname, or Lastname, or Student Number or grade!

There are many different ways to sort an array. One way is the Bubble Sort:
*/
// Bubble Sort
// A way to sort the values in an array

console.log("The bubble sort!");
console.log("=================");

function displayArray(inputArray) {
    let output = "";
    for (let i = 0; i < inputArray.length; i++) {
        output = output + " " + inputArray[i];
    }
    return output;
}

var numbers = [10,30,15,19,20,10,4,2,40,31,22];
let output = displayArray(numbers);
console.log("before" + output)

var end = numbers.length;
for (var i = 0; i < end; i++) {
	for (var j = i; j < end; j++) {
  	if (numbers[i] > numbers[j]) {
    	var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp
    }
  }
}

output = displayArray(numbers)
console.log("after: " + output);

/*

Last class, we saw that you could add elements to the end of an array 
using the array.push(i) method/function. This adds the element "i" 
to the end of the array. However, if you can add an element, you 
can also delete an element:
*/

// Array Splice
// array.splice( position, howMany)
// deletes the element at a certain position
// removes howMany elements
// Note: array.splice can also be used to insert items

console.log("")
console.log("Deleting from an Array")
console.log("======================")


var numbers2 = [10,30,15,19,20,10,4,2,40,31,22];
output = displayArray(numbers2)
console.log("before:" + output)

var x = numbers2.splice(1,1);
// this should remove the "30" at the second position
// and store that value into x
console.log("x:" + x);
var hand = []

hand.push(x);

x = numbers2.splice(5,1);
hand.push(x)

output = displayArray(numbers2)
console.log("after splice:" + output)

output = displayArray(hand);
console.log("generated array" + output)


/*
Assignment:
Create a shuffled deck of cards:
Steps:
1. Assign cards to an array of 52 elements
2. Generate a random number corresponding to the number of cards in the deck
3. Pull that card out of the deck and add it to another array
4. Note, the number of cards is now less so you need to account for this when generating a random number
    in step 2 for the next card
4. Repeat this until you have no more cards in your original array.
5. Display your shuffled deck ( a for loop with many console.log commands might be useful here)

Bonus:
Deal 5 cards to 4 different people and display what each person has.
*/