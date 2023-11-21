let bill = 290;

/* Write your code below. Good luck! 🙂 */

let tip = 0;

if ( bill >= 50 && bill <= 300){
    tip = (15 / 100) * bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
    
    
}else if ( bill > 300){
    tip = (20 / 100) * bill;
     console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}else{
     console.log(`Your bill is ${bill}, means no tip Just love`);
}

const totalValue = console.log()

//sec