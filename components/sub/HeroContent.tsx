"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import SparklesIcon from "@heroicons/react/24/solid/SparklesIcon";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import styles from "../sub/HeroContent.module.css";

import Text3d from "../sub/Text3d";

const HeroContent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const plane = useRef(null);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[5px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-4 w-4 md:h-5 md:w-5 "  />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            Welcome to my profile
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 md:gap-6 mt-4 md:mt-6 text-4xl md:text-6xl font-bold text-white max-w-[400px] md:max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <div className={styles.container}>
                <div
                  ref={plane}
                  className={styles.body}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Text3d
                    primary={"Parth Solanki"}
                    secondary={"also Batman"}
                  />
                </div>
              </div>
            </span>
            <Typewriter
              options={{
                strings: ["Backend", "Frontend", "Umm... Full-stack!"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-3 md:my-5 max-w-[300px] md:max-w-[600px]"
        >
          From backend depths to frontend skies, I&apos;m on a journey to bridge the
          gap and become a cosmic fullstack explorer.
        </motion.p>
        <motion.a
        href="/parth_solanki_resume.pdf"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px] md:max-w-[200px] text-sm md:text-base"
        >
          Download Resume!
        </motion.a>
      </div>

      {/* Right Content */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <div
          className="relative w-40 h-40 md:w-80 md:h-80"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            className="absolute inset-0 z-10 rounded-full"
            src="/only_face.png"
            alt="Person"
            layout="fill"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className={`absolute inset-0 transition-opacity duration-500 rounded-full ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            src="/profile_picture.png"
            alt="Background 1"
            layout="fill"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            className={`absolute inset-0 transition-opacity duration-500 rounded-full ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            src="/profile_picture_batman.png"
            alt="Background 2"
            layout="fill"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
