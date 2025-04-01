const forgotPassword = async (email, apiUrl) => {
    if (!email) throw new Error("Email is required");

    const res = await fetch(`${apiUrl}/auth/reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || "Failed to send reset request");
    }

    return data;
};

export default forgotPassword