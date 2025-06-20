import Image from "next/image";
import unavailable from "../../public/unavailable.png"
import ButtonGlass from "../ui/buttonGlass";
import { Ranking } from "./components/ranking";
import Button from "../ui/headerButton";

export default function Rounds() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-[36px] font-bold">Rounds</h1>
            <section className="flex flex-col gap-7 bg-white py-3 rounded-lg shadow-md">
                <h2 className="text-greyscale_text text-[28px]">Round One</h2>
                {/* Add your round list component here */}
                <Ranking />
                <ButtonGlass classname="sm:mx-auto w-full sm:w-[200px] md:w-[200px] lg:w-[200px]">Add Team</ButtonGlass>
            </section>

            <section>
                <h1 className="text-[36px] font-bold">Rounds</h1>
                    {/* Add your round list component here */}
                    <div className="flex flex-col gap-8 justify-center items-center">
                        <div className="flex flex-col items-center gap-12">
                            <Image src={unavailable} alt="unavailable" className="w-[335px] object-cover" />
                            <p>Add teams to this round to start organising and raking them</p>
                        </div>
                        <ButtonGlass classname="sm:mx-auto w-full sm:w-[200px] md:w-[200px] lg:w-[200px]">Add Team</ButtonGlass>

                    </div>
            </section>
        </div>
    );
}