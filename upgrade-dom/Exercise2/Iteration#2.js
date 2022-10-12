// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div$$ = document.createElement('div$$');//inserto el div

document.body.appendChild('div'); //he creado un div

console.log(div$$);

//const div$$ = document.body.appendChild(document.createElement('div'));
//esto es lo de arriba en una línea


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const pInADiv$$ = document.createElement('div');
const p$$ = document.createElement('p');
pInADiv$$.appendChild(p$$);
document.body.appendChild(pInADiv$$);


// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ = document.createElement('div');// 'div' corresponde al elemento creado en html
for (let index = 0; index < 6; index++) { //creo bucle
  const p1$$ = document.createElement('p'); //indico que las p es lo que se repite
  div3$$.appendChild(p1$$);  //añado las p en el div
}
document.body.appendChild(div3$$); //inserta el div3$$ en el html


// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p2$$ = document.createElement('p')
p2$$.textContent = 'Soy dinámico!'; //se le pone un valor con = y ""
p2$$.body.appendChild(p2$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector('.fn-insert-here');
//buscar h2 con querySelector por clase . y registro mi busqueda en la variable
h2$$.textContent = 'Wubba Lubba dub dub'; 
// no hace falta .apenChild porque el elemento ya está creado, solo lo hemos tenido que buscar


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const ul$$ = document.createElement('ul'); //creamos ul
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (let index = 0; index < apps.length; index++) { //recorre el array
  let li$$ = document.createElement('li');//creo un li
  li$$.textContent = apps[index]; //las li valen tanto como cada elemento del array
  ul$$.appendChild(li$$) //que el ul tenga hijos li
}

document.body.appendChild(ul$$); //colocamos el ul en el body


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eraseNodes$$ = document.querySelectorAll('.fn-remove-me');

for (let index = 0; index < eraseNodes$$.length; index++) { 
  //bucle para eliminar los elementos de un array
  eraseNodes$$[index].remove(); 
  // metodo para borrar el nodo (elementos del array)
}
// VERSION CON FOR OF

for (const node of eraseNodes$$) { 
  node.remove();
}
  //en node no hace falta poner $$ porque es 
  //un comodin que refiere a los elementos del array
  //en cambio, eraseNodes$$ es un elemento que hemos credo en la 
  //linea 60


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const p3$$ = document.createAttribute('p'); //creo una p
p3$$.textContent = 'Voy en medio!'; //le añado el texto al p

const findDiv$$ = document.querySelectorAll('div'); //hago un array de los divs

document.insertBefore(p3$$, finDiv$$[3]) 
//lo que quiero insertar p3$$, dentro del array en la posición 2finDiv$$[3]


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here