'use strict'

const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let current = 0;

function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

function leftArrow() {
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
}
function rightArrow() {
    if (current === sliderImages.length -1) {
        current = -1;
    }
    slideRight();
}

function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

arrowLeft.addEventListener('click', function() {
    leftArrow();
});

function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function() {
    rightArrow();
});

startSlide();

document.addEventListener('keydown', (e) => {
    let pressedKey = e.key;
    if(pressedKey === 'ArrowRight') rightArrow();
    else if(pressedKey === 'ArrowLeft') leftArrow();
    else console.log(`You cannot use ${pressedKey}!`);
});