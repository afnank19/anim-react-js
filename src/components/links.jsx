import React from 'react'
import Home from './home'
import { motion } from 'framer-motion';
import Link from './link';

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
                <Link title="GITHUB" url="https://github.com/afnank19"/>
                <Link title="LINKEDIN" />
            </div>
            <div className='links-social'>
                <Link title="YT" url="https://www.youtube.com/@afnankhalid7781"/>
                <Link title="IG" url="https://www.instagram.com/afnank194/?utm_source=qr"/>
                {/* <a href='https://www.youtube.com/@afnankhalid7781' className='white'>YT</a>
                <a href='https://www.instagram.com/afnank194/?utm_source=qr' className='white'>IG</a> */}
            </div>
        </div>
    </div>
  )
}

export default Links