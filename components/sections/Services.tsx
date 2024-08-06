import React from 'react';
import ServiceCard from '../ServiceCard';
import { FaMobile, FaCogs } from 'react-icons/fa';
import { IoBarChart } from 'react-icons/io5';
import { TbWorld } from 'react-icons/tb';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { MdOutlineContentCopy } from 'react-icons/md';

const serviceData = [
    {
        title: 'Web Application Development',
        description: 'Build powerful and scalable web applications tailored to your business needs.',
        icon: <TbWorld />,
    },
    {
        title: 'Mobile App Development',
        description: 'Develop engaging mobile applications to reach your customers on their favorite devices.',
        icon: <FaMobile />,
    },
    {
        title: 'E-commerce Solutions',
        description: 'Launch a successful online store with our comprehensive e-commerce solutions.',
        icon: <RiShoppingCart2Fill />,
    },
    {
        title: 'Cloud Computing',
        description: 'Leverage cloud technology for efficient and scalable business operations.',
        icon: <AiOutlineCloudServer />,
    },
    {
        title: 'UI/UX Design',
        description: 'Design engaging and user-friendly interfaces for web and mobile applications.',
        icon: <FiMonitor />,
    },
    {
        title: 'Content Management Systems',
        description: 'Manage your digiatl content easily with our customizable CMS solutions.',
        icon: <MdOutlineContentCopy />,
    },
    {
        title: 'Search Engine Optimization',
        description: 'Improve your website\'s visibility and ranking on search engines.',
        icon: <IoBarChart />,
    },
    {
        title: 'IT Consulting',
        description: 'Get expert advice and strategies to optimize your IT infrastructure and operations.',
        icon: <FaCogs />,
    },
];

const Services = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">At MSIC Labs, we deliver innovative solutions to help you thrive in a digital world.</p>
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
