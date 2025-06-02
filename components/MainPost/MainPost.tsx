import { posts } from '@/theme-config';
import PostCard from './PostCard/PostCard';

const MainPost = () => {
    return (
        <>
            <h1 className="font-bold sm:text-2xl text-xl mb-4 bold">Todays Top Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                {posts.slice(0, 8).map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>

    );
};

export default MainPost;
