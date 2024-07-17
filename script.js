// Selecciona el elemento <html> del documento
const html = document.querySelector('html')

// Selecciona los botones correspondientes por su clase CSS
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')

// Añade un event listener al botón 'botonCorto'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'descanso-corto'
botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
})


// Añade un event listener al botón 'botonEnfoque'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'enfoque'
botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')

})

// Añade un event listener al botón 'botonLargo'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'descanso-largo'
botonLargo.addEventListener('click', () =>{
    cambiarContexto('descanso-largo')
})


function cambiarContexto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `./imagenes/${contexto}.png`)

switch (contexto) {

    case "enfoque":
        titulo.innerHTML = `
        Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
        `
        break;
        case "descanso-corto":
            titulo.innerHTML = `
            ¿Que tal tomar un respiro?
            <strong class="app__title-strong">    ¡Haz una pausa corta!.</strong>
            `

            break;
            case "descanso-largo":
                titulo.innerHTML = `
                Hora de volver a la superficie
                <strong class="app__title-strong"> Haz una pausa larga.</strong
                `
        default:
            break;
}

}