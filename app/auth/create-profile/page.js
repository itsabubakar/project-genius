"use client";

import { useState } from "react";
import AuthLayout from "../auth-components/layout";
import Heading from "../../components/landing_page/header";
import MobileForm from "./mobileForm";
import DesktopForm from "./desktopForm";
import Modal from "../modal";


export default function CreateProfile() {    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form default behavior
        
        openModal()
    }
    const [currentSection, setCurrentSection] = useState(1);

    const nextSection = () => setCurrentSection((prev) => Math.min(prev + 1, 2));
    const previousSection = () => setCurrentSection((prev) => Math.max(prev - 1, 1));

    return (
        <AuthLayout>
        <div className="w-fit flex flex-col justify-start md:mt-5 sm:items-center gap-4">
            <Heading
            heading="Join the Innovation Movement"
            subHeading="Sign up to start your journey of creativity and collaboration."
            classname="gap-2"
            />

            <MobileForm
                    currentSection={currentSection}
                    nextSection={nextSection}
                    previousSection={previousSection}
                    handleSubmit={handleSubmit}
            />
            <DesktopForm
                    previousSection={previousSection}
                    handleSubmit={handleSubmit}
            />


            {modalOpen && (
                <Modal
                    heading={"Email Confirmation Sent"}
                    subHeading={"You account has been created successfully! Please, check your email for a confirmation link"}
                    modalClose={closeModal}
                />
            )}

        </div>
        </AuthLayout>
    );
}
