import React from 'react'
import Home from './home'
import { motion } from 'framer-motion';
import Link from './link';

const Links = () => {
  return (
      <div>
        <Home />
        <motion.p className='links-origin' animate={{opacity: 1}} transition={{ ease: [0,.6,.5,1], duration: 2, delay: 0.3 }} style={{opacity: 0}}>ISLAMABAD, PAKISTAN</motion.p>
        <div className='links-container'>
            <div className='links-location'>
                <motion.p animate={{opacity: 1}} transition={{ ease: [0,.6,.5,1], duration: 2,delay: 0.4 }} style={{opacity: 0}}>10.8231°N 106.6297°E</motion.p>
            </div>
            <motion.div className='links-prof' animate={{opacity: 1}} transition={{ ease: [0,.6,.5,1], duration: 2 , delay: 0.5}} style={{opacity: 0}}>
                <Link title="GITHUB" url="https://github.com/afnank19"/>
                <Link title="LINKEDIN" title2="INACTIVE"/>
            </motion.div>
            <motion.div className='links-social' animate={{opacity: 1}} transition={{ ease: [0,.6,.5,1], duration: 2, delay: 0.5 }} style={{opacity: 0}}>
                <Link title="YT" url="https://www.youtube.com/@afnankhalid7781"/>
                <Link title="IG" url="https://www.instagram.com/afnank194/?utm_source=qr"/>
                {/* <a href='https://www.youtube.com/@afnankhalid7781' className='white'>YT</a>
                <a href='https://www.instagram.com/afnank194/?utm_source=qr' className='white'>IG</a> */}
            </motion.div>
        </div>
    </div>
  )
}

export default Links

{/* <motion.div           
animate={{opacity: 1}} transition={{ ease: [0,.6,.5,1], duration: 2 }} style={{opacity: 0}}
></motion.div> */}