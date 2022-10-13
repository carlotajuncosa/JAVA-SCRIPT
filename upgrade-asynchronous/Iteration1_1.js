/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch("https://api.agify.io?name=michael")
  .then((response) => response.json()) //le llegan datos y los nombramos response (solo pasamos los datos a json)
  .then((data) => console.log(data));//aquí los enviamos a imprimir

  /* function ejemplo(num){
    console.log('pepe');
  }
ejemplo(1); */