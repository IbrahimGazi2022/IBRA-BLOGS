import Image from "next/image";
import { HeroSection } from "@/theme-config";

const Hero = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8">
            <div className="md:col-span-2 relative w-full h-[300px] sm:h-[350px] md:h-[450px]">
                <Image
                    src={HeroSection.mainImage.src}
                    alt={HeroSection.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl md:rounded-2xl border-2 border-[#fbfbfb]"
                    priority
                />
            </div>

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
