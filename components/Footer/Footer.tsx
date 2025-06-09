import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-[#081838] py-4'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-col md:flex-row items-center justify-between mb-4'>
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <Image
                            src="/images/logo2.png"
                            alt="IbraBlogs Logo"
                            width={200}
                            height={80}
                            className="object-contain"
                        />
                    </div>

                    <div className="hidden md:block">
                        <ul className='flex items-center gap-6'>
                            <li><a href="/" className="text-white hover:underline text-sm font-medium">Home</a></li>
                            <li><a href="/blogs" className="text-white hover:underline text-sm font-medium">Blogs</a></li>
                            <li><a href="/about" className="text-white hover:underline text-sm font-medium">About</a></li>
                            <li><a href="/contact" className="text-white hover:underline text-sm font-medium">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <p className="text-white text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} IbraBlogs by Ibrahim - The Coder | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
