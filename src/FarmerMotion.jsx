import React from 'react';
import { delay, motion } from 'framer-motion';
const FarmerMotion = ({ children }) => {
    return (
    <motion.div
        initial={{opacity:0,y:60}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-60}}
        transition={{ duration: 0.8,delay : 0.3 } }
        
    >
        {children}
    </motion.div>
    );
};

export default FarmerMotion;