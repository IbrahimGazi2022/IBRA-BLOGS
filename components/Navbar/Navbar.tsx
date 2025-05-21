"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from '@/theme-config';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <section className="w-full bg-white border-b-1 border-[#e5e7eb] sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between relative">
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
                <div className="flex items-center gap-2">
                    {Menu.map((link, index) => {
                        const isActive = link.path === pathname;
                        return (
                            <Link
                                key={index}
                                href={link.path}
                                className={`flex items-center gap-1 px-4 py-2 rounded transition-all duration-300 ${isActive
                                    ? 'text-[#009245] font-bold bg-slate-100 rounded-full'
                                    : 'text-black hover:text-[#009245] hover:font-bold hover:bg-slate-100 hover:rounded-full'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    );
};

export default Navbar;
