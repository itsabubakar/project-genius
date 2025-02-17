"use client"
import { useState } from "react";
import ButtonBlue from "../../ui/buttonBlue";
import { useRouter } from "next/navigation";

export default function Verified() {
    const router = useRouter();

    const navigateToLogin = () => {
        router.push('/auth');
    }

    return (
        <div className="flex flex-col justify-between md:justify-center md:gap-8 items-center
                px-8 pt-8 pb-16 h-[90vh] text-center">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-greyscale_title font-bold">Email verified successfully</h1>
                <p>You’re all set! Dive into the competition and connect with your team.</p>
            </div>

            <ButtonBlue
                onClick={navigateToLogin}
                classname={"xs-[340px] md:w-[264px] lg:w-[162px]"}
            >
                Login
            </ButtonBlue>
            
        </div>
        )
}