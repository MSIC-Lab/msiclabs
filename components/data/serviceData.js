import { FaMobile, FaCogs, FaBrain } from 'react-icons/fa';
import { IoBarChart } from 'react-icons/io5';
import { TbWorld } from 'react-icons/tb';
import { RiShoppingCart2Fill, RiRobot2Fill } from 'react-icons/ri';
import { AiOutlineCloudServer } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { MdOutlineContentCopy } from 'react-icons/md';
import { HiSparkles } from 'react-icons/hi2';

export const serviceData = [
    {
        title: 'Web Application Development',
        description: 'Build powerful and scalable web applications tailored to your business needs with modern technologies.',
        icon: <TbWorld />,
    },
    {
        title: 'Mobile App Development',
        description: 'Develop engaging mobile applications for iOS and Android to reach customers on their favorite devices.',
        icon: <FaMobile />,
    },
    {
        title: 'AI & Machine Learning',
        description: 'Leverage artificial intelligence and machine learning to automate processes and gain intelligent insights.',
        icon: <HiSparkles />,
    },
    {
        title: 'E-commerce Solutions',
        description: 'Launch successful online stores with our comprehensive e-commerce platforms and payment integrations.',
        icon: <RiShoppingCart2Fill />,
    },
    {
        title: 'Cloud Solutions',
        description: 'Implement cost-effective and reliable cloud infrastructure tailored to your scalability requirements.',
        icon: <AiOutlineCloudServer />,
    },
    {
        title: 'UI/UX Design',
        description: 'Design engaging and user-friendly interfaces that deliver exceptional user experiences across all platforms.',
        icon: <FiMonitor />,
    },
    {
        title: 'Content Management Systems',
        description: 'Manage your digital content effortlessly with our customizable and intuitive CMS solutions.',
        icon: <MdOutlineContentCopy />,
    },
    {
        title: 'Search Engine Optimization',
        description: 'Boost your online visibility and ranking on search engines with our data-driven SEO strategies.',
        icon: <IoBarChart />,
    },
    {
        title: 'IT Consultation',
        description: 'Receive expert guidance to enhance and streamline your IT systems, strategies, and digital transformation.',
        icon: <FaCogs />,
    },
];