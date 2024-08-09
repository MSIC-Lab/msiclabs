import React from "react";
import ServiceCard from "../ServiceCard";

import { serviceData } from "@/components/data/serviceData";

const Services = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900" id="services">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">
            We offer premier solutions to support your growth in the
            digital realm.
          </p>
        </div>
        <div className="grid gap-8 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
