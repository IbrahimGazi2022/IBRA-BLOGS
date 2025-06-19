    "use client"

    import { useState } from 'react';
    import { posts } from '@/theme-config';
    import PostCard from './PostCard/PostCard';

    const POSTS_PER_PAGE = 8;

    const MainPost = () => {
        const [currentPage, setCurrentPage] = useState(1);
        const totalPosts = posts.length;
        const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

        const currentPosts = posts.slice(
            (currentPage - 1) * POSTS_PER_PAGE,
            currentPage * POSTS_PER_PAGE
        );

        const goToPage = (page: number) => {
            setCurrentPage(page)
        }

        const goToPrevious = () => {
            setCurrentPage((prev) => Math.max(prev - 1, 1))
        }

        const goToNext = () => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
        }

        return (
            <>
                <h1 className="font-bold text-2xl mt-8 uppercase mb-4">Todays Top Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    {currentPosts.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-2 mb-8">
                    <button onClick={goToPrevious} disabled={currentPage === 1} className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#ff0000] text-white hover:bg-[#cc0000]'}`}>
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button key={page} onClick={() => goToPage(page)} className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === page ? 'bg-[#ff0000] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                            {page}
                        </button>
                    ))}

                    <button onClick={goToNext} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#ff0000] text-white hover:bg-[#cc0000]'}`}>
                        Next
                    </button>
                </div>
            </>

        );
    };

    export default MainPost;
