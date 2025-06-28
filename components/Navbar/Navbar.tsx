"use client";

import Link from 'next/link';
import Image from 'next/image';
import User from '../User/User';
import { useState, useEffect } from 'react';
import { Menu } from '@/theme-config';
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Notification from '../Notification/Notification';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close mobile menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Function to handle smooth scrolling
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
            closeMenu(); // Close menu after clicking
        }
    };

    // Effect to handle scroll and detect active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = Menu.filter(item => item.path.startsWith('#')).map(item => item.path.substring(1));
            const scrollPosition = window.scrollY + 100; // Adding offset

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10
                            }}>
                            <Image
                                src="/images/logo.png"
                                alt="ibra blogs"
                                width={180}
                                height={36}
                                className="object-contain w-auto h-10 md:w-52 md:h-11"
                                priority
                            />
                        </motion.div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {Menu.map((link, index) => {
                        const isActive = link.path === pathname ||
                            (link.path.startsWith('#') && activeSection === link.path.substring(1));

                        // If link is for a section (starts with #)
                        if (link.path.startsWith('#')) {
                            return (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(link.path.substring(1))}
                                    className={`flex items-center gap-1 px-4 py-2 rounded transition-all duration-300 ${isActive
                                        ? 'text-[#009245] font-bold bg-slate-100 rounded-full'
                                        : 'text-black hover:text-[#009245] hover:font-bold hover:bg-slate-100 hover:rounded-full'
                                        }`}
                                >
                                    {link.name}
                                </button>
                            );
                        }

                        // Regular page link
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
                    <User />
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 border-t border-gray-200"
                    >
                        <div className="flex flex-col space-y-4">
                            {Menu.map((link, index) => {
                                const isActive = link.path === pathname ||
                                    (link.path.startsWith('#') && activeSection === link.path.substring(1));

                                // If link is for a section (starts with #)
                                if (link.path.startsWith('#')) {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => scrollToSection(link.path.substring(1))}
                                            className={`flex items-center gap-1 px-4 py-2 rounded transition-all duration-300 ${isActive
                                                ? 'text-[#009245] font-bold bg-slate-100 rounded-full'
                                                : 'text-black hover:text-[#009245] hover:font-bold hover:bg-slate-100 hover:rounded-full'
                                                }`}
                                        >
                                            {link.name}
                                        </button>
                                    );
                                }

                                // Regular page link
                                return (
                                    <Link
                                        key={index}
                                        href={link.path}
                                        onClick={closeMenu}
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
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Navbar;