export default function Rules({heading, details}) {
    return(
        <div className="xs:w-[338px] h-[300px] bg-secondary_surface_light
            p-[16px] rounded-2xl text-start shadow-custom-secondary
            flex flex-col gap-[12px]">
            <h3 className="text-xl text-center font-bold">{heading}</h3>
            <hr className="border-secondary_border_default text-start"/>
            <ol className="list-disc pl-5 inter">
                {details.map((detail, index) => (
                    <li className="decoration-dotted"
                        key={index}>{detail}</li>
                ))}
            </ol>
        </div>
    )
}