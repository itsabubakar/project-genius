export const CheckTeam = ({onClick, check, teamName, points}) => {
    
    return (
        <div className={`p-4 flex gap-2 rounded-lg w-full border ${check == true ?  "border-primary_light" : "border-greyscale_border"}`}>
            <input onClick={onClick} type="checkbox" />
            <div className="flex">
                <p>{teamName} <span className="mx-4">|</span> {points} points</p>
            </div>

        </div>
    )
}