export default function Button({children, disabled}) {
    return (
        <button disabled={disabled} className={`sm:ml-auto w-full sm:w-[314px] text-white px-5 py-3 rounded-full mt-2 ${disabled === true ? 'bg-primary_surface' : 'bg-primary'}`}>
                {children
        }</button>
    )
}