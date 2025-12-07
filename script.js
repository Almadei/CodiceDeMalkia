document.addEventListener("DOMContentLoaded", () => {
    //1. Obtenemos todas las fichas de los personajes
    const characterFichas = document.querySelectorAll('.character-ficha');

    //2. Obtenemos los retratos
    const retratos = document.querySelectorAll('.retrato');

    //2. Por defecto, colapsar todas las fichas al cargar la página.
    characterFichas.forEach(ficha => {
        ficha.classList.add('collapsed');

        const contenidoPrincipal = ficha.querySelector('.ficha-contenido-principal');

        contenidoPrincipal.addEventListener('click', (event) => {
            if(event.target.classList.contains('retrato')) {
                return;
            }
            ficha.classList.toggle('collapsed');
        });
    });
    retratos.forEach(retrato => {
        retrato.addEventListener('click', () => {
            retrato.classList.toggle('enlarged');
        });
    });
});