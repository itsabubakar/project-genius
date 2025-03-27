"use client";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must 11 digits")
    .required("Phone number is required"),
});

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("")

  const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setValue("firstName", parsedUser.firstName || "");
        setValue("lastName", parsedUser.lastName || "");
        setValue("phone", parsedUser.phone || ""); // Ensure consistency
      }
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(`${apiUrl}/users/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        // Update local storage with new user data
        const updatedUser = { ...user, ...data };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setMessage("Update was successful");
      } else {
        setError(responseData.error || "An error occurred");
      }
    } catch (error) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-3 py-6 flex flex-col items-center gap-16">
      <div className="flex flex-col w-full gap-8">
        <h2 className="text-[32px] md:text-[44px] font-bold">Manage Your Profile</h2>
        {message && <p className="text-center text-success">{message}</p>}
        {error && <p className="text-center text-red-400">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 text-greyscale_text">
          <div className="flex flex-col">
            <label>First name</label>
            <input
              type="text"
              {...register("firstName")}
              className={`${errors.firstName ? "focus:outline-error_dark bg-error_subtle text-red-400": "" }px-4 py-3 rounded-xl bg-greyscale_surface_subtle`}
            />
            {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label>Last name</label>
            <input
              type="text"
              {...register("lastName")}
              className={`${errors.lastName ? "focus:outline-error_dark bg-error_subtle text-red-400": "" } px-4 py-3 rounded-xl bg-greyscale_surface_subtle`}
            />
            {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label>Email address</label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="p-3 rounded-xl bg-greyscale_disabled"
            />
          </div>

          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              type="text"
              {...register("phone")}
              className={`${errors.phone ? "focus:outline-error_dark bg-error_subtle text-red-400": "" } f p-3 rounded-xl bg-greyscale_surface_subtle`}
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
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
