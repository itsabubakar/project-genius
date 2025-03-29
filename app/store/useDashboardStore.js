import { create } from "zustand";

const useDashboardStore = create((set) => ({
  userData: null,
  setUserData: (data) => set({ userData: data }),
}));

export default useDashboardStore;
