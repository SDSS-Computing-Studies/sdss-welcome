// While Do Loops (or Do While)
/*
    Similar to a for loop, a while...do or do...while loop is intended to keep repeating a block
    of code over and over until a certain condition is met, or while a certain condition is met.

    Consider the two examples:
    age = 5;

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
    combat = false;
    counter = 1;
   // end variables
    while (combat == true && myHP >0 && counter < 1000) {
        counter++ // counter failsafe)
        console.log("combat is going to happen.  current hp are:" + myHP)
        myHP = myHP -1;
    }

    for (let i = 0; i < 5; i++) 
        console.log("");

    console.log("This is an example of a do while loop")
    console.log("==================================")
    // adjust the variables below to see what effect they have on the loop
    myHP = 10;
    combat = false;
    // end variables
    do {
        console.log("combat is going to happen.  current hp are:" + myHP)
        myHP = myHP -1;
    } while (combat == true && myHP > 0)       



    let x = 5;
    while (x >2) {
        console.log("this is going to be displayed");
        x = x - 1;
    }


/* Assignments

Assignment #1 Newton's Method of Approximating roots
    A polynomial equation can be graphed, and may/may not have a graph that crosses the x-axis (has x-intercepts)
    A cubic function will ALWAYS have at least 1 x-intercept

    Create a function that uses Newton's method to determine the x-intercept for the function:
    y = 3x^3 + 2x^2 -4x + 1
    and
    dy = 9x^2 + 4x - 4

    This is done by using a repetitive process where you take a guess, and refine the guess, then use that
    guess in the next iteration using
    xnew = xold - y/dy

    x = 2
    xold = x
    y= 3*x*x*x + 2*x*x  - 4*x +1
    dy = 9*x*x +4*x -4
    x = xold - y/dy


    Repeat this until x = xold (there is no change) or until 100 iterations have passed (infinite loop failsafe)
    Display each of the values after each iteration

    Sample output if x = 1
    1 1
    2 0.7777777777777778
    3 0.6657633242999096
    4 0.6247755094532073
    5 0.6182057064928626
    6 0.6180341053660644
    7 0.6180339887499487
    8 0.6180339887498948
    9 0.6180339887498949


Assignment #2 Necklace Numbers
    Necklace numbers are a set of numbers that begin and end with the same sequence of digits.
    example: 13471897639213
    The sequence begins with 13 and ends with 13
    To generate the next digit in the sequence, you add the 2 previous numbers and look at only the 1's digit.

    Create a necklace number sequence generator
    Start with the variable:
    
    let number = "Number:";
    
    number = number + next
    
    This way, when we add extra digits to this number using the +, they will be converted to text automatically

    Sample output if the first 2 digits are 3 and 5: 35831459437077415617853819099875279651673033695493257291011235

    Add in a check in your while/do or do/while loop to stop the program if the number of digits is larger than 1000


Do you need some help/tips? Copy and paste the code below into https://www.base64encode.org/
Variable Help:
ICAgIFlvdSB3aWxsIG5lZWQgdG8gc3RhcnQgd2l0aCBzb21lIHZhcmlhYmxlczoKCiAgICBsZXQg
c3RhcnQxICAgICAgLy8gc3RhcnRpbmcgZGlnaXQjMQogICAgbGV0IHN0YXJ0MiAgICAgIC8vIHN0
YXJ0aW5nIGRpZ2l0IzIKICAgIGxldCBjb3VudGVyICAgICAvLyBrZWVwcyB0cmFjayBvZiB0aGUg
bnVtYmVyIG9mIGRpZ2l0cwogICAgbGV0IGRpZ2l0MSAgICAgIC8vIGN1cnJlbnQgZmlyc3QgZGln
aXQKICAgIGxldCBkaWdpdDIgICAgICAvLyBjdXJyZW50IHNlY29uZCBkaWdpdCAgIAoKCgo=

Structure Help:
WW91IHdpbGwgbmVlZCBhIHdoaWxlL2RvIG9yIGRvIHdoaWxlIGxvb3AgdGhhdCBkb2VzIHRoZSBm
b2xsb3dpbmc6CiAgICBGaW5kcyB0aGUgc3VtIG9mIHRoZSBjdXJyZW50IDIgbnVtYmVycwogICAg
RmluZHMgdGhlIG5leHQgZGlnaXQKICAgIEFkZHMgdGhlIG5leHQgZGlnaXQgdG8gdGhlIHZhcmlh
YmxlIG51bWJlcjogIG51bWJlciA9IG51bWJlciArIG5leHQKICAgIHN0b3JlcyB0aGUgY3VycmVu
dCBzZWNvbmQgZGlnaXQgaW50byB0aGUgZmlyc3QgZGlnaXQKICAgIHN0b3JlcyB0aGUgbmV4dCBk
aWdpdCBpbnRvIHRoZSBzZWNvbmQgZGlnaXQKICAgIGFkZHMgMSB0byB0aGUgY291bnRlcgoKdGhl
IHdoaWxlIGxvb3Agc2hvdWxkIGNvbnRpbnVlIHdoaWxlIAp0aGUgY3VycmVudCBmaXJzdCBkaWdp
dCBkb2VzIG5vdCBlcXVhbCB0aGUgb3JpZ2luYWwgZmlyc3QgZGlnaXQgb3IgdGhlIGN1cnJlbnQg
c2Vjb25kIGRpZ2l0IGRvZXMgbm90IGVxdWFsIHRoZSBvcmlnaW5hbCBzZWNvbmQgZGlnaXQKQU5E
CnRoZSBjb3VudGVyIGlzIGxlc3MgdGhhbiAxMDAwCgoKCg==

*/