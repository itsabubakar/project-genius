import { create } from "zustand";

export const loginStore = create((set) => ({
    user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null,
    setUser: (user) => {
        set({ user });
        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(user));
        }
    },
}));