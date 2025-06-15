"use client";

import Image from "next/image";
import { Travel as TravelData } from "@/theme-config";
import { motion } from "framer-motion";

const Travel = () => {
    const firstFourPosts = TravelData.slice(0, 4);
    const secondFourPosts = TravelData.slice(4, 8);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            variants={containerVariants}
            className="h-auto mb-8"
        >
            <motion.h1
                variants={itemVariants}
                className="font-bold text-2xl mt-8 uppercase mb-4"
            >
                Travel
            </motion.h1>

            <div className="flex flex-row justify-between gap-6">
                {/* Left Column with big image and posts */}
                <div className="flex-1 pr-4">
                    {/* Big Image Card */}
                    <motion.div variants={itemVariants}>
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <Image
                                src="/images/travel.jpg"
                                alt="Travel Image"
                                width={610}
                                height={600}
                            />
                        </motion.div>
                        <motion.span
                            variants={itemVariants}
                            className="mt-6 inline-block bg-[#ff0000] text-white text-xs uppercase px-8 py-2 rounded-full"
                        >
                            Travel
                        </motion.span>
                        <motion.h6
                            variants={itemVariants}
                            className="mt-4 text-xl font-bold text-[#000000] hover:text-[#009245] transition-colors line-clamp-2 min-h-[60px]"
                        >
                            ChatGPT Is Poisoning Your Brain. Here's How to Stop It Before It's Too Late.
                        </motion.h6>
                        <motion.div
                            variants={itemVariants}
                            className="text-sm text-[#3d4452] mt-2"
                        >
                            <span className="tracking-[2px]">May 21, 2025</span>
                            <span className="mx-3.5">-</span>
                            <span>2 min read</span>
                        </motion.div>
                    </motion.div>

                    {/* Additional Posts 1*/}
                    <div className="mt-8 space-y-6">
                        {firstFourPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="flex gap-4"
                            >
                                <div className="w-28 h-26 flex-shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <span className="inline-block bg-[#ff0000] text-white text-xs uppercase px-2 py-0.5 rounded-full">
                                        {post.category}
                                    </span>
                                    <h6 className="tracking-wide mt-2 text-lg font-bold text-[#000000] hover:text-[#009245] transition-colors line-clamp-2">
                                        {post.title}
                                    </h6>
                                    <div className="text-sm text-[#3d4452] mt-1">
                                        <span className="tracking-[2px]">{post.date}</span>
                                        <span className="mx-3.5">-</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column with single card */}
                <div className="flex-1">
                    <motion.div variants={itemVariants}>
                        <motion.div whileHover={{ scale: 1.02 }}>
                            <Image
                                src="/images/food.jpg"
                                alt="Travel Image"
                                width={610}
                                height={600}
                            />
                        </motion.div>
                        <motion.span
                            variants={itemVariants}
                            className="mt-6 inline-block bg-[#6b48ff] text-white text-xs uppercase px-8 py-2 rounded-full"
                        >
                            Travel
                        </motion.span>
                        <motion.h6
                            variants={itemVariants}
                            className="mt-4 text-xl font-bold text-[#000000] hover:text-[#009245] transition-colors line-clamp-2 min-h-[60px]"
                        >
                            30 Days. 1 Rule. Total Focus.That Rewired My Focus and Changed My Life.
                        </motion.h6>
                        <motion.div
                            variants={itemVariants}
                            className="text-sm text-[#3d4452] mt-2"
                        >
                            <span className="tracking-[2px]">May 21, 2025</span>
                            <span className="mx-3.5">-</span>
                            <span>2 min read</span>
                        </motion.div>
                    </motion.div>

                    {/* Additional Posts 2*/}
                    <div className="mt-8 space-y-6">
                        {secondFourPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="flex gap-4"
                            >
                                <div className="w-28 h-26 flex-shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <span className="inline-block bg-[#6b48ff] text-white text-xs uppercase px-2 py-0.5 rounded-full">
                                        {post.category}
                                    </span>
                                    <h6 className="tracking-wide mt-2 text-lg font-bold text-[#000000] hover:text-[#009245] transition-colors line-clamp-2">
                                        {post.title}
                                    </h6>
                                    <div className="text-sm text-[#3d4452] mt-1">
                                        <span className="tracking-[2px]">{post.date}</span>
                                        <span className="mx-3.5">-</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Travel;