import { create } from "zustand";

const useDashboardStore = create((set) => ({
  userData: null,
}));

export default useDashboardStore;
