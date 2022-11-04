// Variables

const openBtn = document.getElementById("open-btn");
const modalContainer = document.getElementById("modal-container");
const closeBtn = document.getElementById("close-btn");

// Event Listeners

// turn off when click on 'x'
openBtn.addEventListener("click", () => {
    modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
});

// turn off when click anywhere on body
window.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
        modalContainer.style.display = "none";
    }
});
