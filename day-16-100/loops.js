/* // Function to count the number of selected options in a dropdown
function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }
  // Add a click event listener to the button
  const btn = document.getElementById("btn");

  // Add a click event listener to the button
  btn.addEventListener("click", () => {

     // Get the select element with the name "musicTypes" from the form with the id "selectForm"
    const musicTypes = document.selectForm.musicTypes;

      // Log the number of selected options using the countSelected function
    console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
  }); */
  

  //DO... While Loops
let j=0;
do{
     j+= 1;
     console.log(j);
} while(j<5);


let n=0;
let x=0;
while(n<3){
    n++;
    x += n;
    console.log(n);
}

var lang = "Javascirpt";
var os = 'Windows';

console.log(`${lang.length}`);
console.log(os[3]);

console.log(`${lang} ${lang.length}`);
console.log(`${os} ${os.length}`);

//symbol

const sym = Symbol('foo');
console.log(typeof(sym));


// objects 

const sym1 = Symbol("Key1");
const jsuser = {
    name: "Hitesh",
    age: "20",
    location: "Uk",
    Email: "iniew@meta.com",
    isLoggedIn: 'True',
    lastLoggedIn: ['sunday', 'saturday'],
    [sym1] : "Key1",
}

Object.freeze(jsuser);

console.log(jsuser.Email);
console.log(jsuser.location);
console.log(jsuser[sym1]);


const product2 = {
  name: 'shirts',
  ['delivery-time']: '1 day',
  rating:{
    stars: 4.5,
    count: 87
  },

  fun: function function1(){
    console.log('function inside object');
  }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);

console.log(product2['delivery-time']);
console.log(product2.rating.count);
product2.fun();