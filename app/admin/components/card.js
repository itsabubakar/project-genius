import Image from "next/image";

export default function Card({ icon, count, description }) {
    return (
        <div className="w-full bg-greyscale_surface_subtle px-6 py-8 rounded-xl flex flex-col items-center text-center">
            <Image src={icon} />
            <h3 className="text-[52px]">{count}</h3>
            <p className="inter text-[18px] text-greyscale_text">{description}</p>
        </div>
    )
}