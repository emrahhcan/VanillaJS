'use strict';

const showModalBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const hiddenModalBtn = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('hidden-js');
    overlay.classList.remove('hidden-js');
};
const closeModal = () => {
    modal.classList.add('hidden-js');
    overlay.classList.add('hidden-js');
};

showModalBtn.addEventListener('click', openModal);
hiddenModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) =>
    {
        if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    }
);
