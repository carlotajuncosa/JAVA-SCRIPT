/* **Valores únicos**

Crea una función que reciba por parámetro un array 
y compruebe si existen elementos duplicados, en caso 
que existan los elimina para retornar un array sin los 
elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    // insert code
  }



  /* function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] === array[j]) {
              array.splice(j, 1);
              j--;
          }
      }
    }
    return array;
  }
  console.log(removeDuplicates(duplicates)); */