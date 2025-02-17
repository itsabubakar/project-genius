import Image from "next/image"

function UserCard({initials, name, role, classname}){
    return (
        <div className={`flex px-4 py-3 gap-3 items-center border border-greyscale_border rounded-xl bg-greyscale_background_light ${classname}`}>
            <div className="w-12 h-12 bg-primary_subtle rounded-2xl text-3xl flex justify-center items-center text-primary">{initials}</div>
                <div className=" gap-1">
                    <p className="text-lg font-medium">{name}</p>
                    <p className="text-sm font-normal text-greyscale_subtitle">{role}</p>
                </div>
        </div>
    )
}

export default UserCard;