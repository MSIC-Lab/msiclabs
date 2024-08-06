"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";

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
  const numProjects = projects.length;
  const [positionIndexes, setPositionIndexes] = useState(
    Array.from({ length: numProjects }, (_, i) => i)
  );

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % numProjects
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex - 1 + numProjects) % numProjects
      );
      return updatedIndexes;
    });
  };

  const calculatePositions = (index: number) => {
    const centerIndex = Math.floor(numProjects / 2);
    const offset = index - centerIndex;
    const xPosition = `${offset * 50}%`;
    const scale = 1 - Math.abs(offset) * 0.2;
    const zIndex = numProjects - Math.abs(offset);
    return { x: xPosition, scale, zIndex };
  };

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto text-center mt-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Our work
        </h2>
        <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
          Crafted with skill and care to help our clients grow their business!
        </p>
      </div>
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 w-1/2 h-full"
          onClick={handleNext}
          style={{ cursor: "pointer", zIndex: 1000 }}
        />
        <div
          className="absolute inset-0 w-1/2 h-full left-1/2"
          onClick={handleBack}
          style={{ cursor: "pointer", zIndex: 1000 }}
        />

        {projects.map((project, index) => {
          const position = calculatePositions(positionIndexes[index]);
          return (
            <motion.div
              key={index}
              className="rounded-[12px] absolute"
              initial={{ x: "0%", scale: 1, zIndex: 5 }}
              animate={position}
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

                  <div className="space-y-4 flex flex-col items-center justify-center">
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
                      className="text-white bg-primary-1 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      role="button"
                    >
                      View Project
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
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
