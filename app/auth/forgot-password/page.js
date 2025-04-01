"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";

import forgotPassword from "../../api/forgotPassword";
import useForgotStore from "../../store/emailStore";
import useModalStore from "../../store/modalStore";
import AuthLayout from "../auth-components/layout";
import Heading from "../../components/landing_page/header";
import ButtonBlue from "../../ui/buttonBlue";
import Modal from "../modal";
import spinner from "../../../public/svg/spinner.svg";

// ✅ Define form validation schema
const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Please enter a valid email address"),
});

export default function ForgotPassword() {
    const { modalOpen, openModal, closeModal } = useModalStore();
    const { email, setEmail } = useForgotStore();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    // ✅ Use React Query's mutation
    const mutation = useMutation({
        mutationFn: (email) => forgotPassword(email, apiUrl),
        onSuccess: () => {
            openModal(); // Show success modal
        },
        onError: (error) => {
            console.error(error.message);
        },
    });

    const onSubmit = (data) => {
        setEmail(data.email); // Store email in Zustand
        mutation.mutate(data.email);
    };

    return (
        <AuthLayout>
            <div className="text-center flex flex-col items-center">
                <Heading
                    heading="Forgot your password?"
                    subHeading="Let’s get you back on track. Submit your email to reset your password."
                />
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
                    <div className="flex flex-col gap-2 text-greyscale_text">
                        <input
                            type="email"
                            className={`w-[350px] md:w-[600px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle ${
                                errors.email ? "focus:outline-error_dark bg-error_subtle text-error_dark" : ""
                            }`}
                            placeholder="Enter your email"
                            {...register("email")}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <ButtonBlue type="submit">
                        {mutation.isPending ? <Image src={spinner} className="animate-spin" alt="Loading" /> : "Reset Password"}
                    </ButtonBlue>

                    {mutation.isError && <p className="text-red-500">{mutation.error.message}</p>}
                </form>

                {modalOpen && (
                    <Modal
                        heading="Reset Link Sent"
                        subHeading="Check your inbox for a link to reset your password."
                        modalClose={closeModal}
                    />
                )}
            </div>
        </AuthLayout>
    );
}