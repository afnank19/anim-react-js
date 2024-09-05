import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const Cursor = () => {
    const size = 16;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
        op: useMotionValue(1)
    }

    const smoothOptions = {damping: 20, stiffness: 200, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY} = e;
        mouse.x.set(clientX - size / 2);
        mouse.y.set(clientY -size / 2);
    }

    useEffect(()=> {
        window.addEventListener("mousemove", manageMouseMove)
        window.addEventListener("touchmove", (e) => {
            mouse.op.set(0)
        })

        return () => {window.removeEventListener("mousemove", manageMouseMove)}
    })



  return (
    <motion.div className='cursor' style={{left: smoothMouse.x, top: smoothMouse.y, opacity: mouse.op}}></motion.div>
  )
}

export default Cursor