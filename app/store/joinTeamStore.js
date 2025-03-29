import { create } from "zustand";

const useTeamStore = create((set) => ({
    inviteCode: "",
    message: "",
    error: "",
    
    setInviteCode: (code) => set({ inviteCode: code }),
    setMessage: (msg) => set({ message: msg, error: "" }),
    setError: (err) => set({ error: err, message: "" }),

}));

export default useTeamStore;
