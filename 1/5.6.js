'use strict'

//Este ejercicio nos muestra la iteración de un string con un [Symbol.iterator], este symbol.iterator es el (for...of) 
for (let char of "test") {
    alert( char ); // t, luego e, luego s, luego t
  }

  