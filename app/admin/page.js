import Image from "next/image";
import Card from "./components/card";
import team from './assets/user-group.svg'
import eliminated from "./assets/eliminated.svg"
import points from "./assets/points.svg"
import { TeamRow } from "./components/teamBoard";
import { MiniBoard } from "./components/miniTeamBoard";

export default function Admin(){
    return(
      <div className="flex flex-col gap-6 md:gap-[30px]">
        <h3 className="text-3xl">Dashboard</h3>
        <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full bg-greyscale_surface_subtle px-5 py-3">
                <input placeholder="Search teams by name" className="w-full bg-transparent"/>

            </div>
            <button className="w-full sm:w-[161px] px-5 py-3 rounded-full bg-primary text-white">
                export data
            </button>
        </div>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 w-full gap-8">
            <Card icon={team} count={20} description={"Teams Applied"}/>
            <Card icon={eliminated} count={4} description={"Submissions"}/>
            <Card icon={points} count={74} description={"Average Points"}/>
            <Card icon={eliminated} count={4} description={"Teams Eliminated"}/>
        </section>

        <div className="overflow-x-auto hidden md:flex">
          <table className=" inter min-w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-greyscale_surface_subtle text-greyscale_title border-b">
                <th className="px-6 py-3 text-left font-normal">Team name</th>
                <th className="px-6 py-3 text-left font-normal">Members</th>
                <th className="px-6 py-3 text-left font-normal">Points</th>
                <th className="px-6 py-3 text-left font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              <TeamRow teamName={"Tech Titans"} members={5} points={72} status={"Safe"} />
              <TeamRow teamName={"Tech Ignite"} members={5} points={58} status={"Safe"} />
              <TeamRow teamName={"The Idealators"} members={3} points={30} status={"Eliminated"} />
            </tbody>
          </table>
          
        </div>
        {/* Mobile view team render */}
        <MiniBoard teamName={"Tech Titan"} status={"Safe"} members={5} points={72} />
        <MiniBoard teamName={"The Idealators"} status={"Safe"} members={5} points={63} />
        <MiniBoard teamName={"Happy Trails"} status={"Eliminated"} members={5} points={52} />
      
      </div>
    )
}