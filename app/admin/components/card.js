import Image from "next/image";

export default function Card({ icon, count, description }) {
    return (
        <div className="w-full bg-primary_subtle px-6 py-8 rounded-xl flex flex-col">
            <div className="p-2 bg-white w-fit rounded-full">
                <Image src={icon} width={40} alt="" />
            </div>
            <p className="inter text-[18px] text-greyscale_subtitle">{description}</p>
            <h3 className="text-[40px] my-0 font-bold">{count}</h3>
        </div>
    )
}