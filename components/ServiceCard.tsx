import React from "react";
import Fade from "./ui/transition/fade";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Fade opacity={0.8}>
      <div className="rounded-lg bg-white dark:bg-slate-800 shadow-lg p-5 flex flex-col  items-center w-xs h-60 transition-transform duration-300 hover:scale-105">
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-purple-100 lg:h-12 lg:w-12 dark:bg-primary-900">
          <div className="text-purple-900">{icon}</div>
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-700 dark:text-white text-center">
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-center text-md">
          {description}
        </p>
      </div>
    </Fade>
  );
};

export default ServiceCard;
