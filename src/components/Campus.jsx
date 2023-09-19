import React,{useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import{useAnimation,motion} from 'framer-motion'
const Campus = () => {
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
            <div id='campus' ref={ref} className='grid lg:grid-row-2 gap-16 mt-32 w-[100%]'>
                <div className='text-center flex-col mx-6'>
                    <h1 className='text-3xl font-bold'>Our Global Campus</h1>
                    <p className='text-gray-500 mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <motion.div className='  grid lg:grid-cols-3 md:grid-cols-2 px-4 md:px-20 gap-12 justify-items-center w-full '
                animate={animation}
                >
                    <div className='group/lon relative rounded-lg w-[200px] sm:w-[300px] md:w-[290px] lg:w-[270px] xl:w-[350px] hover:bg-red-600 duration-500 h-[490px] overflow-hidden '
                    >
                        <img src="src\assets\london.png" alt="london.img" className='absolute object-cover h-full w-full mix-blend-overlay' />
                        <h1 className=' text-white text-3xl font-semibold text-center my-[500px] group-hover/lon:my-[245px] duration-500'>LONDON</h1>
                    </div>
                    <div className=' group/new relative rounded-lg w-[200px] sm:w-[300px] md:w-[290px]  lg:w-[270px] xl:w-[350px] h-[490px] hover:bg-red-600 duration-500 overflow-hidden'>
                        <img src="src\assets\newyork.png" alt="newyork.img" className='absolute object-cover h-full w-full mix-blend-overlay' />
                        <h1 className=' text-white text-3xl font-semibold text-center my-[500px] group-hover/new:my-[245px] duration-500'>NEWYORK</h1>
                    </div>
                    <div className='group/wash relative rounded-lg w-[200px] sm:w-[300px] md:w-[290px]  lg:w-[270px] xl:w-[350px] h-[490px] hover:bg-red-600 duration-500 overflow-hidden'>
                        <img src="src\assets\washington.png" alt="washington.img" className='absolute object-cover h-full w-full mix-blend-overlay' />
                        <h1 className=' text-white text-3xl font-semibold text-center my-[500px] group-hover/wash:my-[245px] duration-500'>WASHINGTON</h1>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Campus
