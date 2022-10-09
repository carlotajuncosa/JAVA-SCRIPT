/* Iteración #2: Condicionales avanzados
Comprueba en cada uno de los usuarios que 
tenga al menos dos trimestres aprobados y 
añade la propiedad ***isApproved*** a true o 
false en consecuencia. Una vez lo tengas compruébalo 
con un ***console.log***. */

//1.bucle para recorrer los valores de un objeto dentro de array ¿FOR IN?
//2.si 2T true entonces 
//3.añadir propiedad isApproved = true




const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (i = 0; i < alumns.length; i++);
if (alums[i[T1]] == true && alumns[i[T2]] == true & alumns[i[T3]] == true
    || alums[i[T1]] == true && alumns[i[T2]] == false & alumns[i[T3]] == true
    || alums[i[T1]] == false && alumns[i[T2]] == true & alumns[i[T3]] == true
    || alums[i[T1]] == true && alumns[i[T2]] == true & alumns[i[T3]] == false) {
        console.log(alumns[i] `$isApproved`);
    } else {
        console.log(alumns[i] `$isAnF`);
    } 
