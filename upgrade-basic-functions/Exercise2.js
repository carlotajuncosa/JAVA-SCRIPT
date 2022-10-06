/* Buscar la palabra más larga

Completa la función que tomando un array de strings 
como argumento devuelva el más largo, en caso de que 
dos strings tenga la misma longitud deberá devolver 
el primero.

Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const comidas = ['tortilla de patatas', 'croquetas', 'bravas'];
//

let longestWord = "";

function getLongestWord (array) {

  for ( const element of array){
  //console.log(element);  se hacen tantos console.logs como eleentos hay en el array

    if (longestWord.length < element.length){
        longestWord = element;
    }
  }
  return longestWord;
}

const resultado = getLongestWord(avengers);
console.log(resultado);
const resultado2 = getLongestWord(comidas);
console.log(resultado2);



