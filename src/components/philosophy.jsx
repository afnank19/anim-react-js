import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';

const Philosophy = () => {
  const philo = useRef(null);
    
  const { scrollYProgress} = useScroll({
    target: philo,
    offset: ['0.4 0.9', '0.1 0.5'] //Immediate pop in
  })

  return (
    <div className='about-container philo-margin'>
      <div className='about-content'>
        <p className='about-heading'>PHILOSOPHY</p>
        <motion.p className='about-copy' style={{opacity: scrollYProgress}} ref={philo}>“It's not about being <span className='span-italic'>perfect</span>. It's everyday, one step at time, trying to be better, trying to do more.” - Lewis Hamilton<br /><br />Obstacles are opportunities. What stands in the way becomes the way. Showing up, working through issues and staying optimistic.<br /><br /><span className='span-italic'>Discipline</span> for when there's no motivation. What I use to work through life is what I use to work through code.<br /><br />Chasing preeminence.</motion.p>
      </div>
    </div>
  )
}

export default Philosophy