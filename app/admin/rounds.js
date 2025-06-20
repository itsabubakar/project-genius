import ButtonBlue from "../ui/buttonBlue";
import ButtonGlass from "../ui/buttonGlass";
import { Ranking } from "./components/ranking";

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
        </div>
    );
}