import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const [emailText, setEmailText] = useState("Need Email??");
  const [copied, setCopied] = useState(false);
  const wonerPersonalRef = useRef(null);
  
  useEffect(() => {
    function heroTextDestroy() {
      const element = wonerPersonalRef.current;
      if (element) {
        let clutter = "";
        element.textContent.split("").forEach((dets) => {
          clutter += `<span>${dets}</span>`;
        });
        element.innerHTML = clutter;

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
    }

    heroTextDestroy();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const EMAIL = "hosainahmed534745@gmail.com";

  const handleMouseOver = () => {
    setEmailText("Copy email!");
  };

  const handleMouseOut = () => {
    if (!copied) {
      setEmailText("Need Email??");
    }
  };

  const handleEmailClick = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setEmailText("Email copied!");
  };


  return (
    <section className="container py-8 md:py-16 lg:py-24">
      <div className="mt-8 md:mt-[8vw]">
        <h1 className="text-3xl md:text-[4vw] font-bold text-left mb-4">About ME</h1>
        <p
          ref={wonerPersonalRef}
          className="wonerPersonal text-[#69676783] text-left md:mt-28 text-base md:text-[3vw] opacity-80 font-mono md:text-left max-w-prose mx-auto md:mx-0 md:leading-[3.5vw]"
        >
          Hi, my name is Hosain Ali and I am a Front-End developer with a strong
          passion for user experience, UI design, and new technologies. I care
          deeply about creating seamless and engaging user interfaces.
        </p>
        <h1
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleEmailClick}
          className="cursor-pointer text-[#fff] inline-block text-sm pt-4"
        >
          {emailText}
        </h1>
        <br />
        <button className="mt-4 md:mt-28 text-xl">About more</button>
      </div>
    </section>
  );
}

export default AboutSection;
