import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../SwiperPojects/Swiper.css";
import wonerImg from "../../assets/file.jpg";

// const siderimg = [
//   {
//     img:""
//   }
// ]
function ProjectsSection() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={wonerImg} alt="Project 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wonerImg} alt="Project 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProjectsSection;
