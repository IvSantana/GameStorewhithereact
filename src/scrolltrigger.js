import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
  let sections = document.querySelectorAll(".sec2 div");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".sec2",
      start: "top top",
      end: () => `+=${sections.length * 100}%`, 
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
    }
  });
};
