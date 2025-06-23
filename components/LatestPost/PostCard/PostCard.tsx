import Image from 'next/image';
import { motion } from 'framer-motion';

interface Post {
    id: number;
    category: string;
    title: string;
    author: string;
    paragraph: string;
    date: string;
    imageUrl: string;
    height?: number;
}

interface PostCardProps {
    post: Post;
    index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1, boxShadow: '0px 10px 30px rgba(0,0,0,0.15)' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="bg-white h-auto flex gap-4 rounded-4xl">
            <div className="aspect-[3/4] w-[150px] relative flex-shrink-0 rounded-l-4xl overflow-hidden">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 180px, 180px"
                />
            </div>

            <div className="flex-1 min-w-0 p-4">
                <span className="bg-[#ff0000] text-white text-xs uppercase px-2.5 py-1 rounded-full">{post.category}</span>
                <h2 className="text-lg font-semibold bold text-gray-800 line-clamp-2 mt-2">{post.title}</h2>
                <p className="font-semibold bold text-gray-400 line-clamp-2 mt-2">{post.paragraph}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default PostCard;