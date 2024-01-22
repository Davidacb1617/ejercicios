'use strict'
//En este ejercicio vamos a aprender un nuevo objeto incorporado de JS: Date. Este objeto almacena la fecha, la hora, y brinda métodos para administrarlas. Por ejemplo, podemos usarlo para almacenar horas de creación o modificación, medir tiempo, o simplemente mostrar en pantalla la fecha actual. Su sintaxis es new Date(año, mes, fecha, horas, minutos, segundos, ms). Los parametros que no se ponen valor, tiene valor 0 por defecto. Si no se pone ningún valor dentro de Date, vamos a obtener la fecha actual de nustra zona horario del computador.

// fecha actual
let date = new Date();

// la hora en tu zona horaria actual
alert( date.getHours() );

// la hora respecto de la zona horaria UTC+0 (Hora de Londres sin horario de verano)
alert( date.getDate() );