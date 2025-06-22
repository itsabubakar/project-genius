import { create } from "zustand";

export const useDropdownStore = create((set) => ({
    isOpen: false,
    toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
    closeDropdown: () => set({ isOpen: false }),
}))