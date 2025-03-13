export default function Rank() {
    return (
        <section className="w-full flex flex-col gap-6">
            <h3 className="text-center text-[32px] font-bold">Rank & Progress</h3>
            <div className="w-full h-[1px] bg-greyscale_disabled"></div>

            {/** User Team Ranking */}
            <div className="p-3 inter">
                <h3 className="font-bold text-2xl flex items-center gap-2">Round One <span className="px-2 py-1 bg-[#FEF8E7] font-normal rounded-2xl text-sm text-[#F3BB1B]">Ongoing</span></h3>
                <div className="rounded-2xl w-full flex gap-4 border border-greyscale_border py-3 pl-4 pr-8">
                    <div className=" bg-[#FFCD5F] text-[#8B4513] flex justify-center items-center rounded-full w-11 h-11 px-3 py-2">
                        1
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <p>Tech Titans</p>
                        <p>70</p>
                    </div>
                </div>
            </div>
            <div className="w-full">

                {/* Header */}
                <div className="flex gap-2 px-4 py-2 text-sm text-greyscale_text">
                    <div className="text-start font-normal">RANK</div>
                    <div className="text-start font-normal">TEAM NAME</div>
                    <div className="text-start font-normal ml-auto">POINTS</div>
                </div>

                <div className="inter flex flex-col gap-2">
                    {/* First Row */}
                    <div className="flex justify-between items-center bg-[#EEF2FF] rounded-2xl py-4 px-2">
                        {/* Rank */}
                        <div className="w-12 flex justify-center mr-2">
                        <div className="bg-[#FFCD5F] text-[#8B4513] w-11 h-11 flex justify-center items-center rounded-full">
                            1
                        </div>
                        </div>
                        <div className="flex-1 text-left font-medium">Tech Titans</div>

                        <div className="text-right font-semibold pr-4">70</div>
                    </div>

                    {/* Second Row */}
                    <div className="flex justify-between items-center border rounded-2xl py-4 px-2">
                        {/* Rank */}
                        <div className="w-12 flex justify-center mr-2">
                            <div className="bg-[#D9D9D9] text-[#696969] w-11 h-11 flex justify-center items-center rounded-full">
                                2
                            </div>
                        </div>
                        <div className="flex-1 text-left font-medium">Tech Titans</div>

                        <div className="text-right font-semibold pr-4">70</div>
                    </div>

                    <div className="flex justify-between items-center border rounded-2xl py-4 px-2">
                        {/* Rank */}
                        <div className="w-12 flex justify-center mr-2">
                            <div className="bg-[#E2731E] text-[#6D4319] w-11 h-11 flex justify-center items-center rounded-full">
                                3
                            </div>
                        </div>
                        <div className="flex-1 text-left font-medium">Tech Titans</div>

                        <div className="text-right font-semibold pr-4">70</div>
                    </div>
                    
                    <div className="flex justify-between items-center border rounded-2xl py-4 px-2">
                        {/* Rank */}
                        <div className="w-12 flex justify-center mr-2">
                            <div className="border border-greyscale_disabled w-11 h-11 flex justify-center items-center rounded-full">
                                4
                            </div>
                        </div>
                        <div className="flex-1 text-left font-medium">Tech Titans</div>

                        <div className="text-right font-semibold pr-4">70</div>
                    </div>
                    
                </div>

            </div>


        </section>
    )
}