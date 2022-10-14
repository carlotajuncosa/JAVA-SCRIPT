const pokedex = document.querySelector("#pokedex");
const ALL_POKEMONS_INFO = []; //MAYUS cuando una variable global scope puede ser usada por todas

function getAllPokemons() {
  return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then((response) => response.json())
    .then((response) => {return response.results})
    .catch((error) => console.log('eror obteniendo los pokemons', error));
}

function getOnePokemon(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((response) => {return response.results})
    .catch((error) => console.log('eror obteniendo pokemon individual', error));  
}
function renderPokemons(pokemons) {
    const pokemonToRender = pokemons[0];
    const li$$ = document.createElement('li');
    li.classList.add('card');

    //creamos la imagen
    //el text
    //el subtitulo
    // el lunes refactorizamos el código, 

}
//director de orquestra: irá llamando a otras funciones
async function init() {
  console.log("ejecutando peticiones pokedex");

  const allPokemons = await getAllPokemons(); // para meter el await tengo que convertir en asincrona la funcion
  console.log('allPokemons', allPokemons)

  for (const pokemon of allPokemons) {
    const pokeInfo = await getOnePokemon(pokemon.url);
    ALL_POKEMONS_INFO.push(pokeInfo);
    
  }

  //console.log('Todos los pokemon info', ALL_POKEMONS_INFO);//undefined!
  renderPokemons(ALL_POKEMONS_INFO)

};

window.onload = init; // defer









/* Requisitos
1 obtener lista pokedex y guardar variabe DONE
2 obtener listado de todos los pokemosn DONE 
3 obtener todos los pokemons iterar 1 por 1 AQUÏ SE ME HA JODIDO EL CODIGO
4 a;adir al do los pokemos dentro del div del pokedex



- Recuperar la lista con el id "podekex" y almacenarla en una variable.
- Ejecutar el fetch mediante una función recuperando los 150 primeros Pokemon 
a través de un bucle for e indicar el endpoint correcto de la API. En este 
caso los vamos a recuperar de la siguiente url: `https://pokeapi.co/api/v2/pokemon/`
- Hay que tener en cuenta que hay que especificarle a la url el valor que va 
a recuperar el bucle en cada iteración, ya que la información de cada 
Pokémon se almacenará en una url como estas:
    

INFO DETALLADA:

    `https://pokeapi.co/api/v2/pokemon/1`
    
    `https://pokeapi.co/api/v2/pokemon/2`
    
    `https://pokeapi.co/api/v2/pokemon/3`
    
- Una vez recuperada la información tendremos que mapearla para imprimir 
los diferentes parámetros de los que compone. Para ello crearemos la constante 
`pokemon` dentro de la misma función en la que almacenaremos en diferentes 
valores la información recogida:


const pokemon = results.map((result) => ({
    name: result.name,
    image: result.sprites['front_default'],
    type: result.types.map((type) => type.type.name).join(', '),
    id: result.id 
    En este caso hemos almacenado el nombre, la imagen, el tipo y el id (número). 
    Si investigáis la API se pueden recuperar muchísima más información como los 
    stats, los videojuegos en los que aparecen o diferentes generaciones de 
    imágenes y displays.

- Una vez desglosada la información habrá que pintarla a través de otra función 
que nos recupere el resultado del `fetch` y nos pinte dentro de nuestro elemento 
`pokedex` una lista con dichos elementos. Esta función deberá ser ejecutada una 
vez termine la función del fetch (recordemos el flujo de funciones).
- Por último tenemos que llamar a la función fetch para que se ejecute 
al arrancar la aplicación y así nos recuperará la información y nos pintará nuestro listado.
*/
