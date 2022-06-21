const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('mario-jump');

    setTimeout(() => {
        mario.classList.remove('mario-jump');
    }, 500);
}

const isGameOver = (pipePosition, marioPosition) => {
    return pipePosition <= 100 && pipePosition > 0 && marioPosition < 102;
}

const setGameOver = (pipePosition, marioPosition) => {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
        
    mario.style.animation = 'none';
    mario.src = './assets/images/game-over.png';
    mario.style.width = '55px';
    mario.style.bottom = `${marioPosition}px`;
    mario.style.left = `20px`;
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (isGameOver(pipePosition, marioPosition)) {
        setGameOver(pipePosition, marioPosition);
        
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);