'use strict'
//En este ejercicio vamos a conocer object.keys, values, entries. Para poder iterar dentro de un objeto, normalmente no lo podemos hacer como en un array, con los métodos map, filter, etc. En este caso usaremos Object.entries para poder iterar el objeto con un map y multiplicar los precios con el doble de valor.
let precios = {
    banana: 1,
    orange: 2,
    meat: 4,
};
  
let doublePrices = Object.fromEntries(
    Object.entries(precios).map(([key, value]) => [key, value * 2])
);
alert(Object.entries(doublePrices)); // banana: 2, orange: 4, meat: 8,


  