//1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

/* for (var i = 0; i <= 9; i++){
    console.log(i);
} */
//OK

/* 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
cuando el resto del numero dividido entre 2 sea 0.*/

/* for (var i = 0; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */
//OK

/* 1.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle empieza en 0 y termina en 10. 
Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
y cambia el mensaje en la última vuelta a 'Dormido!'.  */

console.log('Intentando dormir');
for (var i = 0; i <= 10; i++){
    console.log(i);
}
console.log('¡Dormido!');