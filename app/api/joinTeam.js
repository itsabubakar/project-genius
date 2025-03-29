import { useMutation } from "@tanstack/react-query";
import useTeamStore from "../store/joinTeamStore";

const joinTeam = async ({ apiUrl, inviteCode }) => {
    const res = await fetch(`${apiUrl}/users/team`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to join the team.");
    return data;
};

// Query
export const useJoinTeam = (apiUrl) => {
    const { inviteCode, setMessage, setError } = useTeamStore();

    return useMutation({
        mutationFn: () => joinTeam({ apiUrl, inviteCode }),
        onSuccess: (data) => {
            setMessage("Successfully joined the team!");
            setTimeout(() => window.location.reload(), 1000);
        },
        onError: (error) => {
            setError(error.message);
        },
    });
};