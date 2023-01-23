"use strict";


let user = null;

const userInfoEl = document.getElementById("user-info");
const userNameEl = document.getElementById("user-name");
const userLoginFromStorage = localStorage.getItem("userName");

if (userLoginFromStorage) {
  onSignIn(userLoginFromStorage);
}

function onSignIn(login) {
  modalOpen.classList.add("user");
  userInfoEl.classList.remove("user");
  localStorage.setItem("userName", login)
  userNameEl.innerText = login;
}

function onSignOut() {
  modalOpen.classList.remove("user");
  userInfoEl.classList.add("user");
  localStorage.removeItem("userName")
  userNameEl.innerText = " ";
}

function validateUser(login, password) {
  switch (login) {
    case "Lera@gmail.com":
      return password === "1234";
    case "Admin@gmail.com":
      return password === "qwerty";
    default:
      return false;
  }
}

document.getElementById("sign-out-btn").onclick = onSignOut;

//Modal

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


//Form

document.getElementById("form").onsubmit = (event) => {
  event.preventDefault();

  const formData = new formData(event.target);
  const formvalue = Object.fromEntries(formData);

if (validateUser(formvalue.login, formvalue.password)) {
  onSignIn(formvalue.login);
  closeModal();
} else {
  alert("Wrong credentials");
}
}

//Array

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


