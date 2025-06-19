import { create } from 'zustand'

type AuthStore = {
    isLoggedIn: boolean,
    user: null | { // user login korle user object othoba null
        id: string;
        name: string;
        email: string;
    },
    login: (userData: { id: string; name: string; email: string }) => void, // kono kichu return korbe na (void mane "nothing").
    logout: () => void
}


export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: false,
    user: null,
    login: (userData) => set({ isLoggedIn: true, user: userData }),
    logout: () => set({ isLoggedIn: false, user: null }),
}))