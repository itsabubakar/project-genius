"use client";

import { useState } from "react";
import AuthLayout from "../auth-components/layout";
import Heading from "../../components/landing_page/header";
import Modal from "../modal";

import Form from "./form";
import { AnimatePresence, motion } from "framer-motion";
import slideUp from "@/app/motion/slideUp";
import pageTransition from "@/app/motion/pageTransition";
import useModalStore from "@/app/store/modalStore";


export default function CreateProfile() {
    
    const { modalOpen, openModal, closeModal } = useModalStore()

    const handleSubmit = (e) => {
        e.preventDefault();
        openModal()
    }
    const [currentSection, setCurrentSection] = useState(1);

    const nextSection = () => setCurrentSection((prev) => Math.min(prev + 1, 2));
    const previousSection = () => setCurrentSection((prev) => Math.max(prev - 1, 1));

    return (
        <AuthLayout>
        <div className="w-fit h-fit flex flex-col justify-start md:mt-5 sm:items-center gap-4">
            <Heading
            heading="Registration is officially closed"
            subHeading="See you next year :("
            classname="gap-2 text-center"
            />
            <Form
                    currentSection={currentSection}
                    nextSection={nextSection}
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
