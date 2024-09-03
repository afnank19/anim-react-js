import React from 'react'
import Project from './project'

const Work = () => {

  const projectCopy = [
    "A flutter app aiming to make payments easier through NFC. ExpressJS back-end and firestore integration.",
    "Built using ElectronJS, BrainFlow is a productivity timer featuring the pomodoro technique."
  ]

  return (
    <div className='work-container'>
        <div className='work-content'>
            <p className='work-heading'>WORK</p>
            <div className='work-wrapper'>
              <div className='work-data'>
                  <Project projectTitle="Quiky" projectCopy={projectCopy[0]}/>
                  <Project projectTitle="BrainFlow" projectCopy={projectCopy[1]}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Work