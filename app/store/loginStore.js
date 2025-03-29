import { create } from "zustand";

export const loginStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")),
    setUser: (user) => {
        set({ user });
        localStorage.setItem("user", JSON.stringify(user));
    },
}));