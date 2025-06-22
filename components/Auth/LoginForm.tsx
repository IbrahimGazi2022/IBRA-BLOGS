"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/authStore";

const LoginForm = () => {
    const router = useRouter();
    const { login, isLoggedIn, initializeAuth } = useAuthStore();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isInitializing, setIsInitializing] = useState(true);

    // Initialize auth state on component mount
    useEffect(() => {
        initializeAuth();
        setIsInitializing(false);
    }, [initializeAuth]);

    // Redirect if already logged in
    useEffect(() => {
        if (!isInitializing && isLoggedIn) {
            router.push("/");
        }
    }, [isLoggedIn, isInitializing, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");

            // Save user data to store and localStorage
            login({
                id: data.user.id,
                name: data.user.name,
                email: data.user.email
            });

            // Save token to localStorage if exists
            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            // Redirect to home page
            router.push("/");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isInitializing) {
        return (
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl border border-gray-100 flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#009245]"></div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-white p-8 shadow-lg rounded-xl border border-gray-100"
        >
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl font-bold mb-8 text-center text-gray-800"
            >
                Welcome Back
            </motion.h2>

            {error && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm"
                >
                    {error}
                </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        required
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <motion.button
                        type="submit"
                        className="w-full bg-[#009245] text-white py-3 rounded-lg hover:bg-[#007a38] transition-all shadow-md hover:shadow-lg font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing In...
                            </span>
                        ) : (
                            "Sign In"
                        )}
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="text-center text-sm text-gray-500 pt-2"
                >
                    Don't have an account? <Link href="/register" className="text-[#009245] hover:underline">Sign up</Link>
                </motion.div>
            </form>
        </motion.div>
    );
};

export default LoginForm;