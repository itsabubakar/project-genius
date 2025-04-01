import { useQuery } from "@tanstack/react-query";
import useDashboardStore from "../store/useDashboardStore";
const fetchDashboard = async () => {
  const token = localStorage.getItem("token"); // Get stored token

  const response = await fetch(`https://test.api.projectgenius.com.ng/app/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // Add token if available
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log(response)
  return response.json(); // Convert response to JSON
};

const useDashboardQuery = () => {
  const setUserData = useDashboardStore((state) => state.setUserData);

  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    onSuccess: (data) => {
      setUserData(data); // Store response in Zustand
    },
  });
};

export default useDashboardQuery;
