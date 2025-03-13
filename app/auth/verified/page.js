import { Suspense } from "react";
import Verified from "./verification";
import Image from "next/image";
import spinner from "../../../public/svg/spinner.svg";

export default function Page() {
    return (
        <Suspense
            fallback={<div className=" h-[85vh] flex justify-center items-center">
                    <Image src={spinner} className="w-16 h-16 animate-spin" alt="Loading" />
                </div>}
        >
            <Verified />
        </Suspense>
    )
}