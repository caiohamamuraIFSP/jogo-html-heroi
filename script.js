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
let keysPressed = [];


document.addEventListener('keydown', pressionarTecla);
document.addEventListener('keyup', soltarTecla);

let loopJogo = () => {
    if (keysPressed.includes(' '))
    {
        velCima = FORCA_PULO;
    }
    if (keysPressed.includes('ArrowLeft'))
    {
        velDireita = -ACEL;
    }
    if (keysPressed.includes('ArrowRight'))
    {
        velDireita = ACEL;
    }
    
    if (velDireita < 0) {
        div.style.transform = 'scaleX(-1)';
    } else {
        div.style.transform = '';
    }

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
        div.style.bottom = botPos + 'px';
    } else {
        div.style.bottom = botPos + 'px';
        velCima -= GRAVIDADE;
    }
    leftPos += velDireita;
    velDireita = velDireita * ATRITO;
    div.style.left = leftPos + 'px';
    window.requestAnimationFrame(loopJogo);
};
loopJogo();


function pressionarTecla(event) {
    console.log(event.key);
    if (!keysPressed.includes(event.key)) {
        keysPressed.push(event.key);
    }
}

function soltarTecla(event) {
    keysPressed.splice(keysPressed.indexOf(event.key), 1);
}