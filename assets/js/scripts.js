const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const startGameButton = document.querySelector('.start-game');

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
    pipe.classList.remove('pipe-slide');
    pipe.style.left = `${pipePosition}px`;
    
    mario.classList.remove('mario-jump');
    mario.src = './assets/images/game-over.png';
    mario.style.width = '55px';
    mario.style.bottom = `${marioPosition}px`;
    mario.style.left = '20px';
}

const resetGame = () => {
    pipe.style.left = 'unset';
    pipe.classList.add('pipe-slide');
        
    mario.src = './assets/images/mario.gif';
    mario.style.width = '100px';
    mario.style.bottom = '0';
    mario.style.left = '0';
}

const start = () => {
    resetGame();

    document.addEventListener('keydown', jump);
    startGameButton.removeEventListener('click', start);
    startGameButton.style.display = 'none';

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (isGameOver(pipePosition, marioPosition)) {
            setGameOver(pipePosition, marioPosition);
            
            document.removeEventListener('keydown', jump);
            startGameButton.style.display = 'block';
            startGameButton.addEventListener('click', start);
            clearInterval(loop);
        }

    }, 10);
}

start();