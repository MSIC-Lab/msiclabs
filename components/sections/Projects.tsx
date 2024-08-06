"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";

interface Project {
  imageSrc: string;
  altText: string;
  company: string;
  title: string;
  description: string;
  caseStudyLink: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 w-1/2 h-full"
        onClick={handleBack}
        style={{ cursor: "pointer" }}
      />
      <div
        className="absolute inset-0 w-1/2 h-full left-1/2"
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      />

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="rounded-[12px] absolute"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%" }}
        >
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
          >
            <CardBody>
              <img
                className="h-auto max-w-lg rounded-lg w-full"
                src={project.imageSrc}
                alt={project.altText}
              />

              <div className="space-y-4">
                <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  {project.company}
                </span>
                <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <a
                  href={project.caseStudyLink}
                  title=""
                  className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  View case study
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
