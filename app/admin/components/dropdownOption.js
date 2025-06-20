import { actionIconVariants, itemVariants } from "@/app/motion/variants/dropdown";
import { motion } from "framer-motion";

export const Option = ({ text, Icon, setOpen }) => {
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >

        <motion.span variants={actionIconVariants}>
            <Icon />
        </motion.span>

        <span>{text}</span>
        </motion.li>

    );

};