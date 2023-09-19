import React, { useState } from 'react'
import Navigation from './Navigation'
import NavigationMobile from './NavigationMobile'
import { motion } from 'framer-motion'
const Navbar = () => {
  const[color,setColor]=useState(false);
  const ChangeColor=()=>{
    if(window.scrollY>=70){
      setColor(true);
    } else{
      setColor(false);
    }
  }
  window.addEventListener('scroll',ChangeColor);
  return (
    <>
    <motion.div className={`fixed top-0 w-full flex justify-between items-center py-3 px-8 lg:px-24 z-20 ${color?'bg-indigo-950/95 duration-500':'bg-transparent duration-500'}`}
    initial={{
        opacity:'0'
    }}
    animate={{
        opacity:'1'
    }}
    transition={{
        delay:'1.2',
    }}>
        <img className='w-[100px] md:w-[150px]' src="src/assets/logo.png" alt="logo" />
        <Navigation/>
        <NavigationMobile/>
    </motion.div>
    </>
  )
}

export default Navbar
