/* **Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. 
Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
  
  let sum = 0; //declaro variable 
  //sum y le doy vanlor num 0

for (let i = 0; i < array.length; i++) { 
  // el bucle recorre todos los índices del array
  sum += array[i]
  }
  // al valor de la variable sum es sumar los 
  //índices del array +1
  return (sum/array.length);
  //le pido que me devuelva la suma del array
  //dividido por el el número de elementos del array

}

console.log(average(numbers));


