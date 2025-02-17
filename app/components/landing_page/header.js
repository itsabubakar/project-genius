function Heading({heading, subHeading, classname}) {
    return(
        <div className={`flex flex-col gap-[16px] md:w-[714] w-fit lg:[100px] ${classname}`}>
            <h1 className={`text-[28px] sm:text-[32px] md:[40px] font-bold`}>{heading}</h1>
            <p className="inter text-greyscale_text w-full">{subHeading}</p>
        </div>
    )
}

export default Heading