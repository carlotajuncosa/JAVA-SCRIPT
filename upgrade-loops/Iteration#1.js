//usa includes. Poner Strings con camiseta en un nuevo arrary

//Bucle For each o for
//condicional función descartar strings con includes*
//hacer funcion y meterlo todo
//*includes no detecta una palabra en strings más largos

const products = ['Camiseta de Pokemon', 
'Pantalón coquinero', 'Gorra de gansta', 
'Camiseta de Basket', 'Cinrurón de Orión', 
'AC/DC Camiseta']

/* const camisetas =[]; */

function camisetas (array) {
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].includes('Camiseta')){
            console.log(array[i])
            }
        }    
}
camisetas(products);



/* if ('Camiseta' in array[i]) {
    camisetaProducts.includes(array[i]);
} else {
    null
} */

/* if (products[i] in camisetas) {
    camisetas[products[i]]++;
    } else {
        camisetas[products[i]]=1;
    } */



//if (products.includes('Camiseta de Basket') == false) {
  //  console.log(products('lalala'));
   //  };


//let word = 'Camiseta';

/* console.log(products.includes('Camiseta de Pokemon'));
console.log(products.includes('Camiseta de Basket'));
console.log(products.includes('AC/DC Camiseta'));
console.log('__________');
console.log(products.includes('Camiseta')); */


/* for (i = 0; i < products.length; i++);
console.log(products);

console.log(products.includes('Camiseta'));

console.log('__________');

if (products[i.length] != 'Camiseta') {
    products.splice(i,1);}
    console.log(products);

console.log('__________'); */

    //products[i].includes('Camiseta');



//let Camiseta = [];

//function tshirt(array, name) {
    //for (i = 0; i < products.length; i++);
   /*  for (value of products);
    console.log(value);

    console.log('__________');

    for (key in products) {
        console.log(key); } */

   // if (products[i] != 'Camiseta') {
    //    console.log(products[i]);
   // } else {
    //    undefined;
    //}

    //(console.info(products.includes('Camiseta')));
    
    //products[i].includes('Camiseta');
    //console.info(products.includes('Camiseta'));
    //if (products[i].includes['Camiseta'] == products[i]) {
     // products[i];
     // } else {
     //  null;
     //}
     //console.log(products);

    // return array[i];
   //}
   
   //tshirt(products, 'Camiseta');}
    