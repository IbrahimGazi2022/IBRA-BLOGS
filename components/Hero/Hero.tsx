import Image from "next/image";
import { HeroSection } from "@/theme-config";

const Hero = () => {
    return (
        <section className="grid grid-cols-3 gap-4 max-w-7xl mx-auto px-2 py-4.5">
            <div className="col-span-2 relative w-full h-[450px]">
                <Image
                    src={HeroSection.mainImage.src}
                    alt={HeroSection.mainImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-2xl border-2 border-[#fbfbfb]"
                />
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    {HeroSection.topRightImage.map((img, idx) => (
                        <div key={idx} className="w-1/2 relative h-[200px]">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover rounded-2xl border-2 border-[#fbfbfb]"
                            />
                        </div>
                    ))}
                </div>

                <div className="w-full relative h-full">
                    <Image
                        src={HeroSection.topRightBottomImage.src}
                        alt={HeroSection.topRightBottomImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-2xl border-2 border-[#fbfbfb]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
