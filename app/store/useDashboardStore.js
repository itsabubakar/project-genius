import { create } from "zustand";

const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV

const useDashboardStore = create((set) => ({
  userData: null,
  loading: false,
  error: null,
  fetchUserDashboard: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(`${apiUrl}/app/dashboard`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (!response.ok) {
        set({ error: data.message || "Something went wrong", loading: false });
        return;
      }

      set({ userData: data, loading: false });
    } catch (error) {
      set({ error: "Network error, please try again", loading: false });
    }
  },
}));

export default useDashboardStore;
