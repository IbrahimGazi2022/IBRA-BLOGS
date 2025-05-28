import Image from "next/image"
import { AuthorData } from "@/theme-config"

const AuthorsList = () => {
    return (
        <div className="relative z-10 bg-white">
            <div className="space-y-8 md:space-y-12 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                {AuthorData.map((author, index) => (
                    <div
                        key={index}
                        className='flex flex-col lg:flex-row-reverse max-w-[1280px] min-h-[400px] md:min-h-[550px] py-8 md:py-10 gap-8 md:gap-6 mx-auto mb-8 md:mb-12 relative'
                    >
                        <div className='lg:flex-2 relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:w-[500px] lg:h-[500px]'>
                            <Image
                                src={author.imagePath}
                                alt={author.imageAlt}
                                fill
                                className="object-cover rounded-lg"
                                priority={index === 0}
                                unoptimized={true}
                            />
                        </div>

                        <div className='lg:flex-1 flex flex-col justify-center px-2 sm:px-0'>
                            <span className="text-[rgb(178,180,184)] text-sm md:text-base tracking-wide leading-relaxed">
                                {author.subtitle}
                            </span>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-wide mt-2">
                                {author.title}
                            </h1>
                            <p className="mt-2 text-[rgb(144,145,147)] text-sm sm:text-base mb-4">
                                {author.description}
                            </p>
                            <button className="w-full sm:w-fit px-6 py-3 font-bold bg-[#009245] text-white rounded-full mt-4 hover:bg-[#007a38] transition-colors">
                                {author.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AuthorsList
