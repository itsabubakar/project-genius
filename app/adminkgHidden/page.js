import Image from "next/image";

export default function Admin(){
    return(
        <section className="flex flex-col hap-6">
            <div className="flex justify-between">
                <h3 className="text-3xl font-bold">Dashboard</h3>
                <Image alt="admin image" src="" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full bg-greyscale_surface_subtle px-5 py-3">
                    <input placeholder="Search teams by name" className="w-full bg-transparent"/>

                </div>
                <button className="w-full sm:w-[161px] px-5 py-3 rounded-full bg-primary text-white">
                    export data
                </button>
            </div>
        </section>
    )
}