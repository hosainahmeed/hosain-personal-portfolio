function AboutSection() {
  return (
    <section className="container mx-auto py-8 md:py-16 lg:py-24">
      <div className="mt-8 md:mt-[8vw]">
        <h1 className="text-3xl md:text-[6vw] font-bold text-center md:text-left">
          About ME
        </h1>
        <p className="mt-4 md:mt-28 text-base md:text-[3vw] opacity-80 font-mono text-center md:text-left max-w-prose mx-auto md:mx-0 md:leading-[3.5vw]">
          Hi, I am a Front-End developer with a strong passion for user experience, UI design, and new technologies. I care deeply about creating seamless and engaging user interfaces.
        </p>
        {/* Code starts here */}
        <div className="magic-product relative w-full h-[20vh] md:h-[10vh] bottom-[5%] inline-flex overflow-hidden mt-12 md:mt-28">
          <div className="left absolute top-0 left-0 w-1/4 md:w-1/3 h-full bg-gradient-to-r from-[#111111] to-transparent"></div>
          <div className="right absolute top-0 right-0 w-1/4 md:w-1/3 h-full z-10 bg-gradient-to-r from-transparent to-[#111111]"></div>
          <div className="slide flex items-center justify-center gap-[8vw] md:gap-[12vw] h-full w-full animate-slide">
            <img src="https://lazarev.kiev.ua/la24/awww.svg" className="w-[10vw] md:w-[3vw]" alt="awww"/>
            <img src="https://lazarev.kiev.ua/la24/rd.svg" className="w-[10vw] md:w-[3vw]" alt="rd"/>
            <img src="https://lazarev.kiev.ua/la24/webby.svg" className="w-[10vw] md:w-[3vw]" alt="webby"/>
            <img src="https://lazarev.kiev.ua/la24/fwa.svg" className="w-[10vw] md:w-[3vw]" alt="fwa"/>
            <img src="https://lazarev.kiev.ua/la24/forbes.svg" className="w-[10vw] md:w-[3vw]" alt="forbes"/>
            <img src="https://lazarev.kiev.ua/la24/wf.svg" className="w-[10vw] md:w-[3vw]" alt="wf"/>
            <img src="https://lazarev.kiev.ua/la24/pmi.svg" className="w-[10vw] md:w-[3vw]" alt="pmi"/>
            <img src="https://lazarev.kiev.ua/la24/awww.svg" className="w-[10vw] md:w-[3vw]" alt="awww"/>
            <img src="https://lazarev.kiev.ua/la24/rd.svg" className="w-[10vw] md:w-[3vw]" alt="rd"/>
            <img src="https://lazarev.kiev.ua/la24/adweek.svg" className="w-[10vw] md:w-[3vw]" alt="adweek"/>
          </div>
          <div className="slide flex items-center  gap-[8vw] md:gap-[12vw] h-full w-full animate-slide">
            <img src="https://lazarev.kiev.ua/la24/awww.svg" className="w-[10vw] md:w-[3vw]" alt="awww"/>
            <img src="https://lazarev.kiev.ua/la24/rd.svg" className="w-[10vw] md:w-[3vw]" alt="rd"/>
            <img src="https://lazarev.kiev.ua/la24/webby.svg" className="w-[10vw] md:w-[3vw]" alt="webby"/>
            <img src="https://lazarev.kiev.ua/la24/fwa.svg" className="w-[10vw] md:w-[3vw]" alt="fwa"/>
            <img src="https://lazarev.kiev.ua/la24/forbes.svg" className="w-[10vw] md:w-[3vw]" alt="forbes"/>
            <img src="https://lazarev.kiev.ua/la24/wf.svg" className="w-[10vw] md:w-[3vw]" alt="wf"/>
            <img src="https://lazarev.kiev.ua/la24/pmi.svg" className="w-[10vw] md:w-[3vw]" alt="pmi"/>
            <img src="https://lazarev.kiev.ua/la24/awww.svg" className="w-[10vw] md:w-[3vw]" alt="awww"/>
            <img src="https://lazarev.kiev.ua/la24/rd.svg" className="w-[10vw] md:w-[3vw]" alt="rd"/>
            <img src="https://lazarev.kiev.ua/la24/adweek.svg" className="w-[10vw] md:w-[3vw]" alt="adweek"/>
          </div>
        </div>
        {/* Code ends here */}
      </div>
    </section>
  );
}

export default AboutSection;
