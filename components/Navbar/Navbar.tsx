"use client";

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    return (
        <section className="w-full bg-white border-b-1 border-[#e5e7eb] sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-start relative">
                <Link href="/" className="mr-10">
                    <Image
                        src="/images/logo.png"
                        alt="ibra blogs"
                        width={220}
                        height={44}
                        className="object-contain"
                        priority
                    />
                </Link>
            </div>
        </section>
    );
};

export default Navbar;
