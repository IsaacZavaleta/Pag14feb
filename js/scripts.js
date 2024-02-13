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
    window.open("https://api.whatsapp.com/send?phone=5213325272089&text=Si%20quiero%20ser%20tu%20san%20valentin%20%F0%9F%A6%86%E2%9D%A4%EF%B8%8F%E2%80%8D%F0%9F%94%A5%F0%9F%A6%96");
    window.location.href = 'acepto.html';
}