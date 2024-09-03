import React, { useRef } from 'react'
import '../App.css';
import { useScroll, motion } from 'framer-motion';

const About = (props) => {
  const element = useRef(null);

  const { scrollYProgress} = useScroll({
    target: element,
    offset: ['0.4 0.9', '0.1 0.5'] //Immediate pop in
  })

  //offset: ['0.3 0.6', '0.2 0.25'] for long scroll

  return (
    <div className='about-container'>
      <div className='about-content'>
        <p className='about-heading'>ABOUT</p>
        <motion.p className='about-copy' style={{opacity: scrollYProgress}} ref={element}>Hi, I'm Afnan Khalid, a software engineering student at NUST.  When I'm not debugging ExpressJS back-ends or building games, I'm creating  exquisite UIs in ReactJS and when the lid of my laptop closes, I'm in the  mountains, admiring, finding inspiration.</motion.p>
      </div>
    </div>
  )
}

export default About