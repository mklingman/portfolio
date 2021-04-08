document.addEventListener("DOMContentLoaded", burgerIsReady);

function burgerIsReady() {
  document.querySelector("#closebtn").addEventListener("click", closeNav);
  document.getElementById("openbtn").addEventListener("click", openNav);
}

function openNav() {
  document.getElementById("burgermenu").style.width = "100%";
}

function closeNav() {
  document.getElementById("burgermenu").style.width = "0%";
}

function goBack() {
  window.history.back();
}
