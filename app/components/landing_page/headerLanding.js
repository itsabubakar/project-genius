import { motion } from "framer-motion"
function Heading({heading, subHeading, classname}) {
    
  const whileInView= {
    opacity: 1,
    y:0

  }
  const transition = {
    duration: 0.8

  }
  const initial = {
    opacity: 0,
    y:100 

  }
    return(
        <motion.div
            whileInView={whileInView}
            initial={initial}
            transition={transition} className={`flex flex-col gap-[16px] md:w-[714] w-fit lg:[100px] ${classname}`}>
            <h1 className={`text-[28px] sm:text-[32px] md:[40px] font-bold`}>{heading}</h1>
            <p className="inter text-greyscale_text w-full">{subHeading}</p>
        </motion.div>
    )
}

export default Heading