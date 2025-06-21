export const MiniBoard = ({teamName, status, members, points}) => {
    return (
        <div className="md:hidden flex flex-col border border-greyscale_border rounded-2xl p-4 gap-4">
            <p className="flex flex-col gap-1">Team name 
            <br />
            <span className="flex gap-2 font-semibold">{teamName}
                <p className={`px-4 w-fit font-normal rounded-full ${status == "Safe" ? "text-success bg-success_subtle" : status == "Eliminated" ? "text-error_dark bg-error_subtle" : "" }`}>{status}</p>
            </span>
            </p>
            <p className="flex justify-between">Members <span className="font-semibold">{members}</span></p>
            <p className="flex justify-between">Points <span className="font-semibold">{points}</span></p>
            <button className="w-full border-2 rounded-lg px-4 py-2 text-primary_label_dark border-Primary_border_dark " >View details</button>
        </div>
    )
}