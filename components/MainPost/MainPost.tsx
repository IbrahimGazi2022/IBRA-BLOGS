import {posts, featuredPost } from '@/theme-config';
import PostCard from './PostCard/PostCard';

const MainPost: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            {/* Left Column - Always visible */}
            <div className="order-1">
                <h1 className="font-bold text-xl sm:text-2xl mt-6 sm:mt-8 px-2">All News Topics & News</h1>
                {posts.slice(0, 5).map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>

            {/* Middle Column - Hidden on mobile, visible on md and larger */}
            <div className="hidden md:block order-2 lg:order-2">
                <h1 className="font-bold text-xl sm:text-2xl mt-6 sm:mt-8 px-2">Featured Story</h1>
                <PostCard post={featuredPost} variant="featured" />
            </div>

            {/* Right Column - Always visible */}
            <div className="order-3">
                <h1 className="font-bold text-xl sm:text-2xl mt-6 sm:mt-8 px-2">Popular News</h1>
                {posts.slice(5, 10).map((post) => (
                    <PostCard key={`popular-${post.id}`} post={post} />
                ))}
            </div>
        </div>
    );
};

export default MainPost;