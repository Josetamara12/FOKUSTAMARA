// Selecciona el elemento <html> del documento
const html = document.querySelector('html')

// Selecciona los botones correspondientes por su clase CSS
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('.app__card-button--largo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botones = document.querySelectorAll('.app__card-button')
const inputEnfoqueMusica = document.querySelector('#alternar-musica')
const musica = new Audio('./sonidos/luna-rise-part-one.mp3')

// Activa el modo de repetición continua para la música
musica.loop = true;

// Añade un event listener al input que controla la música de enfoque
inputEnfoqueMusica.addEventListener('change', ()=>{
    // Verifica si la música está pausada
    if(musica.paused){
        // Si la música está pausada, la reproduce
        musica.play()
    }else{
        // Si la música está reproduciéndose, la pausa
        musica.pause()
    }

})

// Añade un event listener al botón 'botonCorto'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'descanso-corto'
botonCorto.addEventListener('click', () => {
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
})


// Añade un event listener al botón 'botonEnfoque'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'enfoque'
botonEnfoque.addEventListener('click', () => {
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')

})

// Añade un event listener al botón 'botonLargo'
// Cuando se haga clic, se establece el atributo 'data-contexto' del elemento <html> a 'descanso-largo'
botonLargo.addEventListener('click', () =>{
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
})

// Función para cambiar el contexto de la aplicación
function cambiarContexto(contexto){

    // Itera sobre cada elemento en la colección 'botones'
    botones.forEach(function(contexto){
        // Remueve la clase 'active' de cada elemento 'contexto'
        contexto.classList.remove('active')
    })

    // Establece el atributo 'data-contexto' en el elemento <html> al valor de 'contexto'
    html.setAttribute('data-contexto', contexto)
    // Cambia la imagen del banner según el contexto
    banner.setAttribute('src', `./imagenes/${contexto}.png`)

     // Estructura de control para modificar el título basado en el contexto
    switch (contexto) {

        case "enfoque":
        // Si el contexto es "enfoque", cambia el contenido del título
        titulo.innerHTML = `
        Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>
        `
            break;
        case "descanso-corto":
            // Si el contexto es "descanso-corto", cambia el contenido del título
            titulo.innerHTML = `
            ¿Que tal tomar un respiro?
            <strong class="app__title-strong">    ¡Haz una pausa corta!.</strong>
            `
            break;
            
        case "descanso-largo":
            // Si el contexto es "descanso-largo", cambia el contenido del título
                titulo.innerHTML = `
                Hora de volver a la superficie
                <strong class="app__title-strong"> Haz una pausa larga.</strong
                `
                default:
                // Caso por defecto (opcional) en caso de que el contexto no coincida con ninguno de los anteriores
            break;
}

}