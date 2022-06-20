const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('mario-jump');

    setTimeout(() => {
        mario.classList.remove('mario-jump');
    }, 500);
}

document.addEventListener('keydown', jump);