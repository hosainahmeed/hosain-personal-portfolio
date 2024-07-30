import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { pageColorTrans } from "./utils";
import Navbars from "./component/Navbars";
import Herosection from "./Herosection";
import "./App.css";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
function SectionResurve() {
  let mainSection =useRef()
    useEffect(() => {
        pageColorTrans();
    
        const lenis = new Lenis({
          smooth: true,
          lerp: 0.1,
        });
    
        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    
        return () => {
          lenis.destroy();
        };
      }, []);
    
      return (
        <div ref={mainSection} className="w-[90%] mx-auto main">
          <Navbars />
          <div className="page" data-color="light" id="hero">
            <Herosection />
          </div>
          <div className="page" data-color="dark" id="about">
            <AboutSection />
          </div>
          <div className="page" data-color="dark" id="skill">
            <SkillsSection />
          </div>
          <div className="page" data-color="dark" id="projects">
            <ProjectsSection />
          </div>
          <div className="page" data-color="dark" id="contact">
            <ContactSection />
          </div>
        </div>

        
      );
}

export default SectionResurve
