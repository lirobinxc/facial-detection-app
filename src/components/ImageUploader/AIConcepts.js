import React from 'react';
import { motion } from "framer-motion";

export default function AIConcepts({conceptsArr, conceptsFontColor}) {

  return (
    <motion.div
      animate={{ 
        opacity: [0, 1]
      }}
      transition={{ duration: 1}}
      className="flex justify-center mt-4"
    >  
      <div className="w-3/4 flex flex-wrap justify-center" style={conceptsFontColor}>
        {conceptsArr}
      </div>
    </motion.div>
  )
}