export default function Timeline({ start, end, heading, description, isLast }) {
    return (
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap[32px] md:gap-16 lg:gap-[72px] text-center">
            <div className="flex flex-col items-center">
                <div
                    className="relative w-[100px] min-h-[88px] flex flex-col items-center justify-center
                        rounded-lg p-[16px] shadow-xl font-medium"
                >
                    <div className="w-5 h-5 rounded-full absolute blur-lg left-2 top-2 bg-secondary_border_default"></div>
                    <p>{start}</p>
                    {end && (
                        <>
                            to <p>{end}</p>
                        </>
                    )}
                </div>
                {!isLast && (
                    <div className="hidden sm:block w-[1px] h-16 border-l-2 border-dotted border-greyscale_border"></div>
                )}
            </div>
            <div className="flex flex-col gap-[8px] sm:text-start">
                <h4 className="font-bold text-xl">{heading}</h4>
                <ul>
                {description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
                </ul>
            </div>
        </div>
    );
}
