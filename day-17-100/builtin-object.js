//JSON Builtin-Objects
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

  console.log(JSON.stringify(product2));

  const jsonstring = JSON.stringify(product2);
  console.log(JSON.parse(jsonstring));


  localStorage.setItem('message', 'hello')