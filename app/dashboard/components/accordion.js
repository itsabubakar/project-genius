import { useState } from "react"
import Image from "next/image"
import minus from "../../../public/icons/minus.svg"
import plus from "../../../public/icons/plus.svg"
export default function Accordion({question, answer}) {
    const [openAccordion, setOpenAccordion] = useState(false)

    const handleAccordion = () => {
        if(!openAccordion) {
            setOpenAccordion(true)
        }
        else {
            setOpenAccordion(false)
        }
    }
    return (
        <article
            onClick={handleAccordion}
            className={`text-primary_pressed flex gap-3  p-4 shadow-lg rounded-lg`}>
            <div>
                {!openAccordion ? <Image src={plus} />: <Image src={minus} />}
            </div>
            <div  className=" flex flex-col flex-wrap">
                

            <h4 className="flex flex-col gap-2">{question}</h4>
            <p className={` ${openAccordion ? "block" : "hidden"} text-black mt-2`}>{answer}</p>


            </div>
        </article>
    )
}