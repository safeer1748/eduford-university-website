import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
const Courses = () => {
    const { ref, inView } = useInView({
        threshold:0.4
    })
    const animation = useAnimation()
    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 1
                }
            })
        }
        if(!inView){
            animation.start({
                opacity:0
            })
        }
    }, [inView])
    return (
        <>
            <div id='courses' ref={ref} className='flex flex-col justify-center item-center gap-16 mt-32'>
                <div className='text-center flex-col mx-6'>
                    <h1 className='text-3xl font-bold'>Courses We Offer</h1>
                    <p className='text-gray-500 mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <motion.div className='grid gap-12 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-6 md:mx-20'
                    animate={animation}
                >
                    <div className='bg-orange-100 rounded-lg p-4 text-center mx-w-[350px] hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] duration-700 '>
                        <h1 className='font-bold text-2xl'>Intermidate</h1>
                        <p className='text-gray-500 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur voluptatum, natus optio quisquam laboriosam ea! Labore libero ea corrupti reprehenderit beatae odit necessitatibus placeat. Eius adipisci ratione unde non nulla fugiat reiciendis repellendus! Vero debitis illum magnam doloremque accusamus!</p>
                    </div>
                    <div className='bg-orange-100 rounded-lg p-4 text-center mx-w-[350px] hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] duration-700'>
                        <h1 className='font-bold text-2xl'>Degree</h1>
                        <p className='text-gray-500 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur voluptatum, natus optio quisquam laboriosam ea! Labore libero ea corrupti reprehenderit beatae odit necessitatibus placeat. Eius adipisci ratione unde non nulla fugiat reiciendis repellendus! Vero debitis illum magnam doloremque accusamus!</p>
                    </div>
                    <div className='bg-orange-100 rounded-lg p-4 text-center mx-w-[350px] hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] duration-700'>
                        <h1 className='font-bold text-2xl'>Post Graduation</h1>
                        <p className='text-gray-500 text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur voluptatum, natus optio quisquam laboriosam ea! Labore libero ea corrupti reprehenderit beatae odit necessitatibus placeat. Eius adipisci ratione unde non nulla fugiat reiciendis repellendus! Vero debitis illum magnam doloremque accusamus!</p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Courses
