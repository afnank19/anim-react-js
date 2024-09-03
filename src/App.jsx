import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Links from './components/links'
import About from './components/about'
import { ReactLenis, useLenis } from 'lenis/react'
import Work from './components/work'
import Philosophy from './components/philosophy'
import Footer from './components/footer'

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
        <Footer />
      </ReactLenis>
    </>
  )
}

export default App
