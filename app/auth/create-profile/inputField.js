const InputField = ({ label, className, name, type, placeholder, disabled, register, error }) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="text-gray-700">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                disabled={disabled}
                className={`${className} ${error ? 'border-error_dark bg-error_subtle text-error_dark': ""} ${disabled === true ? 'bg-greyscale_disabled' : 'bg-greyscale_surface_subtle'} border-2 outline-none w-full lg:w-[100%] md:w-[360px] p-2 rounded-md px-4 py-2 text-greyscale_text`}            />
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    );
};

export default InputField;