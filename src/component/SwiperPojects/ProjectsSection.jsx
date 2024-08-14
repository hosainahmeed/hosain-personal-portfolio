import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Import Pagination module
import "swiper/swiper-bundle.css";
import { useState } from "react";
import { images } from "./data.js";
import Cursor from "../Cursor/Cursor.jsx";

function ProjectsSection() {
  const [currentTitle, setCurrentTitle] = useState(images[0].title);
  const [currentDescription, setCurrentAlt] = useState(images[0].description);
  const [showCursor, setShowCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleCursorVisible = () => setShowCursor(true);
  const handleCursorInvisible = () => setShowCursor(false);
  const handleCursor = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleSlideChange = (swiper) => {
    setCurrentAlt(images[swiper.activeIndex].title);
    setCurrentTitle(images[swiper.activeIndex].description);
  };

  return (
    <div className="py-4 md:py-20 lg:py-28">
      <h1 className="text-[10vw] mb-4 md:text-[4vw] font-bold text-center md:mb-24">
        Some of my work
      </h1>
      <div className="flex flex-col justify-between gap-11 md:flex-row  ">
        <div
          onMouseMove={handleCursor}
          onMouseEnter={handleCursorVisible}
          onMouseLeave={handleCursorInvisible}
          className="projectsView relative w-full h-[50vh] border-[.5vw] md:w-[50%] overflow-hidden"
        >
          <Cursor showCursor={showCursor} cursorPosition={cursorPosition} />
          <Swiper
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            className="projects relative"
            onSlideChange={handleSlideChange}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id} className="h-[50vh]">
                <img
                  className="w-full h-full object-cover"
                  src={image.src}
                  alt={image.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="projectText w-full md:w-1/2">
          <div>
            <p className="text-xl">{currentDescription}</p>
            <h1>{currentTitle}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
