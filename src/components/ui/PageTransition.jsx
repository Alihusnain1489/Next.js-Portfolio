"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
    const pathname = usePathname();
    
    return (
        <AnimatePresence mode="wait">
            <motion.div key={pathname}>
                {/* Overlay animation */}
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 0.3, duration: 0.2, ease: "easeInOut" },
                    }}
                    exit={{ 
                        opacity: 1,
                        transition: { duration: 0.2, ease: "easeInOut" }
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
                />
                
                {/* Content animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { delay: 0.1, duration: 0.4, ease: "easeInOut" }
                    }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.1, ease: "easeInOut" }
                    }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;