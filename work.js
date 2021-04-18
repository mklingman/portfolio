"use strict";

import { cursorSetup } from "./cursor.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
  cursorSetup();

  window.addEventListener("mousemove", changeProjectImgPos);

  const projects = document.querySelectorAll(".list a");
  projects.forEach((project) => {
    project.addEventListener("mouseover", showImage);
    project.addEventListener("mouseout", hideImage);
  });
}

function showImage() {
  const showImage = document.querySelector("#project_images");
  showImage.classList.toggle("show");

  const image = this.dataset.picture;
  showImage.style.backgroundImage = `url(images/projects/${image})`;

  console.log(`url(images/projects/${image})`);
}

function hideImage() {
  document.querySelector("#project_images").classList.toggle("show");
}

function changeProjectImgPos(event) {
  const x = event.clientX;
  const y = event.clientY;

  const imgBox = document.querySelector("#project_images");
  imgBox.style.top = y + "px";
  imgBox.style.left = x + "px";
}
