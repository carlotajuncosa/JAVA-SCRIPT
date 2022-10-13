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