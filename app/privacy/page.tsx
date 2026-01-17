"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/sections/Footer';
import { FaShieldAlt, FaLock, FaUserSecret, FaCookie, FaExclamationTriangle } from "react-icons/fa";
import { MdSecurity, MdPrivacyTip } from "react-icons/md";

const PrivacyPolicyPage: React.FC = () => {
    const sections = [
        {
            icon: <MdPrivacyTip />,
            title: "Information We Collect",
            content: [
                "We collect information that you provide directly to us when using our services:",
                "• Contact information (name, email, phone number)",
                "• Business information (company name, industry, project requirements)",
                "• Technical information (IP address, browser type, device information)",
                "• Communication data (messages, feedback, support requests)"
            ]
        },
        {
            icon: <FaLock />,
            title: "How We Use Your Information",
            content: [
                "We use the collected information for the following purposes:",
                "• Providing and improving our services",
                "• Communicating with you about projects and services",
                "• Responding to your inquiries and support requests",
                "• Sending marketing communications (with your consent)",
                "• Analyzing usage patterns to improve user experience",
                "• Complying with legal obligations"
            ]
        },
        {
            icon: <FaShieldAlt />,
            title: "Data Protection & Security",
            content: [
                "We implement industry-standard security measures to protect your data:",
                "• Encrypted data transmission (SSL/TLS)",
                "• Secure data storage with access controls",
                "• Regular security audits and updates",
                "• Employee training on data protection",
                "• Incident response procedures",
                "However, no method of transmission over the internet is 100% secure."
            ]
        },
        {
            icon: <FaUserSecret />,
            title: "Data Sharing & Disclosure",
            content: [
                "We do not sell your personal information. We may share data with:",
                "• Service providers who assist in our operations (under strict confidentiality)",
                "• Legal authorities when required by law",
                "• Business partners with your explicit consent",
                "• Third parties in the event of a merger or acquisition (with notice to you)"
            ]
        },
        {
            icon: <FaCookie />,
            title: "Cookies & Tracking",
            content: [
                "We use cookies and similar technologies to:",
                "• Remember your preferences and settings",
                "• Analyze site traffic and usage patterns",
                "• Provide personalized content",
                "• Improve site performance",
                "You can control cookie settings through your browser preferences."
            ]
        },
        {
            icon: <MdSecurity />,
            title: "Your Rights",
            content: [
                "You have the following rights regarding your personal data:",
                "• Access: Request a copy of your data",
                "• Correction: Update inaccurate information",
                "• Deletion: Request deletion of your data",
                "• Portability: Receive your data in a structured format",
                "• Objection: Opt-out of certain data processing",
                "• Withdrawal of consent: Unsubscribe from marketing communications",
                "To exercise these rights, contact us at privacy@msic.com"
            ]
        },
        {
            icon: <FaExclamationTriangle />,
            title: "Data Retention",
            content: [
                "We retain your personal data for as long as necessary to:",
                "• Provide our services",
                "• Comply with legal obligations",
                "• Resolve disputes",
                "• Enforce our agreements",
                "When data is no longer needed, we securely delete or anonymize it."
            ]
        }
    ];

    return (
        <>
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
                <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6"
                        >
                            <FaShieldAlt className="text-4xl text-primary" />
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                            Privacy Policy
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                        <p className="text-sm text-foreground/60 mt-4">
                            Last Updated: January 17, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="mb-12"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl">
                                        {section.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                                            {section.title}
                                        </h2>
                                        <div className="space-y-3 text-foreground/70">
                                            {section.content.map((paragraph, pIndex) => (
                                                <p key={pIndex} className="leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Additional Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border"
                        >
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Links</h2>
                            <p className="text-foreground/70 mb-6">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                            </p>

                            <h2 className="text-2xl font-bold mb-4 text-foreground">Children's Privacy</h2>
                            <p className="text-foreground/70 mb-6">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected data from a child, please contact us immediately.
                            </p>

                            <h2 className="text-2xl font-bold mb-4 text-foreground">International Data Transfers</h2>
                            <p className="text-foreground/70 mb-6">
                                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in compliance with applicable data protection laws.
                            </p>

                            <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
                            <p className="text-foreground/70 mb-6">
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically.
                            </p>

                            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
                            <p className="text-foreground/70">
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="mt-4 space-y-2 text-foreground/70">
                                <p>• Email: privacy@msic.com</p>
                                <p>• Phone: +1 (555) 123-4567</p>
                                <p>• Address: MSIC Technologies, Inc.</p>
                            </div>
                        </motion.div>

                        {/* Consent Notice */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20"
                        >
                            <p className="text-sm text-center text-foreground/70">
                                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PrivacyPolicyPage;
