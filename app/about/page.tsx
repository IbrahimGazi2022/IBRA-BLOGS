"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const AboutPage = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <motion.section
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={item}
                        className="text-4xl font-bold text-gray-900 mb-6"
                    >
                        About <span className="text-[#ff0000]">IbraBlogs</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Discover the story behind our passion for blogging and sharing knowledge with the world.
                    </motion.p>
                </motion.section>

                {/* Content Sections */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/Ibrahim.png"
                                alt="Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white rounded-xl shadow-md"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
                            <p className="text-gray-600">
                                IbraBlogs was founded in 2023 with a simple mission: to create a platform where
                                passionate writers can share their knowledge and experiences with the world.
                                What started as a personal blog has grown into a thriving community of readers
                                and writers.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white rounded-xl shadow-md"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                We believe in the power of sharing knowledge. Our goal is to provide high-quality,
                                informative, and engaging content across various topics including technology,
                                travel, health, and lifestyle.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white rounded-xl shadow-md"
                        >
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Founder</h2>
                            <p className="text-gray-600 mb-4">
                                Ibrahim is a passionate writer and developer who loves to share his knowledge
                                with the community. With years of experience in blogging and web development,
                                he created IbraBlogs to combine both of his passions.
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://github.com"
                                    target="_blank"
                                    className="text-gray-700 hover:text-[#ff0000]"
                                >
                                    <Facebook size={24} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="text-gray-700 hover:text-[#ff0000]"
                                >
                                    <Linkedin size={24} />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -3 }}
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="text-gray-700 hover:text-[#ff0000]"
                                >
                                    <Instagram size={24} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { number: "100+", label: "Articles Published" },
                        { number: "50K+", label: "Monthly Readers" },
                        { number: "20+", label: "Contributing Writers" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-[#ff0000] text-white p-8 rounded-xl text-center shadow-lg"
                        >
                            <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                            <p className="text-lg">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;