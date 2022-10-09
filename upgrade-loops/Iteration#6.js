/* Iteración #6: Mixed For e includes

Usa un bucle **for** para recorrer todos los 
juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función ***.includes()*** 
para comprobarlo.Puedes usar este array: */

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

function toysSelect(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name.includes("gato")) {
        array.splice(i,1);
        i--;
    } 
  } return array;
}
console.log(toysSelect(toys));


/* for (let i = 0; i < toys.length; i++) {
        if (array[i].includes('Camiseta')){
            console.log(array[i])

      console.log(toys);
           */

/* if (array[i].includes('Camiseta')){
        console.log(array[i])
        }
    }    
}
camisetas(products); */

//if (toys[i]['name'] == 'gato' ||
//toys[i]['name'] == 'gato' ) {
//toys.splice(i,1);
//i--;
