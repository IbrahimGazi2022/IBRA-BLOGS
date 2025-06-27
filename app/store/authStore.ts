import { create } from 'zustand'
import { toast, Toaster } from 'sonner';
import { createJSONStorage, persist } from 'zustand/middleware';

type User = {
    id: string;
    name: string;
    email: string;
}

type AuthStore = {
    isLoggedIn: boolean,
    user: null | User
    login: (userData: User) => void,
    logout: () => void,
    initializeAuth: () => void 
}

export const useAuthStore = create(
    persist<AuthStore>(
        (set, get) => ({
            isLoggedIn: false,
            user: null,
            login: (userData) => set({ isLoggedIn: true, user: userData }),
            logout: () => {
                localStorage.removeItem('token'); 
                toast.info('Logout successful');
                set({ isLoggedIn: false, user: null })
            },
            initializeAuth: () => {
                const { isLoggedIn } = get();
                if (!isLoggedIn) {
                    const storedData = localStorage.getItem('auth-storage');
                    if (storedData) {
                        const parsedData = JSON.parse(storedData);
                        if (parsedData.state.isLoggedIn && parsedData.state.user) {
                            set({
                                isLoggedIn: true,
                                user: parsedData.state.user
                            });
                        }
                    }
                }
            }
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);