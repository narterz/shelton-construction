import { motion } from "framer-motion";
import { FC, RefObject } from "react";

export interface InViewProps {
    children: React.ReactNode;
    directionX: boolean;
    className?: string;
    id?: string;
    ref: RefObject<HTMLDivElement>;
}

export const InViewAnimation: FC<InViewProps> = ({ children, directionX, className, id, ref}) => {

    const scrollXVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {
                delay: 0.2
            } 
        }
    }

    const scrollYVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: {
                delay: 0.2
            }  
        }
    }


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={directionX ? scrollXVariants : scrollYVariants}
            className={className}
            id={id}
            ref={ref}
        >
            {children}
        </motion.div>

    )

}