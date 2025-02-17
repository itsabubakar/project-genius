"use client"
import Image from "next/image";
import hero from "../public/svg/Hero image (1).svg";

import infoData from "./data/inforcard";
import detailData from "./data/detailsData.js";
import timelineData from "./data/timelineData.js";
import regulationData from "./data/regulationData.js";

import Headings from "./components/landing_page/header.js";
import InfoCard from "./components/landing_page/infoCard.js";
import Details from "./components/landing_page/details.js";
import Timeline from "./components/landing_page/timeline";
import Heading from "./components/landing_page/header.js";
import Rules from "./components/landing_page/rules.js"
import ButtonBlue from "./ui/buttonBlue";
import ButtonGlass from "./ui/buttonGlass";
import Link from "next/link";
import MainWrapper from "./main";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const navigateToAbout = () => {
    router.push('/about');
  };
    return (
      <MainWrapper>
        <section
          className="bg-custom
                flex flex-col items-center
                py-[40px] sm:py-[64px] md:py-[80px]
                w-full text-center lg:flex-row lg:justify-between lg:gap-[83px]
                padding-style">
                <div className="lg:text-start items-center lg:items-start sm:w-[720px] lg:w-[620px] flex flex-col gap-[20px]">
                    <h1 className="text-[36px] md:text-[44px] font-extrabold -tracking-[0.72px]">Generating Exciting New  Ideas And Useful Solutions</h1>
                    <p className="lg:text-start text-greyscale_text text-[16px]">
                    GENIUS 2.0 aims to foster a generation of problem solvers who address local challenges with sustainable and innovative solutions
                    </p>

                        <div className="flex flex-col gap-2 lg:flex-row">
                          <Link href={"auth/create-profile"}>
                            
                            <ButtonBlue>Apply Now</ButtonBlue>
                          </Link>
                            <ButtonGlass onClick={navigateToAbout}>Learn More</ButtonGlass>
                        </div>
                </div>
                
                <Image className="w-full lg:w-[520px] h-[292px] " alt="Lightbulb" src={hero} />
            </section>

        <section
          className="flex flex-col items-center text-center gap-[54px]
            padding-style">
          <Headings
            heading={"Why Project Genius?"}
            subHeading={
              "The Project Genius contest emerged from the necessity to address several key areas in education and personal among students"
            }
          />

          <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-5 pb-5 max-w-[1200px]">
            {infoData.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                heading={card.heading}
                subheading={card.subheading}
              />
            ))}
          </div>
        </section>

        {/* DETAILS START */}
        <section className="flex flex-col items-center text-center gap-[54px]
            padding-style">
          <Headings
            heading="Key Details"
            subHeading="The Project Genius contest is exclusively open to undergraduate students within Ahmadu Bello University. This contest aims to bring together a diverse group of students, encouraging collaboration and fostering a spirit of unity and teamwork within the University."
          />

          <div className="flex flex-col gap-[64px] sm:gap-[64px] justify-center">
            {detailData.map((detail, index) => (
              <Details
                key={index}
                heading={detail.heading}
                description={detail.description}
                image={detail.image}
                classname={index === 1 ? "md:flex-row-reverse" : "md:flex-row"}
              />
            ))}
          </div>
        </section>

        {/* COMPETITION TIMELINE START */}
        <section
          className="flex flex-col items-center text-center gap-[54px]
            padding-style">
                
            <h1 className="text-[28px] text-center md:text-start sm:text-[32px] md:[40px] font-bold">Competition Activities And Timeline</h1>

            <div className="flex flex-col items-center sm:items-start">
                {timelineData.map((timeline, index) => (
                    <Timeline
                    key={index}
                    start={timeline.start}
                    end={timeline.end}
                    heading={timeline.heading}
                    description={timeline.description}
                    isLast={index === timelineData.length - 1}
                />
                ))}
            </div>
        </section>

            {/* RULES SECTION */}
            <section className="padding-style flex flex-col gap-[56px] text-center items-center">
                <Heading 
                    heading="Rules And Guidelines"
                    subHeading="To ensure a fair and productive contest, participants must adhere to the following rules and guidelines. These rules are designed to maintain the integrity of the competition and to provide a clear framework within which participants can operate"
                />

                <div className="flex flex-wrap gap-[24px] justify-center ">
                    {regulationData.map((rule, index) => (
                        <Rules 
                        key={index}
                        heading={rule.heading}
                        details={rule.details}
                        />
                    ))}
                </div>
                

            </section>
      </MainWrapper>
    );
}
