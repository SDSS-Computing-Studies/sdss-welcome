myLoc = "home";
obstacle = false;
opHP = 10;
myHP = 5;

console.log("You are at home, you would like to goStreet() so you can make your way to school")

function goStreet() {
    if (myHP > 0) {
        console.log("You are on the street");

        let x = Math.floor(Math.random()*2);

        if (x == 0) {
            obstacle = true;
            console.log("You are blocked by a gorilla that prevents you from getting to school")
            console.log("You must fight() or run()")
        }
    }

}

function goSchool() {

    if (obstacle == true) {
        console.log("you are blocked a gorilla. You must fight() or run() to continue")
        return true;
    }

    console.log("You have arrived at school");
    myLoc = "school";
}

function fight() {
    if (obstacle == true) {
        console.log("You fight the gorilla! It is hurt a little bit")
        opHP = opHP - 1;
        if (opHP ==0) {
            console.log("You have beat up the gorilla!")
            console.log("You can now continue on your way")
            obstacle = false;
        }
    }
    else 
        console.log("Fight who? Yourself? Welcome to Fight Club")
}

function run() {
    if (myHP != 0) {
        console.log("You try to run() around the gorilla");
        let x = Math.floor(Math.random()*5)

        if ( x== 0 ) {
            console.log("You quickly step around the fat gorilla and scamper down the street safely.")
            obstacle = false;
        }
        else {
            console.log("The gorilla punches you in the face. Ouch. You lose health");
            myHP = myHP - 1;
            if (myHP == 0)
                console.log('You are dead. Sucks to be you.')
        }
    }
    else
        console.log("you are dead. Where are you going to run to?")
}