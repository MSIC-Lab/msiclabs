import { FaMobile, FaCogs } from 'react-icons/fa';
import { IoBarChart } from 'react-icons/io5';
import { TbWorld } from 'react-icons/tb';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { MdOutlineContentCopy } from 'react-icons/md';

export const serviceData = [
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
        title: 'Cloud Solutions',
        description: 'Implement cost-effective and reliable cloud solutions tailored to your requirements.',
        icon: <AiOutlineCloudServer />,
    },
    {
        title: 'UI/UX Design',
        description: 'Design engaging and user-friendly interfaces for web and mobile applications.',
        icon: <FiMonitor />,
    },
    {
        title: 'Content Management Systems',
        description: 'Manage your digital content with our customizable CMS solutions.',
        icon: <MdOutlineContentCopy />,
    },
    {
        title: 'Search Engine Optimization',
        description: 'Optimize your website\'s online presence and ranking on search engines.',
        icon: <IoBarChart />,
    },
    {
        title: 'IT Consultation',
        description: 'Receive expert guidance to enhance and streamline your IT systems and strategies.',
        icon: <FaCogs />,
    },
];