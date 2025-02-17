import MainWrapper from "../main";
import Image from "next/image";
import hands from "../../public/hands.png"
import innovate from "../../public/innovate.png"

import lead1 from "../../public/1.jpg"
import lead2 from "../../public/2.jpg"

import spark from "../../public/spark.png"
import TeamComponent from "./memberComponent";
const { default: Heading } = require("../components/landing_page/header");

function About() {
    return (
        <MainWrapper>
            <section className="
                flex flex-col gap-[120px] items-center
                py-[40px]  px-16 sm:py-[64px] md:px-[62px] lg:px-[150px] md:py-[80px]
                w-full text-center lg:justify-between lg:gap-[83px]
                padding-style">
                
                <Heading
                    heading={"Why Project Genius?"}
                    subHeading={"Project GENIUS is more than just a contest—it’s a transformative platform that empowers students to embark on an extraordinary journey. Here, you have the opportunity to collaborate, network, and think beyond the classroom, unlocking your full potential as an innovator."}
                    classname={""}
                />

                <div className="flex flex-col gap-16 md:gap-[200px]">
                    <article className="flex flex-col gap-8 md:gap-24 md:flex-row items-center text-center md:text-start">
                        <Heading
                            heading={"Mission"}
                            subHeading={"Our mission is to equip students with practical skills to identify, analyze, and creatively solve problems unique to their local environments."}
                            classname={""}
                        />
                        <Image src={hands} alt="hands"/>
                    </article>
                    <article className="flex flex-col gap-8 md:gap-24 md:flex-row-reverse items-center text-center md:text-start">
                        <Heading
                            heading={"Vision"}
                            subHeading={"Our vision is to establish a platform that inspires students to think creatively, collaborate with peers from diverse disciplines, and craft practical, innovative solutions to real-world challenges. The Project GENIUS Contest transcends the boundaries of a traditional competition, offering participants a transformative journey of discovery, learning, and personal growth"}
                            classname={""}
                        />
                        <Image src={innovate} alt="lighbulb"/>
                    </article>
                    <article className="flex flex-col gap-8 md:gap-24 md:flex-row items-center text-center md:text-start">
                        
                        <Heading
                            heading={"Our Story"}
                            subHeading={"The Project GENIUS Contest was conceived to rekindle the passion for innovation in students. In a rapidly evolving world, there is a pressing need to shape the minds of young people to be solution-driven, creative, analytical, and curious. This contest serves as a catalyst, providing a dynamic platform that inspires participants to push their boundaries, embrace innovation, and think outside the box to tackle real-world challenges"}
                            classname={""}
                        />
                        <Image src={spark} alt="hands"/>
                    </article>
                    
                </div>

                <section className="flex flex-col gap-20">
                    <h2 className="font-bold text-4xl">Meet Our Team</h2>

                    <div className="flex flex-wrap justify-center w-fit">
                        <TeamComponent 
                        src={lead1}
                        name={"Muhammad Salman"}
                        title={"Project Manager"}
                        />
                        <TeamComponent 
                        src={lead2}
                        name={"Mohammad Abdulmujeeb"}
                        title={"Back-end Developer"}
                        />
                    </div>
                </section>
            </section>
        </MainWrapper>
    )
}

export default About