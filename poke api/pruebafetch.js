//1- Obtener lista api y guardar en variable (la lista es un ol en el html);
const listaRikyMorty = document.querySelector("#listaApi");
const ALL_RICKYMORTY = []; //paso 3

//2- Otener el listado de todos los personajes

//fetch para la colección, coge 20 por defecto:
function getAllCharacters() {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((error) => console.log('Error obteniendo todos los personajes...', error));
    
}

//fetch para obtener las url con las imagenes (paso 3)
function getOneCharacter(url) {
  return fetch(url)
  .then((response) => response.json())
  .then((response) => {
    return response;
  })
  .catch((error) => console.log('Error obteniendo pokemon individual', error));
}

function renderRickyMorty(characters){
  const characterToRender = characters[0];
  
  const li$$ = document.createElement('li');
  

}

//FUNCTION BOSS llama a otras funciones:
async function startMyCode() {
  console.log("Ejecturando peticiones Ricky y Morty... ");

  const allRickyMorty = await getAllCharacters();
  //console.log('allRickyMorty: ', allRickyMorty);

  for (const character of allRickyMorty) { //iteracion paso 4
    const RMInfo = await getOneCharacter(character.url);
    console.log(RMInfo);
    ALL_RICKYMORTY.push(RMInfo);
  }

 console.log('Todos los personajes de Ricky y Morty', ALL_RICKYMORTY);
 
 renderRickyMorty(ALL_RICKYMORTY);
};

window.onload = startMyCode;

/* 
Requisitos:
3- Obtener todos los pokemons individuales uno por uno
4- Para el pas anterior, iterar uno por uno
5 - Añadir al DOM los pokemons, dentro de div divRM
*/

/* const getAllcharacters = 'https://rickandmortyapi.com/api/character/';



function
fetch(rickAndMortyApi)
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson);
});

console.log(getAllcharacters); */
