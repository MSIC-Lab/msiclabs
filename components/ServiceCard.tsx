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
      <div className="group relative rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl p-8 flex flex-col items-center w-full h-72 transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative flex flex-col items-center h-full justify-between">
          <div className="flex justify-center items-center mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform duration-300">
            <div className="text-blue-600 dark:text-blue-400 text-2xl">{icon}</div>
          </div>
          
          <div className="text-center flex-1 flex flex-col">
            <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
              {description}
            </p>
          </div>
          
          {/* Bottom accent line */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-4 group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </Fade>
  );
};

export default ServiceCard;
