'use strict'
//En este ejercicio vamos a ver la desestructuración de Arrays. La asignación desestructurante es una sintaxis especial que nos permite “desempaquetar” arrays u objetos en varias variables, porque a veces es más conveniente. En este caso veremos el mismo ejemplo pero en diferentes formas. Una con una asignacióm desestructurante de Arrays y la otra con una asignacióm desestructurante de Arrays y el método split para devolver el array con 2 elementos (nombre, apellido). Pero esto se puede hacer con varios métodos.
let arr = ["John", "Smith"]
// asignación desestructurante
// fija nombre = arr[0]
// y apellido = arr[1]
let [nombre, apellido] = arr;
alert(nombre); // John
alert(apellido);  // Smith

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith