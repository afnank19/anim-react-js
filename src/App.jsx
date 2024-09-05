import './App.css'
import Nav from './components/nav'
import Links from './components/links'
import About from './components/about'
import { ReactLenis, useLenis } from 'lenis/react'
import Work from './components/work'
import Philosophy from './components/philosophy'
import Footer from './components/footer'
import { motion } from 'framer-motion';
import Cursor from './components/cursor'

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <>
      <ReactLenis root options={{duration: 1.4}}>
        <div className='cover'></div>
        <div className='app'>
          <Cursor />
          <motion.div className='landing-page' initial={{scale: 0.98}} animate={{scale: 1}} transition={{ duration: 0.7, ease: [0,.85,.37,1.01] }}>
            <Nav />
            <Links />
          </motion.div>
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
        </div>
      </ReactLenis>
    </>
  )
}

export default App
