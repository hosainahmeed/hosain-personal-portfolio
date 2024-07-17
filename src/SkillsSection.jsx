import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillsSection() {
  const pRefs = useRef([]);

  useEffect(() => {
    const pDivs = pRefs.current;

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }


    let shuffledPArray = shuffle(Array.from(pDivs));

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pDive",
        start: "top center",
        end: "center center",
        // markers: true, 
        scrub: true,
      },
    });

    shuffledPArray.forEach((p, index) => {
      tl1.fromTo(
        p,
        { opacity: 0, filter: "blur(10px)" }, 
        {
          opacity: 1,
          filter: "blur(0)",
          duration: 1,
          ease: "power1.inOut",
        },
        index * 0.5 
      );
    });
  }, []);

  return (
    <div className="pDive py-4 md:py-20 lg:py-28 text-center">
      
      <h1 className="text-3xl mb-5 md:text-[6vw] font-bold text-center md:text-center md:mb-24">
        What I Know??
      </h1>
      {[
        "HTML/CSS",
        "JavaScript (ES6+)",
        "React",
        "Responsive Design",
        "Version Control/Git",
        "Performance Optimization",
        "UI/UX Design Basics",
        "AJAX/APIs (fetch, Axios)",
        "Bootstrap",
        "Tailwind CSS",
        "MUI",
      ].map((text, index) => (
        <p
          key={index}
          ref={(el) => (pRefs.current[index] = el)}
          className="wright opacity-0 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 lg:px-10 xl:px-12 py-3 md:py-4 lg:py-5 rounded-full border-white border-[1px] inline-block mb-4 md:mb-6 lg:ml-2 lg:mb-8 lg:cursor-pointer lg:hover:scale-125 lg:transition-all lg:hover:shadow-lg"
        >
          {text}
        </p>
      ))}
    </div>
  );
}

export default SkillsSection;
