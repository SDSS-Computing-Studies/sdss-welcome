// Introduction
{/*

Programs need to have the flow of their commands controlled to do the things that we often want them to do.
This often involves making decisions and deciding which branch to follow

One structure for controlling program flow is the IF statement or the IF..ELSE statement

This directs which commands to follow and uses the following structure:

If only 1 command is to be followed
if (condition) 
    command;

For multiple commands
if (condition) {
    command1;
    command2;
    command3;
}

To do either one set of commands or another
if (condition)
    command1;
else
    command2;

Multiple if..else...statements can be strung together
if (condition)
    command;
else if (condition)
    command;
else
    command;

*/}

// Random number function randnum()
{ /*

*/

    function randnum() {
        let x = Math.ceil( Math.random() * 5); // generates an integer number from 1 to 5
        console.log(x);
    }
}

// Conditions
{/*
   Conditions are either true or false
   Sometimes, we'll evaluate a statement for truth/falsehood using conditional operators

    ==  checks to see if things are equal and determines true or false
        5 == 3              evaluates as false
        (3+1) == 4          evaluates as true

    >   checks to see if the left is greater than the right
        Note there is also a < operator
        5 > 3
        "a" > "b"

    >=  checks to see if the left is greater than or equal to the right
        Note there is also a <= operator
        The order is important, the = comes after the < or >
        5 >= 5
        5 >= 4
    
    !=  checks to see if things are not equal
        3 != 2
        5 != 5
       
*/}
// IF example  function ifexample();
{
    function ifexample() {
        let x = 10;    
        if (x == 10) {
            console.log( "this statement is true")
        }
    }
    
}

// IF ELSE example function ifelse();
{
    function ifelse() {
        let x = 5;
        if (x ==2) {
            console.log("This statement is true");
        }
        else
            console.log("This statement is false");
    }
}

// IF ELSE ELSE example function ifelse2();
{
    function ifelse2() {
        var x = 10;
        if (x > 0) {
            console.log("the first condition is true (x is positive)")
        }
        else if ( x < 0)
            console.log("the second condition is true (x is negative");
        else
            console.log("x must be 0")
    }
}