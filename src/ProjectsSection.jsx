import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {


  return (
    <div className="sectionStart relative">
      <div className="w-full scale-50 h-[100vh] bg-slate-300 top-0 left-1/2"></div>
    </div>
  );
}

export default ProjectsSection;
