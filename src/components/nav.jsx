import React from 'react'
import '../App.css';
import { ReactLenis, useLenis } from 'lenis/react'

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
        <p className='nav-name'>AFNAN<br></br>KHALID</p>
        <div className='nav-links'>
            <p onClick={()  => {handleScroll('about')}}>ABOUT</p>
            <p onClick={()  => {handleScroll('philosophy')}}>PHILOSOPHY</p>
            <p onClick={()  => {handleScroll('work')}}>WORK</p>
        </div>
    </div>
  )
}

export default Nav