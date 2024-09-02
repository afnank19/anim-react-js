import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Links from './components/links'
import About from './components/about'
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <>
      <ReactLenis root options={{duration: 1.4}}>
        <div className='landing-page'>
          <Nav />
          <Links />
        </div>
        <About />
        <About />
      </ReactLenis>
    </>
  )
}

export default App
