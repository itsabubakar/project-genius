import Modal from "@/app/auth/modal";
import ButtonBlue from "@/app/ui/buttonBlue";
import ButtonGlass from "@/app/ui/buttonGlass";
import Image from "next/image";
import list from "../../../public/icons/list.svg";

export const TeamScoreModal = ({ selectedTeam, onChange, isOpen, closeModal, handleSave, editedScore}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            className="p-4 md:p-4 lg:p-4 md:w-[400px] lg:w-[400px] h-fit flex flex-col gap-8 rounded-2xl text-black bg-greyscale_background_light text-center md:text-start"
        >
            <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#BDCFFF] w-fit border-8 border-primary_subtle rounded-full">
                        <Image src={list} alt="" />
                    </div>
                    <p onClick={closeModal}>X</p>
                </div>
                <div>
                    <h3 className="text-2xl">Edit Score for {selectedTeam.teamName}</h3>
                    <p className="font-normal text-greyscale_text">Current Score: {selectedTeam.points}</p>
                </div>
            </div>

            <input
                type="number"
                value={editedScore}
                onChange={onChange}
                placeholder="Enter team's score"
                className="px-4 py-3 bg-greyscale_surface_subtle rounded-xl outline-none"
            />
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <ButtonGlass onClick={closeModal} classname={"w-full sm:w-full lg:w-full text-primary_dark border-primary_dark"}>Cancel</ButtonGlass>
                <ButtonBlue onClick={handleSave} classname={"w-full sm:w-full lg:w-full"}>Save</ButtonBlue>
            </div>
        </Modal>
    );
}