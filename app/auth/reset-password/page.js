"use client";
import { useState } from "react";
import Heading from "../../components/landing_page/header";
import ButtonBlue from "../../ui/buttonBlue";
import AuthLayout from "../auth-components/layout";
import Modal from "../modal.js";

export default function Verify() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form default behavior
        
        openModal()
    }

    return (
        <AuthLayout>
            <form className="w-fit flex flex-col gap-4">
                <Heading heading="Reset Password" />

                <div className="w-fit text-start flex flex-col gap-2 text-greyscale_text">
                    <label htmlFor="new-password">New password</label>
                    <input
                        id="new-password"
                        type="password"
                        className="w-[350px] md:w-[400px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle focus:outline-primary"
                        placeholder="Enter your new password"
                    />
                </div>

                <div className="w-fit text-start flex flex-col gap-2 text-greyscale_text">
                    <label htmlFor="confirm-password">Confirm password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        className="w-[350px] md:w-[400px] px-4 py-3 rounded-xl bg-greyscale_surface_subtle focus:outline-primary"
                        placeholder="Confirm your password"
                    />
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <ButtonBlue
                        classname="disabled:bg-greyscale_subtitle sm:w-full"
                        onClick={handleSubmit}
                    >
                        Reset password
                    </ButtonBlue>
                </div>

                {modalOpen && (
                    <Modal
                        heading={"Password Updated"}
                        subHeading={"Your password has been successfully updated. Log in to continue."}
                        modalClose={closeModal}
                    >
                        <ButtonBlue
                            classname={"mx-auto md:w-[264px] lg:w-[164px]"}
                        >Login</ButtonBlue>
                    </Modal>
                )}
            </form>
        </AuthLayout>
    );
}
