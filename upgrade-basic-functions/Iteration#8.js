/* **Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma.  Puedes usar este array 
para probar tu función: */

//LÓGICA en humano del ejercicio:

//crear variable que sea objeto vacío para....?para comprobar más 
  //adelante en el condicional si cada elemento del 
  //array (array[i]) está en counter (objeto)

  //recorrer el array con un loop dentro de la función
   //DUDA*: ¿es aquí cuando el elemento del array entra en el objeto counter?
   //¿Cómo se lo hemos indicado?

//condicional si array[i] está en counter, se le suma 1.
//si no, entondces se queda =1

//el return de la función corresponde al objeto "counter"

//console log tiene que aparecer '' + numero de vecesque aparece
  //se consigue con callback fde la función que acabamos de crear + nombre array


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
 
counter = {};

function repeatCounter(array) {

  for (let i = 0; i < array.length; i++) {
    //console.log('Estoy en el bucle 1' + counterWords[i]);
    
    if(array[i] in counter){
      counter[array[i]]++;
    } else {
      counter[array[i]] = 1;
    }
    //si console.log(counter) aquí,
    // se ve el proceso del bucle, las iteraciones que va haciendo por elemento
  }
       //console.log(counter);//aquí ya se ve correctamente, 
       //ahora toca añadir la función
  return counter;
}

console.log(repeatCounter(counterWords));
       




 
