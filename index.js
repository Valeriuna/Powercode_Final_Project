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



const stepsArr = [
  {
    name: "Date",
    text: "choose what date <br /> to check",
    imgUrl: "img/healthcare 1.png",
    imgDescription: "healthcare",
  },
  {
    name: "Poly",
    text: "choose what Poly <br /> to check",
    imgUrl: "img/healthcare 2.png",
    imgDescription: "healthcare",
  },
  {
    name: "Doctor",
    text: "And choose doctor <br /> to check",
    imgUrl: "img/doctor 2.png",
    imgDescription: "doctor",
  },
];
  const steps = document.getElementById("steps");

 function getHtmlFromSteps(step) {
    return `<div class="item"><img src="${step.imgUrl}" alt="${step.imgDescription}" /><h3>${step.name}</h3><p>${step.text}</p></div>`;
 }

let html = "";

for (let i = 0; i < stepsArr.length; i++) {
   html += getHtmlFromSteps(stepsArr[i]);
}

 steps.innerHTML = html;


