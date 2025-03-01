"use client"

import { useForm } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import * as yup from "yup"
import { useState } from "react";
import InputField from "../auth/create-profile/inputField";
import Textarea from "../components/application/textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import tick from "../../public/icons/ticked.svg"
import stepper from "../../public/icons/stepper.svg"
import Button from "../components/application/button";

const solutionSchema = yup.object().shape({
    title: yup.string().required("Solution title is required"),
    category: yup.string().required("Please select a category"),
    problem: yup.string().min(10, "Problem description must be at least 10 characters").required("Problem is required"),
    solution: yup.string().min(10, "Solution must be at least 10 characters").required("Solution is required"),
});

const SolutionForm = ({ active }) => {
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

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const handleSolutionSubmit = async (data) => {
        setError(null);
        setSuccess(null);


        try {
            const response = await fetch(`${apiUrl}/teams/solutions`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess("Solution submitted successfully!");
                console.log("Solution submitted successfully!")
                reset();
            } else {
                throw new Error("Failed to submit solution.");
            }
        } catch (err) {
            setError("Failed to submit solution. Please try again.");
        }
    };

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
                        placeholder="Enter solution title"
                        register={register}
                        error={errors.title}
                    />

                    <div className="flex flex-col gap-2">
                        <label>Category</label>
                        <div className="w-full md:w-[360px] border focus:outline-primary p-2 rounded-md px-4 py-2 bg-greyscale_surface_subtle text-greyscale_text flex">
                            <select
                                {...register("category")}
                                className="w-full bg-transparent focus:outline-none h-full text-greyscale_text appearance-none"
                            >
                                <option value="">Select your solution category</option>
                                <option value="health">Health</option>
                                <option value="finance">Finance</option>
                                <option value="education">Education</option>
                            </select>
                            <RiArrowDropDownLine className="w-5 h-5" color="#8990A6" />
                        </div>
                        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                    </div>

                    <div>
                        <Textarea
                            label="Problem Addressed"
                            placeholder="What is the problem?"
                            name={"problem"}
                            register={register} 
                        />
                        {errors.problem && <p className="text-red-500">{errors.problem.message}</p>}
                    </div>

                    <div>
                        <Textarea
                            label="Solution Description"
                            placeholder="How does your solution solve it?"
                            name={"solution"}
                            register={register} 
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
