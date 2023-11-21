'use strict';
//functions

function logger(){
    console.log('bye bye');
}

//calling

/* function fruitProcessor(apples, orange){
    console.log(apples, orange);
    const juice = `Juice with ${apples} apples and ${orange} orange.`;
    return  juice;                                                                                                            
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleojuice = fruitProcessor(2, 4);
console.log(appleojuice);

function calcAge1(birthYear){
    return 2037 - birthYear;
}


const age1 = calcAge1(1991);
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2); */

//arrow Functions

const ageArrow = birthYear => 2023 - birthYear;
const age3 = ageArrow(2002);
console.log(age3);

const yearUntilRetirements = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirements(2002, 'Abhishek'));

//function calling other functions