"use client";

import { useState } from "react";
import Image from "next/image";

import Gallery from "./gallery";
import Event from "../../../public/event_main.png";
import Winner from "../../../public/winner.png";
import runnerUp from "../../../public/runner_up1.png";
import runnerup2 from "../../../public/runner_up2.png";

export default function Events() {
  const [activeView, setActiveView] = useState("");

  const handleView = (view) => {
    setActiveView(view);
  };
  const ActiveView = (view) => {
    return activeView === view
      ? "bg-primary_hover text-white"
      : "bg-primary_subtle";
  };

  return (
    <>
      <div className="w-full px-3 md:px-6 py-2 flex justify-center gap-2">
        {/* <button
                    onClick={() => handleView('past')}
                className={`${ActiveView("past")} w-[50%] lg:w-[539px]  transition duration-500 py-3 rounded-full`}>
                    Past Events
                </button>
                <button
                    onClick={() => handleView('upcoming')}
                    className={`${ActiveView("upcoming")} w-[50%] lg:w-[539px] transition duration-500 py-3 rounded-full`}>
                    Upcoming Events
                </button> */}
      </div>

      {activeView === "" && <Image alt="Event" src={Event} />}
      {activeView === "past" && (
        <div className="flex flex-col gap-8">
          <Gallery text={"Winners of Project GENIUS 2024"} image={Winner} />
          <Gallery text={"Trailblazer (1st Runner-Up)"} image={runnerUp} />
          <Gallery text={"Innovator (2nd Runner-Up)"} image={runnerup2} />
        </div>
      )}
    </>
  );
}
