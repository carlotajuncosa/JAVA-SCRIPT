const pokedex$$ = document.querySelector("#pokedex");
const ALL_POKEMONS_INFO = []; //MAYUS cuando una variable global scope puede ser usada por todas

function getAllPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((error) => console.log('Error obteniendo todos los pokemons', error));
}

const getOnePokemon(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((error) => console.log('Error obteniendo pokemon individual', error));
}

function renderPokemons(pokemons) {
  pokemons.forEach(function(poke) {
    const li$$ = document.createElement('li');
    li$$.classList.add('card');
  
    const img$$ = document.createElement('img');
    img$$.src = poke.sprites.front_default;
    img$$.alt = poke.name;
  
    const p$$ = document.createElement('p');
    p$$.classList.add('card-title');
    p$$.textContent = poke.name;
  
    const div$$ = document.createElement('div');
    div$$.classList.add('card-subtitle');
    div$$.textContent = poke.types[0].type.name;
  
    li$$.appendChild(img$$);
    li$$.appendChild(p$$);
    li$$.appendChild(div$$);
  
    pokedex$$.appendChild(li$$);
  });
}

//director de orquestra: irá llamando a otras funciones
async function init() {
  console.log("ejecutando peticiones pokedex");

  const allPokemons = await getAllPokemons(); // para meter el await tengo que convertir en asincrona la funcion
  console.log('allPokemons', allPokemons);

  for (const pokemon of allPokemons) {
    const pokemonIndividualInfo = await getOnePokemon(pokemon.url);
    ALL_POKEMONS_INFO.push(pokemonIndividualInfo);
  };

  console.log('Todos los pokemon info', ALL_POKEMONS_INFO);//undefined!
  renderPokemons(ALL_POKEMONS_INFO)

};

window.onload = init; // defer
