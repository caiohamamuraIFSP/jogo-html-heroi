
let div = document.querySelector('img');
let botPos = 0;
let leftPos = 0;
const FORCA_PULO = 7;
const GRAVIDADE = 1;
const VEL_MAX = 15;
const ACEL = 4;
const ATRITO = 0.90;
let velDireita = 0;
let velCima = 0;
let keysPressed = {
    ' ': false,
    'ArrowLeft': false,
    'ArrowRight': false
};


document.addEventListener('keydown', pressionarTecla);
document.addEventListener('keyup', soltarTecla);

let loopJogo = () => {
    if (keysPressed[' ']) {
        velCima = FORCA_PULO;
    }
    if (keysPressed['ArrowLeft']) {
        velDireita = -ACEL;
    }
    if (keysPressed['ArrowRight']) {
        velDireita = ACEL;
    }

    let transformacoes = '';
   

    if (botPos > 1) {
        div.src = 'hero.png';
    } else if ((velDireita ** 2) < 0.1) {
        div.src = 'hero2.png';
    } else {
        if (!div.src.endsWith('hero.gif'))
            div.src = 'hero.gif';
    }

    botPos += velCima;
    if (botPos <= 0) {
        botPos = 0;
    } else {
        velCima -= GRAVIDADE;
    }
    leftPos += velDireita;
    velDireita = velDireita * ATRITO;
    transformacoes = `translate(${leftPos}px, ${-botPos}px)`;
    if (velDireita < 0) {
        transformacoes += 'scaleX(-1)';
    }
    
    div.style.transform = transformacoes;
    window.requestAnimationFrame(loopJogo);
};
loopJogo();


function pressionarTecla(event) {
    if (keysPressed[event.key] == false) {
        keysPressed[event.key] = true;
    }
}

function soltarTecla(event) {
    console.log(keysPressed);
    if (keysPressed[event.key] == true)
        keysPressed[event.key] = false;
}