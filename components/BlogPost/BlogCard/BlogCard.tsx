import Image from 'next/image'

interface BlogCardProps {
    category: string;
    title: string;
    author: string;
    date: string;
    image: string;
}

const BlogCard = ({ category, title, author, date, image }: BlogCardProps) => {
    return (
        <section className="bg-[#f5f5f5] rounded-2xl">
            <div className="px-4 py-4 grid grid-cols-2 gap-4 items-center">
                <div>
                    <span className="bg-[#ff0000] text-white text-xs uppercase px-2.5 py-1 rounded-full">{category}</span>
                    <h6 className="mt-2 text-sm font-medium text-[#000000] hover:text-[#009245] transition-colors duration-300">
                        {title}
                    </h6>
                    <div className="text-xs text-gray-600 mt-1">
                        <span className="mr-2">{author}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <div className="w-[180px] h-[120px] relative">
                    <Image
                        src={image}
                        alt={`${category} image`}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogCard
