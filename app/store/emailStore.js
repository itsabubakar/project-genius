import { create } from "zustand";

const useForgotStore = create((set) => ({
    email: null,
    setEmail: (email) => set({ email })
}))

export default useForgotStore