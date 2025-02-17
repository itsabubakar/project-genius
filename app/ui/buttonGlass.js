import Link from "next/link"
export default function ButtonGlass({children, classname, onClick}) {
    return (
        <button type="button"
            className={`inter text-Primary_border_dark border-primary_pressed border-2 px-[20px] py-[12px]
                w-[330px] xm:w-[350px] sm:w-[163px] rounded-full block text-center
                hover:text-primary_hover hover:border-primary_hover active:border-primary_pressed active:bg-primary_subtle active:transform active:scale-95 transition duration-500 ${classname}`}
            onClick={onClick}
            >
            {children}
        </button>
    )
}