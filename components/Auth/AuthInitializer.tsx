"use client";

import { useEffect } from 'react';
import { useAuthStore } from '@/app/store/authStore';

const AuthInitializer = () => {
    const initializeAuth = useAuthStore(state => state.initializeAuth);

    useEffect(() => {
        initializeAuth();
    }, [initializeAuth]);

    return null;
};

export default AuthInitializer;