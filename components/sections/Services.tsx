import Image from 'next/image';
import React from 'react';
import ServiceCard from '../ServiceCard';
import { FaMobile } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoBarChart } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import {  FaCogs } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

const Services = () => {
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Our Services</h2>
                    <p className="text-gray-500 sm:text-xl text-center dark:text-gray-400">At MSIC Labs, we deliver innovative solutions to help you thrive in a digital world.</p>
                </div>
                <div className="grid gap-8 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <ServiceCard title="Mobile App Development" description="Create intuitive and high-performing mobile applications tailored to your needs." icon={<FaMobile />} />
                    <ServiceCard title="Web Development" description="Build responsive and scalable web solutions that drive business growth." icon={<TbWorld />} />
                    <ServiceCard title="E-commerce Solutions" description="Develop comprehensive e-commerce platforms to enhance your online sales." icon={<RiShoppingCart2Fill />} />
                    {/* <ServiceCard title="Digital Marketing" description="Boost your online presence with targeted digital marketing strategies." icon={<IoBarChart />} /> */}
                    <ServiceCard title="Cloud Computing" description="Leverage cloud technology for efficient and scalable business operations." icon={<AiOutlineCloudServer />} />
                    <ServiceCard title="UI/UX Design" description="Design engaging and user-friendly interfaces for web and mobile applications." icon={<FiMonitor />} />
                    <ServiceCard title="Content Management Systems" description="Develop and manage your content easily with our customizable CMS solutions." icon={<MdOutlineContentCopy />} />
                    <ServiceCard title="Search Engine Optimization" description="Improve your website's visibility and ranking on search engines." icon={<IoBarChart />} />
                    <ServiceCard title="IT Consulting" description="Get expert advice and strategies to optimize your IT infrastructure and operations." icon={<FaCogs />} />
                </div>
            </div>
        </section>
    );
};

export default Services;
