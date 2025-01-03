"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import Titles from "./titles";
import Descriptions from "./descriptions";

const data = [
  {
    title: "Ecomtent Ai",
    description:
      "Worked as an Intern under Rippen for Ecomtent, an innovative E-commerce platform which helps businesses make a difference in online sale, leveraging AI.",
    speed: 0.5,
    link: "https://www.ecomtent.ai/",
  },
  {
    title: "Avolta Inc",
    description:
      "Yet another Internship which used Machine Learning Algorithm for anti-car theft system. Played my part implementing supervised learning for anamoly detection.",
    speed: 0.5,
    link: "https://www.avoltacanada.com/"
  },
  {
    title: "Fractal Analytics",
    description:
      "worked on a project that indeed is the first-ever generative AI Sales Platform for Consultive Consumer Experience, helps build AI sales advisors that engage in one-on-one shopping experience with customers.", 
    speed: 0.67,
    link: "https://fractal.ai/"
  },
  {
    title: "Full Creative",
    description:
      "Internship prior to my graduation, worked on an in house e-leraning platform",
    speed: 0.8,
    link: "https://full.io/"
  },
  {
    title: "Civica",
    description:
      "Trainee position prior to graudation, showcasing my skills in the field of software development.",
    speed: 0.8,
    link: "https://www.civica.com/"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div id='experience' className={styles.container}>
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}
