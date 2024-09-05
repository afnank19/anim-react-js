import React from 'react'
import { motion } from 'framer-motion';

const Link = (props) => {
  return (
    <motion.a href={props.url}  initial="initial" whileHover="hovered" className='nav-link white'>
              <motion.div className='nav-p-wrapper' variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                {props.title}
              </motion.div>
              <motion.div style={{position: "absolute"}} variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                {props.title && props.title !="LINKEDIN"? props.title : props.title2}
              </motion.div>
    </motion.a>
  )
}

export default Link