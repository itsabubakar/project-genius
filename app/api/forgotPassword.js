import { create } from "zustand";

const ForgotPassword = async ({ email, apiUrl }) => {

    if (!email) {
        setError("Email is required");
        return;
        }

        const res = await fetch(`${apiUrl}/auth/reset`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        
        const result = await res.json()
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Failed to send reset request");
        }
        return result
}

export default ForgotPassword