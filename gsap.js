"use stric";
window.addEventListener("DOMContentLoaded", start);

function start() {
  splashAni();
}

function splashAni() {
  const timeline = gsap.timeline();
  timeline.from(".id-title, .desktop-menu", { delay: 0.2, opacity: 0, duration: 1 });
  timeline.from(".name", { opacity: 0, duration: 1 });
  // timeline.from(".home-qoute", { opacity: 0, duration: 1, y: 10 });
  timeline.to(".gradient", { x: 800, duration: 2, ease: Linear.easeNone });
}

// function text() {
//   timeline.to(".gradient", 3, {
//     xPercent: -100,
//     repeat: -1,
//     yoyo: true,
//     repeatDelay: 0.5,
//     ease: Linear.easeNone,
//   });

// function start() {
//   document.querySelectorAll(".list-item").forEach((listitem) => {
//     listitem.addEventListener("mouseenter", mouseOnList);
//     // listitem.addEventListener("mouseout", mouseOutList);
//   });
// }

// function mouseOnList() {
//   document.querySelector(".light").classList.add("bold");

//   //   const timeline = gsap.timeline();
//   //   timeline.to(".proj-arrow", { duration: 0.3, rotate: 45 });
//   //   timeline.to(".proj-black", { opacity: 1 });
//   //   timeline.to("#arrow"), { fill: red };
// }
