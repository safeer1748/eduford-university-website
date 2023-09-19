import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <>
      <div id='home' className='relative bg-indigo-950 w-[100%] h-screen overflow-hidden flex justify-center items-center'>
        <img src='src\assets\banner.png' alt="" className='absolute h-full w-full object-cover mix-blend-overlay' />
        <div className='text-white text-center lg:w-[40rem] mx-6 z-10'>
          <motion.h1 className='text-5xl font-semibold'
            initial={{
              x: '-100%',
              opacity: '0'
            }}
            animate={{
              x: '0',
              opacity: [0, 1]
            }}
            transition={{
              duration: '1',
              ease: 'easeInOut'
            }}
          >World biggest University</motion.h1>
          <motion.p className='text-center mt-4'
            initial={{
              x: '100%',
              opacity: '0'
            }}
            animate={{
              x: '0',
              opacity: [0, 1]
            }}
            transition={{
              duration: '1',
              ease: 'easeInOut'
            }}
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, consequatur. Magnam omnis illo praesentium molestiae reprehenderit fugit accusantium, ea asperiores.</motion.p>
          <motion.button className='border-2 border-white py-2 px-5 mt-6 hover:border-orange-600 hover:bg-orange-600 duration-500'
            initial={{
              y: 200,
              opacity: '0'
            }}
            animate={{
              y: 0,
              opacity: [0, 1]
            }}
            transition={{
              duration: '0.4',
              ease: 'easeInOut'
            }}
          >visite us for more</motion.button>
        </div>
      </div>

    </>
  )
}

export default Home
