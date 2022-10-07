/* **Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma.  Puedes usar este array 
para probar tu función: */

//recorrer el loop 
//condicional i++ si la palabra se repite el string.
//
//poner dentro de una funcion
//console log tiene que aparecer '' + numero de vecesque aparece 


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

  for (var i = 0; i < counterWords.length; i++) {
    //console.log(i)
    if ( counterWords[i] === counterWords[i]) {
      console.log(++i, counterWords[i])
    }
  }
