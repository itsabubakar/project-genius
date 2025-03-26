"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

  // Validation Schema
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
      .required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    setValue,
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

        // Pre-fill form fields
        setValue("firstName", parsedUser.firstName || "");
        setValue("lastName", parsedUser.lastName || "");
        setValue("phone", parsedUser.phoneNumber || "");
      }
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", data.firstName);
    formDataToSend.append("lastName", data.lastName);
    formDataToSend.append("phone", data.phone);

    try {
      const response = await fetch(`${apiUrl}/users/`, {
        method: "PATCH",
        body: formDataToSend,
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage("Update was successful");
      } else {
        setMessage(responseData.error || "An error occurred");
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label>First name</label>
            <input
              type="text"
              {...register("firstName")}
              className="px-4 py-3 rounded-xl bg-gray-200"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label>Last name</label>
            <input
              type="text"
              {...register("lastName")}
              className="px-4 py-3 rounded-xl bg-gray-200"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email (Disabled) */}
          <div className="flex flex-col">
            <label>Email address</label>
            <input
              type="email"
              value={user?.email || ""}
              disabled
              className="p-3 rounded-xl bg-gray-300"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              type="text"
              {...register("phone")}
              className="p-3 rounded-xl bg-gray-200"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-5 py-3 bg-blue-600 text-white rounded-full"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </section>
  );
}
