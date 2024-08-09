import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Loader() {
  useEffect(() => {
    function heroTextDestroy(element) {
      let herotextSplit = element.textContent.split("");
      element.innerHTML = "";

      herotextSplit.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        let newText = element.appendChild(span);
        newText.style.color = 'red';
      });

      let spans = element.querySelectorAll("span");
      let tl = gsap.timeline();

      tl.fromTo(spans, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        color: "#393737",
      });
    }

    const herotextElements = document.querySelectorAll(".introtext");
    herotextElements.forEach(heroTextDestroy);
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  // const magicboxSize = count === 100 ? "w-screen h-screen" : `w-[${(count / 100) * 300}px] h-[${(count / 100) * 2}px]`;

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="introtext word text-[14vw] md:text-[8vw] leading-none font-sans uppercase text-[#393737] font-bold">Hosain Ali</h1>
        <h1 className="mt-4">Ready _{count}%</h1>
      </div>
      <div 
        style={{ 
          width: count === 100 ? '100vw' : `${(count / 100) * 300}px`, 
          height: count === 10 ? '100vh' : '2px'
        }} 
        className={`bg-[#393737] transition-all duration-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
    </div>
  );
}

export default Loader;
