"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from '@/theme-config';
import { usePathname } from 'next/navigation';
import Notification from '../Notification/Notification';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="w-full bg-white border-b border-[#e5e7eb] sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between relative">
                <div className="flex items-center">
                    <button onClick={toggleMenu} className="md:hidden mr-4 text-gray-700 focus:outline-none" aria-label="Toggle menu">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <Link href="/" className="mr-4 md:mr-10">
                        <Image
                            src="/images/logo.png"
                            alt="ibra blogs"
                            width={180}
                            height={36}
                            className="object-contain w-auto h-10 md:w-52 md:h-11"
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-2">
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
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <Notification />
                    <Image
                        src="/images/Ibrahim.png"
                        alt="Admin"
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                </div>

                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 border-t border-[#e5e7eb]">
                        <div className="flex flex-col gap-2">
                            {Menu.map((link, index) => {
                                const isActive = link.path === pathname;
                                return (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-3 rounded transition-all duration-300 ${isActive
                                            ? 'text-[#009245] font-bold bg-slate-100 rounded-lg'
                                            : 'text-black hover:text-[#009245] hover:font-bold hover:bg-slate-100 hover:rounded-lg'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Navbar;
