import Image from 'next/image';

interface PostCardProps {
    post: Post;
    variant?: 'default' | 'featured';
}

export interface Post {
    id: number;
    category: string;
    title: string;
    author: string;
    date: string;
    imageUrl: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, variant = 'default' }) => {
    if (variant === 'featured') {
        return (
            <div className="rounded-2xl mb-2 mt-2">
                <div className="px-4 py-4 grid grid-cols-[100%] gap-4 items-center">
                    <div className="w-full h-[830px] relative">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-2xl mb-2 mt-2">
            <div className="px-4 py-4 grid grid-cols-[40%_50%] gap-4 items-center">
                <div className="w-[130px] h-[130px] relative">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
                <div>
                    <span className="text-[#ff0000] text-xs uppercase font-bold py-1 rounded-full">
                        {post.category}
                    </span>
                    <h6 className="mt-2 text-sm font-medium text-[#000000] hover:text-[#009245] transition-colors duration-300">
                        {post.title}
                    </h6>
                    <div className="text-xs text-gray-600 mt-1">
                        <span className="mr-2">{post.author}</span>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;