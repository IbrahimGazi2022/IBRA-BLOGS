'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BlogPostData } from "@/theme-config";
import { notFound, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
    id: number;
    category: string;
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
}

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.5
        }
    }
};

export default function BlogDetails() {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const postId = parseInt(Array.isArray(id) ? id[0] : id, 10);
            const foundPost = BlogPostData.find(item => item.id === postId);
            setPost(foundPost || null);
            setIsLoading(false);
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (!post) {
        notFound();
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div variants={itemVariants}>
                    <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Blog
                    </Link>
                </motion.div>

                <motion.article
                    variants={containerVariants}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                    {/* Featured Image */}
                    <motion.div
                        variants={imageVariants}
                        className="relative w-full h-64 sm:h-80 md:h-96"
                    >
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        />
                    </motion.div>

                    {/* Article Content */}
                    <div className="p-6 sm:p-8 md:p-10">
                        <motion.div variants={itemVariants}>
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase px-3 py-1 rounded-full mb-4">
                                {post.category}
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            {post.title}
                        </motion.h1>

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center text-gray-600 mb-8 space-x-4"
                        >
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <CalendarDays className="mr-2 h-4 w-4" />
                                <span>{post.date}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="prose max-w-none text-gray-700"
                        >
                            {post.content.split('\n').map((paragraph, i) => (
                                <p key={i} className="mb-4 last:mb-0">{paragraph}</p>
                            ))}
                        </motion.div>
                    </div>
                </motion.article>

                {/* Related Posts Section */}
                <motion.section
                    variants={containerVariants}
                    className="mt-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl font-bold text-gray-900 mb-8"
                    >
                        You Might Also Like
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BlogPostData.filter(p => p.id !== post.id).slice(0, 3).map(relatedPost => (
                            <motion.div
                                key={relatedPost.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <Link href={`/blog/${relatedPost.id}`} className="block">
                                    <div className="relative h-48">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold uppercase px-2 py-1 rounded-full mb-2">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <div className="text-sm text-gray-600">
                                            <span>{relatedPost.author}</span>
                                            <span className="mx-2">•</span>
                                            <span>{relatedPost.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
}