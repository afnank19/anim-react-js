import React, { useRef, useState } from 'react'
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

  const ref = useRef(null);
  const [pos, setPos] = useState({x:0, y: 0});

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left , top } = ref.current.getBoundingClientRect();
    const x = clientX - (left * 1.1 + width / 2);
    const y = clientY - (top * 1.6  + height / 2);
    setPos({x,y})
  }

  const mouseLeave = (e) => {
    setPos({x: 0, y: 0})
  }

  const {x, y} = pos;

  return (
    <div className='nav-bar'>
        <motion.div 
          className='nav-name' 
          animate={{opacity: 1}} 
          transition={{ ease: [0,.6,.5,1], duration: 2 }} 
          style={{opacity: 0}}
        >
          <motion.div 
            style={{width: "fit-content"}} 
            ref={ref} 
            onMouseMove={mouseMove} 
            onMouseLeave={mouseLeave} 
            animate={{x,y}}
            transition={{type:"spring", stiffness: 150, damping: 15, mass: 0.1}}
          >
            AFNAN<br></br>KHALID
          </motion.div>
        </motion.div>
        <div className='nav-links'>
          <motion.div           
            animate={{opacity: 1}} 
            transition={{ ease: [0,.6,.5,1], duration: 2, delay: 0.2 }} 
            style={{opacity: 0}}
          >
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
          </motion.div>
          <motion.div           
            animate={{opacity: 1}} 
            transition={{ ease: [0,.6,.5,1], duration: 2, delay: 0.3 }} 
            style={{opacity: 0}}
          >
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
          </motion.div>
          <motion.div           
            animate={{opacity: 1}} 
            transition={{ ease: [0,.6,.5,1], duration: 2, delay: 0.4}} 
            style={{opacity: 0}}
          >
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
          </motion.div>
        </div>
    </div>
  )
}

//variants={{ initial: { y: 0 }, hovered: { y: "-100%"},}}

export default Nav