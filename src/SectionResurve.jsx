import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { pageColorTrans } from "./utils";
import Navbars from "../src/component/Header/Navbar/Navbars.jsx";
import Herosection from "../src/component/Header/Herosection.jsx";
import "./App.css";
import SkillsSection from "../src/component/Content/SkillsSection.jsx";
import AboutSection from "../src/component/Header/AboutSection.jsx";
import ContactSection from "../src/component/Content/ContactSection.jsx";
import ServicesSection from "../src/component/Content/ServicesSection.jsx";
import ProjectsSection from "../src/component/SwiperPojects/ProjectsSection.jsx";
import { gsap } from "gsap";
// import ProjectsManagement from "./ProjectsManagement";

function SectionResurve() {
  let mainSection =useRef()
  useEffect(()=>{
    gsap.to(mainSection.current,{
      opacity:1,
      duration:2
    })
  },[])
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
        <div ref={mainSection} className="w-[90%] mx-auto main opacity-0">
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
          {/* <div className="page" data-color="dark" id="projects">
            <ProjectsManagement/>
          </div> */}
          <div className="page" data-color="dark" id="services">
            <ServicesSection />
          </div>
          <div className="page" data-color="dark" id="contact">
            <ContactSection />
          </div>
        </div>

        
      );
}

export default SectionResurve