import Image from 'next/image';

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
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className="bg-white h-auto flex gap-4 rounded-4xl">
            <div className="w-[150px] h-[120px] sm:h-[180px] relative flex-shrink-0">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded-l-4xl"
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
        </div>
    );
};

export default PostCard;