import Image from "next/image";
import unavailable from "../../public/unavailable.png"
import ButtonGlass from "../ui/buttonGlass";
import { Ranking } from "./components/ranking";
import Button from "../ui/headerButton";
import ButtonBlue from "../ui/buttonBlue";
import useModalStore from "../store/modalStore";
import Backdrop from "../modals/backdrop";
import { motion } from "framer-motion";
import { CheckTeam } from "./components/checkTeam";
import { useState } from "react";
import note from "../../public/icons/note.svg"
import { useDropdownStore } from "../store/dropdownStore";

export default function Rounds() {
    const { modalOpen, openModal, closeModal } = useModalStore()
    const { isOpen, toggleDropdown, closeDropdown } = useDropdownStore()
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(true)
        console.log(setChecked == true)
    }
    return (
        <div className="flex flex-col gap-4 md:gap-[30px] lg:gap-8">
            <h1 className="text-[36px]">Rounds</h1>
            <section className="flex flex-col gap-7 bg-white py-3 p-8 rounded-lg md:shadow-md">
                <div className="flex gap-3">
                    <h2 className="text-greyscale_text text-[28px]">Round One</h2>
                    <div className="w-fit h-fit rounded-lg p-2 bg-greyscale_surface_subtle">
                        <Image src={note} alt="" className="h-fit" />
                    </div>
                    <div className="w-[125px]">
                        
                        <div onClick={toggleDropdown} className="p-2 bg-primary_subtle rounded">
                            <p className="flex justify-between">Ongoing <span>\/</span></p>
                        </div>
                        {isOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{duration: 0.7}}
                            className="absolute z-50 bg-white shadow-md rounded-lg mt-2 w-[125px]">
                                <ul className="flex flex-col">
                                    <motion.li
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{duration: 0.3}} onClick={closeDropdown} className="border-b cursor-pointer hover:bg-greyscale_surface_subtle p-2 px-4">Ongoing</motion.li>
                                    <motion.li
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{duration: 0.6}} onClick={closeDropdown} className="border-b cursor-pointer hover:bg-greyscale_surface_subtle p-2 px-4">Completed</motion.li>
                                    <motion.li
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{duration: 0.9}} onClick={closeDropdown} className="border-b cursor-pointer hover:bg-greyscale_surface_subtle p-2 px-4">Upcoming</motion.li>
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>
                {/* Add your round list component here */}
                <Ranking />
                <ButtonGlass classname="sm:mx-auto w-full sm:w-[200px] md:w-[200px] lg:w-[200px]">Add Team</ButtonGlass>
            </section>

            <section className="shadow-md md:p-8 rounded-2xl">
                <h1 className="text-[36px] text-greyscale_text">Round</h1>
                    {/* Add your round list component here */}
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <div className="flex flex-col items-center gap-12">
                            <Image src={unavailable} alt="unavailable" className="w-[335px] object-cover" />
                            <p>Add teams to this round to start organising and raking them</p>
                        </div>
                        <ButtonGlass classname="sm:mx-auto w-full sm:w-[200px] md:w-[200px] lg:w-[200px]">Add Team</ButtonGlass>

                    </div>
            </section>
            <ButtonBlue onClick={openModal} classname="sm:mx-auto w-full sm:w-[200px] md:w-[200px] lg:w-[200px]">Add Round</ButtonBlue>
            {modalOpen && (
                
                <Backdrop onClose={closeModal}>
                    <motion.div
                        className="w-[343px] md:w-[517px] mx-4 rounded-2xl gap-6 p-6 bg-greyscale_background_light backdrop-blur-md inset-0 flex flex-col justify-center z-50"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: 100 , opacity: 0, scale: 0.4 }}
                        animate={{ y:0, opacity: 1, scale: 1,  }}
                        transition={{ duration: 4, type: "spring", stiffness: 700, damping: 90 }}
                        exit={{ opacity: 0, scale: 0.4, y: 100 }}
                    >
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold">Select Teams for this Round</h3>
                            <p className=" text-greyscale_text">Select teams to advance to the next round. Save to apply changes.</p>
                    
                        </div>
                        {
                            <CheckTeam onClick={handleCheck} check={checked} teamName={"kkk"} points={200} />
                        }
                        <div className="flex flex-col sm:flex-row gap-3">
                            
                            <ButtonGlass onClick={closeModal} classname="w-full sm:full md:w-full">Cancel</ButtonGlass>
                            <ButtonBlue onClick={closeModal} classname="w-full sm:full md:w-full">Confirm</ButtonBlue>
                            
                        </div>
                    </motion.div>
                </Backdrop>
            )}
        </div>
    );
}