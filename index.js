"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  splashAni();
  aboutAnimation();

  document.querySelector(".cv").addEventListener("mouseover", cvArrow);
  document.querySelector(".cv").addEventListener("mouseout", cvArrowOut);
}

function splashAni() {
  const timeline = gsap.timeline();
  timeline.from(".home-qoute", { delay: 0.2, opacity: 0, duration: 1 });
  timeline.from(".portfolio, .desktop-menu, .name", { delay: 0.2, opacity: 0, duration: 1 }, "-=0.1");
}

function cvArrow() {
  const tl = gsap.timeline();
  tl.to(".cv", { x: 5, duration: 0.1 });
  tl.to(".cv-arrow", { fill: "var(--main-color)", duration: 1 });
}

function cvArrowOut() {
  const tl = gsap.timeline();
  tl.to(".cv", { x: -5, duration: 0.1 });
  tl.to(".cv-arrow", { fill: "var(--light-color)", duration: 1 });
}

function aboutAnimation() {
  gsap.from(".portrait", {
    scrollTrigger: {
      trigger: "#about",
      toggleActions: "restart pause resume reset",
    },
    duration: 1,
    y: 15,
    ease: Linear.ease,
  });

  gsap.from(".about-text h4, .about-text p", {
    scrollTrigger: {
      trigger: ".about-text",
      toggleActions: "restart pause resume reset",
    },
    delay: 1,
    y: 15,
    duration: 2,
    ease: Linear.ease,
  });
}
