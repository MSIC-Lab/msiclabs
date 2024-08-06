import Image from 'next/image';
import React from 'react';
import ServiceCard from '../ServiceCard';
import { FaMobile } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoBarChart } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Services = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                </div>
                <div className="grid gap-8 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <ServiceCard title="Mobile App Development" description="Get a better understanding of where your traffic is coming from." icon={<FaMobile />} />
                    <ServiceCard title="Web Development" description="Speak directly to your customers in a more meaningful way." icon={<TbWorld />} />
                    <ServiceCard title="E-commerce" description="Optimize your website for search engines and get more traffic." icon={<RiShoppingCart2Fill />} />
                    <ServiceCard title="Digital Marketing" description="Get a better understanding of where your traffic is coming from." icon={<IoBarChart />} />
                    <ServiceCard title="Mobile App Development" description="Get a better understanding of where your traffic is coming from." icon={<FaMobile />} />
                    <ServiceCard title="Web Development" description="Speak directly to your customers in a more meaningful way." icon={<TbWorld />} />
                    <ServiceCard title="E-commerce" description="Optimize your website for search engines and get more traffic." icon={<FaMobile />} />
                    <ServiceCard title="Digital Marketing" description="Get a better understanding of where your traffic is coming from." icon={<IoBarChart />} />
                </div>
            </div>
        </section>
    );
};

export default Services;
