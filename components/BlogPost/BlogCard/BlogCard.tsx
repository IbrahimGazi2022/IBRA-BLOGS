"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogCardProps {
    id: number;
    category: string;
    title: string;
    author: string;
    date: string;
    image: string;
    content?: string;
    index?: number;
}

const BlogCard = ({ id, category, title, author, date, image, index = 0 }: BlogCardProps) => {
    const cardVariants = {
        offscreen: {
            y: 60, opacity: 0, scale: 0.95
        },
        onscreen: {
            y: 0, opacity: 1, scale: 1,
            transition: {
                type: "spring", bounce: 0.5, duration: 1, delay: index * 0.15
            }
        },
        hover: {
            y: -8, backgroundColor: "#ffffff", boxShadow: "0px 12px 24px rgba(0,0,0,0.1)",
            transition: {
                type: "spring", stiffness: 300, damping: 15
            }
        },
        rest: {
            y: 0, backgroundColor: "#f1f2f6", boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            transition: { duration: 0.3 }
        }
    };

    const contentVariants = {
        rest: { rotateX: 0, rotateY: 0 },
        hover: {
            rotateX: -3, rotateY: 3,
            transition: {
                type: "spring", stiffness: 200, damping: 10
            }
        }
    };

    return (
        <Link href={`/blog/${id}`} passHref> 
            <motion.section
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                whileHover="hover"
                animate="rest"
                variants={cardVariants}
                className="rounded-2xl overflow-hidden">
                <motion.div
                    variants={contentVariants}
                    style={{
                        transformPerspective: 1000,
                        transformOrigin: "center center"
                    }}
                    className="px-4 py-4 grid grid-cols-1 sm:grid-cols-[1fr_120px] md:grid-cols-[1fr_140px] lg:grid-cols-[1fr_160px] xl:grid-cols-[1fr_180px] gap-3 sm:gap-4 items-center">
                    <div className="space-y-2">
                        <motion.span
                            className="inline-block bg-[#ff0000] text-white text-xs uppercase px-2.5 py-1 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}>
                            {category}
                        </motion.span>
                        <h6 className="text-sm lg:text-base font-medium text-[#000000] hover:text-[#009245] transition-colors line-clamp-2">
                            {title}
                        </h6>
                        <div className="text-xs text-gray-600">
                            <span>{author}</span>
                            <span className="mx-1.5">•</span>
                            <span>{date}</span>
                        </div>
                    </div>
                    <motion.div
                        className="relative w-full h-[100px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[120px]"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}>
                        <Image
                            src={image}
                            alt={`${category} image`}
                            fill
                            className="object-cover rounded-xl sm:rounded-2xl"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 120px, (max-width: 1280px) 160px, 180px"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        </Link>
    );
};

export default BlogCard;