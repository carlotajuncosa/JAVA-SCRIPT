/* Buscar la palabra más larga

Completa la función que tomando un array de strings 
como argumento devuelva el más largo, en caso de que 
dos strings tenga la misma longitud deberá devolver 
el primero.

Puedes usar este array para probar tu función: */

//solucion FOR OF
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
const comidas = ['tortilla de patatas', 'croquetas', 'bravas'];


let longestWord = "";

function getLongestWord (array) {

  for ( const element of array){
  //console.log(element);  se hacen tantos console.logs como elementos hay en el array

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


//solucion con FOR
const avengers2 = ["Hulksdfasdfsadfsda", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord2 (array) {

    let longestWord2 = array[0];
    /* for (const element of array) {
          if (longestWord.length < element.length) {          
            longestWord = element;
        }
    } */

    for (let i = 1; i < array.length; i++) {
        const element2 = array[i];
        if (longestWord2.length < element2.length) {
            longestWord2 = element2;
        }
    }
    return longestWord2;
}

console.log(findLongestWord2(avengers2));

//solucion con FOR para que salga el útlimo máximo
const avengers3 = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord3 (array) {

    let longestWord3 = array[0];
 
    for (let i = 1; i < array.length; i++) {
        const element3 = array[i];
        if (longestWord3.length < element3.length) {
            longestWord3 = element3;
        }
    }
    return longestWord3;
}

console.log(findLongestWord3(avengers3));

// another example to get two words or without '|| cont === 3' get the longest word in the middle

const avengers4 = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M.", "Captain C.", "Captain Z."];
function findLongestWord4 (array) {
    const wordsLength4 = [];
    for (let i = 0; i < array.length; i++) {
        wordsLength4.push(array[i].length);
    }
    console.log(wordsLength4);
    let longestWords4 = [];
    let max = Math.max.apply(null, wordsLength4);
    console.log(max);
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length === max) {
            cont ++;
            if (cont === 2 || cont === 3) {
                longestWords4.push(array[i]);
            }
        }
    }
    /* for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if (longestWord.length < element.length) {
            longestWord = element;
        }
    } */
    return longestWords4;
}
console.log(findLongestWord4(avengers4));




