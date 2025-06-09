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
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileModal = () => {
        setIsProfileModalOpen(!isProfileModalOpen);
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
                    <button onClick={toggleProfileModal} className="focus:outline-none">
                        <Image
                            src="/images/Ibrahim.png"
                            alt="Admin"
                            width={40}
                            height={40}
                            className="rounded-full object-cover cursor-pointer"
                        />
                    </button>
                </div>

                {/* Profile Modal */}
                {isProfileModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-bold">Profile</h3>
                                <button
                                    onClick={toggleProfileModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col items-center mb-4">
                                <Image
                                    src="/images/Ibrahim.png"
                                    alt="Admin"
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover mb-2"
                                />
                                <h4 className="font-semibold">Admin Name</h4>
                                <p className="text-gray-600">admin@example.com</p>
                            </div>
                            <div className="space-y-2">
                                <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left">
                                    Profile Settings
                                </button>
                                <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                )}

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