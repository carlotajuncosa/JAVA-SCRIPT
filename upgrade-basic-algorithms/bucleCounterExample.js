const counterWords = ['code','repeat','eat','sleep', 'code', 'enjoy', 'sleep', 'code', 
'enjoy','upgrade', 'code'];

 function repeatCounter(array){

    let result= {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element in result){
            result[element]++;
          } else {
            result[element]=1;
        }      
    }
    return result;
}  

console.log(repeatCounter(counterWords));  


//palabras repetidas v2Text


/* const counterWords = ['code','repeat','eat','sleep', 'code', 'enjoy', 'sleep', 'code', 
'enjoy','upgrade', 'code'];

  function repeatCounter(array) {
    let result = {};
    const palabrasComprobadas = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (!palabrasComprobadas.includes(element)) {
          palabrasComprobadas.push(element)
      } else {
          if (element in result) {
              result[element]++;
          } else {
              result[element] = 1;
          }
      }
    }
    return result;
  }
  console.log(repeatCounter(counterWords)); */

  // CONDICIONALES AVANZADOS

 /*  { name: "Pepe Viruela", T1: false, T2: false, T3: true },

  { name: "Lucia Aranda", T1: true, T2: false, T3: true },

  { name: "Juan Miranda", T1: false, T2: true, T3: true },

  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },

  { name: "Raquel Benito", T1: true, T2: true, T3: true },];



for (let i = 0; i < alumns.length; i++) {

  if (

    (alumns[i]["T1"] && alumns[i]["T2"]) ||

    (alumns[i]["T1"] && alumns[i]["T3"]) ||

    (alumns[i]["T2"] && alumns[i]["T3"])

  ) {

    alumns[i]["isApproved"] = true;

  } else {

    alumns[i]["isApproved"] = false;

  }

}



console.log(alumns); */