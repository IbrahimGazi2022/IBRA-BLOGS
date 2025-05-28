import TutorialPostCard from './TutorialCard/TutorialPostCard'
import { TutorialPostData } from '@/theme-config'

const TutorialPost = () => {
    return (
        <section className='w-full bg-[#081838] py-12'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <header className='text-center mb-8 lg:mb-12'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4'>
                        Get Started with Tutorials
                    </h1>
                    <p className='text-gray-300 max-w-3xl mx-auto text-lg'>
                        Learn from our comprehensive collection of tutorials
                    </p>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {TutorialPostData.map((post) => (
                        <TutorialPostCard key={post.id} post={post} />
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <button className='px-8 py-3 bg-[#009245] hover:bg-[#007a38] text-white font-medium rounded-lg transition-colors duration-300'>
                        View All Tutorials
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TutorialPost
