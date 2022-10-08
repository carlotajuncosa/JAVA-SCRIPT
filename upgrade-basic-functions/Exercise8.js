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
  //function repeatCounter(param) {
    // insert code
  //}

  counter = {};

  for (let i = 0; i < counterWords.length; i++) {
    //console.log('Estoy en el bucle 1' + counterWords[i]);
    for (array[i] in counter);
    //console.log(counter); devuelve el objeto vacío 11 veces igual que en el array;
    counter[array[i]]++;
    //console.log(counter); da error
    



   //for (var j = i; j < counterWords.length; j++) {
      //console.log('Estoy en el bucle 2' + counterWords[j]);

    /* if ( counterWords[i] === counterWords[i]) {
      console.log(++i, counterWords[i])
    } */
  }
//}
