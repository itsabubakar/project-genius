"use client";
import { useEffect, useState } from "react";
import Heading from "../../components/landing_page/header";
import ButtonBlue from "../../ui/buttonBlue";
import AuthLayout from "../auth-components/layout";
import Modal from "../modal";

export default function Verify() {
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

    useEffect(() => {
        const hash = window.location.hash; // Get the fragment
        const params = new URLSearchParams(hash.replace("#", "?")); // Convert to query format
        setToken(params.get("access_token")); // Extract access_token
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form reload
        setError(null); // Reset previous errors

        const data = {
            password: newPassword,
            accessToken: token,
        };

        console.log("Form Data:", data); // Log the input values

        setLoading(true);

        try {
            const response = await fetch(`${apiUrl}/auth/reset/finalize`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json(); // Parse JSON response

            if (!response.ok) {
                throw new Error(responseData.detail || "Password reset failed.");
            }

            console.log("Password reset successful");
            setModalOpen(true);
        } catch (error) {
            console.error("Error:", error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!token) {
        return <div className="h-80 text-red-600">Error: No token found, please request for another password reset</div>
    }

    return (
        <AuthLayout>
            <form className="w-fit flex flex-col gap-4" onSubmit={handleSubmit}>
                <Heading heading="Reset Password" />

                <div className="w-fit text-start flex flex-col gap-2 text-greyscale_text">
                    <label htmlFor="new-password">New password</label>
                    <input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-[350px] md:w-[400px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle focus:outline-primary"
                        placeholder="Enter your new password"
                    />
                </div>

                <div className="w-fit text-start flex flex-col gap-2 text-greyscale_text">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-[350px] md:w-[400px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle focus:outline-primary"
                        placeholder="Confirm your password"
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                )}

                <div className="flex flex-col gap-4 items-center">
                    <ButtonBlue
                        classname="disabled:bg-greyscale_subtitle sm:w-full"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Resetting..." : "Reset password"}
                    </ButtonBlue>
                </div>

                {modalOpen && (
                    <Modal
                        heading={"Password Updated"}
                        subHeading={"Your password has been successfully updated. Log in to continue."}
                        modalClose={() => setModalOpen(false)}
                    >
                        <ButtonBlue classname={"mx-auto md:w-[264px] lg:w-[164px]"}>
                            Login
                        </ButtonBlue>
                    </Modal>
                )}
            </form>
        </AuthLayout>
    );
}
