import React from 'react';
import Social from './Social';
import OurTeam from '../OurTeam';
import { GoGoal } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import FadeIn from '@/components/ui/transition/fade';

const AboutUs: React.FC = () => {
    return (
        <>
        <section className="bg-white dark:bg-gray-900 h-[90vh]">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-3 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
             <span className="ml-3 text-sm font-medium">Crafting Tomorrow's Tech, Today</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About MSIC Labs</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at MSIC Labs we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        {/* <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Learn more
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Watch video
            </a>  
        </div> */}
        <FadeIn opacity={0.8}>
        <div className="grid gap-8 px-4 mx-auto max-w-screen-xl lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6 bg-gray-100 dark:bg-gray-800 p-5 m-5 rounded-xl">
            <GoGoal className="w-10 h-10 text-gray-900 dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">Our mission is to create a better world through technology and innovation.</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6 bg-gray-100 dark:bg-gray-800 p-5 m-5 rounded-xl">
<FaEye className="text-4xl text-gray-900 dark:text-white" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 text-center">Our vision is to be the leading technology company in the world.</p>
        </div>
    </div>
        </FadeIn>
        

    </div>
    
    
</section>
{/* <OurTeam /> */}
        </>
    );
};

export default AboutUs;