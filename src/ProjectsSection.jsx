import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  useEffect(() => {
    const sectionStart = document.querySelector(".sectionStart");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionStart,
        start: "top 10%",
        end: "bottom center",
        markers: true,
        pin: true,
        scrub: true
      },
    });

    tl.to(".projectsBG", {
      width: "100%"
    });
  }, []);

  return (
    <div className="sectionStart flex items-center justify-center mt-12 bg-slate-300 h-screen">
      <div className="projectsBG w-[0%] overflow-hidden">
        <h1 className="text-6xl sm:text-[8vw] md:text-[6vw] lg:text-[4vw] xl:text-[3vw] uppercase font-thin">projects</h1>
      </div>
    </div>
  );
}

export default ProjectsSection;
