import Link from "next/link";

export default function Logo({classname, href}){
    return(
        <Link
            href={href}
            className={` font-extrabold cursor-pointer ${classname}`}
        >
            Project
            <span className="text-primary">
            Genius</span>
        </Link>
    )
}