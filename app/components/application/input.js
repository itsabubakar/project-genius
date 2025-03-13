export default function Input({className, label, value, onChange, type, placeholder, disabled, ...rest}) {
    return (
        
        <div className="w-full flex flex-col inter text-greyscale_text">
            <label>{label}</label>
            <input disabled={disabled} type={type} value={value} onChange={onChange} placeholder={placeholder}
                {...rest}  className={`lg:w-[100%] text-black w-[100%] px-4 py-3 rounded-xl ${className} ${disabled === true ? 'bg-greyscale_disabled' : 'bg-greyscale_surface_subtle'} `}/>
        </div>
    )
}