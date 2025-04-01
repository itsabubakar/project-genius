import { create } from "zustand";

const useRegisterStore = create((set) => ({
    user: null,
    setUser: (userData) => set({ user: userData }),
}))

export default useRegisterStore