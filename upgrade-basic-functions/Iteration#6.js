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
    'pasta',
    'soda'
  ];
  

  function removeDuplicates(array) {

  for (var i = 0; i < array.length; i++) {
    //console.log('Estoy en el bucle 1' + duplicates[i]);
    for (var j = i+1; j < array.length; j++) {
      //console.log('Estoy en el bucle 2' + duplicates[j]);

      if (array[i] == array[j]) {
        array.splice(j,1); 
        j--;
       //console.log(duplicates[j--]);
      } 
    }
  }
  return array;
}

 console.log(removeDuplicates(duplicates));
    
  

  



