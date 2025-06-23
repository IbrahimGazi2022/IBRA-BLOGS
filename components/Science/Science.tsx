"use client";

import { SliderImage } from "@/theme-config";
import Slider from "../Slider/Slider";

const TopNews = () => {
    return (
        <>
            <h1 className="font-bold text-2xl mt-8 uppercase mb-2">Science</h1>
            <div id="science-section" className="px-2">
                <Slider
                    images={SliderImage}
                    slidesPerView={3}
                    width={400}
                    height={400}
                />
            </div>
        </>
    );
};

export default TopNews;
