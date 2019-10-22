// Adding Return Values to Functions
//
/*
    Functions are mini programs that generate some kind of result or output that can be
        1. evaluated as a number or boolean
        2. stored into another variable

    The output is called the "return" value

*/


// Example 1

function isEven(input) {
    // function retrieves a value into parameter input
    // input is expected to be a number
    // if input is not a number then it will return a value of false.
    // this uses the function isNaN() which determines if something is Not A Number
    // checks to see if the input is not a number first
    // else checks to see if it is an even number else it must be odd
    // 
    if (isNaN(input))
        return "not a number";
    else {
        if (input % 2 == 0)
            return "an even number";
        else 
            return "an odd number";
    }


}

// Example 2
function breakValues() {
    // return values can also be used to "break out" of a function
    // this might be important if you have a bunch of code and don't want all of it
    // to be run 

    let x = 0;
    let y = -1;
    let z = 5;

    if (x > 1) {
        console.log("first condition is true");
        return true;
    }
    console.log("the first condition was not true so we are testing other things");
    console.log("checking to see if y condition is true")
    if (y > 0) {
        console.log("y is positive")
        return true;
    }
    console.log("but the first and second conditions were not met")
    return false;
    
}

function run(example) {


    if (example == 1) {
        //uncomment one of the following commands to test the different outputs
        // result = isEven("fred");
        // result = isEven(10);
         result = isEven("fred");

        console.log( result );
        return 1;
    }
    if (example == 2) {
        breakValues();
        return 2;
    }
    if (example == 3) {
        return 3;
    }
    
    console.log("no example to be run")
    return false;
}


// run() is the main function that will control the entire program
//  it has an input parameter that determines which example to run.
//  valid inputs for the input are 1, 2 or 3
//  returns a value of false if the inputs are not valid
run(2);