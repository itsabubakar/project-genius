"use client"
import { useEffect, useState } from "react";
import ButtonBlue from "../../ui/buttonBlue";
import { useRouter, useSearchParams } from "next/navigation";

export default function Verified() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const error_code = searchParams.get("error_code")

    if(error_code) {
        return (
            
        <div className="flex flex-col justify-between md:justify-center md:gap-8 items-center
                px-8 pt-8 pb-16 h-[90vh] text-center">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-greyscale_title font-bold">Email verification failed</h1>
                <p>Your account was not verified within 24 hours. Please create your account again</p>
            </div>

            <ButtonBlue
                onClick={() => router.push('/auth/create-profile')}
                classname={"xs-[340px] md:w-[264px] lg:w-[162px]"}
            >
                Register
            </ButtonBlue>
            
        </div>
        )
    }
    


    return (
                
        <div className="flex flex-col justify-between md:justify-center md:gap-8 items-center
                px-8 pt-8 pb-16 h-[90vh] text-center">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl text-greyscale_title font-bold">Email verified successfully</h1>
                <p>You are all set! Dive into the competition and connect with your team.</p>
            </div>

            <ButtonBlue
                onClick={() => router.push('/auth')}
                classname={"xs-[340px] md:w-[264px] lg:w-[162px]"}
            >
                Login
            </ButtonBlue>
            
        </div>
        )
}