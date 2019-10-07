// BOOLEAN : These are statements that evaluate as either "true" or "false".
{/*
    Sometimes values of 1 and 0 can be used to correspond to the states of true or false.
    It has a wide range of uses:
    - Is the button on/off
    - Are you in edit mode with the button on?
    - Has a particular variable been defined?
    - Is a particular number contained within a set of values?
*/}

// BOOLEAN Operators
{/*
    We've already seen the boolean operators: 
    ==
    !=
    <=
    >=
    >
    <
*/}

// Logical AND and OR
{/* Sometimes you want to check the truth or falsehood of multiple conditions at the same time.  To do so, you need to use the
    operators for && (AND) and || (or) 

    For example, to tell if a number x meets the requirements: 10 < x < 20

    We would use the operator:

        10 < x && x < 20

    AND ( && ) is used when we want multiple conditions to be true

    OR ( || ) is used when only 1 of the conditions needs to be true

    () brackets may be used to set 'order of operations' or create groups of conditions that are evaluated together.

*/}

{ /*
    Exercise:
    Evaluate each of the following statements as true or false overall for the statements: a = 5, b = 2, c = -1, d = 0

    1. a < c && c != 0
    2. a ==5 || d >= 0
    3. a > 2 && b > 0 && c < 0
    4. (a > 2 ** b > 0) || d == 1
    5. d != 0 || c > 0
    
    Make up 5 more statements and test someone near you.

    1.
    2.
    3.
    4.
    5.


*/}

{ /*
    Assignment 1:
    Convert the following series of if/else statements to simpler code using && operators:
    if (a == 3) {
        if (b ==2)
            console.log('statement 1');
        else 
            console.log('statement 2');
    }
    if (a > 3) {
        if (b < 0)
            console.log('statement 3');
        else if (b > 0)
            console.log('statement 4');
        else
            console.log('statement 5');
    }
    if ( c ) {
        if ( d != true ) {
            console.log('statement 6');
        }
        else
            console.log('statement 7');
    }
*/}

{/*
    Assignment 2:
    Out of range error
    There is a maximum and minimum value allowed.  Check to see if the number is "out of range"

    User will store a value into a variable

    Check to see if the number is out of range.  Further check to see if it is too high or too low.

    expected output if min = 5 and max = 10 and x = 8
    Number is in range

    expected output if min = 5 and max = 10 and x = 11
    Number is out of range
    Number is too high

    expected output if min = 5 and max = 10 and x = 1
    Number is out of range
    Number is too low


*/}

{/*
    Assignment 3 (tougher):
    Check Input:
    Have a number checked to see if it is an integer.

    User will store a value into a variable.

    Check to see if the number is an integer.
    Hint: You may want to use the Math.ceil, Math.round or Math.floor functions

    expected output if x = 10;
    The number is an integer

    expected output if x = 10.1
    The number is not an integer
*/}