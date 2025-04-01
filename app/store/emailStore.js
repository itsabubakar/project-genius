import { create } from "zustand";

const useForgotStore = create((set) => ({
    email: "",
    setEmail: (email) => set({ email }),
}));

export default useForgotStore;
