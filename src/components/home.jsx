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
            <p className='home-copy'>Building <span className='span-italic'>polished</span> software. Improving my skills through<br></br>exploration and curiosity.</p>
        </div>
    </div>
  )
}

export default Home