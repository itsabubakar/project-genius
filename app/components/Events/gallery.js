import Image from "next/image";

export default function Gallery({image, text}) {
    return(
        <div className=" flex flex-col p-3 md:p-8 gap-4 items-center">
            <Image src={image} alt="Winners"/>
            <h1 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold">{text}</h1>

        </div>
    )
}