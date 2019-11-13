/*
A for loop gets its name from the initial commands used to operate it.
What it does is repeat a block of code a set number of times. Almost
every programming language makes use of a for loop.

In Javascript, a for loop has this syntax:
*/

let sum=0;
for (let i = 0; i < 10; i++) {
    //commands to be repeated are placed in this block

    console.log("This is repetition #" + i);
    sum = sum + i;

}

console.log("The sum of the numbers is " + sum);

/*
There are 3 parts to a for loop:
1. the initial value
    There needs to be some counter that keeps track of how many
    times you run through your loop. For loops have evolved over time,
    and rather than keep a strict record of how many times a loop
    is processed, we instead use some variable to compare against
    the conditions to decide whether to repeat the loop or exit
    In our example, the initial value is i = 0
2. the condition
    This is where you check to see if the exit condition is met.
    More specifically, if the condition is true, then you stay in the
    loop and repeat for another cycle.
    In our example, the condition is " i < 10 ".  Be careful how you
    use this condition.  If you are modifying i within your block of
    code, you may create an infinitely loop that never exits!
3. the afterthought
    Unless i is modified in some way, you may never exit from the loop.
    The afterthought tells you what you can do to modify the value of
    your counter after you have successfully executed the contents of
    the loop.  In this case, we are using some new notation:
    i++  means to add 1 to the current value (increment) of i
    i--  means to subtract 1 (decrement) the value of i
    However, you can do other operations as well:
    i = i +3 (add 3 to the current value of i)
*/
console.log("");
console.log("========================");
console.log("A crazy for loop example")

function dieRoll() {
    let roll = Math.ceil(Math.random() *6);
    console.log("roll is " + roll);
    return roll;
}

for (let x = 1; x != 6; x = dieRoll() ) {
    console.log("doing the loop!")
}


/* Assignment:

1.  Create a program that prints all of the even numbers less
than n, where n is a variable that is defined at the start
of the program.
let n = 33;


2.  Display the multiples of 9.  Use a variable assignment to 
set the last factor of 9.
eg:
let last = 19
this should print all the multiples of 9 from 9*1 to 9*19
 9 x 1 = 9
 9 x 2 = 18
 ....
 9 x 19 = 171

3.  Display all of the powers of 2 that are less than a
number you specify at the start of your program:
eg
let largest = 83

note: You will need to make use of the "pow" function
pow(base,exponent)

pow(5,2) will evaluate as 25

4.   Gambling simulation
A gamber starts with $50 dollars.  Every time he plays a
game, she bets $1.  The odds of winning are established as 
a random chance set at the beginning of the program.
He will continue playing until he reaches $250 or until
she goes bankrupt.  Keep track of the number of times that
they play and display the result.

eg:
money = 50;
percentWin = 30;

You do the rest!
*/