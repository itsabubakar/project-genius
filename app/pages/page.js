import Heading from "../components/landing_page/header"
import DualButtons from "../ui/buttonBlue"
export default function Login(){
    return (
        <div className="px-5 pt-8 flex flex-col gap-8">
            <Heading 
                heading={"Let's continue building"}
                subHeading={"Log in to pick up where you left off"}
                classname={"gap-2"}
            />
            <form className="flex flex-col gap-4">
                <div className=" flex flex-col gap-2 text-greyscale_text">
                    <label>Email address</label>
                    <input type="email"
                        className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle"
                        placeholder="Enter your email address"/>
                </div>
                
                <div className=" flex flex-col gap-2 text-greyscale_text">
                    <label>Password</label>
                    <input type="password"
                        className="px-4 py-3 rounded-xl bg-greyscale_surface_subtle"
                        placeholder="Enter your password"/>
                </div>
                <DualButtons 
                classname={"flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center"}/>
                
            </form>
        </div>
    )
}