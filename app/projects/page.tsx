import React from 'react';
import ProjectsHero from '@/components/sections/ProjectsHero';
import { LuviaERPSection, HotelManagementSection, MSICChatbotSection, OtherProjectsSection } from '@/components/sections/ProjectShowcase';
import { projectData } from '@/components/data/projectData';
import NavBar from '@/components/ui/navbar';
import Footer from '@/components/sections/Footer';
import { generateMetadata } from "@/lib/seo-config";
import { BreadcrumbSchema, ItemListSchema } from "@/components/seo/structured-data";

export const metadata = generateMetadata({
  title: "Our Portfolio - Successful Software Projects & Case Studies",
  description:
    "Explore MSIC Labs' impressive portfolio featuring LUVIA ERP, Hotel Management Systems, AI chatbots, and custom web solutions. See real results from 20+ successful projects across diverse industries.",
  keywords: [
    "software portfolio",
    "project case studies",
    "ERP solutions",
    "hotel management software",
    "AI chatbot development",
    "web applications",
    "mobile apps",
    "successful IT projects",
  ],
  url: "/projects",
});

export default function ProjectsPage() {
    const breadcrumbItems = [
        { name: "Home", url: "/" },
        { name: "Projects", url: "/projects" },
    ];

    const projects = projectData.map((project) => ({
        name: project.title,
        description: project.description,
    }));

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <BreadcrumbSchema items={breadcrumbItems} />
            <ItemListSchema items={projects} type="CreativeWork" />
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