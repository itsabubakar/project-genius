import { Suspense } from "react";
import Application from "./application";


import Image from "next/image";
import spinner from "../../public/svg/spinner.svg";
import Loader from "../components/loader";

export default function Page() {
    return (
        <Suspense fallback={<div className="w-full h-full flex justify-center items-center">
            <Loader />
        </div>}
        >
            <Application />
        </Suspense>
    )
}