const baseUrl = "https://api.nationalize.io/?name=";

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const text = () => {
    fetch(baseUrl + input$$.value)
      .then((data) => data.json())
      .then((person) => {
        const p$$ = document.createElement("p");
        p$$.textContent = `El nombre ${input$$.value}`;
  
        for (const country of person.country) {
          p$$.textContent += ` tiene un ${Math.floor(
            country.probability * 100
          )} por ciento de probabilidades de ser de ${country.country_id}`; //
        }
        document.body.appendChild(p$$);
      });
  };
  button$$.addEventListener("click", () => text());

  ///PARA PONER COMAS Y Y EN EL TEXTO

/*   p$$.textContent = `El nombre ${response.name}`;



  for (const ciudad of response.country) {

   

    if (response.country.indexOf(ciudad) === 0) {

        p$$.textContent += ` tiene un ${(ciudad.probability * 100).toFixed(1)} porciento de ser de ${ciudad.country_id} `;

    } else if (response.country.indexOf(ciudad) !== response.country.length - 1) {

        p$$.textContent += `, un ${(ciudad.probability * 100).toFixed(1)} porciento de ser de ${ciudad.country_id} `;

    } else {

        p$$.textContent += ` y un ${(ciudad.probability * 100).toFixed(1)} porciento de ser de ${ciudad.country_id}.`;

    }

   

  } */