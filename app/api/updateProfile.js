import { useMutation } from "@tanstack/react-query";
import useUserStore from "../store/userStore";

const updateProfile = async ({ data, apiUrl }) => { // ✅ Fix parameter destructuring
  const response = await fetch(`${apiUrl}/users/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Couldn't update profile");
  }
  return result;
};

export const useUpdateProfile = (apiUrl) => { // ✅ Fix argument passing
  const setUser = useUserStore((state) => state.setUser);

  return useMutation({
    mutationFn: (data) => updateProfile({ data, apiUrl }), // ✅ Pass correct arguments
    onSuccess: (updatedData, variables) => {
      const newUserData = { ...variables, ...updatedData };
      setUser(newUserData);
      localStorage.setItem("user", JSON.stringify(newUserData)); // ✅ Sync with localStorage
    },
  });
};
