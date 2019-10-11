// Introduction to Building my Own Functions 
/* 
Functions can break your program up into smaller pieces.  You can think of them as mini programs.  
Each function is defined first, and called when needed.  
A function that is not called will not be executed.
A function can be called as many times as you want.

Variables declared outside of a function are GLOBAL (have a Global Scope)
Variables defined inside a function are LOCAL (have a Local Scope)

This means that a variable name can exist both inside and outside of a function! (Confusing, but true)

Function Definitions:

function goStore(a, b, c=5) {
    console.log("The first parameter is " + a);
    output = b + c;
    return output;
}

console.log( goStore(1,1) )

there is a function name : goStore will be used when you want to "call" the function
there are function parameters : a b and c are variables that will be used in the function
parameter c is an optional parameter.  If you don't include it, it will have an automatic value of 5
There is a return value: the function will evaluate to be the return value when you "call" it

Function Calling

goStore(3,5,1)          : this is procedural, but will be evaluated based on the inputs
                        : you must include all of the required parameters or it will not work
goStore(x,5,'Hello')     : parameters may be numbers, strings, or variables

value = goStore(3,5,1)  : functions may be evaluated.  The return value is retrieved from the data sent
                            to the function, and then stored into a variable

if ( goStore(3,5,1) )   : a function value can be evaluated.  This is probably not the best use of the function

function isEven(input) {
    // retrieves an input and then uses modulus to determine if the remainder is 0 when divided by 2
    if (input % 2 == 0)
        return true;
    else
        return false;
}
*/
{
    function isEven(input) {
        // retrieves an input and then uses modulus to determine if the remainder is 0 when divided by 2
        if (input % 2 == 0)
            return true;
        else
            return false;
    }
}


{
    var myLocation = "nowhere";


    function goStore() {
        console.log("You are at the store");
        myLocation = "Store";
    }

    function goHome() {
        console.log("welcome home");
        myLocation = "Home";
    }

    function goSchool() {
        console.log("You are at school");
        myLocation = "School";
    }

    function whereAmI() {
        console.log("You are at " + myLocation);

    }
}

if ( isEven(4) )
    console.log("is even")
else   
    console.log('is odd')