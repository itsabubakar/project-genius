export const TeamRow = ({teamName, members, points, status}) => {
    return (
        <tr className="">
            <td className="px-6 py-4">{teamName}</td>
            <td className="px-6 py-4">{members}</td>
            <td className="px-6 py-4">{points}</td>
            <td className="px-6 py-4"><p className={`px-4 w-fit font-normal rounded-full ${status == "Safe" ? "text-success bg-success_subtle" : status == "Eliminated" ? "text-error_dark bg-error_subtle" : "" }`}>{status}</p></td>
        </tr>
    )
}