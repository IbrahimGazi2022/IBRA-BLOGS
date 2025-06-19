'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useAuthStore } from "@/app/store/authStore"

const User = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { isLoggedIn, logout } = useAuthStore()

    const toggle = () => setIsOpen(!isOpen)
    const close = () => setIsOpen(false)

    return (
        <div className="relative">
            {isOpen && (
                <div
                    onClick={close}
                    className="fixed inset-0 bg-transparent z-40"
                />
            )}

            <button className="focus:outline-none" onClick={toggle}>
                <Image
                    src="/images/Ibrahim.png"
                    alt="Admin"
                    width={40}
                    height={40}
                    className="rounded-full object-cover cursor-pointer"
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {isLoggedIn ? (
                        <>
                            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/dashboard">Dashboard</Link>
                            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/Profile">Profile</Link>
                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/login">Login</Link>
                            <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/register">Registration</Link>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default User