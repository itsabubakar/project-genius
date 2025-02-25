"use client"
import Link from "next/link";
import Button from "../components/application/button";
import Input from "../components/application/input";
import Textarea from "../components/application/textarea";
import Heading from "../components/landing_page/header";
import Image from "next/image";
import spinner from "../../public/svg/spinner.svg";


import tick from "../../public/icons/ticked.svg"
import active from "../../public/icons/stepper.svg"

import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"



const schema = yup.object().shape({
    teamName: yup.string().required("Team Name is required").min(3, "Must be at least 3 characters"),
  });

export default function Application(){

    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);
    const [teamName, setTeamName] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
            }
        }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleCreateTeam = async () => {
        setError("");

        const res = await fetch("https://project-genius-back-end.onrender.com/teams/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamName }),
        });

        const data = await res.json();
        
        if (res.ok) {
        setInviteCode(data.inviteCode);
        console.log("response: ", data)
        } else {
        setError(data.message);
        }
    };
    
    useEffect(() => {
        const fetchPaymentLink = async () => {
            try {
                const response = await fetch("https://project-genius-back-end.onrender.com/app/dashboard", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
    
                const result = await response.json();
    
                if (response.status === 200) {
                    setUserData(result);
                    console.log("API response", result)
                } else {
                    setError(result.message || "Something went wrong");
                }
            } catch (error) {
                setError("Network error, please try again");
            } finally {
                setLoading(false);
            }
        };
    
        fetchPaymentLink();
    }, []);

    
    if (loading) {
        return <div className=" h-[85vh] flex justify-center items-center">
            <Image src={spinner} className="w-16 h-16 animate-spin" alt="Loading" />
            </div>;
    }

    return (
        <section className="flex flex-col px-5 md:px-20 lg:px-[238px] my-10 sm:items-center">
            <Heading 
                heading="Application form"
                classname="text-center px-6"
                subHeading="Take the first step toward innovation, complete your application and join the competition!"
            />
            {user?.role === "lead" ? (
                <>{userData?.paymentURL && (
                    <div className="bg-primary_subtle rounded-2xl w-fit px-4 sm:px-16 lg:px-20 py-4 flex flex-col items-center gap-4 text-center inter">
                        <p className="text-greyscale_subtitle text-lg">To participate in the contest, a registration fee of N5,000 is required. Complete the payment process to proceed with the appliation</p>
                        
                            <Link href={userData.paymentURL} className="bg-primary text-white px-5 py-3 rounded-full w-[240px]">Proceed to payment</Link>
                    
                    </div>
                    
                )}

                    <div className="h-full flex flex-col py-6">
                        
                        <form onSubmit={handleSubmit(handleCreateTeam)} className=" max-h-full w-full flex gap-2">
                            
                            <div className="flex gap-[2px] mb-2 flex-col items-center">
                                <div className="rounded-full w-5 h-5 flex text-center justify-center items-center  bg-success ">
                                    
                                    <Image src={tick} alt="tick" />
                                </div>
                                <div className={`w-[2px] h-full flex-shrink-0 rounded-full bg-success`}></div>    
                            </div>
                            <div className="w-full flex flex-col gap-4 md:px-20 md:pt-10 md:border-t md:border-x">
                                <h3 className=" text-2xl font-bold text-start">Basic Information</h3>

                                <div className="flex flex-col gap-8 sm:grid items-center grid-cols-2">
                                    <Input 
                                        label="Full name"
                                        type="text"
                                        placeholder="Yusef Aliyu"
                                        disabled={true}
                                    />
                                    <Input 
                                        label="Department"
                                        type="text"
                                        placeholder="Computer Science"
                                        disabled={true}
                                    />
                                    <Input 
                                        label="Email address"
                                        type="email"
                                        placeholder="hamidusman@gmail.com"
                                        disabled={true}
                                    />
                                    <div>
                                        
                                        <Input
                                            label="Team Name"
                                            type="text"
                                            value={teamName}
                                            {...register("teamName")}
                                            onChange={(e) => setTeamName(e.target.value)}
                                            placeholder="Enter team name"
                                            disabled={false}
                                        />
                                        {inviteCode && <p>Invite Code: {inviteCode}</p>}
                                        {errors.teamName && <p className="text-red-500">{errors.teamName.message}</p>}
                                    </div>
                                </div>
                                
                                <Button
                                    onClick={handleCreateTeam}
                                    disabled={false}
                                    className="w-[314px]"
                                    type="submit"
                                    
                                    >
                                        Create team link
                                </Button>
                                
                                <div className=" flex flex-col gap-3 bg-success_subtle w-[314px] xs:w-full p-4">
                                    <h3 className="text-[28px] font-semibold">Team Link Generated!</h3>
                                    <p>Share this link with teammates to join and confirm their participation.</p>
                                    <Link href={''}>https://projectgenius.ng/team/join/unique-id</Link>
                                </div>
                            </div>
                        </form>


                        <form className="flex gap-2">
                            
                            <div className="flex gap-[2px] mb-7 flex-col items-center">
                                <div className="rounded-full w-5 h-5 flex text-center justify-center items-center ">
                                    <Image src={active} alt="active"/>
                                </div>
                                <div className={`w-[2px] h-full flex-shrink-0 rounded-full bg-warning`}></div>    
                            </div>
                            <div className="w-full flex flex-col gap-4 md:px-20 border-x p-5">
                                <h3 className=" text-2xl font-bold text-start">Solution Details</h3>

                                <div className="mb-[64px] flex flex-col sm:grid grid-cols-2 gap-8">
                                    <Input 
                                        label="Solution Title"
                                        type="text"
                                        disabled={false}
                                    />
                                    <div>
                                        <label className="text-greyscale_text">Category</label>
                                        <div className="flex items-center bg-greyscale_surface_subtle h-[48px] md:[360px] px-4 rounded-2xl">
                                            
                                            <select  className="w-full bg-transparent h-full text-greyscale_text appearance-none">
                                                <option className="sm:w-[282px]">Select your solution category</option>
                                            </select>
                                            <RiArrowDropDownLine 
                                                className="w-5 h-5"
                                                color="#8990A6"/>
                                        </div>
                                    </div>
                                    <Textarea 
                                        label="Problem Addressed"
                                        placeholder="What is the problem?"
                                        disabled={true}
                                    />
                                    <Textarea 
                                        label="Solution description"
                                        placeholder="How does your solution solve it?"
                                        disabled={false}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="flex gap-2">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-greyscale_surface_subtle border border-greyscale_disabled text-white">
                            </div>
                            <div className="w-[2px] flex-grow rounded-full bg-greyscale_border"></div>
                        </div>
                        
                        <div className="sm:w-[701.6px] md:w-[821.6px] flex flex-col gap-4 md:px-20 md:pb-10 border-x border-b rounded-2xl p-5">
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
                                
                                <div className="flex gap-3 items-start">
                                <input type="checkbox" />
                                    <p className="flex text-start">I agree to Project Genius’ terms and conditions</p>
                                </div>
                                
                            </div>
                            <Button
                                disabled={true}
                                >
                                    Submit application
                            </Button>

                        </div>
                    </div>
                </>
            ) :
            <h3 className="text-4xl">Hold up, you shouldn't be here!</h3>}
        </section>

    )
}