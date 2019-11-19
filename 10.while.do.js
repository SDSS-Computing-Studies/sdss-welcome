// While Do Loops (or Do While)
/*
    Similar to a for loop, a while...do or do...while loop is intended to keep repeating a block
    of code over and over until a certain condition is met, or while a certain condition is met.

    Consider the two examples:

    while ( age <= 18) {
        you have to attend school
        age = age + 1;
    }

    do {
        go to school
        age = age + 1;
    } while ( age <=18 )


    The difference between these two statements is that the while..do statement checks the condition
    at the beginning.  There is a possibility that if the condition is not met, that the block
    of code will never be run.

    In the do..while loop, the block of code is being run BEFORE the condition is checked, which means
    that the block of code will always be run at least once, even if the condition is not true.

    Note that it is important to have some code that modifies the variables used in your conditional
    statement, otherwise you can end up with an infinite loop.
*/

// Example:

    let myHP;
    let combat;

    console.log("This is an example of a while loop")
    console.log("==================================")
    // adjust the variables below to see what effect they have on the loop
    myHP = 10;
    combat = true;
   // end variables
    while (combat == true && myHP >= 0) {
        console.log("combat is going to happen.  current hp are:" + myHP)
        myHP = myHP -1;
    }

    for (let i = 0; i < 5; i++) 
        console.log("");

    console.log("This is an example of a do while loop")
    console.log("==================================")
    // adjust the variables below to see what effect they have on the loop
    myHP = 10;
    combat = true;
    // end variables
    do {
        console.log("combat is going to happen.  current hp are:" + myHP)
        myHP = myHP -1;
    } while (combat == true && myHP >= 0)       
