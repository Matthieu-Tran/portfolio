import React, {Fragment, useState} from 'react';
import {motion} from 'framer-motion';

const Contact = () => {

  return (
    <motion.div
        initial={{width: 0}}
        animate={{width: "100%"}}
        exit={{x: window.innerWidth, transition: {duration:0.5}}}>  
        Hello
    </motion.div>
  )
}

export default Contact