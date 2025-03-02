const InputField = ({ label, name, type, placeholder, register, error }) => {
    return (
        <div className="flex flex-col w-full gap-2">
            <label className="text-gray-700">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                autoComplete="off"
                className="w-full md:w-[360px]  border focus:outline-primary p-2 rounded-md px-4 py-2 bg-greyscale_surface_subtle text-greyscale_text"
            />
            {error && <p className="text-red-500">{error.message}</p>}
        </div>
    );
};

export default InputField;