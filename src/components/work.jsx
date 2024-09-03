import React, { useRef } from 'react'
import Project from './project'
import { useScroll, motion } from 'framer-motion';

const Work = () => {
  const kaam = useRef(null);
  
  const { scrollYProgress} = useScroll({
    target: kaam,
    offset: ['0.4 0.9', '0.1 0.5'] //Immediate pop in
  })

  const projectCopy = [
    "A flutter app aiming to make payments easier through NFC. ExpressJS back-end and firestore integration.",
    "Built using ElectronJS, BrainFlow is a productivity timer featuring the pomodoro technique."
  ]

  return (
    <div className='work-container'>
        <div className='work-content'>
            <p className='work-heading'>WORK</p>
            <motion.div className='work-wrapper' style={{opacity: scrollYProgress}} ref={kaam}>
              <div className='work-data'>
                  <Project projectTitle="Quiky" projectCopy={projectCopy[0]}/>
                  <Project projectTitle="BrainFlow" projectCopy={projectCopy[1]}/>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Work