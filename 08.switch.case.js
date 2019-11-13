// Introduction Switch statements

/*
    A switch statement is a way to control program flow.  It is often used when you have multiple 
    options to choose from and the if/else structure becomes too complicated.
*/
function example1() {
    let input = 4.1;

    switch (input) {
        case  1 :
            console.log("You entered a 1");
        break;
        case 2 :
            console.log("You entered a 2");
            // notice the effect of the "break" statement.  It exits from the switch so that the next case 2: is ignored
        break;
        case 3 :
            console.log("You entered a 3");
        break;
        case 5 :
            console.log("You entered a 5");
        case 2:
        case 4:
            console.log("You entered a 4");
        case 6:
            console.log("You entered an even number")
        break;
        default:
            console.log("You entered a number bigger than 6");
    }
    console.log("switch statement is complete");
}
    

function example2() {
    // Notice that you can be very creative with your use of {} to mark a block, which makes your code folding options a little bit nicer sometimes
    let course = "math";
    let room;
    let teacher;
    let block; 

    switch (course) {
        case "english" : {
            teacher = "Oliver";
            room = 176;
            block = "A";
            } break;
        case "math" : {
            teacher = "Dop";
            room = 279;
            block = "B";
            } break;
        case "pe" : {
            teacher = "Lingham";
            room = 151;
            block = "C";
            } break;
        case "socials" : {
            teacher = "Sweeney";
            room = 181;
            block = "D";
            } break;
        default : {
            console.log("You have entered an invalid course");
        }
    }

    console.log("In block " + block + " you have " + course + " with " + teacher)
}

/*
    Note: One of the weaknesses of the switch statement is that you must list every possible option;
    you cannot have a range of values.
    if/else statements are needed for ranges of values:

    if ( x > 3 && x < 10) {

    }
*/
example2();

// Assignments
{/* Great examples of switch statements:

    switch (mode) {
        case 'combat' : {
            doCombat(me,currOpponent);
            } break;
        case 'store' : {
            doStore(me,currStore);
            } break;
        case 'explore' : {
            explore(me);
            } break;
        case 'inventory' : {
            displayInventory(me);
            } break;
        case 'library' : {
            getHelpFiles();
        } break;
        case 'refresh' : {
            display();
        } break;
    }


Assignments:
Assignment 1:
Store a number from 0 to 6 into a variable, to correspond with the day of the week.
Report what the name of the day is.

Test your program with random numbers, but in your final version, use:
var dateObj = new Date();
var input = dateObj.getDay();
to find the actual day of the week.

Sample input: 0
Result: Sunday

Assignment 2:
Store a type of triangle into a variable ( "acute" || "right" || "obtuse")
Use a switch statement to determine the type of triangle and then state the main features of the triangle using console.log

sample input: acute
input = "acute";
Result:
An acute triangle has all angles less than 90 degrees.
*/}