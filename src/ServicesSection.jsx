import PropTypes from "prop-types";

const services = [
  {
    headline: "Web development_Full-Stack",
    details:
      "Our Full-Stack Web Development services offer comprehensive solutions, from intuitive front-end interfaces to robust back-end systems. We ensure seamless integration, responsive design, and scalable architecture to meet your business needs. Let us bring your vision to life with innovative, end-to-end web development expertise.",
  },
  {
    headline: "Web development_Full-Stack",
    details:
      "Our Full-Stack Web Development services offer comprehensive solutions, from intuitive front-end interfaces to robust back-end systems. We ensure seamless integration, responsive design, and scalable architecture to meet your business needs. Let us bring your vision to life with innovative, end-to-end web development expertise.",
  },
  {
    headline: "Web development_Full-Stack",
    details:
      "Our Full-Stack Web Development services offer comprehensive solutions, from intuitive front-end interfaces to robust back-end systems. We ensure seamless integration, responsive design, and scalable architecture to meet your business needs. Let us bring your vision to life with innovative, end-to-end web development expertise.",
  },
];

function ServicesSection() {
  return (
    <>
      <h1 className="text-[16vw] md:text-[6vw] font-bold text-center md:mb-24">Services</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {services.map((service, index) => (
          <Service
            key={index}
            headline={service.headline}
            details={service.details}
          ></Service>
        ))}
      </div>
    </>
  );
}

function Service(props) {
  return (
    <div className="bg-[#dadada] p-12 text-black rounded-xl">
      <h1 className="text-2xl">{props.headline}</h1>
      <hr className="my-4" />
      <p>{props.details}</p>
    </div>
  );
}

Service.propTypes = {
  headline: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};
export default ServicesSection;
