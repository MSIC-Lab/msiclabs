"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/sections/Footer';
import { GoGoal } from "react-icons/go";
import { FaEye, FaLightbulb, FaUsers, FaRocket, FaHeart } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { vision, mission, aboutUs } from '@/components/data/aboutUsData';
import OurTeam from '@/components/OurTeam';
import Image from 'next/image';

const AboutUsPage: React.FC = () => {
    const coreValues = [
        {
            icon: <FaLightbulb />,
            title: "Innovation",
            description: "We constantly push boundaries to deliver cutting-edge solutions that drive digital transformation."
        },
        {
            icon: <FaUsers />,
            title: "Collaboration",
            description: "We work closely with our clients as partners, ensuring their vision becomes reality."
        },
        {
            icon: <HiSparkles />,
            title: "Excellence",
            description: "We maintain the highest standards in every project, from conception to delivery."
        },
        {
            icon: <FaRocket />,
            title: "Agility",
            description: "We adapt quickly to changing needs and embrace new technologies to stay ahead."
        },
        {
            icon: <FaHeart />,
            title: "Integrity",
            description: "We build trust through transparency, honesty, and ethical business practices."
        },
    ];

    const stats = [
        { value: "2020", label: "Founded" },
        { value: "20+", label: "Projects Completed" },
        { value: "15+", label: "Happy Clients" },
        { value: "5+", label: "Team Members" },
    ];

    return (
        <>
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
                
                <div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center py-2 px-4 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                            <span>Our Story</span>
                            <svg
                                className="ml-2 w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                        
                        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
                            About <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">MSIC Labs</span>
                        </h1>
                        
                        <p className="mb-8 text-xl font-normal text-gray-700 lg:text-2xl max-w-4xl mx-auto dark:text-gray-300 leading-relaxed">
                            {aboutUs}
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
                                <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="bg-white dark:bg-gray-900 py-20">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative flex flex-col justify-center items-center space-y-6 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-800 dark:to-gray-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="relative z-10 w-full">
                                <div className="flex justify-center mb-6">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <FaEye className="text-5xl text-white" />
                                    </div>
                                </div>
                                
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                    Our Vision
                                </h2>
                                
                                <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                                    {vision}
                                </p>
                                
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full mt-8 mx-auto"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group relative flex flex-col justify-center items-center space-y-6 bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="relative z-10 w-full">
                                <div className="flex justify-center mb-6">
                                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <GoGoal className="text-5xl text-white" />
                                    </div>
                                </div>
                                
                                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                    Our Mission
                                </h2>
                                
                                <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                                    {mission}
                                </p>
                                
                                <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mt-8 mx-auto"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-20">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
                            What Drives Us
                        </span>
                        <h2 className="mt-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 text-lg dark:text-gray-300 max-w-2xl mx-auto">
                            These principles guide everything we do and shape how we work with our clients and each other.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-blue-600 dark:text-blue-400 text-2xl">
                                            {value.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <OurTeam />

            {/* Call to Action */}
            <section className="bg-gradient-to-r from-blue-600 to-violet-600 py-20">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you achieve your digital goals with innovative solutions.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                        >
                            Get In Touch
                            <svg
                                className="ml-2 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default AboutUsPage;