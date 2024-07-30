import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  useEffect(() => {
    function heroTextDestroy() {
      var clutter = "";
      document
        .querySelector(".wonerPersonal")
        .textContent.split("")
        .forEach(function (dets) {
          clutter += `<span>${dets}</span>`;
        });

      document.querySelector(".wonerPersonal").innerHTML = clutter;

      gsap.to(".wonerPersonal span", {
        scrollTrigger: {
          trigger: `.container`,
          start: `-15% 40%`,
          end: `+=500`,
          scrub: 0.5,

        },
        stagger: 0.2,
        color: `#fff`,
      });
    }
    heroTextDestroy();
  }, []);

  return (
    <section className="container py-8 md:py-16 lg:py-24">
      <div className="mt-8 md:mt-[8vw]">
        <h1 className="text-3xl md:text-[6vw] font-bold text-left">
          About ME
        </h1>
        <p className="wonerPersonal text-[#69676783] text-left  md:mt-28 text-base md:text-[3vw] opacity-80 font-mono md:text-left max-w-prose mx-auto md:mx-0 md:leading-[3.5vw]">
          Hi, my name is Hosain Ali and I am a Front-End developer with a strong
          passion for user experience, UI design, and new technologies. I care
          deeply about creating seamless and engaging user interfaces.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
