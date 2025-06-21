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
import Image from "next/image";
import { TeamModal } from "../modals/adminTeam";
import { TeamScoreModal } from "./modals/teamScore";
import { TeamMembersModal } from "./modals/teamModal";

export default function Rank() {
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [editedScore, setEditedScore] = useState('');
    const [modalOpen, setModalOpen] = useState(false)
    const { modalOpen: isModalOpen, openModal: openModalStore, closeModal: closeModalStore } = useModalStore();
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
     const openTeamModal = (team) => {
    setSelectedTeam(team);
    setShowTeamModal(true);
  };

  const openScoreModal = (team) => {
    setSelectedTeam(team);
    setEditedScore(team.points);
    setShowScoreModal(true);
  };

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
                    <tr className="flex gap-4 px-1 py-2 text-sm text-greyscale_text">
                        <th className="text-start font-normal">RANK</th>
                        <th className="text-start font-normal">TEAM NAME & POINTS</th>
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
                        openTeamScore={() => openScoreModal(team)}
                        openTeamDetail={() => openTeamModal(team)}
                    />
                ))}
                </tbody>
            </table>
            <AnimatePresence mode="wait">
                {showTeamModal && selectedTeam && (
                    <Backdrop onClose={() => setShowTeamModal(false)}>
                        <motion.div
                            className="px-4 w-full blur-md bg-[#00000011] fixed inset-0 flex items-center justify-center z-50"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 100 , opacity: 0, scale: 0.4 }}
                            animate={{ y:0, opacity: 1, scale: 1,  }}
                            transition={{ duration: 4, type: "spring", stiffness: 700, damping: 90 }}
                            exit={{ opacity: 0, scale: 0.4, y: 100 }}
                        >
                            <div className="w-full bg-white md:w-fit p-4 flex flex-col gap-6 md:gap-8 rounded-2xl">
                                <h3 className="text-3xl font-semibold flex justify-between">
                                    {selectedTeam.teamName}
                                    <span
                                    onClick={() => setShowTeamModal(false)}
                                    className="cursor-pointer"
                                    >
                                    X
                                    </span>
                                </h3>
                                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4">
                                    <TeamMembersModal
                                        teamName={selectedTeam.teamName}
                                        teamMember="John Doe"
                                        memberRole="Member"
                                        memeberEmail="jdvance@gmail.com"
                                        memberDept={"Engineering"}
                                    />
                                    <TeamMembersModal
                                        teamName={selectedTeam.teamName}
                                        teamMember="John Doe"
                                        memberRole="Lead"
                                        memeberEmail="jdvance@gmail.com"
                                        memberDept={"Engineering"}
                                    />
                                    {/* Add more team members as needed */}
                                </div>
                            </div>
                        </motion.div>
                    </Backdrop>
                )}

                {showScoreModal && selectedTeam && (
                    <Backdrop onClose={() => setShowScoreModal(false)}>
                    <TeamScoreModal
                        selectedTeam={selectedTeam}
                        isOpen={showScoreModal}
                        onChange={(e) => setEditedScore(e.target.value)}
                        closeModal={() => setShowScoreModal(false)}
                        handleSave={handleSave}
                        editedScore={editedScore}
                        setEditedScore={setEditedScore}
                    />
                    </Backdrop>
                )}
            </AnimatePresence>



        </section>
    )
}