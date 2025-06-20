import Backdrop from "@/app/modals/backdrop"
import { TeamScoreModal } from "../modals/teamScore"
import { TeamMembersModal } from "../modals/teamModal"
import { AnimatePresence, motion } from "framer-motion"
import TableRow from "./tableItem"
import useModalStore from "@/app/store/modalStore"
import { useState } from "react"
import ButtonGlass from "@/app/ui/buttonGlass"

export const Ranking = ({}) => {
    
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
    return (
        <div>
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
                            className="px-4 w-full bg-[#00000011] fixed inset-0 flex items-center justify-center z-50"
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
        </div>
    )
}