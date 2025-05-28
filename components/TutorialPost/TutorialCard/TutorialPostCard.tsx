import { MessageSquare, User } from 'lucide-react'
import Image from 'next/image'

interface TutorialPost {
    id: number;
    imageUrl: string;
    date: string;
    day: string;
    comments: number;
    author: string;
    title: string;
}


const TutorialPostCard = ({ post }: { post: TutorialPost }) => {
    return (
        <div className='h-auto sm:h-[320px] mb-8 sm:mb-0'>
            <div className="w-full h-[180px] sm:h-[230px] relative">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover rounded"
                />
                <div className='bg-[#009245] w-[55px] sm:w-[65px] h-[55px] sm:h-[65px] absolute top-[80%] sm:top-[85%] left-[5%] rounded text-center pt-1'>
                    <span className="text-white text-lg sm:text-xl font-bold tracking-wide">{post.date}</span>
                    <br />
                    <span className='text-white text-sm sm:text-base font-bold'>{post.day}</span>
                </div>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 absolute top-[95%] sm:top-[100%] left-[25%] rounded text-xs sm:text-sm text-center pt-1'>
                    <h1 className='text-[#b2bec3] flex items-center gap-1 tracking-wide whitespace-nowrap'>
                        <MessageSquare strokeWidth={3} className="w-4 h-4 sm:w-5 sm:h-5" color="#009245" />
                        {post.comments} Comments
                    </h1>
                    <h1 className='text-[#b2bec3] flex items-center gap-1 tracking-wide whitespace-nowrap sm:text-sm'>
                        <User strokeWidth={3} className="w-4 h-4 sm:w-5 sm:h-5" color="#009245" />
                        {post.author}
                    </h1>
                </div>
                <h2 className="absolute top-[110%] sm:top-[115%] left-[5%] text-white text-base sm:text-lg font-bold tracking-wide">
                    {post.title}
                </h2>
            </div>
        </div>
    )
}

export default TutorialPostCard