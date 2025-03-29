"use client";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useUserStore from "@/app/store/userStore";
import { useUpdateProfile } from "@/app/api/updateProfile";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .matches(/^\d{11}$/, "Phone number must 11 digits")
    .required("Phone number is required"),
});

const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
export default function UpdateProfile() {
  const user = useUserStore((state) => state.user)
  const { mutate, isPending, error } = useUpdateProfile(apiUrl)
  const [message, setMessage] = useState("");


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
    if (user) {
      setValue("firstName", user.firstName || "");
      setValue("lastName", user.lastName || "");
      setValue("phone", user.phone || "");
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    setMessage("")
    if (error) error.message = ""
    
    mutate(data,{
      onSuccess: () => {
        setMessage("Profile Updated successfully!")
      }
    })

  };

  return (
    <section className="px-3 py-6 flex flex-col items-center gap-16">
      <div className="flex flex-col w-full gap-8">
        <h2 className="text-[32px] md:text-[44px] font-bold">Manage Your Profile</h2>
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
            className="px-5 py-3 md:w-[360px] bg-primary text-white rounded-full"
          >
            {isPending ? "Updating..." : "Update Profile"}
          </button>
          {message && <p className="text-center text-success">{message}</p>}
          {error && <p className="text-center text-red-400">{error}</p>}
        </form>
      </div>
    </section>
  );
}
