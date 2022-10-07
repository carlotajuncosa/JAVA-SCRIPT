/* **Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor 
que desea comprobar que existe dentro de dicho array - comprueba 
si existe el elemento, en caso que existan nos devuelve la 
osición de dicho elemento y por la contra un false. Puedes usar 
este array para probar tu función:

/* función( array, valor a comprobar)

  for (const element of array){
    if (element === valor a comprobar) {
      existe
      console.log(array[i] + valor a comprobar);
    } else {
      no existe
      console.log(false);
    }
  }*/

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(array, key) {
  // key = valor a comprobar

  for (var i = 0; i < array.length; i++) {
    //console.log('Estoy recorriendo los elementos del array: ' + nameFinder[i]);

    if (array[i] === key) {
      return `${i}: ${array[i]}`;
    }
  }
  return false;
}

console.log(finderName(nameFinder, "Peggy"));
