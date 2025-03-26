"use client";

import { useState } from "react";
import AuthLayout from "../auth-components/layout";
import Heading from "../../components/landing_page/header";
import Modal from "../modal";

import Form from "./form";
import { AnimatePresence, motion } from "framer-motion";
import slideUp from "@/app/motion/slideUp";
import pageTransition from "@/app/motion/pageTransition";


export default function CreateProfile() {    
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
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

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSection}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={slideUp}
                    transition={pageTransition} 
                    className="w-full">
                    <Form
                            currentSection={currentSection}
                            nextSection={nextSection}
                            previousSection={previousSection}
                            handleSubmit={handleSubmit}
                    />
                </motion.div>
            </AnimatePresence>

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
