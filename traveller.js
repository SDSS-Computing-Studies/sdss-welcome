function dice(num) {
    // rolls a number of dice = num
    let roll = 0;
    for (i = 0; i < num; i++)
        roll += Math.ceil(Math.random()*6);
    return roll;
}


var me = {
    str : 0,
    dex : 0,
    end : 0,
    int : 0,
    edu : 0,
    soc : 0,
    service : "",
    money : 0,
    terms : 0,
    skills : {
        Gambling : 0,
        Brawling : 0,
        Blade : 0,
        Gun : 0,
        Bribery : 0,
        ShipBoat : 0,
        VaccSuit : 0,
        FwdObs : 0,
        Gunnery : 0,
        ATV : 0,
        AirRaft : 0,
        Mechanical : 0,
        Navigation : 0,
        Electronics : 0,
        JOT : 0,
        Vehicle : 0,
        Steward : 0,
        Engineering : 0,
        Tactics: 0,
        Medical : 0,
        Streetwise : 0,
        Forgery : 0,
        Pilot : 0,
        Admin : 0,
        Leader : 0
    }
}

function survival(me) {
    let req;
    switch (me.service) {
        case "Navy" :
            if (me.int >= 7)
                req = 3;
            else
                req = 5;
            break;
        case "Marines" :
                if (me.end >= 8)
                req = 4;
            else
                req = 6;
            break;
        case "Army" :
                if (me.edu >= 6)
                req = 3;
            else
                req = 5;
            break;
        case "Scouts" :
                if (me.end >= 9)
                req = 5;
            else
                req = 7;
            break;
        case "Merchants" :
                if (me.int >= 7)
                req = 3;
            else
                req = 5;
            break;
        case "Other" :
                if (me.int >= 9)
                req = 3;
            else
                req = 5;
            break;
        
    }
    if (dice(2) < req)
        return false;
    else
        return true;
}
function create() {
    me.str = dice(2);
    me.dex = dice(2);
    me.end = dice(2);
    me.int = dice(2);
    me.edu = dice(2);
    me.soc = dice(2);
    me.service = service();
}

function service() {
    let choice = dice(1);
    switch (choice) {
        case 1 : return "Navy"; break;
        case 2 : return "Marines"; break;
        case 3 : return "Army"; break;
        case 4 : return "Scouts"; break;
        case 5 : return "Merchants"; break;
        case 6 : return "Other"; break;
    }
}


create();
if (survival(me)) {
    // do term of service and increment terms
}
else {
    // did not survive
}
for (var prop in me) {
    if (prop == "skills") {
        for (var skprop in me[prop])
            console.log("skill["+skprop+"]:" + me[prop][skprop])
    } 
    else
        console.log(prop + ":" + me[prop])
}