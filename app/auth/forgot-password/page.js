"use client"
import { useState } from "react";
import Heading from "../../components/landing_page/header";
import ButtonBlue from "../../ui/buttonBlue";
import AuthLayout from "../auth-components/layout";
import Modal from "../modal";
import spinner from "../../../public/svg/spinner.svg";
import { useRouter } from "next/router";

import Image from "next/image";
import useModalStore from "@/app/store/modalStore";
import * as yup from "yup"
import useForgotStore from "@/app/store/emailStore";

schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Please enter a valid email address")
})

export default function ForgotPassword() {

    const { modalOpen, openModal, closeModal } = useModalStore()
    const { ForgotPassword, loading, error } = useForgotStore()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV
    
    const {
    register,
    handleSubmit,
    formState: { errors},
    } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
    });
    const onSubmit = async (email) => {
        ForgotPassword(email, apiUrl, openModal)
    };

    return (
        <AuthLayout>
            <div className="text-center flex flex-col items-center">
                
                <Heading 
                    heading={"Forgot your password?"}
                    subHeading={"Let’s get you back on track. Submit your email to reset your password."}
                />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col gap-2 text-greyscale_text">
                        <input
                            type="email"
                            className={` w-[350px] md:w-[600px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle ${errors ? "focus:outline-error_dark bg-error_subtle text-error_dark" : ""}`}
                            placeholder="Enter your email"
                            {...register("email")}
                        />
                        {errors && <p className="text-red-500">{errors}</p>}
                    </div>
                    <ButtonBlue type="submit">{loading ? <Image src={spinner} className="animate-spin"/> : "Create account"}</ButtonBlue>
                    
                    {error && <p className="text-red-500">{error}</p>}
                </form>

                {modalOpen && (
                    <Modal
                        heading={"Reset Link Sent"}
                        subHeading={"Check your inbox for a link to reset your password."}
                        modalClose={closeModal}
                    />
                )}
            </div>
        </AuthLayout>
    )
}