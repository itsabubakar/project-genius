import { motion } from "framer-motion"
import Image from "next/image"
import ButtonBlue from "../ui/buttonBlue"
import ButtonGlass from "../ui/buttonGlass"
import slideLeft from "../motion/slideLeft"
import pageTransition from "../motion/pageTransition"
import teamElement from "../../public/svg/team_element.svg";

export const TeamModal = ({selectedTeam, closeModal, openEdit}) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideLeft}
            transition={pageTransition}
            onClick={(e) => e.stopPropagation()}
            className="px-6 py-8 flex flex-col gap-8 mx-5 rounded-2xl text-black bg-greyscale_background_light text-center w-[343px] md:w-[408px] md:text-start"
        >
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#BDCFFF] w-fit border-8 border-primary_subtle rounded-full">
                        <Image src={teamElement} alt="" />
                    </div>
                <p>X</p>
                </div>
                <div>
                    <h3 className="text-2xl">Choose An Action for</h3>
                    <p className=" font-normal text-greyscale_text">What would you like to do for {selectedTeam}?</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full">
                <ButtonGlass onClick={closeModal} classname={"w-full sm:w-full lg:w-full text-primary_dark border-primary_dark"}>View Details</ButtonGlass>
                <ButtonBlue onClick={openEdit} classname={"w-full sm:w-full lg:w-full"}>Edit Score</ButtonBlue>
            </div>
        </motion.div>
    )
}