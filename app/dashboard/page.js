"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Heading from "../components/landing_page/header";
import UserCard from "./components/userCard";
import Progress from "./components/progress";
import progressData from "../data/progressData";

import Unavailable from '../../public/unavailable.png'
import ButtonBlue from "../ui/buttonBlue";
import Modal from "./components/modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loader from "../components/loader";
import useTeamStore from "../store/joinTeamStore";
import useModalStore from "../store/modalStore";
import useUserStore from "../store/userStore";
import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { useJoinTeam } from "../api/joinTeam";
import useDashboardQuery from "../api/userDahsboard";
import useDashboardStore from "../store/useDashboardStore";

const currentDate = new Date();
const nextStepIndex = progressData.findIndex(progress => new Date(progress.date) > currentDate);

async function fetchDashboardData(userData) {
    try {
      const response = await fetch('/api/dashboard', { // Assuming your API route is /api/dashboard
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any necessary authorization headers, e.g., if you are using JWT:
          // 'Authorization': `Bearer ${userData.token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
const Dashboard = () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
    
    const [userData, setUserData ] = useState()
    const [ loading, setLoading ] = useState(false)
    const [ errors, setError ] = useState("")
    const { user, loadUserFromStorage } = useUserStore()
    const { inviteCode, setInviteCode, message, error: teamError} = useTeamStore();
    const { mutate, isLoading, error} = useJoinTeam(apiUrl);

    const router = useRouter()

    // pending zustand and query implementation
    useEffect(() => {
        const fetchUserData = async () => {
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

        fetchUserData();
    }, [apiUrl]);

    const { modalOpen, openModal, closeModal } = useModalStore()
    useEffect(() => {
        loadUserFromStorage()
    }, []);


    if (loading) {
        return <div className="w-full h-full flex justify-center items-center">
                    <Loader />
                </div>;
    }
    if (errors) {
        return <div className="text-red-500">{errors}. <Link className="text-primary underline" href={'/auth'}>Login</Link> </div>;
    }

    if (!user) {
        return <div>No user data available</div>;
    }

    const handlePayment = () => {
        router.push('/application')
    };

    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            
            {userData?.team ? (
                <>
                    {/* Welcome Message */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-greyscale_title">
                            Welcome, {user.firstName}!
                        </h1>
                        <p className="text-greyscale_subtitle">You&#34;re doing great, keep innovating!</p>
                    </div>
                    <hr />

            {/* Team Section */}
                    <section className="flex flex-col gap-6 p-4 lg:pb-[55px] shadow-xl rounded-xl">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-medium text-greyscale_title">Team {userData.team.team_name}</h1>
                            {user.role === "lead" && (
                                <p>Invite Code: {userData.team.invite_code}</p>
                            )}
                            <p className="text-greyscale_subtitle">A team of digital pioneers shaping the future. </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Team Members</h2>
                            <div className="flex flex-col gap-4">
                                <UserCard 
                                    initials={user.initials}
                                    name={user.firstName}
                                    role={user.role === "lead" ? "Lead" : "Member"}
                                />
                                <div className="flex flex-col w-[100%] lg:flex-row gap-4">
                                    {userData?.members
                                        ?.filter((member) => member.first_name !== user.firstName && member.role !== user.role && member.initials !== user.initials) // Exclude logged-in user
                                        .map((member, index) => (
                                            
                                            <UserCard
                                                key={index}
                                                initials={member.initials}
                                                name={member.first_name}
                                                role={member.role === 'member'? 'Member': 'Lead'}
                                                classname="lg:w-[25%]"
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="p-8 rounded-2xl flex flex-col gap-6 w-full shadow-lg">
                        <h1 className="text-2xl font-medium text-greyscale_title">Competition Progress</h1>
                        <div className="flex flex-col gap-1">
                            {progressData.map((progress, index) => (
                                <Progress
                                    key={progress.id}
                                    id={progress.id}
                                    title={progress.title}
                                    description={progress.description}
                                    active={progress.date}
                                    isLast={index === progressData.length - 1}
                                    isNext={index === nextStepIndex}
                                />
                            ))}
                        </div>
                    </section>
                    </>
                ) : (
                    <div className="text-center flex flex-col  items-center text-lg mx-auto">
                        <Image src={Unavailable} alt="Unavailable" />
                        <Heading
                            heading="You haven't joined a team yet."
                            classname="mt-12 mb-2"
                            />
                        <div className="flex flex-col gap-3 items-center">
                        { user.role === "lead" ? (
                            <>
                            <p className=" text-greysca">Create a new team to lead and inspire your group</p>
                            {userData && (<ButtonBlue onClick={handlePayment}>Create Team</ButtonBlue>)}
                        </>
                        ) : (
                            <>
                            <p className="">Collaborate with others by joining an existing team</p>
                            <ButtonBlue onClick={openModal}>Join Team</ButtonBlue>
                            </>
                        )
                        }
                        </div>
                    </div>
                )}
                {modalOpen && (
    <Modal
        modalClose={closeModal}>
        <h2 className="font-bold text-2xl">Join a Team</h2>
        <p>Enter the unique team code shared with you to join your team and participate in the competition</p>

        <input
            type="text"
            placeholder="Enter team code"
            className="w-full px-4 py-3 mt-8 mb-4 rounded-xl outline-none bg-greyscale_surface_subtle"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
        />
        <ButtonBlue classname="mx-auto w-[318px] sm:w-[240px]"
            onClick={() => mutate()}
        >
            {isLoading ? "Joining team..." : "Join Team"}
        </ButtonBlue>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {teamError && <p className="text-red-600 mt-4">{teamError}</p>}
    </Modal>
)}


            {/* Progress Section */}
        </div>
    );
};

export default Dashboard;