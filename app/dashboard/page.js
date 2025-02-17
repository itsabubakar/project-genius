"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import Heading from "../components/landing_page/header";
import UserCard from "./components/userCard";
import Progress from "./components/progress";
import progressData from "../data/progressData";

import spinner from "../../public/svg/spinner.svg";

import Unavailable from '../../public/unavailable.png'
import ButtonBlue from "../ui/buttonBlue";
import Modal from "./components/modal";
import Link from "next/link";

const currentStep = 1;

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    useEffect(() => {
        const fetchUserDashboard = async () => {
            try {
                const response = await fetch("https://project-genius-back-end.onrender.com/app/dashboard", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (response.status === 200) {
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

        fetchUserDashboard();
    }, []);

    if (loading) {
        return <div className="w-full h-full flex justify-center items-center">
            <Image src={spinner} className="w-16 h-16 animate-spin" alt="Loading" />
            </div>;
    }

    if (error) {
        return <div className="text-red-500">{error}. <Link className="text-primary underline" href={'/auth'}>Login</Link> </div>;
    }

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div className="flex flex-col gap-6 lg:gap-8">
            {/* Welcome Message */}
            <div className="flex flex-col gap-1">
                <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold text-greyscale_title">
                    Welcome back, {user.firstName}!
                </h1>
                <p className="text-greyscale_subtitle">You’re doing great, keep innovating!</p>
            </div>
            <hr />

            {/* Team Section */}
                {userData?.team ? (
                    <>
                    <section className="flex flex-col gap-6 p-4 lg:pb-[55px] shadow-xl rounded-xl">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl font-medium text-greyscale_title">{userData.team}</h1>
                            <p className="text-greyscale_subtitle">A team of digital pioneers shaping the future.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-semibold">Team Members</h2>
                            <div className="flex flex-col gap-4">
                                <UserCard 
                                    photo={photo}
                                    name={"Umar"}
                                    role={"Team Leader"}
                                />
                                <div className="flex flex-col w-[100%] lg:flex-row gap-4">
                                    <UserCard
                                        photo={photo}
                                        name={"Hamid"}
                                        role={"Team Member"}
                                        classname={"lg:w-[25%]"}
                                    />
                                    <UserCard
                                        photo={photo}
                                        name={"Baqir"}
                                        role={"Team Member"}
                                        classname={"lg:w-[25%]"}
                                    />
                                    <UserCard
                                        photo={photo}
                                        name={"Westie"}
                                        role={"Team Member"}
                                        classname={"lg:w-[25%]"}
                                    />
                                    <UserCard
                                        photo={photo}
                                        name={"John"}
                                        role={"Team Member"}
                                        classname={"lg:w-[25%]"}
                                    />
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
                                    isNext={index === currentStep + 1}
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
                            <ButtonBlue>Create Team</ButtonBlue></>
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
                    heading={"Application starts at 12th of March"}
                    subHeading="Use this time to organize your team and prepare for the competition"
                    modalClose={closeModal} 
                    
                
                >
                {/*
                    heading="Join a Team"
                    subHeading="Enter the unique team code shared with you to join your team and participate in the competition"

                    
                    <input type="text" placeholder="Enter team code" className="w-full px-4 py-3 mt-8 mb-4 rounded-xl outline-none bg-greyscale_surface_subtle" />
                    <ButtonBlue classname="mx-auto w-[318px] sm:w-[240px] ">Join Team</ButtonBlue>

                */}
                </Modal>
                    )}

            {/* Progress Section */}
        </div>
    );
};

export default Dashboard;