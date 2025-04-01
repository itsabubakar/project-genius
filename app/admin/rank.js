"use client"
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../auth/modal";
import Input from "../components/application/input";
import Backdrop from "../modals/backdrop";
import useModalStore from "../store/modalStore";
import ButtonBlue from "../ui/buttonBlue";
import ButtonGlass from "../ui/buttonGlass";
import TableRow from "./components/tableItem";
import slideLeft from "../motion/slideLeft";
import pageTransition from "../motion/pageTransition";
import { useState } from "react";

export default function Rank() {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [editedScore, setEditedScore] = useState('');
    const [modalOpen, setModalOpen] = useState(false)
    const [teams, setTeams] = useState([
        { position: 1, teamName: "Tech Titans", points: 70 },
        { position: 2, teamName: "Code Warriors", points: 69 },
        { position: 3, teamName: "Data Dynamos", points: 54 },
        { position: 4, teamName: "Algorithm Aces", points: 40 },
    ]);
    const openModal = (team) => {
        setSelectedTeam(team);
        setEditedScore(team.points.toString());
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedTeam(null);
        setEditedScore('');
    };

    const handleSave = () => {
        setTeams(teams.map(team => {
            if (team.position === selectedTeam.position) {
                return { ...team, points: parseInt(editedScore, 10) };
            }
            return team;
        }));
        closeModal();
    };
    return (
        <section className="w-full flex flex-col gap-6">
            <h3 className="text-center text-[32px] font-bold">Rank & Progress</h3>
            <div className="w-full h-[1px] bg-greyscale_disabled"></div>

            {/** User Team Ranking */}
            <div className=" inter flex flex-col gap-[28px]">
                <div>
                    
                    <h3 className="font-bold text-2xl flex items-center gap-2">Round One <span className="px-2 py-1 bg-[#FEF8E7] font-normal rounded-2xl text-sm text-[#F3BB1B]">Ongoing</span></h3>
                    <h2 className="text-[18px] text-greyscale_text ">Update team rankings</h2>
                </div>
                <div className="rounded-2xl w-full flex gap-4 border border-greyscale_border py-3 pl-4 pr-8">
                    <div className=" bg-[#FFCD5F] text-[#8B4513] flex justify-center items-center rounded-full w-11 h-11 px-3 py-2">
                        1
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p>Tech Titans</p>
                        <p>70</p>
                    </div>
                </div>
            </div>
            <table className="w-full">

                {/* Header */}
                <thead>
                    <tr className="flex gap-2 px-4 py-2 text-sm text-greyscale_text">
                        <th className="text-start font-normal">RANK</th>
                        <th className="text-start font-normal">TEAM NAME</th>
                        <th className="text-start font-normal ml-auto">POINTS</th>
                    </tr>
                </thead>
                <tbody className="inter flex flex-col gap-2">
                {teams.map((team) => (
                    <TableRow
                        key={team.position}
                        position={team.position}
                        teamName={team.teamName}
                        points={team.points}
                        onClick={() => openModal(team)}
                    />
                ))}
                </tbody>
            </table>
            <AnimatePresence mode="wait">
                
            {modalOpen && (
                    <Backdrop onClose={closeModal}>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={slideLeft}
                            transition={pageTransition}
                            onClick={(e) => e.stopPropagation()}
                            className="px-6 py-8 flex flex-col gap-2 mx-5 rounded-2xl text-black bg-greyscale_background_light text-center w-[343px] md:w-[408px] md:text-start"
                        >
                            <p>Edit {selectedTeam.teamName}'s score</p>
                            <input
                                className="outline-none bg-greyscale_surface_subtle py-3 px-4"
                                placeholder="Enter team's score"
                                value={editedScore}
                                onChange={(e) => setEditedScore(e.target.value)}
                            />
                            <div className="flex flex-col md:flex-row gap-3 w-full">
                                <ButtonGlass onClick={closeModal} classname={"w-full sm:w-full lg:w-full text-greyscale_text border-greyscale_text"}>Cancel</ButtonGlass>
                                <ButtonBlue onClick={handleSave} classname={"w-full sm:w-full lg:w-full"}>Save</ButtonBlue>
                            </div>
                        </motion.div>
                    </Backdrop>
            )}
            </AnimatePresence>


        </section>
    )
}