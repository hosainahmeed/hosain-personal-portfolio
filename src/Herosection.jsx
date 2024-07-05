import { useEffect, useState } from "react";
import wonerImg from "./assets/file.jpg";

function Herosection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-between p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <p className="text-[#393737] text-xl">{time.toLocaleTimeString()}</p>
        <div className="text-center font-bold  md:py-28">
          <h1 className="text-[14vw] md:text-[8vw] leading-none font-sans uppercase text-[#393737]">
            creative <br /> web developer
          </h1>
          <p className="text-sm md:text-2xl font-mono mt-4 md:mt-10 opacity-[60%]">
            Crafting a website as a frontend web developer and designer...
          </p>
        </div>
        <div>
            <p className="text-[#393737] text-xl">2022_since now</p>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-12 mt-8 items-center md:flex md:items-center md:flex-row md:justify-between md:w-full">
        <div className="flex gap-12 md:flex md:gap-4">
          <h3>
            <a href="/">GitHub</a>
          </h3>
          <h3>
            <a href="/">Facebook</a>
          </h3>
          <h3>
            <a href="/">linkedin</a>
          </h3>
        </div>
        <div className="w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw]">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#393737] animate-pulse"></div>
            <h1>Hosain Ali</h1>
          </div>
          <img
            src={wonerImg}
            alt="Hosain Ali"
            className="w-full h-full object-cover border-[3px] border-[#393737]"
          />
        </div>
        <div>
        <a
          href="/path-to-cv.pdf"
          download
          className="px-6 py-3 border border-white word text-white rounded-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-125 font-mono"
        >
          Download CV
        </a>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
