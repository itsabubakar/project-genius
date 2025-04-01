export default function TableRow({ position, teamName, points, onClick }) {

    return (
        //bg-[#EEF2FF]
        <tr onClick={onClick} className="flex justify-between items-center border border-greyscale_border rounded-2xl py-4 px-2">
            {/* Rank */}
            <th className="w-12 flex justify-center mr-2">
            <div className={`${position === 1 ? "bg-[#FFCD5F] text-[#8B4513]"
                            : position === 2 ? "bg-[#D9D9D9] text-[#696969]"
                            : position === 3 ? "bg-[#E2731E] text-[#6D4319]"
                            : ""
            } w-11 h-11 flex justify-center items-center rounded-full`}>
                {position}
            </div>
            </th>
            <th className="flex-1 text-left font-medium">{teamName}</th>

            <th className="text-right font-semibold pr-4">{points}</th>
        </tr>
    )
}