import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillsSection() {
  const frontendRefs = useRef([]);
  const backendRefs = useRef([]);
  const toolsRefs = useRef([]);

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = {
    frontend: [
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
    ],
    backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "RESTful APIs",
      "GraphQL",
      "Authentication/Authorization",
      "Serverless Functions",
      "Docker",
      "AWS",
      "CI/CD",
    ],
    tools: ["figma", "adobe xd", "visual studio"],
  };

  useEffect(() => {
    const frontendDivs = frontendRefs.current;
    const backendDivs = backendRefs.current;
    const toolsDivs = toolsRefs.current;

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    let shuffledFrontendArray = shuffle(Array.from(frontendDivs));
    let shuffledBackendArray = shuffle(Array.from(backendDivs));
    let shuffledToolsArray = shuffle(Array.from(toolsDivs));

    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top center",
        end: "10% center",
        scrub: true,
      },
    });

    shuffledFrontendArray.forEach((p, index) => {
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

    shuffledBackendArray.forEach((p, index) => {
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

    shuffledToolsArray.forEach((p, index) => {
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

  const getSkillImage = (skill) => {
    switch (skill) {
      case "HTML/CSS":
        return "https://i.ibb.co/xfcZ1L3/95596-html-512x512.png";
      case "JavaScript (ES6+)":
        return "//i.ibb.co/Tq6C7S9/javascript-logo.png"
      case "React":
        return "path/to/react.png";
      case "Responsive Design":
        return "path/to/responsive-design.png";
      case "Version Control/Git":
        return "path/to/git.png";
      case "Performance Optimization":
        return "path/to/performance-optimization.png";
      case "UI/UX Design Basics":
        return "path/to/ui-ux-design.png";
      case "AJAX/APIs (fetch, Axios)":
        return "path/to/ajax-apis.png";
      case "Bootstrap":
        return "path/to/bootstrap.png";
      case "Tailwind CSS":
        return "path/to/tailwind.png";
      case "MUI":
        return "path/to/mui.png";
      case "Node.js":
        return "path/to/nodejs.png";
      case "Express.js":
        return "path/to/expressjs.png";
      case "MongoDB":
        return "path/to/mongodb.png";
      case "SQL":
        return "path/to/sql.png";
      case "RESTful APIs":
        return "path/to/restful-apis.png";
      case "GraphQL":
        return "path/to/graphql.png";
      case "Authentication/Authorization":
        return "path/to/authentication.png";
      case "Serverless Functions":
        return "path/to/serverless-functions.png";
      case "Docker":
        return "path/to/docker.png";
      case "AWS":
        return "path/to/aws.png";
      case "CI/CD":
        return "path/to/cicd.png";
      case "figma":
        return "path/to/figma.png";
      case "adobe xd":
        return "path/to/adobe-xd.png";
      case "visual studio":
        return "path/to/visual-studio.png";
      default:
        return null;
    }
  };
  

  return (
    <div className="skills-section py-4 md:py-20 lg:py-28 text-center">
      <h1 className="text-3xl text-left mb-5 md:text-[6vw] font-bold md:text-center md:mb-24">
        What I Know??
      </h1>

      <div className="mb-12">
        <h1 className="text-xl text-left mb-4 md:text-3xl md:mb-12">
          Comfort in Front-End
        </h1>
        <hr className="mb-4 md:mb-24" />
        {skills.frontend.map((text, index) => (
          <p
            key={`frontend-${index}`}
            ref={(el) => (frontendRefs.current[index] = el)}
            onMouseEnter={() => setHoveredSkill(text)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="wright opacity-0 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 lg:px-10 xl:px-12 py-3 md:py-4 lg:py-5 rounded-full border-white border-[1px] inline-block mb-4 md:mb-6 lg:ml-2 lg:mb-8 lg:cursor-pointer lg:hover:scale-125 lg:transition-all lg:hover:shadow-lg"
          >
            {text}
          </p>
        ))}
      </div>
      <div>
        <h1 className="text-xl text-left mb-4 md:text-3xl md:mb-12">
          Comfort in Back-End
        </h1>
        <hr className="mb-4 md:mb-24" />
        {skills.backend.map((text, index) => (
          <p
            key={`backend-${index}`}
            ref={(el) => (backendRefs.current[index] = el)}
            onMouseEnter={() => setHoveredSkill(text)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="wright text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 lg:px-10 xl:px-12 py-3 md:py-4 lg:py-5 rounded-full border-white border-[1px] inline-block mb-4 md:mb-6 lg:ml-2 lg:mb-8 lg:cursor-pointer lg:hover:scale-125 lg:transition-all lg:hover:shadow-lg"
          >
            {text}
          </p>
        ))}
      </div>

      <div>
        <h1 className="text-left text-xl mb-4 md:text-3xl md:mb-12">Play with Tools</h1>
        <hr className="mb-4 md:mb-24" />
        {skills.tools.map((text, index) => (
          <p
            key={`tools-${index}`}
            ref={(el) => (toolsRefs.current[index] = el)}
            onMouseEnter={() => setHoveredSkill(text)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="wright opacity-0 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl px-6 md:px-8 lg:px-10 xl:px-12 py-3 md:py-4 lg:py-5 rounded-full border-white border-[1px] inline-block mb-4 md:mb-6 lg:ml-2 lg:mb-8 lg:cursor-pointer lg:hover:scale-125 lg:transition-all lg:hover:shadow-lg"
          >
            {text}
          </p>
        ))}
      </div>

      {hoveredSkill && (
        <div className="fixed bottom-10 right-10">
          <img src={getSkillImage(hoveredSkill)} alt={hoveredSkill} className="w-24 h-24" />
        </div>
      )}
    </div>
  );
}

export default SkillsSection;
