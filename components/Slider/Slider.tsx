"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface ImageItem {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
    date?: string;
}

interface SliderProps {
    images: ImageItem[];
    slidesPerView?: number;
    width?: number;
    height?: number;
}

const Slider = ({ images }: SliderProps) => {
    return (
        <div className="py-4 relative">
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                speed={700}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="!pb-10">
                {images.map((img) => (
                    <SwiperSlide key={img.src} className="!h-auto">
                        <div className="relative aspect-[4/3] group border border-[#ecf0f2] rounded-2xl overflow-hidden">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {(img.title || img.subtitle || img.date) && (
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    {img.alt && <p className="text-white text-sm mt-2">{img.alt}</p>}
                                    {img.title && <h3 className="text-white font-bold text-lg">{img.title}</h3>}
                                    {img.date && <p className="text-gray-300 text-xs mt-2">{img.date}</p>}
                                </div>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
