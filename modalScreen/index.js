'use strict';

// Variables
const showModalBtn = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const hideModalBtn = document.querySelector(".close-modal");

// Function variables
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for(let i = 0; i <= showModalBtn.length; i++) {
    showModalBtn[i].addEventListener("click", openModal);
    hideModalBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
            if(e.key === "Escape" && !modal.classList.contains("hidden"))
                closeModal();
        }
    );
}
