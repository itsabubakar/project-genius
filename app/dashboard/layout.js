"use client";
import overview from "../../public/svg/overview.svg";
import overviewBlack from "../../public/icons/black_overview.svg";
import rank from "../../public/icons/rank.svg";
import rankBlack from "../../public/icons/rankBlack.svg";
import profile from "../../public/icons/profile.svg";
import profileBlack from "../../public/icons/profileBlack.svg";
import help from "../../public/icons/help.svg";
import helpBlack from "../../public/icons/helpBlack.svg";
import logout from "../../public/icons/logout.svg";

import Image from "next/image";
import Logo from "../ui/logo";
import Menu from "../../public/svg/menu.svg";
import UserCard from "./components/userCard";
import { useEffect, useState } from "react";
import Help from "./sections/help";
import UpdateProfile from "./sections/updateProfile";
import Footer from "../footer";
import { useRouter } from "next/navigation";

function Layout({ children }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  const isActive = (tab) => {
    return activeTab === tab ? "bg-primary text-white" : "";
  };

  const handleLogout = async () => {
    localStorage.removeItem("user"); // Remove token from storage
    router.replace("/");
    try {
      const response = await fetch(
        "https://project-genius-back-end.onrender.com/auth/disconnect",
        {
          method: "DELETE",
        }
      );

      if (response.status === 204) {
        console.log("User logged out successfully.");
      } else {
        console.error("Logout failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 px:4 md:px-6 min-h-screen py-2">
        <header
          className="md:hidden sticky top-0 h-[48px] sm:h-[80px] px-[16px] sm:px-[32px] md:px-[40px]
            font-outfit flex justify-between items-center bg-white z-50"
        >
          <Logo classname="text-xl sm:text-[28px] lg:text-2xl" />

          <div className="flex gap-[32px] items-center">
            <div>
              <Image
                src={Menu}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
                alt="menu icon"
              />
            </div>
          </div>
        </header>

        {/* Sidebar  *** side bar is kept hidden for the meantime */}
        <aside className=" inter px-4 lg:px-5 hidden md:flex py-8 flex-col gap-6 w-full md:relative fixed font-medium h-screen md:w-[260px] lg:w-[300px] bg-white">
          <Logo
            classname={"hidden md:flex text-2xl font-extrabold cursor-pointer"}
          />

          {user && (
            <UserCard
              initials={user.initials}
              name={user.firstName}
              role={user.role}
              classname={"w-full"}
            />
          )}

          <nav className="flex flex-col w-full gap-8 cursor-pointer">
            <ul className="flex w-full flex-col  gap-8">
              <li
                onClick={() => handleTab("overview")}
                className={`${isActive(
                  "overview"
                )} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center
                `}
              >
                <Image src={isActive("overview") ? overview : overviewBlack} />{" "}
                Overview
              </li>
              <li
                className={`text-greyscale_disabled h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center
                `}
              >
                <Image
                  src={isActive("rank") ? rank : rankBlack}
                  className="text-primary"
                />
                Rank and Progress
              </li>
              <li
                className={`${isActive(
                  "update-profile"
                )} text-greyscale_disabled h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center
                `}
              >
                <Image
                  src={isActive("update-profile") ? profile : profileBlack}
                />{" "}
                Update profile
              </li>
              <li
                onClick={() => handleTab("help")}
                className={`${isActive(
                  "help"
                )} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center `}
              >
                <Image src={isActive("help") ? help : helpBlack} />
                Find help
              </li>
            </ul>

            <hr className="" />
            <button
              onClick={handleLogout}
              className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center "
            >
              <Image src={logout} /> Logout
            </button>
          </nav>
        </aside>

        {menuOpen && (
          <aside className="inter z-50 px-4 lg:px-5 mt-8 flex md:hidden py-8 flex-col gap-6 w-full md:relative fixed font-medium h-screen md:w-[260px] lg:w-[300px] bg-white">
            {user && (
              <UserCard
                initials={user.initials}
                name={user.firstName}
                role={user.role}
                classname={"w-full"}
              />
            )}
            <nav className="flex flex-col w-full gap-8 cursor-pointer">
              <ul className="flex w-full flex-col gap-8">
                <li
                  onClick={() => {
                    handleTab("overview");
                    setMenuOpen(!menuOpen);
                  }}
                  className={`${isActive(
                    "overview"
                  )} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center`}
                >
                  <Image
                    src={isActive("overview") ? overview : overviewBlack}
                  />{" "}
                  Overview
                </li>
                <li
                  className={` text-greyscale_disabled  h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center`}
                >
                  <Image src={isActive("rank") ? rank : rankBlack} /> Rank and
                  Progress
                </li>
                <li
                  className={`${isActive(
                    "update-profile"
                  )} text-greyscale_disabled h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center`}
                >
                  <Image
                    src={isActive("update-profile") ? profile : profileBlack}
                  />{" "}
                  Update profile
                </li>
                <li
                  onClick={() => {
                    handleTab("help");
                    setMenuOpen(!menuOpen);
                  }}
                  className={`${isActive(
                    "help"
                  )} h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center`}
                >
                  <Image src={isActive("help") ? help : helpBlack} /> Find help
                </li>
              </ul>
              <hr />
              <button
                onClick={handleLogout}
                className="h-11 px-4 rounded-lg py-[10px] gap-3 flex items-center"
              >
                <Image src={logout} /> Logout
              </button>
            </nav>
          </aside>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Content */}
          <main className="flex-1 px-4 py-6 md:px-6 lg:p-8 bg-greyscale_background_light">
            {activeTab === "overview" && children}
            {activeTab === "help" && <Help />}
            {activeTab === "update-profile" && <UpdateProfile />}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Layout;
