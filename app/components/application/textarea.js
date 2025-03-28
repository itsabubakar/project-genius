export default function Textarea({label, placeholder, disabled, className, register, name}) {
    return (
        
        <div className="flex flex-col gap-2">
            <label className="">{label}</label>
            <textarea {...register(name)} disabled={disabled} placeholder={placeholder} className={`${className} h-[138px] w-full lg:w-[100%] md:w-[360px] p-4 rounded-xl ${disabled === true ? 'bg-greyscale_disabled' : 'bg-greyscale_surface_subtle'} `}/>
        </div>
    )
}