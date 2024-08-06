import React from 'react';
import ServiceCard from '../ServiceCard';
import { FaMobile, FaShoppingCart, FaWordpress, FaBusinessTime } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { RiCodeSSlashLine } from "react-icons/ri";

const servicesData = [
    { title: "Web Application Development", description: "Build powerful and scalable web applications tailored to your business needs.", icon: <RiCodeSSlashLine /> },
    { title: "Business/Personal Website Development", description: "Create a strong online presence with a professional website.", icon: <TbWorld /> },
    { title: "Mobile App Development", description: "Develop engaging mobile applications to reach your customers on their favorite devices.", icon: <FaMobile /> },
    { title: "Performance Optimization", description: "Improve the performance and speed of your website or application for a seamless user experience.", icon: <IoSpeedometerOutline /> },
    { title: "E-Commerce Solutions", description: "Launch a successful online store with our comprehensive e-commerce solutions.", icon: <FaShoppingCart /> },
    { title: "Customized POS Solutions", description: "Implement tailored point-of-sale systems to streamline your business operations and enhance customer service.", icon: <FaBusinessTime /> },
    { title: "Content Management Systems", description: "Easily manage your digital content with our user-friendly CMS solutions.", icon: <TbWorld /> },
    { title: "WordPress Development", description: "Harness the power of WordPress to create a versatile and customizable website.", icon: <FaWordpress /> }
];

const Services = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className="grid gap-8 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
