const mario = document.querySelector('#mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePositionLeft = pipe.offsetLeft;
    const cloudsPositionLeft = clouds.offsetLeft;
    const marioPositionHeight = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePositionLeft <= 125 && pipePositionLeft > 0 && marioPositionHeight < 80) {
        pipe.style.animation = 'none';
        mario.style.animation = 'none';
        clouds.style.animation = 'none';

        pipe.style.left = `${pipePositionLeft}px`;
        mario.style.bottom = `${marioPositionHeight}px`;
        clouds.style.left = `${cloudsPositionLeft}px`;
    
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '55px';
        mario.style.zIndex = '10';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);