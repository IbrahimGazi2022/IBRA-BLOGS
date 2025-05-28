import TutorialPostCard from './TutorialCard/TutorialPostCard'
import { TutorialPostData } from '@/theme-config'

const TutorialPost = () => {
    return (
        <div className='w-full h-auto sm:h-[800px] bg-[#081838] pb-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl sm:text-3xl lg:text-[36px] font-bold text-white text-center pt-6 pb-4 sm:pb-6'>
                    Get Started with Tutorials
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 sm:gap-4 py-4'>
                    {TutorialPostData.map((post) => (
                        <TutorialPostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TutorialPost