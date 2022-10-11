//* **Iteración #6: Función swap**

/*Crea una función llamada `swap()` que reciba un array 
y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos 
enviado como parametro. Retorna el array resultante.*/

//? Sugerencia de array: 

const fakePlayers = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swab (array, index1, index2) {

    let valor1 = array[index1];
    let valor2 = array[index2];

    array.splice(index2,1,valor1);
 
    array.splice(index1,1,valor2);
      
return (array);  

}

console.log(swab(fakePlayers, 0, 1));
console.log(swab(fakePlayers, 0, 3));


//OTRO MÉTODO


const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
//*                  0                1                    2                3
const comidas = ['Naranja', 'Almondigas', 'Lechuga', 'Espaguettis'];
//*                 0            1            2            3
//? crea la función swap que intercambie dos elementos de posición
function swap (array, posicion1, posicion2) {
  /*   let a = 4;
    let b = 5;
    let c = a; // creo c para que el valor de a cuando le ponga el valor de b no se pierda
    a = b; // pongo en a el valor de b, por lo tanto ahora vale 5 no 4
    b = c; // pongo en b el valor de c, que era el anterior valor de a, el cual guardamos en c temporalmente para que no se perdiese.
    console.log(a, b);
       */
    /* console.log(array[posicion1]);
    console.log(array[posicion2]); */
    let temporal = array[posicion1];
    array[posicion1] = array[posicion2];
    array[posicion2] = temporal;
    return array;
    /* 
    console.log(array); // el array que le indiquemos cuando ejecutamos la función, en estos dos casos pues serán el array de comidas o el array de players
    console.log(posicion1); // posición1, será lo que recojamos en el segundo parámetro de mi función
    console.log(posicion2); // posición2, será lo que recojamos en el segundo parámetro de mi función
    */
    // sacadme un console.log del elemento que se encuentra en la posición posicion1;
    /* console.log(array[posicion1]);
    console.log(array[posicion2]); */
    // console.log(players[1])
    // console.log(comidas[2])
}
// ejecuto la función -> mando unos valores
console.log(swap(players, 1, 3));
console.log(swap(comidas, 2, 1));