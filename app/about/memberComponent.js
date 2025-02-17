import Image from "next/image"
export default function TeamComponent({src, name, title}){
    return (
        
        <article className="flex flex-col p-8 gap-8">
            <Image src={src} className="w-60 h-60 rounded-2xl" />
            <div className="w-60">
                <h4 className=" text-2xl font-bold">{name}</h4>
                <p className="inter">{title}</p>
            </div>
        </article>
    )
}