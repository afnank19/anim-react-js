import "./App.css";
import Nav from "./components/nav";
import Links from "./components/links";
import About from "./components/about";
import { ReactLenis, useLenis } from "lenis/react";
import Work from "./components/work";
import Philosophy from "./components/philosophy";
import Footer from "./components/footer";
import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const page = useRef(null);

  const { scrollYProgress } = useScroll({
    target: page,
    offset: ["start end", "end start"],
  });

  return (
    <>
      <ReactLenis root options={{ duration: 1.4 }}>
        <div className="cover"></div>
        {/* {load3d ? null : <Earth scrollY={scrollYProgress} />} */}
        {/* <Earth /> */}
        {/* <Gradient /> */}
        <div className="app" ref={page}>
          <div className="blur"></div>

          <motion.div
            className="landing-page"
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0, 0.85, 0.37, 1.01],
            }}
          >
            <Nav />
            <Links />
          </motion.div>
          <div className="container">
            <div className="inner-container">
              <section id="about">
                <About />
              </section>
              <section id="philosophy">
                <Philosophy />
              </section>
              <section id="work">
                <Work />
              </section>
            </div>
          </div>
          {/* <Footer /> */}
          <div className="bit-banner">
            {
              '#include<iostream> int main(){for(;;)std::cout<<"CREATE_MORE,CONSUME_LESS";return 0;}'
            }
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
