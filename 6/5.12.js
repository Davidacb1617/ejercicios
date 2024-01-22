'use strict'
//En este ejercicio vamos a aprender sobre JSON (Notación de objeto JavaScript), es un formato general para representar valores y objetos. Se lo describe como el estándar RFC 4627. En este ejercicio actuaremos con un objeto student donde vamos a convertir todo en un string para cuando lo imprimamos en un pantalla de alerta, nos salga todo incluyendo todos los caracteres. Esto lo podemos hacer con una función dentro del objeto pero deberiamos actualizarlo cada vez que se cree un nuevo objeto. El JSON nos permite actalizarlo sin tocarlo.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };

  let json = JSON.stringify(student);
  alert(typeof json); //string
  alert(json);
  /* Objeto JSON-codificado:
  {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}
  */