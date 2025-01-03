import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[5]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://codeforces.com/profile/iZnoGouDAf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <SiCodeforces />
                <span className="text-[15px] ml-[6px]">Codeforces</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://leetcode.com/u/iZnoGouDAf/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <SiLeetcode />
                <span className="text-[15px] ml-[6px]">Leetcode</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://github.com/parthsolanki1498"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://www.linkedin.com/in/parthsolanki1498/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact Me</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="tel:+1 226 978 2954" className="flex items-center">
                <FaPhoneAlt />
                <span className="text-[15px] ml-[6px]">+1 226-978-2954</span>
              </a>
            </p>
           
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <a
                    href="mailto:parthsolanki1498@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                >
                    <MdAlternateEmail />
                    <span className="text-[15px] ml-[6px]">
                    parthsolanki1498@gmail.com
              </span>
                </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Parth Solanki 2024. <br></br>All rights reserved but free world after all
        </div>
      </div>
    </div>
  );
};

export default Footer;
