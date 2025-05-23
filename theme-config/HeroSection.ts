const HeroSection = {
    mainImage: {
        src: "/images/slider.jpg",
        alt: "Hero Image",
    },

    topRightImage: [
        {
            src: "/images/hero-img1.jpg",
            alt: "Sports Image 1",
        },
        {
            src: "/images/hero-img2.jpg",
            alt: "Sports Image 2",
        },
    ],

    topRightBottomImage: {
        src: "/images/hero-img3.jpg",
        alt: "Food Image",
    }
} as const;

export default HeroSection;