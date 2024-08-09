import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  const projects = [
    {
      name: "projects1",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi est qui amet! Inventore praesentium sequi non consequatur esse quisquam sapiente.",
      width: "300px",
    },
    {
      name: "projects2",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi est qui amet! Inventore praesentium sequi non consequatur esse quisquam sapiente.",
      color: "green",
      width: "400px",
    },
    {
      name: "projects3",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quasi est qui amet! Inventore praesentium sequi non consequatur esse quisquam sapiente.",
      width: "500px",
    },
  ];

  return (
    <>
      <h1 className="text-[16vw] md:text-[6vw] font-bold text-center md:mb-24">
        Some of my works
      </h1>
      <div className="sectionStart relative grid grid-cols-1 md:grid-cols-2 gap-4 pb-12 md:pb-48">
        {projects.map((project, index) => (
          <WorkStation
            key={index}
            name={project.name}
            details={project.details}
            bgc={project.color ? { backgroundColor: project.color } : {}}
          />
        ))}
      </div>
    </>
  );
}

function WorkStation(props) {
  return (
    <div style={{ ...props.bgc }} className="p-12 bg-[#a96e6e] rounded-xl">
      <h1>{props.name}</h1>
      <p>{props.details}</p>
    </div>
  );
}

WorkStation.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  bgc: PropTypes.object,
  width: PropTypes.string,
};

export default ProjectsSection;
