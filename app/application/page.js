"use client"
import Input from "../components/application/input";
import Heading from "../components/landing_page/header";
import Image from "next/image";
import spinner from "../../public/svg/spinner.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import SolutionForm from "./solution";
import { useEffect, useState } from "react";
import ButtonBlue from "../ui/buttonBlue";


const schema = yup.object().shape({
    teamName: yup.string().required("Team Name is required").min(3, "Must be at least 3 characters"),
  });

const solutionSchema = yup.object().shape({
    title: yup.string().required("Solution title is required"),
    category: yup.string().required("Please select a category"),
    problem: yup.string().min(10, "Problem description must be at least 10 characters").required("Problem is required"),
    solution: yup.string().min(10, "Solution must be at least 10 characters").required("Solution is required"),
});

export default function Application(){

    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);
    const [teamName, setTeamName] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(null);
    
    
    // for extracting the reference
    const queryParam = new URLSearchParams()
    const ref = queryParam.get("reference")
    const [status, setStatus] = useState("Verifying...");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

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
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });



    const handleCreateTeam = async (data) => {
        setError("");
        
        console.log("Creating team with:", data.teamName);
        console.log("API URL:", `${apiUrl}/teams/`);
    
        try {
            const res = await fetch(`${apiUrl}/teams/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ teamName: data.teamName.trim() }),
            });
    
            console.log("Response status:", res.status);
    
            const result = await res.json();
            console.log("Response body:", result);
            
            if (res.ok) {
                setInviteCode(result.inviteCode);
                console.log("Team Created: ", result);
            } else {
                setError(result.message || "Something went wrong");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to create team. Please try again.");
        }
    };
    
    
    useEffect(() => {
        const fetchUserCode = async () => {
            try {
                const response = await fetch(`${apiUrl}/app/dashboard`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (response.status === 200) {
                    console.log("API Response:", result);
                    setUserData(result);
                } else if (response.status === 401) {
                    setError("Invalid login credentials");
                } else {
                    setError(result.message || "Something went wrong");
                }
            } catch (error) {
                setError("Network error, please try again");
            } finally {
                setLoading(false);
            }
        };

        fetchUserCode();
    }, [apiUrl]);
    
        useEffect(() => {
            const verifyPayment = async () => {
            if (!ref) return;

            try {
                const response = await fetch(`${apiUrl}/app/verify-payment/${ref}`);
                const data = await response.json();
                setStatus(data.status);
                console.log("verified")
            } catch (error) {
                console.error("Payment verification failed", error);
                setStatus("Failed to verify payment");
            }
            };

            verifyPayment();
        }, [ref, apiUrl]);
    useEffect(() => {
        const fetchPaymentLink = async () => {
            try {
                const response = await fetch(`${apiUrl}/app/dashboard`, {
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
    }, [apiUrl]);

    
    const handlePayment = () => {
        if (userData?.paymentURL) {
            window.location.href = userData.paymentURL; // Redirect to external URL
        } else {
            alert("Payment URL not available");
        }
    };

    
    if (loading) {
        return <div className=" h-[85vh] flex justify-center items-center">
            <Image src={spinner} className="w-16 h-16 animate-spin" alt="Loading" />
            </div>;
    }

    return (
        <section className="flex flex-col px-5 md:px-20 lg:px-[238px] my-10 sm:items-center">
            <Heading 
                heading="Application form"
                classname="text-center w-fit px-6"
                subHeading="Take the first step toward innovation, complete your application and join the competition!"
            />

            {status}
            {userData.paymentURL && (
                
                <div className="bg-primary_subtle rounded-2xl w-fit px-4 sm:px-16 lg:px-20 py-4 flex flex-col items-center gap-4 text-center inter">
                    <p className="text-greyscale_subtitle text-lg">To participate in the contest, a registration fee of N5,000 is required. Complete the payment process to proceed with the appliation</p>
                    <button onClick={handlePayment} className="bg-primary text-white px-5 py-3 rounded-full w-[240px]">Proceed to payment</button>
                </div>
            )}
            
            {user?.role === "lead" ? (
                <>

                    <div className="mt-10 h-full flex flex-col py-6 md:border gap-10 md:px-20 md:pt-10 ">
                        
                        <form onSubmit={handleSubmit(handleCreateTeam)} className=" max-h-full w-full flex gap-2">
                            
                            <div className="w-full flex flex-col gap-4">
                                <h3 className=" text-2xl font-bold text-start">Basic Information</h3>

                                <div className="flex flex-col gap-8 sm:grid items-center grid-cols-2">
                                    <Input 
                                        label="Full name"
                                        type="text"
                                        placeholder={user.firstName}
                                        disabled={true}
                                    />
                                    <Input 
                                        label="Department"
                                        type="text"
                                        placeholder={user.department}
                                        disabled={true}
                                    />
                                    <Input 
                                        label="Email address"
                                        type="email"
                                        placeholder={user.email}
                                        disabled={true}
                                    />
                                    <div className="w-full">
                                    <Input
                                        label="Team Name"
                                        type="text"
                                        {...register("teamName")}
                                        placeholder={userData.team ? userData.team.team_name : "Enter team name"}
                                        disabled={userData.team ? true : false}
                                    />
                                        {inviteCode && <p>Invite Code: {inviteCode}</p>}
                                        {errors.teamName && <p className="text-red-500">{errors.teamName.message}</p>}
                                    </div>
                                </div>
                                    <div className="w-full">
                                        
                                    <ButtonBlue classname={"md:w-[395px] text-black w-[100%] sm:w-[335px] ml-auto"}>Submit</ButtonBlue>
                                    </div>
                            </div>
                        </form>
                        
                        {userData?.team && (
                                    
                            <div className=" flex flex-col gap-3 bg-success_subtle xs:w-full p-4">
                                <h3 className="text-[28px] font-semibold">Team Code Generated!</h3>
                                <p>Share this code with teammates to join and confirm their participation: <strong>{userData.team.invite_code}</strong> </p>

                            </div>
                        )}


                        <SolutionForm 
                            disabled={!userData.team}
                        />
                    </div>

                </>
            ) :
            <h3 className="text-4xl">Hold up, you shouldn&apos;t be here!</h3>}
        </section>

    )
}