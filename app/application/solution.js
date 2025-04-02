"use client"

import { useForm } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import * as yup from "yup"
import { useState } from "react";
import InputField from "../auth/create-profile/inputField";
import Textarea from "../components/application/textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../components/application/button";
import { useRouter } from "next/navigation";

const solutionSchema = yup.object().shape({
    title: yup.string().required("Solution title is required"),
    video: yup.string().required("Please include a video link"),
    problem: yup.string().min(15, "Problem description must be at least 15 characters").required("Problem is required"),
    solution: yup.string().min(15, "Solution must be at least 15 characters").required("Solution is required"),
});

const SolutionForm = ({ disabled }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
            resolver: yupResolver(solutionSchema),
        });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [checked, setChecked] = useState(false)

    const router = useRouter()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

    const handleSolutionSubmit = async (data) => {
        setError(null);
        setSuccess(null);
    
        try {
            const response = await fetch(`${apiUrl}/teams/solutions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
    
            const responseData = await response.json().catch(() => null); // Handle cases where response is not JSON
    
            if (!response.ok) {
                const errorMessage = "Already submitted solution"|| (responseData?.error, 'f') || "Something went wrong.";
                throw new Error(errorMessage);
            }
    
            setSuccess("Solution submitted successfully!");
            console.log("Solution submitted successfully!");
            reset();
            router.push('/dashboard');
        } catch (err) {
            console.error("Submission error:", err);
            setError(err.message || "An unexpected error occurred. Please try again.");
        }
    };
    

    const errorClass ="border-error_dark border-2 bg-error_subtle focus:outline-error_dark" //error class mod
    const successClass = "" //success class mod

    return (
        <form onSubmit={handleSubmit(handleSolutionSubmit)} className="flex flex-col gap-2">
            {/**
            <div className="flex gap-[2px] mb-7 flex-col items-center">
                <div className="rounded-full w-5 h-5 flex text-center justify-center items-center">
                    <img src={stepper} alt="active" />
                </div>
            </div> */}

            <div className="w-full flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-start">Solution Details</h3>

                <div className="mb-[64px] flex flex-col sm:grid grid-cols-2 gap-8">
                    <InputField
                        label="Solution Title"
                        name="title"
                        type="text"
                        className={`${errors.title ? errorClass : successClass}`}
                        placeholder="Enter solution title"
                        register={register}
                        error={errors.title}
                        disabled={disabled}
                    />
                    <InputField
                        label="Video Pitch URL"
                        name="title"
                        type="text"
                        className={`${errors.video ? errorClass : successClass}`}
                        placeholder="Enter solution title"
                        register={register}
                        error={errors.title}
                        disabled={disabled}
                    />
                    <div>
                        <Textarea
                            label="Problem Addressed"
                            placeholder="What is the problem?"
                            name={"problem"}
                            className={`${errors.problem ? errorClass : successClass}`}
                            register={register}
                            disabled={disabled}
                        />
                        {errors.problem && <p className="text-red-500">{errors.problem.message}</p>}
                    </div>

                    <div>
                        <Textarea
                            label="Solution Description"
                            placeholder="How does your solution solve it?"
                            name={"solution"}
                            className={`${errors.solution ? errorClass : successClass}`}
                            register={register} 
                            disabled={disabled}
                        />
                        {errors.solution && <p className="text-red-500">{errors.solution.message}</p>}
                    </div>
                </div>


            </div>
            <div className="sm:w-[701.6px] md:w-[821.6px] flex flex-col gap-4 ">
                <h3 className="text-2xl text-greyscale_title">Mode of Submission</h3>

                <div className="p-4 bg-primary_subtle flex flex-col gap-4 rounded-xl">
                    <h3 className="text-2xl">Instruction</h3>

                    <p>The event requires physical submission of the following deliverables:</p>
                    <div>
                        
                        <li>Pitch Deck (Slides)</li>
                        <li>Executive Summary for the judges</li>
                        <li>Prototype (to be presented at the Grand Finale)</li>
                        
                    </div>
                    <p>Please ensure that all materials are delivered by the specified deadline and in the appropriate format.</p>
                    
                    <div className="flex gap-3 ">
                    <input type="checkbox"
                        className="text-primary"
                        disabled={disabled}
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}/>
                        <p className="flex text-start">I agree to Project Genius’ terms and conditions</p>
                    </div>
                    
                </div>
                <Button
                    disabled={!checked}
                >
                    Submit application
                </Button>
                {success && <p className="text-green-500">{success}</p>}
                {error && <p className="text-red-500">{error}</p>}
            
                                    </div>
        </form>
    );
};

export default SolutionForm;
