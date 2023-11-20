/* let age = 30;
age = 31;
console.log(age);

let now = 2023
const abhiAge =  23;
const shekAge = 45;
console.log(abhiAge);


//comparison
console.log(abhiAge > shekAge);
console.log(abhiAge < shekAge);


const wholeAge = abhiAge > 18;
const oldAge = abhiAge

const averageAge = (abhiAge + shekAge) / 2;
console.log(averageAge);


//string templates

const firstName = "abhishek";
const job = 'software engineer';
const birthYear = 2002;
const currentYear =2023;

const info = "I'm" + ' ' + firstName + ' a ' + (currentYear - birthYear) + ' ' + job ;


const newInfo = `I'm ${firstName} a ${(currentYear - birthYear)}  ${job}`;
console.log(newInfo);

console.log(`Back ticks better...`);


//decision statement 

const yourAge = 19;
const isOldEnough = yourAge >= 19;

if(isOldEnough){
    console.log(`You are eligible for driving license `);
}
else{
    console.log(`You are still kid`);
}

//example 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI is higer than John's!`)
}else {
     console.log(`John's BMI is higer than Mark's!`)
}

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI ${BMIMark} is higer than John's ${BMIJohn}!`)
}else {
      console.log(`John's BMI ${BMIJohn} is higer than Mark's ${BMIMark}!`)
}

const scoreDolphins = (96 + 108 + 89)/3;
const scoreKoalas = (88 + 91 + 110)/3;

if(scoreDolphins > scoreKoalas){
    console.log(`Dolphins win the trophy`);
}else if (scoreKoalas === scoreDolphins)
{
    console.log(`Both win the trophy`);
}else{
    console.log("Koalas win the trophy");
}

//type conversion

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);  */

//switch statement 

const day = 'monday';
 
switch(day){
    case 'monday':
        console.log(`plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`prepare theory videos`); 
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`write code examples`);
        break;
    case 'friday':
        console.log(`record videos`);
    case 'saturday':
    case 'sunday':
        console.log(`enjoy the weekend`);
        break;
        default:
            console.log('not valid day');
}

//ternary operator
const age = 15;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);