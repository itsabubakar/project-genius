import { create } from "zustand";

const useLoginStore = create((set) => ({
    user: null,
    loading:false,
    loginError: null,
    login: async (data, apiUrl, router) => {
        set({loading: true, error: ""})
        try {
          const response = await fetch(`${apiUrl}/auth/connect/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
            console.log(result);
    
            if (response.ok) {
                localStorage.setItem("user", JSON.stringify(result));
                set({user: result})
                router.push('/dashboard');
            } else {
                set({loginError: result.error || "Invalid login credentials"});
            }
        } catch (error) {
            set({loginError: "Network error, please try again."});
        } finally {
            set({loading: false})
        }
    },
}))

export default useLoginStore