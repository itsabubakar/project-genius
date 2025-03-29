import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { loginStore } from "../store/loginStore";

const login = async ({ data, apiUrl })=> {
    const response = await fetch(`${apiUrl}/auth/connect/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
  
    if (!response.ok) {
      throw new Error(result.error || "Invalid login credentials");
    }
  
    return result;
  };


export const useLogin = (apiUrl) => {
    const router = useRouter();
    const setUser = loginStore((state) => state.setUser)

    return useMutation({
        mutationFn: (data) => login({ data, apiUrl }),
        onSuccess: (result) => {
            setUser(result)
            router.push("/dashboard");
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
};