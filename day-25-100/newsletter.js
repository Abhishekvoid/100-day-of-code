function cutPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, orange){
    
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(orange);

    console.log(apples, orange);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of orange.`;
    return  juice; 
}
console.log(fruitProcessor(2, 3));

//reviewing functions


const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const yearUntilRetirements = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
    }else{
        console.log(`${firstName} is Already retired`);
       return -1;
    }
}

console.log(yearUntilRetirements(2002, "Abhishek"));