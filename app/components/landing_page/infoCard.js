import Image from "next/image";
export default function InfoCard({icon, heading, subheading}) {
    return (
        <div className="w-[342px] md:w-[360px] h-[238px] px-[16px] py-[24px]
            bg-primary_subtle rounded-xl shadow-custom-primary
            flex justify-start text-start gap-[12px]
            hover:">
            <Image alt="info card" src={icon} 
                className="w-[48px] h-[48px] p-[8px]
                bg-primary rounded-full"
                />
            <div className="flex flex-col gap-[8px]">
                <h3 className="font-bold text-[20px]">{heading}</h3>
                <p className="inter">{subheading}</p>
            </div>


        </div>

    )
}