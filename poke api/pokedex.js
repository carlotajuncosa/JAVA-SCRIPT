const pokedex$$ = document.querySelector("#pokedex");
const searchInput$$ = document.querySelector(".search-container input");
let ALL_POKEMONS_INFO = []; //MAYUS cuando una variable global scope puede ser usada por todas

const getAllPokemons = () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((error) => console.log('Error obteniendo todos los pokemons', error));


const getOnePokemon = async (url) => {
  try { 
    const response = await fetch(url);
    const result = await response.json();

    const pokemon = {
      name: result.name,
      id: result.id,
      types: result.types.map((element) => element.type.name),
      image: result.sprites.front_default,
    };

    return pokemon;
  } catch (error) {
    console.log("Error obteniendo pokemon " + url, error);
  }
};

  
const renderTypes = (types, container) => {
  const div$$ = document.createElement("div");
  div$$.classList.add("card-subtitle", "types-container");
    
  types.forEach((type) => {
     const typeContainer$$ = document.createElement("p");
     typeContainer$$.setAttribute("pokemon-type", type);
     typeContainer$$.style.backgroundColor = typeColors[type];
     typeContainer$$.classList.add("type");
     typeContainer$$.textContent = type;
     typeContainer$$.addEventListener("click", () => {
        searchInput$$.setAttribute("value", type);
        search(type);
      });
        div$$.appendChild(typeContainer$$);
      });
    
  container.appendChild(div$$);
};

const cleanPokedex = () => (pokedex$$.innerHTML= "");

const renderNoResults = () => {
  const li$$ = document.createElement("li");

  const p$$ = document.createElement("p");
  p$$.classList.add("card-title");
  p$$.textContent = "No se encuentran resultados";

  li$$.appendChild(p$$);
  pokedex$$.appendChild(li$$);
};

    
const renderPokemonCard = (poke) => {
    const li$$ = document.createElement("li");
    li$$.classList.add("card");

    /* const divPoke$$ = document.createElement('div');
    divPoke$$.classList.add('divPoke');
    divPoke$$.appendChild(img$$); */

    const img$$ = document.createElement("img");
    img$$.src = poke.sprites.other.dream_world.front_default;
    img$$.alt = poke.name;
    img$$.classList.add("imgSize");
   /*  img$$.style.background = "300px 300px"; */
   /*  img$$.style.backgroundColor(); */
  
    const p$$ = document.createElement("p");
    p$$.classList.add("card-title");
    p$$.textContent = poke.name;
  
    const diId$$ = document.createElement("div");
    div$$.classList.add("card-subtitle");
    div$$.textContent = "NUM." + poke.id;
  
  
    li$$.appendChild(img$$);
    li$$.appendChild(p$$);
    li$$.appendChild(divId$$);
   /*li$$.appendChild(divPoke$$);
   pokedex$$.appendChild(li$$); 
   divPoke$$.appendChild(img$$);*/

   renderTypes(poke.types, li$$);

   pokedex$$.appendChild(li$$);
};

const renderPokemons = (pokemons) => {
  cleanPokedex();
  if (!pokemons.length) renderNoResults();
  pokemons.forEach((pokemon) => renderPokemonCard(pokemon));
};

const search = (value) => {
  const filtered = ALL_POKEMONS_INFO.filter((pokemon) => {
    const matchName = pokemon.name.includes(value);
    const matchId = pokemon.id == value;
    const matchType = pokemon.types.includes(value);

    return matchName || matchId || matchType;
  });
  renderPokemons(filtered);
};

allPokemons = allPokemons.sort((a, b) => a.id - b.id); //PROBLEMA EN ESTA LÍNEA

const addEventsListeners = () => {
  searchInput$$.addEventListener("input", (event) => {
    search(event.target.value);
  });
};

//director de orquestra: irá llamando a otras funciones
 const init = async () =>{
  //console.log("ejecutando peticiones pokedex");
  addEventsListeners();
  const allPokemons = await getAllPokemons(); // para meter el await tengo que convertir en asincrona la funcion
  //console.log('allPokemons', allPokemons);

  for (const pokemon of allPokemons) {
    const pokemonIndividualInfo = await getOnePokemon(pokemon.url);
    ALL_POKEMONS_INFO.push(pokemonIndividualInfo);
  };

  console.log('Todos los pokemon info', ALL_POKEMONS_INFO);
  renderPokemons(ALL_POKEMONS_INFO);

};

window.onload = init; // defer









/* Requisitos
1 obtener lista pokedex y guardar variabe DONE
2 obtener listado de todos los pokemosn DONE 
3 obtener todos los pokemons iterar 1 por 1 AQUÏ SE ME HA JODIDO EL CÓDIGO
4 a;adir al do los pokemos dentro del div del pokedex */

