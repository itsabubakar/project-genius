"use client"
import { useState } from "react";
import Heading from "../../components/landing_page/header";
import ButtonBlue from "../../ui/buttonBlue";
import AuthLayout from "../auth-components/layout";
import Modal from "../modal";
import spinner from "../../../public/svg/spinner.svg";
import { useRouter } from "next/router";

import Image from "next/image";
export default function ForgotPassword() {

    const [modalOpen, setModalOpen] = useState(false);
    const [email, setEmail] = useState("");
    const openModal = () => setModalOpen(true); // Open modal
    const closeModal = () => setModalOpen(false); // Close modal
    const [error, setError] = useState("");
    const [ loading, setLoading ] =useState(false)

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV
    
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        setError("");

        if (!email) {
            setError("Email is required");
            return;
        }

        try {
            const res = await fetch(`${apiUrl}/auth/reset`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.status === 200) {
                setModalOpen(true);
            } else {
                const data = await res.json();
                setError(data.error);
            }
        } catch (err) {
            setError("Failed to send reset email");
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <AuthLayout>
            <div className="text-center flex flex-col items-center">
                
                <Heading 
                    heading={"Forgot your password?"}
                    subHeading={"Let’s get you back on track. Submit your email to reset your password."}
                />
                <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2 text-greyscale_text">
                        <input
                            type="email"
                            className="w-[350px] md:w-[600px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle 
                            focus:outline-primary"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <ButtonBlue type="submit">{loading ? <Image src={spinner} className="animate-spin"/> : "Create account"}</ButtonBlue>
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