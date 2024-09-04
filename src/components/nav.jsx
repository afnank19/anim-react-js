import React from 'react'
import '../App.css';
import { ReactLenis, useLenis } from 'lenis/react'
import { motion } from 'framer-motion';

const Nav = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const handleScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      lenis.scrollTo(targetElement);
    }
  };

  return (
    <div className='nav-bar'>
        <motion.p 
          className='nav-name' 
          animate={{opacity: 1}} 
          transition={{ ease: [0,.85,.37,1.01], duration: 1 }} 
          style={{opacity: 0}}
        >
          AFNAN<br></br>KHALID
        </motion.p>
        <div className='nav-links'>
            <motion.p onClick={()  => {handleScroll('about')}}  initial="initial" whileHover="hovered" className='nav-link'>
              <motion.div className='nav-p-wrapper' variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                ABOUT
              </motion.div>
              <motion.div style={{position: "absolute"}} variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                ABOUT
              </motion.div>
            </motion.p>
            <motion.p onClick={()  => {handleScroll('philosophy')}} initial="initial" whileHover="hovered" className='nav-link'>
              <motion.div className='nav-p-wrapper' variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                PHILOSOPHY
              </motion.div>
              <motion.div style={{position: "absolute"}} variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                PHILOSOPHY
              </motion.div>
            </motion.p>
            <motion.p onClick={()  => {handleScroll('work')}} initial="initial" whileHover="hovered" className='nav-link'>
              <motion.div className='nav-p-wrapper' variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                WORK
              </motion.div>
              <motion.div style={{position: "absolute"}} variants={{ 
                initial: { y: 0 }, 
                hovered: { y: "-100%"},
                }}
              >
                WORK
              </motion.div>
            </motion.p>
        </div>
    </div>
  )
}

//variants={{ initial: { y: 0 }, hovered: { y: "-100%"},}}

export default Nav