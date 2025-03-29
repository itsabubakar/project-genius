"use client";
import Heading from "../components/landing_page/header";
import ButtonBlue from "../ui/buttonBlue";
import ButtonGlass from "../ui/buttonGlass";
import AuthLayout from "./auth-components/layout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Image from "next/image";
import * as yup from "yup"
import spinner from "../../public/svg/spinner.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion, AnimatePresence} from "framer-motion"
import slideUp from "../motion/slideUp";
import useLoginStore from "../store/loginStore";
import { useLogin } from "../api/login";

// Zod schema for validation
export const loginSchema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Please enter a valid email address"),
	password: yup.string().min(8, "Password must be at least 8 characters")
});

export default function Login() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
    const router = useRouter();
	const { mutate, isPending, error } = useLogin(apiUrl);
    
    const navigateTocreate = () => {
    	router.push('/auth/create-profile');
    };

    const {
		register,
		handleSubmit,
		formState: { errors},
    } = useForm({
		resolver: yupResolver(loginSchema),
		mode: "onChange",
    });

    const onSubmit = (data) => {
        mutate(data, apiUrl, router)
    }

    return (
        <AuthLayout>
			<motion.form
			initial="initial"
			animate="animate"
			variants={slideUp}
			transition={{duration: 0.8}}
			onSubmit={handleSubmit(onSubmit)} className="flex flex-col xs:items-center gap-4">
				<Heading
				heading={"Let's continue building"}
				subHeading={"Log in to pick up where you left off"}
				classname={"gap-2"}
			/>

			<div className="flex flex-col gap-2 text-greyscale_text">
				<label htmlFor="email">Email address</label>
				<input
					type="email"
					id="email"
					{...register("email")}
					className={`inter w-[330px] sm:w-[340px] md:w-[360px]  px-4 py-3 rounded-xl outline-none transition-all 
					${
					errors.email
						? "outline-error_dark text-error_dark bg-error_subtle"
						:  ""
					}`}
					placeholder="Enter your email address"
				/>
				{errors.email && (
				<p className="text-red-500 text-sm">{errors.email.message}</p>
				)}
			</div>

			<div className="flex flex-col gap-2 text-greyscale_text">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					{...register("password")}
					className={`inter w-[330px] sm:w-[340px] md:w-[360px] px-4 py-3 rounded-xl outline-none transition-all 
					${
					errors.password
						? "outline-error_dark bg-error_subtle"
						: ""
					}`}
					placeholder="Enter your password"
				/>
				{errors.password && (
				<p className="text-red-500 text-sm">{errors.password.message}</p>
				)}
			</div>

			{error && (
				<p className="text-red-500 text-sm">{error}</p>
			)}

			<div className="flex flex-col gap-4 w-[100%] sm:flex-row justify-center items-center">
				<ButtonBlue classname={"active:bg-greyscale_subtitle md:w-[50%] flex justify-center"}>
				{isPending ? <Image src={spinner} className="animate-spin"/> : "Login"}
				</ButtonBlue>

				<ButtonGlass classname="md:w-[50%]" onClick={navigateTocreate}>
				Register
				</ButtonGlass>
			</div>
			<Link href={'/auth/forgot-password'} className="text-right md:ml-auto text-greyscale_text">
				Forgot Password?
			</Link>
			</motion.form>
    </AuthLayout>
    );
}