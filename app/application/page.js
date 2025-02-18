import Link from "next/link";
import Button from "../components/application/button";
import Input from "../components/application/input";
import Textarea from "../components/application/textarea";
import Heading from "../components/landing_page/header";

import { RiArrowDropDownLine } from "react-icons/ri";

export default function Application(){
    return (
        <section className="flex flex-col px-5 md:px-20 lg:px-[238px] my-10 sm:items-center">
            <Heading 
                heading="Application form"
                classname="text-center px-6"
                subHeading="Take the first step toward innovation, complete your application and join the competition!"
            />

            <div className="bg-primary_subtle rounded-2xl w-fit px-4 sm:px-16 lg:px-20 py-4 flex flex-col items-center gap-4 text-center inter">
                <p className="text-greyscale_subtitle text-lg">To participate in the contest, a registration fee of N5,000 is required. Complete the payment process to proceed with the appliation</p>
                <button className="bg-primary text-white px-5 py-3 rounded-full w-[240px]">Proceed to payment</button>
            </div>

            <div className="h-full flex flex-col">
                
                <form className="py-4 max-h-full w-full flex gap-2">
                    
                    <div className="flex flex-col items-center">
                        <div className="rounded-full w-5 h-5 flex justify-center items-center text-white border-2 border-primary_light ">
                            <div className="w-[14px] font-normal h-[14px] text-xs flex justify-center items-center bg-primary_light rounded-full">
                                
                            </div>
                        </div>
                        <div className={`w-[2px] h-full flex-shrink-0 rounded-full bg-greyscale_border`}></div>    
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <h3 className=" text-2xl font-bold text-start">Basic Information</h3>

                        <div className="flex flex-col gap-8 sm:grid items-center grid-cols-2">
                            <Input 
                                label="Full name"
                                type="text"
                                placeholder="Yusef Aliyu"
                                disabled={true}
                            />
                            <Input 
                                label="Department"
                                type="text"
                                placeholder="Computer Science"
                                disabled={true}
                            />
                            <Input 
                                label="Email address"
                                type="email"
                                placeholder="hamidusman@gmail.com"
                                disabled={true}
                            />
                            <Input 
                                label="Team Name"
                                type="text"
                                placeholder="Enter team name"
                                disabled={false}
                            />
                        </div>
                        
                        <Button
                            disabled={false}
                            className="w-[314px]"
                            >
                                Create team link
                        </Button>
                        
                        <div className="mb-[64px] flex flex-col gap-3 bg-success_subtle w-[314px] xs:w-full p-4">
                            <h3 className="text-[28px] font-semibold">Team Link Generated!</h3>
                            <p>Share this link with teammates to join and confirm their participation.</p>
                            <Link href={''}>https://projectgenius.ng/team/join/unique-id</Link>
                        </div>
                    </div>
                </form>


                <form className="flex gap-2">
                    
                    <div className="flex flex-col items-center">
                        <div className="rounded-full w-5 h-5 flex justify-center items-center text-white border-2 border-primary_light ">
                            <div className="w-[14px] font-normal h-[14px] text-xs flex justify-center items-center bg-primary_light rounded-full">
                                
                            </div>
                        </div>
                        <div className={`w-[2px] h-full flex-shrink-0 rounded-full bg-greyscale_border`}></div>    
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <h3 className=" text-2xl font-bold text-start">Solution Details</h3>

                        <div className="mb-[64px] flex flex-col sm:grid grid-cols-2 gap-8">
                            <Input 
                                label="Solution Title"
                                type="text"
                                disabled={false}
                            />
                            <div>
                                <label className="text-greyscale_text">Category</label>
                                <div className="flex items-center bg-greyscale_surface_subtle h-[48px] md:[360px] px-4 rounded-2xl">
                                    
                                    <select  className="w-full bg-transparent h-full text-greyscale_text appearance-none">
                                        <option className="sm:w-[282px]">Select your solution category</option>
                                    </select>
                                    <RiArrowDropDownLine 
                                        className="w-5 h-5"
                                        color="#8990A6"/>
                                </div>
                            </div>
                            <Textarea 
                                label="Problem Addressed"
                                placeholder="What is the problem?"
                                disabled={true}
                            />
                            <Textarea 
                                label="Solution description"
                                placeholder="How does your solution solve it?"
                                disabled={false}
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className="flex gap-2">
                
                <div className="flex flex-col items-center">
                    <div className="rounded-full w-5 h-5 flex justify-center items-center text-white border-2 border-primary_light ">
                        <div className="w-[14px] font-normal h-[14px] text-xs flex justify-center items-center bg-primary_light rounded-full">
                            
                        </div>
                    </div>
                    <div className={`w-[2px] h-full flex-shrink-0 rounded-full bg-greyscale_border`}></div>    
                </div>
                
                <div className="w-[660px]">
                    <h3 className="text-2xl text-greyscale_title">Mode of Submission</h3>

                    <div className="p-4 bg-primary_subtle flex flex-col gap-4 rounded-xl">
                        <h3 className="text-2xl">Instruction</h3>

                        <p>The event requires physical submission of the following deliverables:</p>
                        <div>
                            
                            <li>Pitch Deck (Slides)</li>
                            <li>Executive Summary for the judges</li>
                            <li>Prototype (to be presented at the Grand Finale)</li>
                            
                        </div>
                        <p>Please ensure that all materials are delivered by the specified deadline and in the appropriate format.</p>
                        
                        <div className="flex gap-3 items-start">
                        <input type="checkbox" />
                            <p className="flex text-start">I agree to Project Genius’ terms and conditions</p>
                        </div>
                        
                    </div>
                    <Button
                        disabled={true}
                        >
                            Submit application
                    </Button>

                </div>
            </div>
        </section>

    )
}