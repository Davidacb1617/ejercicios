'use strict'
//En este ejercicio vamos a iterar dentro de un map, el map es como un objeto, es  una colección de datos identificados por claves. La principal diferencia es que Map permite claves de cualquier tipo.
let recipeMap = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas',    50]
  ]); //Como vemos la creación de un map es muy parecida a la de un objeto
  
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); //Claves: 'pepino', 'tomates', 'cebollas'
  }
  
  for (let amount of recipeMap.values()) {
    alert(amount); //Valores: 500, 350, 50
  }
  
  for (let entry of recipeMap) { 
    alert(entry); //Claves y Valores: 'pepino': 500,'tomates': 350, 'cebollas': 50
  }