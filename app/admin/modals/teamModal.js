export const TeamMembersModal = ({teamMember, memberRole, memeberEmail, memberDept}) => {
    return (
        <div
            className="w-[343px] p-2 flex items-center border rounded-2xl"
        >
            <div className="flex flex-col gap-3 p-6">
                <div className="flex gap-2">
                    <p className="text-[20px] font-bold">{teamMember}</p>
                    <span className="inter text-primary_pressed px-2 py-1 bg-primary_subtle rounded-full">{memberRole}</span>
                </div>
                <p className="text-greyscale_text">{memeberEmail}</p>
                <p className="text-greyscale_text">{memberDept}</p>
            </div>
        </div>
    )
}