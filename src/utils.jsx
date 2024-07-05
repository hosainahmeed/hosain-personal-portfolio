import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function pageColorTrans() {
  let pages = document.querySelectorAll(".page");

  pages.forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: () => {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}
