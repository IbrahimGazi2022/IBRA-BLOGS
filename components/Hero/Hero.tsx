import Image from "next/image";
import { HeroSection } from "@/theme-config";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8">
            <div className="md:col-span-2 relative w-full h-[300px] sm:h-[350px] md:h-[450px] group">
                {/* Main Image */}
                <Image
                    src={HeroSection.mainImage.src}
                    alt={HeroSection.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl md:rounded-2xl border-2 border-[#fbfbfb]"
                    priority
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl md:rounded-2xl flex flex-col justify-end p-6 sm:p-8 transition-all duration-300">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {/* Category */}
                        <span className="inline-block px-3 py-1 bg-[#ff0000] text-white text-sm font-medium rounded-full mb-3">
                            Science
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                            How to travel the world and get big companies to pay for it
                        </h1>

                        {/* Author & Date */}
                        <div className="flex items-center text-white/80">
                            <span className="font-medium text-white">John Doe</span>
                            <span className="mx-2">•</span>
                            <span>June 9, 2023</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rest of your existing code */}
            <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    {HeroSection.topRightImage.map((img, idx) => (
                        <div key={idx} className="w-full sm:w-1/2 relative h-[150px] sm:h-[200px]">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover rounded-xl md:rounded-2xl border-2 border-[#fbfbfb]"
                            />
                        </div>
                    ))}
                </div>

                <div className="w-full relative h-[150px] sm:h-[200px] md:h-[calc(100%-216px)]">
                    <Image
                        src={HeroSection.topRightBottomImage.src}
                        alt={HeroSection.topRightBottomImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-xl md:rounded-2xl border-2 border-[#fbfbfb]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;    