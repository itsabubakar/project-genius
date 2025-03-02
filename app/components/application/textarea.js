export default function Textarea({label, placeholder, disabled, register, name}) {
    return (
        
        <div className="flex flex-col gap-2">
            <label className="">{label}</label>
            <textarea {...register(name)} disabled={disabled} placeholder={placeholder} className={`h-[138px] w-full md:w-[360px] p-4 rounded-xl ${disabled === true ? 'bg-greyscale_disabled' : 'bg-greyscale_surface_subtle'} `}/>
        </div>
    )
}