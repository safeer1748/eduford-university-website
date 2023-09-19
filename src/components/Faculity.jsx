import React,{useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation,motion, animate } from 'framer-motion'
const Faculity = () => {
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
    })
    return (
        <>
            <div id='faculity' ref={ref} className='grid lg:grid-row-2 gap-16 mt-32 w-[100%]'>
                <div className='text-center flex-col mx-6'>
                    <h1 className='text-3xl font-bold'>Our Facilities</h1>
                    <p className='text-gray-500 mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <motion.div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 md:mx-20 justify-center'
                animate={animation}
                >
                    <div className='flex flex-col justify-center'>
                        <img className='rounded-lg mx-w-[300px] mx-h-[300px] object-cover ' src="src\assets\library.png" alt="" />
                        <h1 className='text-[20px] font-bold mt-5'>World Class Library</h1>
                        <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero, perferendis modi recusandae earum consequatur accusamus magni minus quas optio animi.</p>
                    </div>
                    <div className='flex flex-col'>
                        <img className='rounded-lg mx-w-[300px] mx-h-[300px] object-cover ' src="src\assets\basketball.png" alt="" />
                        <h1 className='text-[20px] font-bold mt-5'>Largest Play Ground</h1>
                        <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero, perferendis modi recusandae earum consequatur accusamus magni minus quas optio animi.</p>
                    </div>
                    <div className='flex flex-col'>
                        <img className='rounded-lg mx-w-[300px] mx-h-[300px] object-cover ' src="src\assets\cafeteria.png" alt="" />
                        <h1 className='text-[20px] font-bold mt-5'>Tasty And Healty Food</h1>
                        <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet libero, perferendis modi recusandae earum consequatur accusamus magni minus quas optio animi..</p>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Faculity
