const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

export const fetchDashboard = async () => {
    const response = await fetch(`${apiUrl}/app/dashboard`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch dashboard data");
    }

    return response.json();
};
