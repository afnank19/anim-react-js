import React from 'react'
import Home from './home'
const Links = () => {
  return (
      <div>
        <Home />
        <p className='links-origin'>ISLAMABAD, PAKISTAN</p>
        <div className='links-container'>
            <div className='links-location'>
                <p>10.8231°N 106.6297°E</p>
            </div>
            <div className='links-prof'>
                <a>GITHUB</a>
                <a>LINKEDIN</a>
            </div>
            <div className='links-social'>
                <a>YT</a>
                <a>IG</a>
            </div>
        </div>
    </div>
  )
}

export default Links