import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
        
          src="/spotify-to-youtube.png"
          title="Spotify to Youtube Playlist Converter"
          description="Web Applicaiton to migrate your playlist from Spotify to Youtuhbe with ease" 
          link="https://spotify-to-youtube-pfyalndg4-parth-solankis-projects.vercel.app/  " />

        <ProjectCard
          src="/grt-bus-route.png"
          title="GRT Bus Application"
          description="Still under development, but an application that helps you track GRT (Grand River Trasnit) buses in real time"
          link={""}
        />

        <ProjectCard
          src="/uwaterloo-exam.png"
          title="University of Waterloo Exam Timetable"
          description="Yet another web application that displays Uwaterloo exam timetable in calender format straight outta APIs"
          link="https://parthsolanki1498.github.io/uwaterloo-exam/"
        />
      </div>
    </div>
  );
};

export default Projects;
