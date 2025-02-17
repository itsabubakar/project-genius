import Button from "../../ui/headerButton"
import Heading from "./header"
export default function Subscribe() {
    return (
        <form
            className="p-[32px] xs:w-[334px] md:w-[482px] md:mx-auto bg-primary_subtle
                flex flex-col items-center text-center gap-6 rounded-2xl md:p-12
                ">
                <Heading 
                    heading="Subscribe for Updates"
                    subHeading="Be part of the innovation journey. Subscribe to our newsletter"
                    classname=" font-[600] text-greyscale_title text-center"
                    />
                <label className="flex flex-col gap-3">
                    <input type="email"  className=" w-[230px] py-3 px-4
                    shadow-lg rounded-2xl text-greyscale_text bg-greyscale_surface_subtle"
                    placeholder="Enter your email address"/>
                    
                    <button className="bg-primary hover:bg-primary_hover active:bg-primary_pressed active:transform active:scale-95 transition duration-300
                        w-[230px] py-[12px] rounded-xl text-greyscale_surface_subtle">
                        Submit
                    </button>
                </label>

        </form>
    )
}