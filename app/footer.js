"use client";
import insta from "../public/icons/instagram.svg";
import x from "../public/icons/x.svg";
import linkedin from "../public/icons/linkedin.svg";
import mail from "../public/icons/mail.svg";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";

import ButtonBlue from "./ui/buttonBlue";
import ButtonGlass from "./ui/buttonGlass";
import Subscribe from "./components/landing_page/subscribe.js";
import Link from "next/link";
import Logo from "./ui/logo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/about");
  };
  return (
    <footer
      className="bg-primary_dark text-greyscale_surface_subtle px-[20px] py-[64px] gap-16 sm:gap-14 mt-10
            flex flex-col md:items-center"
    >
      {/* <Subscribe /> */}

      <div className="flex flex-col gap-8 md:items-center lg:flex-row">
        <h2 className="text-3xl font-[800] sm:text-[44px] lg:text-[52px]">
          Turn Your Ideas into Reality
        </h2>

        <div className="flex flex-col gap-2 sm:flex-row-reverse mx-auto sm:mx-auto">
          <Link href={"/auth/create-profile"}>
            <ButtonBlue>Apply Now</ButtonBlue>
          </Link>
          <ButtonGlass
            classname={
              "border-greyscale_surface_subtle text-greyscale_surface_subtle"
            }
            onClick={navigateToAbout}
          >
            Learn More
          </ButtonGlass>
        </div>
      </div>

      <Logo
        classname="text-4xl font-[700] text-greyscale_surface_subtle
                md:text-center"
      />

      <div
        className=" md:mx-auto grid grid-cols-1 xs:grid-cols-2 gap-10
                md:grid-cols-4
                md:gap-[72px]"
      >
        {/* <div className="flex flex-col gap-7 xs:order-1">
          <h4 className="text-xl font-bold">About Us</h4>
          <ul className="flex flex-col gap-3 inter">
            <li>
              <Link href="/">Learn more</Link>
            </li>
            <li>
              <Link href="/">Our mission</Link>
            </li>
            <li>
              <Link href="/">Our vision</Link>
            </li>
          </ul>
        </div> */}

        <div className="flex flex-col gap-7">
          <h4 className="text-xl font-bold">Events</h4>
          <ul className="flex flex-col gap-3 inter">
            <li>
              <Link href="/events">Past highlights</Link>
            </li>
            <li>
              <Link href="/events">Upcoming events</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          <h4 className="text-xl font-bold">Partners & Sponsors</h4>
          <ul className="flex flex-col gap-3 inter">
            <li>
              <Link href="/">Meet our sponsors</Link>
            </li>
            <li>
              <Link href="/">Partnership opportunities</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-7 order-1">
        <h4 className="text-xl font-bold">Contact us</h4>
        <ul className="flex gap-3">
            <li>
                <Link href="https://www.facebook.com/projectgeniusng">
                    <IoLogoFacebook size={24}/>
                </Link>
            </li>
            <li>
                <Link href="https://www.instagram.com/_project_genius?igsh=MW1hajRjNnRucTk0ZA==">
                    <Image src={insta} alt="mail" />
                </Link>
            </li>
            <li>
                <Link href="https://x.com/_ProjectGENIUS?t=x-sjh39CT6uPx2bm34eSIQ&s=08">
                    <Image src={x} alt="mail" />
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/company/project-genius-ng/">
                    <Image src={linkedin} alt="mail" />
                </Link>
            </li>
            <li>
                <Link href="https://www.tiktok.com/@the.project.genie?_t=ZM-8tyH4BEeDGo&_r=1">
                    <AiFillTikTok size={24}/>
                </Link>
            </li>
        </ul>
        </div>
    </div>

      <div className="flex flex-col pt-8 sm:flex-row-reverse justify-between gap-4 border-t w-full border-t-greyscale_text">
        <ol className="flex gap-4 inter">
          <li>
            <Link href="/">Terms</Link>
          </li>
          <li>
            <Link href="/">Privacy</Link>
          </li>
          <li>
            <Link href="/">Cookies</Link>
          </li>
        </ol>

        <p>© 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
}
