"use client";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  phone: yup
    .string()
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits")
    ,
});

export default function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 text-greyscale_text">
          <div className="flex flex-col">
            <label>First name</label>
            <input
              type="text"
              {...register("firstName")}
              className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle"
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label>Last name</label>
            <input
              type="text"
              {...register("lastName")}
              className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle"
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
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
              className="p-3 rounded-xl bg-greyscale_surface_subtle"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
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
