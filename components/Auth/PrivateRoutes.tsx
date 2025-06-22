"use client";

import { useRouter } from "next/navigation"; 
import { useAuthStore } from "@/app/store/authStore";
import { useEffect } from "react";

const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { isLoggedIn } = useAuthStore();

    useEffect(() => {
        if (isLoggedIn) {
            router.push("/");
        }
    }, [isLoggedIn, router]);

    return !isLoggedIn ? children : null;
};

export default PrivateRoutes;