// Selecciona el elemento <html> del documento
const html = document.querySelector('html')

// Selecciona los botones correspondientes por su clase CSS
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('.app__card-button--largo')

// Añade un event listener al botón 'botonCorto'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'descanso-corto'
botonCorto.addEventListener('click', () => {
    html.setAttribute('data-contexto','descanso-corto')
})


// Añade un event listener al botón 'botonEnfoque'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'enfoque'
botonEnfoque.addEventListener('click', () => {
    html.setAttribute('data-contexto','enfoque')
})

// Añade un event listener al botón 'botonLargo'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'descanso-largo'
botonLargo.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-largo')
})