import React from 'react';
import ProjectsHero from '@/components/sections/ProjectsHero';
import { LuviaERPSection, HotelManagementSection, MSICChatbotSection, OtherProjectsSection } from '@/components/sections/ProjectShowcase';
import { projectData } from '@/components/data/projectData';
import NavBar from '@/components/ui/navbar';
import Footer from '@/components/sections/Footer';

export const metadata = {
    title: "Our Projects",
    description: "Explore MSIC Labs' portfolio of successful projects including LUVIa ERP, Hotel Management Systems, and custom web solutions across diverse industries.",
    openGraph: {
        title: "Our Projects | MSIC LABS",
        description: "Explore MSIC Labs' portfolio of successful projects including LUVIa ERP, Hotel Management Systems, and custom web solutions across diverse industries.",
    },
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <NavBar />
            <ProjectsHero />
            <div id="projects">
                <LuviaERPSection />
                <HotelManagementSection />
                <MSICChatbotSection />
                <OtherProjectsSection projects={projectData} />
            </div>
            <Footer />
        </div>
    );
}