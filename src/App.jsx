import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Links from './components/links'
import About from './components/about'
import { ReactLenis, useLenis } from 'lenis/react'
import Work from './components/work'
import Philosophy from './components/philosophy'

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
        <section id='about'>
          <About />
        </section>
        <section id='philosophy'>
          <Philosophy />
        </section>
        <section id='work'>
          <Work />
        </section>
      </ReactLenis>
    </>
  )
}

export default App
