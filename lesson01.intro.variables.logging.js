// Comments are created using either double backslashes

/*  Comments can also be created in a block 
    This is obviously helpful if you have a large amount
    of text and want to comment out a large section.
    This could be details about your program, how it
    operates, what inputs/outputs it needs
    or what some of the variables you use might mean
*/


    // Variable Declaration
    /*
    variables can be declared with either let or var, the
    differences between them will be discussed later
    Variables can store numbers or text
    Note there is a difference between "10" and 10
    Variable assignment always as the variable name, then
    the = sign, and then what it is equal to.
    It can also be assigned the result of a calculation
    using either numbers or two variables or mixtures of the
    bunch
    */
    let first = 10;
    let First = "10";           // this is symbols/text/ STRING

    var second = "this is the second";
    let sum = 10 + 3;
    var x = 3;
    var y = 10;
    var answer = x * y;

    // console.log() 
    /*
    This is a debugging tool. It will display 
    the contents of the bracket to the debugging console.
    This will not show up in your program
    Console log can display text contained within "" symbols
    Words that are not contained within "" are considered variables
    and it will instead display the contents of a variable
    */
    console.log("Test");
    console.log("10");
    console.log(10);
    console.log(x+y)

    // Math Operations
    /*
    Numbers can be evaluated using the basic mathematical operations:
    * multiply
    / divide
    + plus
    - minus

    Note: The + sign can do double duty as a "concatenator"
    Note the importance of including spaces in some of your text
    */
   console.log("I have " + x + " apples");
   console.log("I have " + x + y + " lemons")
   console.log("I have " + (x + y) + " lemons")
   
