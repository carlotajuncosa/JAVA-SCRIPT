console.log('Cargado JS');


//para generar un evento del boton funciones

function carlota() {
    console.log('[Carlota] Hola');
};

//selecciono boton con dom y le añado escuchador

//const = button$$.querySelector('buton')


function sobreVuelaBoton () {
    console.log('El raton está en una area restringida');
}

function saleRaton() {

console.log('El raton de sale del boton');
}
/* elemento tipo de accion  */


//sintaxis normal con funcion dentro
/* const formSelected = document.querySelector('form');
document.addEventListener('click', function() {
    console.log('Hago click en el formulario');
}); */

//sintaxis con función ya declarada 
const formSelected = document.querySelector('form');
formSelected.addEventListener('click', carlota);

formSelected.removeEventListener('click', carlota);

const superBtn = document.getElementById('super-button');

function log1 () {
    console.log('111111111111');
    superBtn.removeEventListener('click',log1);
}
function log2 () {
    console.log('222222222222');
}
function log3 () {
    console.log('33333333333');
}
superBtn.addEventListener('click', log1);
superBtn.addEventListener('click', log2);
superBtn.addEventListener('click', log3);



superBtn.addEventListener('mousenter', function() {
console.log('el raton ha entrado');
});

//borrar funcion anonima


let keyLogger = '';
document.addEventListener('keypress', function(event) {
    keyLogger += event.key;
    //console.log(keyLogger);
});

const input = document.querySelector('input[name="name');

input.addEventListener('input', function(event){  
    console.log(event.target.value);

    if (event.target.value === 'guille') {
        input.style.fontSize = '100px';
    } else {
        input.style.fontSize = '10px'
    }
});
