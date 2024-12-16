import React from 'react';
import HeroContent from '../sub/HeroContent';

const Hero = () => {
  return (
    <div
      id="about-me"
      className="relative flex flex-col h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-[-300px] left-0 h-full w-full object-cover z-[1] rotate-180"
        aria-hidden="true"
      >
        <source src="/blackhole.webm" type="video/webm" />
        {/* Fallback for unsupported browsers */}
        <img
          src="/fallback_blackhole.jpg"
          alt="Blackhole Background"
          className="h-full w-full object-cover"
        />
      </video>

      {/* Hero Content */}
      <div className="relative z-[2] w-full flex justify-center items-center px-10 md:px-20">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
