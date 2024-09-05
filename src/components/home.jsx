import React from 'react'
import '../App.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
        <div className='home-container'>
            <motion.div 
              className='line' 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ duration: 1, ease: [0,.85,.37,1.01], delay: 0.3 }}
            >         
            </motion.div>
            <motion.p className='home-copy'             
              animate={{opacity: 1}} 
              transition={{ ease: [0,.6,.5,1], duration: 2, delay: 0.3 }} 
              style={{opacity: 0}}
              >Building <span className='span-italic'>polished</span> software. Improving my skills through<br></br>exploration and curiosity.
            </motion.p>
        </div>
    </div>
  )
}

export default Home