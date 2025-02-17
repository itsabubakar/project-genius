export default function Textarea({label, placeholder, disabled}) {
    return (
        
        <div className="flex flex-col">
            <label className="text-greyscale_text">{label}</label>
            <textarea disabled={disabled} placeholder={placeholder} className={`h-[138px] sm:w-[314px] p-4 rounded-xl ${disabled === true ? 'bg-greyscale_disabled' : 'bg-greyscale_surface_subtle'} `}/>
        </div>
    )
}