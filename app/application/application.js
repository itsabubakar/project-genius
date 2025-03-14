"use client"
import Input from "../components/application/input";
import Heading from "../components/landing_page/header";
import Image from "next/image";
import spinner from "../../public/svg/spinner.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import SolutionForm from "./solution";
import { useEffect, useState } from "react";
import ButtonBlue from "../ui/buttonBlue";
import { useRouter, useSearchParams } from "next/navigation";

import tick from "../../public/icons/tick_green.svg"
import cancel from "../../public/icons/cancel.svg"

const schema = yup.object().shape({
    teamName: yup.string().required("Team Name is required").min(3, "Must be at least 3 characters"),
});


export default function Application(){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;

    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);
    const [inviteCode, setInviteCode] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    
    const router = useRouter()
    const searchParams = useSearchParams();
    const ref = searchParams.get("trxref")

    const [status, setStatus] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [paymentError, setPaymentError] = useState('');
    const [popUp, setPopUp] = useState(true);

    const hidePopUp = () => {
        setPopUp(false);
    }



    useEffect(() => {
        const fetchPaymentStatus = async () => {
            try {
                const response = await fetch(`${apiUrl}/app/payment/paid`, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log("Payment status data:", data);
                setPaymentStatus(data.is_paid);
            } catch (error) {
                console.error("Error fetching payment status:", error);
                setPaymentError("Failed to fetch payment status. Please try again later.");
            }
        };
    
        fetchPaymentStatus();
    }, [apiUrl]);

    useEffect(() => {
        const verifyPayment = async () => {
            if (!ref) return;

            try {
                const response = await fetch(
                    `${apiUrl}/app/verify-payment/${ref}`
                );

                if (!response.ok) {
                    throw new Error("Failed to verify payment");
                }

                const data = await response.json();
                console.log("Working")
                setStatus(data.status);
                console.log("done")
            } catch (err) {
                setError("Payment verification failed");
            } finally {
                setLoading(false);
            }
        };

        verifyPayment();
    }, [ref]);
      
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
        setLoading(true);
        
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
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                setError(result.message || "Something went wrong");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Failed to create team. Please try again.");
        }
        finally {
            setLoading(false)
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

            
            {paymentStatus && (
                
                <div className={`${!popUp ? 'hidden': 'flex'} items-center gap-4 bg-success_subtle w-full rounded-2xl p-4 `}>
                    <div className="p-3 w-fit h-fit border-8 rounded-full border-success_border">
                        <Image src={tick} width={40} height={40} />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-2xl">Payment Successful</h3>
                        <p className="inter font-normal">Thank you for completing your registration payment. You can now proceed to finalize your application.</p>
                    </div>

                    <div on className="ml-auto" onClick={hidePopUp}>
                        <Image src={cancel} alt="Cancel Icon" width={40} height={40} />
                    </div>


                
                </div>
    
            )}
        
        
            
            {user?.role === "lead" ? (
                <>

                    <div className="mt-10 h-full flex flex-col py-6 md:border rounded-xl gap-10 md:px-20 md:pt-10 ">
                        
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
                                        className={`${errors.teamName ? "border-error_dark" : ""}`}
                                        placeholder={userData?.team?.team_name ?? "Enter team name"}
                                        disabled={!!userData?.team && status === 'success' ? true : false }
                                    />
                                        {inviteCode && <p>Invite Code: {inviteCode}</p>}
                                        {errors.teamName && <p className="text-red-500">{errors.teamName.message}</p>}
                                    </div>
                                </div>
                                {!userData?.team && (
                                    
                                    <div className="w-full">
                                        
                                        <ButtonBlue classname={"md:w-[395px] text-black w-[100%] xs:w-full sm:w-[335px] ml-auto"}>{loading ? <Image className="animate-spin mx-auto" src={spinner}/> : 'Create team code'}</ButtonBlue>
                                    </div>
                                )}
                            </div>
                        </form>
                        
                        {userData?.team && (
                                    
                            <div className=" flex flex-col gap-3 bg-success_subtle xs:w-full p-4">
                                <h3 className="text-[28px] font-semibold">Team Code Generated!</h3>
                                <p>Share this code with teammates to join and confirm their participation: <strong>{userData.team.invite_code}</strong> </p>

                            </div>
                        )}


                        <SolutionForm 
                            disabled={true}
                        />
                    </div>

                </>
            ) :
            <h3 className="text-4xl">Hold up, you shouldn&apos;t be here!</h3>}
        </section>

    )
}