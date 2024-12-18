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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi I&apos;m
            {/* <motion.div variants={slideInFromTop}> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                {/* Parth Solanki!{" "} */}
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
            {/* </motion.div> */}
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
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          From backend depths to frontend skies, I&apos;m on a journey to bridge the
          gap and become a cosmic fullstack explorer.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-point rounded-lg max-w-[200px]"
        >
          Download Resume!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
       <div
          className="relative w-80 h-80"
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
            className={`absolute inset-0 transition-opacity duration-500 rounded-full ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            src="/profile_picture.png"
            alt="Background 1"
            layout="fill"
            objectFit="cover"
            style={{ width: "100%", height: "100%" }}

          />
          <Image
            className={`absolute inset-0 transition-opacity duration-500 rounded-full ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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
