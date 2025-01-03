import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col h-screen w-full relative overflow-hidden"
    >
      {/* Section Intro */}
      <SkillText />

      {/* Skills Sections */}
      <div className="flex flex-col flex-grow">
        {/* Backend Skills */}
        <div className="flex flex-col h-1/4 items-center justify-center ">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
            Backend Skills
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Frontend Skills */}
        <div className="flex flex-col h-1/4 items-center justify-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mb-3">
            Frontend Skills
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Full-stack Skills */}
        <div className="flex flex-col h-1/4 items-center justify-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 mb-3">
            Full-stack Skills
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {Full_stack.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="flex flex-col h-1/4 items-center justify-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500 mb-3">
            Other Skills
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-3 items-center">
            {Other_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-[-10]">
        <video
          className="w-full h-full object-cover opacity-30"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
