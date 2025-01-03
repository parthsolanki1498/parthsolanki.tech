"use client";

import { Socials } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014167] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo Section */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/earth.webp"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer transition-transform duration-500 ease-in-out hover:rotate-180"
            />
          {/* <span className="font-bold ml-2 hidden md:block text-gray-300">
            Parth Solanki
          </span> */}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex w-[500px] items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src="/menu-icon.png" // Replace with your menu icon
            alt="menu"
            width={30}
            height={30}
          />
        </button>

        {/* Social Media Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
             <a
             href={social.link} // URL for the social media
             key={social.name}
             target="_blank" // Opens the link in a new tab
             rel="noopener noreferrer" // Security for external links
           >
             <Image
               src={social.src}
               alt={social.name}
               width={24}
               height={24}
               className="cursor-pointer" // Optional styling
             />
           </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-[#030014] text-gray-200 p-5 rounded-lg mt-2 shadow-md">
          <a
            href="#about-me"
            className="py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </a>
          <a href="#skills" className="py-2" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a
            href="#experience"
            className="py-2"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="py-2"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <div className="flex flex-row gap-5 mt-4">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
