// There are many different ways that you can receive instructions for your bot.
// How you interpret the instructions depends on the method you pick:

// For both methods, you may want to split the message that the bot receives
// into separate words, with each word having an important role

// Method 1: Important first letter
// Method 2: Important words / argumments


// Method 1: Important first letter
// examples:
// !hi
// !help
// In this method you need to check the first letter to see if the bot needs
// to pay attention to this command, and if it does, remove that first letter.
// We can make use of the string.substring() function

// string.substring(start,end)
// This returns a substring based on the start/end values
// eg:

var word = "?hello";
var first = word.substring(0,1);
var end = word.substring(1,word.length);

if (first == "?") {
    // do something with end
}

// In this example we take a substring that starts at the 1st letter of the word (position 0)
// and ends at the 2nd letter of the word (position 1)
// Thus "?" is stored into first
// we then take a substring from word that starts at the second letter (position 1) and
// ends at the last letter
// Thus "hello" is stored into end
// Using this method, you can select as many characters as you need.
// eg t!daily
// eg t!balance
// eg t!train

word = "t!daily";
first = word.substring(0,2)
if (first == "t!") {
    // do something with the rest
}
// the bot should run a check on every message to see if the right command has been
// issued and then parse the rest of the message

// Method 2:  Splitting the messages into words
// examples:
// copper train pet
// copper feed pet
// copper play pet

// in this way we can split the message up into several words, and store them
// into an array.  We then check the words at each position to see if they are
// expected.  We sometimes call these additional words 'arguments'

// We will use the string.split(delimiter) method to break up the word 

var command = "copper train pet";
var arguments = command.split(' ');

// This splits up the command into separate words in an array:
// arguments[0] = "copper";
// arguments[1] = "train";
// arguments[2] = "pet";
// 
// In this method, we can check to see if the first argument is the right command word
// we might then look at arguments 1 and 2 to see what the bot needs to do

if (arguments[0] == "copper") {
    switch ( arguments[1] ) {
        case "train" :
            break;
        case "feed" :
            break;
    }
}