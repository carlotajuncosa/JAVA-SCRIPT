//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const button$$ = document.getElementById('btnToClick'); //selecionar boton

function log1(event) { //generar evento
    console.log('Estoy haciendo un click'); //respuesta
  }
button$$.textContent = 'soy un botón';
button$$.addEventListener('click', log1); //

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const input$$ = document.querySelector('.focus');
input$$.addEventListener('focus', () => console.log(input$$.value));

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input1$$ = document.querySelector('.value');
input1$$.addEventListener('input', () => console.log(input1$$.value));




