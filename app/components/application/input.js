export default function Input({label, type, placeholder, disabled}) {
    return (
        
        <div className="w-full flex flex-col inter text-greyscale_text">
            <label>{label}</label>
            <input disabled={disabled} type={type} placeholder={placeholder} className={`text-black w-[100%] md:[360px] px-4 py-3 rounded-xl ${disabled === true ? 'bg-greyscale_disabled' : 'bg-greyscale_surface_subtle'} `}/>
        </div>
    )
}