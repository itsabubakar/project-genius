"use client"
import { useEffect, useState } from "react"
import tick from "../../../public/icons/tick.svg"
import { set } from "zod"
import Image from "next/image"

function Progress({id, title, description, active, isNext, isLast, classname}) {
    const [schedule, setDeadline] = useState(true)

    useEffect(() => { 
        const currentDate = new Date()
        const scheduled = new Date(active)
        setDeadline(currentDate > scheduled)
    },[active])
    return (
        <div className="flex gap-4 inter h-fit">
            <div className="flex flex-col gap-1 items-center">

                {schedule ? (
                    <div className="bg-primary rounded-full w-5 h-[20px] flex justify-center items-center ">
                        <Image src={tick} alt="tick" />
                    </div>

                    ) : isNext ? (
                            <div className="rounded-full w-5 h-5 flex justify-center items-center text-white border-2 border-primary_light ">
                                <div className="w-[14px] font-normal h-[14px] text-xs flex justify-center items-center bg-primary_light rounded-full">
                                    {id}
                                </div>
                            </div>
                    ) : (
                        <div className="rounded-full w-5 h-5 text-xs flex justify-center items-center text-greyscale_border bg-greyscale_surface_subtle border-2 border-greyscale_border">{id}</div>
                    )
                }
                
                {!isLast &&
                    <div className={`w-[2px] h-[86px] rounded-full ${schedule ? 'bg-primary' : isNext ? "bg-primary_light" : 'bg-greyscale_border' }`}></div>
                }
            </div>

            <div>
                <h1 className="text-lg font-medium">{title}</h1>
                <p className="text-greyscale_text">{description}</p>
            </div>
        </div>
    )

}

export default Progress