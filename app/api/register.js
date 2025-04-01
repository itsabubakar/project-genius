const createUser = async(data) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV
        const response = await fetch(`${apiUrl}/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Response from server:", result);

        if (!response.ok) {
            throw new Error(result.error)
        }

        return result
}

export default createUser