import BlogCard from "./BlogCard/BlogCard"
import { BlogPostData } from "@/theme-config"

const BlogPost = () => {
    return (
        <div id="category-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {
                BlogPostData.map((post) => (
                    <BlogCard
                        key={post.id}
                        category={post.category}
                        title={post.title}
                        author={post.author}
                        date={post.date}
                        image={post.image}
                    />
                ))}
        </div>
    )
}

export default BlogPost;
