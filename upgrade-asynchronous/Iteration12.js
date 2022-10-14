/* 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria 
usando fetch() para hacer una consulta a la api cuando se haga click en el 
botón, pasando como parametro de la api, el valor del input.
const baseUrl = 'hhttps://api.nationalize.io/?name=alvaro'; */

const baseUrl = "https://api.nationalize.io/?name=";
//utilizamos el dato mockeado : https://api.nationalize.io/?name=marta
//incluimos el nombre al final de la url para ponerlo en el input

const button$$ = document.querySelector("button"); //llamo al boton
const input$$ = document.querySelector("input"); //llamo al input

function search() {
  fetch(baseUrl + input$$.value) //api + valor que el usuario mete dentro del input
    .then((response) => response.json()) //aquí lo llama
    .then((data) => console.log(data)); //aquí lo pinta
} //esta función devuelve la info de la api

button$$.addEventListener("click", search);




//EJEMPLO SANTI

/* const button1$$ = document.querySelector("button");
const input1$$ = document.querySelector("input");

const realizarPeticion = () => {
  fetch("https://api.nationalize.io/?name=" + nombre) //api + valor que el usuario mete dentro del input
    .then((response) => response.json()) //aquí lo llama
    .then((data) => console.log(data));
};

button1$$.addEventListener("click", search); */
