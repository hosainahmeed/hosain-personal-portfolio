import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  return (
    <div className="sectionStart flex flex-col items-center justify-center py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-0">
        <div className="project-card bg-amber-400 p-6 rounded-2xl hover:rounded-none transition-all duration-300">
          <h1 className="text-[4vw] font-bold mb-4">Projects1</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur quasi ad.</p>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300">See More</button>
        </div>
        <div className="project-card bg-amber-400 p-6 rounded-2xl hover:rounded-none transition-all duration-300">
          <h1 className="text-[4vw] font-bold mb-4">Projects2</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur quasi ad.</p>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300">See More</button>
        </div>
        <div className="project-card bg-amber-400 p-6 rounded-2xl hover:rounded-none transition-all duration-300">
          <h1 className="text-[4vw] font-bold mb-4">Projects5</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur quasi ad.</p>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300">See More</button>
        </div>
        <div className="project-card bg-amber-900 p-6 rounded-2xl hover:rounded-none transition-all duration-300">
          <h1 className="text-[4vw] font-bold mb-4">Projects6</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur quasi ad.</p>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300">See More</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
