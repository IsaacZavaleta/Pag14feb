function mover() {
    var elemento = document.getElementById('No');
    var shrimp = document.getElementById('shrimp');
    //hacer el boton absoluto
    elemento.style.position = 'absolute'
    // Generar posiciones aleatorias dentro del ancho y alto del documento
    var posicionX = Math.floor(Math.random() * (window.innerWidth - elemento.offsetWidth));
    var posicionY = Math.floor(Math.random() * (window.innerHeight - elemento.offsetHeight));

    // Establecer las posiciones aleatorias
    elemento.style.left = posicionX + 'px';
    elemento.style.top = posicionY + 'px';
    elemento.style.width = (elemento.offsetWidth - 5) + 'px';
    elemento.style.height = (elemento.offsetHeight - 5) + 'px';
    elemento.style.fontSize = (parseInt(window.getComputedStyle(elemento).fontSize) - 5) +'px';
    // Mostrar el elemento
    elemento.style.display = 'block';
    shrimp.style.display = 'none';

}

function redirect() {
    window.open("https:wa.link/ihvaqq");
    window.location.href = 'acepto.html';
}