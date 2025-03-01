"use client"
import Input from "../components/application/input";
import Heading from "../components/landing_page/header";
import Image from "next/image";
import spinner from "../../public/svg/spinner.svg";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import SolutionForm from "./solution";


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

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });


    const handleCreateTeam = async () => {
        setError("");
        const res = await fetch(`${apiUrl}/teams/`, {
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
    }, []);
    
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
        }, [ref]);
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
                classname="text-center w-fit px-6"
                subHeading="Take the first step toward innovation, complete your application and join the competition!"
            />
            {user?.role === "lead" ? (
                <>

                    <div className="h-full flex flex-col py-6 md:border gap-10 md:px-20 md:pt-10 "><div>Payment Status: {status}</div>
                        
                        <form onSubmit={handleSubmit(handleCreateTeam)} className=" max-h-full w-full flex gap-2">
                            
                            <div className="w-full flex flex-col gap-4">
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
                                    <div className="w-full">
                                        
                                        <Input
                                            label="Team Name"
                                            type="text"
                                            value={teamName}
                                            {...register("teamName")}
                                            placeholder={user.team ? user.team : "place"}
                                            disabled={user.team ? true : false}
                                            onChange={(e) => setTeamName(e.target.value)} 
                                        />
                                        {inviteCode && <p>Invite Code: {inviteCode}</p>}
                                        {errors.teamName && <p className="text-red-500">{errors.teamName.message}</p>}
                                    </div>
                                </div>
                                {userData.team && (
                                    
                                <div className=" flex flex-col gap-3 bg-success_subtle w-[314px] xs:w-full p-4">
                                    <h3 className="text-[28px] font-semibold">Team Code Generated!</h3>
                                    <p>Share this code with teammates to join and confirm their participation: <strong>{userData.team.invite_code}</strong> </p>

                                </div>
                                )}
                            </div>
                        </form>


                        <SolutionForm />
                    </div>

                </>
            ) :
            <h3 className="text-4xl">Hold up, you shouldn't be here!</h3>}
        </section>

    )
}