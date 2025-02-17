"use client";
import { useEffect, useState } from "react";

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    avatar: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setFormData({
          firstName: parsedUser.firstName || "",
          lastName: parsedUser.lastName || "",
          email: parsedUser.email || "",
          phoneNumber: parsedUser.phoneNumber || "",
          avatar: null,
        });
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, avatar: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userId = user.id; // Use dynamic user ID from user state

      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      if (formData.avatar) {
        formDataToSend.append("avatar", formData.avatar);
      }

      const response = await fetch(`https://project-genius-back-end.onrender.com/users/${userId}`, {
        method: "PATCH",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Update was successful");
      } else {
        setMessage(data.error || "An error occurred");
      }
    } catch (error) {
      setMessage("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-3 py-6 flex flex-col items-center gap-16">
      <div className="flex flex-col w-full gap-8">
        <h2 className="text-[32px] md:text-[44px] font-bold">Manage Your Profile</h2>
        {message && <p className="text-center text-red-500">{message}</p>}

        <form onSubmit={handleSubmit} className="inter flex flex-col gap-8 text-greyscale_text">
          <div className="flex flex-col">
            <label>First name </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle"
            />
          </div>
          <div className="flex flex-col">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle"
            />
          </div>
          <div className="flex flex-col">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder=""
              disabled
              className="p-3 rounded-xl bg-greyscale_disabled"
            />
          </div>
          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-3 rounded-xl bg-greyscale_surface_subtle"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-3 md:w-[360px] bg-primary text-white rounded-full"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </section>
  );
}