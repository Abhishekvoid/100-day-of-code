


 const fruit = [];
fruit.push("mango", "banana", "chikuu");


console.log(fruit);
fruit.push('yellow', 'black', 'pink');

console.log(fruit);
console.log(Object.keys(fruit));
console.log(fruit.length); 


const fruit = [];
fruit.push("mango", "banana", "chikuu",'yellow', 'black', 'pink');
fruit.lenght = 10;

console.log(fruit.length);
console.log(fruit[8]);

fruit.length = 2;
console.log(Object.keys(fruit));
console.log(fruit.length);

const calcAge = function (birthYear){
    return 2023 - birthYear;
}

const years = [1991,1998,2002,2005];

const age1 = calcAge(years[0]); 
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);


//more methods 

