"use client"

import { useState } from "react";
import Link from "next/link";

export default function ButtonBlue({children, classname, onClick}) {
    return (
            <button
                className={`inter text-greyscale_surface_subtle px-[20px] py-[12px]
                    w-[330px] sm:w-[163px] rounded-full block text-center
                    transition duration-500 bg-primary
                    hover:bg-primary_hover  active:transform active:scale-95 ${classname}`}
                onClick={onClick}
            >
                {children}
            </button>
    )
}
