'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BlogPostData } from "@/theme-config";
import { notFound, useParams } from 'next/navigation';

interface BlogPost {
    id: number;
    category: string;
    title: string;
    content: string;
    author: string;
    date: string;
    image: string;
}

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
        return <div>Loading...</div>;
    }

    if (!post) {
        notFound();
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <div className="mb-8">
                <span className="inline-block bg-red-500 text-white text-xs uppercase px-2.5 py-1 rounded-full mb-4">
                    {post.category}
                </span>
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">{post.content}</p>
            </div>
        </div>
    );
}