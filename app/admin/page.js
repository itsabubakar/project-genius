import Image from "next/image";
import Card from "./components/card";
import team from './assets/user-group.svg'
import eliminated from "./assets/eliminated.svg"
import points from "./assets/points.svg"

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
            <section className="flex flex-col md:flex-row w-full gap-8">
                <Card icon={team} count={20} description={"Teams Applied"}/>
                <Card icon={eliminated} count={4} description={"Teams Eliminated"}/>
                <Card icon={points} count={74} description={"Average points per team"}/>
            </section>

    <div className="overflow-x-auto">
      <table className="inter min-w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-greyscale_subtitle text-greyscale_surface_subtle border-b">
            <th className="px-6 py-3 text-left font-normal">Team name</th>
            <th className="px-6 py-3 text-left font-normal">Members</th>
            <th className="px-6 py-3 text-left font-normal">Points</th>
            <th className="px-6 py-3 text-left font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">Tech Titan</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">72</td>
            <td className="px-6 py-4"><p className="px-4 w-fit rounded-full bg-success_light">Save</p></td>
          </tr>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">Tech Ignite</td>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">58</td>
            <td className="px-6 py-4"><p className="px-4 w-fit rounded-full bg-success_light">Save</p></td>
          </tr>
          <tr className="hover:bg-gray-50 ">
            <td className="px-6 py-4">The Idealators</td>
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">30</td>
            <td className="px-6 py-4"><p className="px-4 w-fit rounded-full bg-error_light">Eliminated</p></td>
          </tr>
        </tbody>
      </table>
    </div>
        </div>
    )
}