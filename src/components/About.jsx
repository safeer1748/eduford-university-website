import{AiOutlineInstagram} from 'react-icons/ai'
import{BiLogoFacebook,BiLogoTwitter,BiLogoLinkedin} from 'react-icons/bi'
import React,{useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import{useAnimation,motion} from 'framer-motion'
const About = () => {
  const {ref,inView}=useInView({
    threshold:0.3
})
const animation=useAnimation()
useEffect(()=>{
    if(inView){
        animation.start({
            opacity:1,
            transition:{duration:1}
        })
      
    }
    if(!inView){
        animation.start({
            opacity:0
        })
    }
},[inView])
  return (
    <>
    <motion.div ref={ref} id='about' className=' text-center flex flex-col w-[100%] justify-center items-center mt-32 px-6'
    animate={animation}
    >
        <h1 className='text-2xl font-bold'>About Us</h1>
        <p className='mt-2 md:w-[50%] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ut fugiat dignissimos ullam dolor maxime labore eum veniam nihil, quasi nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='flex gap-4 mt-8 mb-20'>
            <BiLogoTwitter size={20} className='text-orange-600'/>
            <AiOutlineInstagram size={20} className='text-orange-600'/>
            <BiLogoFacebook size={20} className='text-orange-600'/>
            <BiLogoLinkedin size={20} className='text-orange-600'/>
        </div>
    </motion.div>
    </>
  )
}

export default About
