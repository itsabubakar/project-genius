import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import element from "../../../public/svg/rank_elements.svg"
import { motion } from "framer-motion"
import { wrapperVariants } from "@/app/motion/variants/dropdown"
import cross from "../../../public/icons/cancel.svg"

export default function TableRow({ position, teamName, points, toRemoveTeam, openTeamScore, openTeamDetail, hideButton }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const toggleDropdown = (e) => {
        e.stopPropagation() // Prevent event from bubbling up to document
        setIsDropdownOpen((pv) => !pv)
        setIsDropdownOpen(!isDropdownOpen)
    }

    
    const handleMenuItemClick = (action) => {
        action()
        setIsDropdownOpen(false)
    }    
    const handleTeamDetailClick = () => {
        openTeamDetail() // This will trigger the modal opening
        setIsDropdownOpen(false)
    }

    const handleTeamScoreClick = () => {
        openTeamScore() // This will trigger the score editing
        setIsDropdownOpen(false)
    }

    return (
        <tr className="flex items-center border border-greyscale_surface_subtle rounded-2xl py-4 px-2 relative">
            {/* Rank */}
            <th className="w-12 flex justify-center mr-2">
                <div className={`${position === 1 ? "bg-[#FFCD5F] text-[#8B4513]"
                                : position === 2 ? "bg-[#D9D9D9] text-[#696969]"
                                : position === 3 ? "bg-[#E2731E] text-[#6D4319]"
                                : "border border-greyscale_border"
                } w-11 h-11 flex justify-center items-center rounded-full`}>
                    {position}
                </div>
            </th>
            <th className="flex gap-4 text-left font-medium">{teamName} <span>|</span> {points}</th>
            <th className="ml-auto font-medium mr-6 relative" ref={dropdownRef}>
                
                <div className="flex gap-2">
                    <button onClick={toggleDropdown} className="focus:outline-none">
                        <Image src={element} alt="Menu" />
                    </button>
                    <Image className={`${hideButton === true ? "hidden" : "flex"}`} onClick={toRemoveTeam} src={cross} alt="" />
                </div>
                
                {isDropdownOpen && (
                    <motion.div className="absolute right-0 w-[300px] bg-white shadow-lg z-10 rounded-lg">
                        <motion.div animate={isDropdownOpen ? "open" : "closed"} className="py-1">
                            <motion.ul
                                initial={wrapperVariants.closed}
                                variants={wrapperVariants}
                                style={{ originY: "top", translateX: "-10%" }}
                                className="inter flex flex-col rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
                            >
                                <motion.li 
                                        onClick={handleTeamScoreClick} className="block w-full text-left px-4 py-[10px] text-sm hover:bg-gray-100">
                                    Edit team&apos;s score
                                </motion.li>
                                <hr />
                                <motion.li 
                                        onClick={handleTeamDetailClick}
                                    className="block w-full text-left px-4 py-[10px] text-sm hover:bg-gray-100"
                                >
                                    View teams details
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </th>
        </tr>
    )
}