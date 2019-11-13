function diceroll(numDice) {
    switch (numDice) {
        case 1: 
            result = Math.ceil(Math.random()*6);
        break;
        case 2:
            result = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6); 
        break;
        case 3:
                result = Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6);
        break;
    }
    return result;
}

function genStarport() {
    let roll = diceroll(2);
    switch (roll) {
        case 2:
        case 3:
        case 4:
            return "A";
        break;
        case 5:
        case 6:
            return "B";
        break;
        case 7:
        case 8:
            return "C";
            break;
        case 9:
            return "D";
            break;
        case 10:
        case 11:
            return "E";
            break;
        case 12:
            return "X";
            break;
    }

}

function genNavalBase(starport) {
    if (starport  == 'A' || starport == 'B') {
        let roll = diceroll(2);
        if (roll <= 7)
            return false;
        else
            return true;
    }
    else
        return false;
}

function genScoutBase(starport) {
    if (starport == 'E' || starport == 'X')
        return false;
    let roll = diceroll(2);
    if (starport == 'C')
        roll = roll -1;
    if (starport == "B")
        roll = roll -2;
        if (starport == "A")
        roll = roll -3;    
    if (roll >=7)
        return true;
    else 
        return false;
}

function genGasGiant() {
    let roll = diceroll(2);
    if (roll >= 10)
        return false;
    else
        return true;
}

function genSize() {
    let size = diceroll(2) -2;
    return size;
}

function genAtm(size) {
    if (size == 0)
        return 0;
    else {
        return diceroll(2) - 7 + size;
    }
}

function genHyd(size,atm) {
    let hyd

    if (size <= 1)
        return 0;
    else {
        hyd = diceroll(2) -7 + size;
        if (atm <= 1 || atm >=10)
            hyd = hyd-4;
        return hyd    
    }
}

function genPop() {
    let pop = diceroll(2) - 2;
    return pop;
}

function genGovt(pop) {
    let roll = diceroll(2) - 7 + pop
    return roll;
}

function genLaw(govt) {
    let roll = diceroll(2) - 7 + govt;
    return roll
}

function genTech(starport,size,atm,hyd,pop,govt) {
    let DM = 0;
    let TL;

    switch (starport) {
        case 'A' : DM = DM +6; break;
        case 'B' : DM = DM +4; break;
        case 'C' : DM = DM +2; break;
        case 'X' : DM = DM -4; break;
    }
    if (size <= 1)
        DM = DM+2;
    else if (size <= 4)
        DM = DM+1;
    
    if (atm <4 || atm >9)
        DM = DM+1;
    
    if (hyd == 9)
        DM = DM +1;
    if (hyd == 10)
        DM = DM + 2;

    if (pop >0 && pop <6)
        DM = DM+1;
    if (pop == 9)
        DM = DM +2;
    if (pop ==10)
        DM = DM +4;

    if (govt ==0 || govt == 5)
        DM = DM +1;
    if (govt ==13)
        DM = DM -2;

    TL = diceroll(1) + DM;

    if (TL < 0)
        TL = 0;
    return TL;

}

function atmDesc(atm) {
    switch (atm) {
        case 0: return "No Atmosphere";
        break;
        case 1: return "Trace Atmosphere";
        break;
        case 2: return "Very thin, tainted";
        break;
        case 3: return "Very thin";
        break;
        case 4: return "Thin, tainted";
        break;
        case 5: return "Thin";
        break;
        case 6: return "Standard";
        break;
        case 7: return "Standard, tainted";
        break;
        case 8: return "Dense";
        break;
        case 9: return "Dense, tainted";
        break;
        case 10: return "Exotic";
        break;
        case 11: return "Corrosive";
        break;
        case 12: return "Insidious";
        break;
        case 13: return "Dense, high";
        break;
        case 14: return " Ellipsoid";
        break;
        case 15: return " Thin, Low";
        break;
        }
}

function code(x) {
    if (x < 10)
        return x;
    switch (x) {
        case 10: return "A"; break;
        case 11: return "B"; break;
        case 12: return "C"; break;
        case 13: return "D"; break;
        case 14: return "E"; break;
        case 15: return "F"; break;
        default: return x;
    }
}
var starport;
var navalBase;
var scoutBase;
var gasGiant;
var size,atm,hyd,pop,govt,law,TL;

starport = genStarport();
navalBase = genNavalBase(starport)
scoutBase = genScoutBase(starport)
gasGiant = genGasGiant();
size = genSize();
atm = genAtm(size);
hyd = genHyd(size,atm);
pop = genPop()
govt = genGovt(pop);
law = genLaw(govt);
TL = genTech(starport,size,atm,hyd,pop,govt);

console.log("UPP:"+ code(starport) + code(size) + code(atm) + code(hyd) + code(pop) + code(govt) + code(law) + code(TL))
console.log('This system has starport type ' + starport);
console.log('Naval base :' + navalBase)
console.log('Scout base :' + scoutBase)
console.log('Gas Giants :' + gasGiant)
console.log('size:' + size);
console.log('atmosphere:' + atmDesc(atm));
console.log('hydrographics:' + hyd);
console.log('population:' + pop);
console.log('government:' + govt);
console.log('law level:' + law);
console.log('tech level:' + TL);


