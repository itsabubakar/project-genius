import { motion } from "framer-motion";

export default function Backdrop({ children, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Calls onClose when backdrop is clicked
            className="fixed top-0 left-0 w-full h-full bg-[#000000e1]
                flex justify-center items-center z-50"
        >
            {children}
        </motion.div>
    );
}
