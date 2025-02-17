import Image from "next/image"
export default function Details({heading, description, image, classname}) {
    return(
        <div className={`flex flex-col items-center gap-[56px] md:gap-16 md:max-fit ${classname}`}>
            <div className="flex flex-col gap-[8px] md:text-start md:w-[580px]">
                <h1 className="text-[20px] font-bold">{heading}</h1>
                <p className="inter">{description}</p>
            </div>

            <Image src={image} className="" alt="detail image"/>


        </div>
    )
}