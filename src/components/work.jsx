import React, { useRef } from 'react'
import Project from './project'
import { useScroll, motion } from 'framer-motion';

const Work = () => {
  const kaam = useRef(null);
  
  const { scrollYProgress} = useScroll({
    target: kaam,
    offset: ['0.2 0.9', '0.2 0.5'] //Immediate pop in
  })

  const projectCopy = [
    "An arcade roguelike inspired by Vampire Survivors, built in Unity. All assets self-made.",
    "Built using ElectronJS, BrainFlow is a productivity timer featuring the pomodoro technique.",
    "ExpressJS server that handles JWTs for session persistence. Firestore database to store user credentials.",
    "A Twitter clone built for personal use. Uses the OwnAuth system for session management . React Native, ExpressJS, Firebase, NodeJS.",
    "A flutter app for a fintech startup aiming to make payments easier through NFC. ExpressJS back-end and firestore integration.",
  ]

  return (
    <div className='work-container'>
        <div className='work-content'>
            <p className='work-heading'>WORK</p>
            <motion.div className='work-wrapper' style={{opacity: scrollYProgress}} ref={kaam}>
              <div className='work-data'>
                  <Project projectTitle="Banished" projectCopy={projectCopy[0]} url="https://afnank19.itch.io/banished"/>
                  <Project projectTitle="BrainFlow" projectCopy={projectCopy[1]} url="https://github.com/afnank19/pomodoro-electron"/>
                  <Project projectTitle="OwnAuth" projectCopy={projectCopy[2]} url="https://github.com/afnank19/glitch-server-nodejs"/>
                  <Project projectTitle="Qwitter" projectCopy={projectCopy[3]} url="https://github.com/afnank19/OwnAuth"/>
                  <Project projectTitle="Quiky" projectCopy={projectCopy[4]} url=""/>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Work