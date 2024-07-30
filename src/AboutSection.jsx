import Marquee from "react-fast-marquee";
import MyComponent from "./MyComponent";
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
    <section className="container mx-auto py-8 md:py-16 lg:py-24">
      <div className="mt-8 md:mt-[8vw]">
        <h1 className="text-3xl md:text-[6vw] font-bold text-center md:text-left">
          About ME
        </h1>
        <p className="wonerPersonal text-[#69676783]  md:mt-28 text-base md:text-[3vw] opacity-80 font-mono text-center md:text-left max-w-prose mx-auto md:mx-0 md:leading-[3.5vw]">
          Hi, my name is Hosain Ali and I am a Front-End developer with a strong
          passion for user experience, UI design, and new technologies. I care
          deeply about creating seamless and engaging user interfaces.
        </p>
        <div className="magic-product relative w-full h-[20vh] md:h-[10vh] bottom-[5%] inline-flex overflow-hidden mt-12 md:mt-28">
          <div className="left absolute top-0 left-0 w-1/4 md:w-1/3 h-full bg-gradient-to-r from-[#212121] to-[#212121]"></div>
          <div className="right absolute top-0 right-0 w-1/4 md:w-1/3 h-full z-10 bg-gradient-to-r from-transparent to-[#212121]"></div>
          <Marquee>
            <MyComponent />
            <MyComponent />
            <MyComponent />
            <MyComponent />
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
