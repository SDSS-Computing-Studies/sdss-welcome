function pythagorean() {
// Program Pythagorean Theorem
// - Requres input of 2 sides of a right triangle
// - Calculates the length of the hypotenuse
    console.log("Pythagorean Theorem");
    console.log("===================")
    // Enter in the two short sides:
    let a = 10;
    let b = 4;

    // Calculate the length of the hypotenuse
    let c2 = Math.pow(a,2) + Math.pow(b,2)
    let c = Math.sqrt( c2 );

    // Display the Output
    console.log("If the two short sides of the triangle measure " + a + " and " +b);
    console.log("Then the hypotenuse must measure "+ c)
}


function rounded() {
// Program Round to two decimals
// - Retrieves a variable of type float and rounds to 2 decimal places
// - Intended to mimic the float.toFixed(2) command
    console.log("Rounded");
    console.log("=======")

    let number = 10.335;
    let rounded = number.toFixed(2);

    console.log("This is how the output should look");
    console.log( number + " rounded to 2 decimal places is " + rounded);


    let myRounded = Math.round(100 * number) / 100;

    console.log("My solution:");
    console.log( number + " rounded to 2 decimal places is " + myRounded);
}

function average() {
// Program Average of the middle
    console.log("Discard the High and Low");
    console.log("========================")

    let a = 10;
    let b = 7;
    let c = 12;
    let d = 4;
    let e = 18;

    let highest = Math.max(a,b,c,d,e);
    let lowest = Math.min(a,b,c,d,e);
    let sum = a + b + c + d + e - highest - lowest;
    let average = sum / 3;

    console.log("The average of the middle 3 numbers is " + average)
}

//.pythagorean();
//rounded();
average();
