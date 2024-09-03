import React from 'react'
import arrow from '../assets/arrow.svg'

const Project = (props) => {
  return (
    <div className='project-container'>
        <div className='project-title-wrapper'>
            <a className='project-title'>{props.projectTitle}</a>
            <img src={arrow} width={15} height={15} className='project-arrow'/>
        </div>
        <p className='project-copy'>{props.projectCopy}</p>
        <div className='project-divider'></div>
    </div>
  )
}

export default Project