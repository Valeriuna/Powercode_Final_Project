"use strict";

const modalOpen = document.getElementById("modal_open");
modalOpen.onclick = openModal;
const backDrop = document.getElementById("back-drop");

function openModal() {
  backDrop.classList.add("opened");
}
function closeModal() {
  backDrop.classList.remove("opened");
}

const modalClose = document.getElementById("modal_close");
modalClose.onclick = closeModal;

const generalClose = document.addEventListener("click", function (event) {
  if (event.target === backDrop) {
    closeModal();
  }
});
