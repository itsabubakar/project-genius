import { create } from "zustand";

const useTeamStore = create((set) => ({
    inviteCode: "",
    message: "",
    error: "",
    
    setInviteCode: (code) => set({ inviteCode: code }),
    setMessage: (msg) => set({ message: msg, error: "" }),
    setError: (err) => set({ error: err, message: "" }),

    handleJoinTeam: async (apiUrl) => {
        set({ message: "", error: "" });

        const { inviteCode } = useTeamStore.getState(); // Get the current inviteCode

        if (!inviteCode) {
            set({ error: "Please enter a valid team code." });
            return;
        }

        console.log("Sending request with inviteCode:", inviteCode); // Debugging

        try {
            const res = await fetch(`${apiUrl}/users/team`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ inviteCode }),
            });

            console.log("Invite Code Sent:", inviteCode);
            console.log("Response status:", res.status); // Debugging
            const data = await res.json();
            console.log("Response data:", data); // Debugging

            if (res.ok) {
                set({ message: "Successfully joined the team!" });

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                set({ error: data.message || "Failed to join the team." });
            }
        } catch (err) {
            set({ error: "An error occurred. Please try again." });
        }
    },
}));

export default useTeamStore;
