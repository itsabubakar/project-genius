const { default: Backdrop } = require("../modals/backdrop");
import { motion } from "framer-motion";
export const Modal = ({onClose, children}) => {
    return (
        <Backdrop onClose={onClose}>
                        <motion.div
                            className="px-4 w-full blur-md bg-[#00000011] fixed inset-0 flex items-center justify-center z-50"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ y: 100 , opacity: 0, scale: 0.4 }}
                            animate={{ y:0, opacity: 1, scale: 1,  }}
                            transition={{ duration: 4, type: "spring", stiffness: 700, damping: 90 }}
                            exit={{ opacity: 0, scale: 0.4, y: 100 }}
                        >
                            {children}
                        </motion.div>
                        </Backdrop>
    )
}