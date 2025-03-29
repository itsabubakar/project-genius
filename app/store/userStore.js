import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  loadUserFromStorage: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        set({ user: JSON.parse(storedUser) });
      } catch (error) {
        console.error("Error parsing user:", error);
        localStorage.removeItem("user");
      }
    }
  },
}));

export default useUserStore;
