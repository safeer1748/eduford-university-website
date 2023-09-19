import React,{useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation,motion} from 'framer-motion'
import{BsStarFill,BsStar,BsStarHalf} from 'react-icons/bs'
const Feedback = () => {
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
            <div id='feedback' ref={ref} className='grid lg:grid-row-2 gap-16 mt-32 w-[100%]'>
                <div className='text-center flex-col mx-6'>
                    <h1 className='text-3xl font-bold'>Our Students Feedback</h1>
                    <p className='text-gray-500 mt-2 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <motion.div className='grid md:grid-cols-2 gap-12 mx-6 md:mx-20 justify-center'
                animate={animation}
                >
                    <div className='flex gap-4 md:flex-row flex-col bg-orange-100 rounded-lg p-5 hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] duration-700'>
                        <img className='rounded-full w-[40px] h-[40px] object-cover ' src="src\assets\user1.jpg" alt="" />
                        <div>
                        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque consequuntur ab, officiis assumenda quam ea? Sint porro quasi sapiente magnam rerum aspernatur odit nulla? Recusandae totam sed natus, accusantium et maiores commodi corrupti nostrum accusamus earum at facere ut?</p>
                        <h1 className='text-[20px] font-bold mt-3'>Cristine Julley</h1>
                        <div className='flex gap-1 mt-3'>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarHalf className='text-orange-600'/>
                        </div>
                        </div>
                    </div>
                    <div className='flex gap-4 md:flex-row flex-col bg-orange-100 rounded-lg p-5 hover:shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)] duration-700'>
                        <img className='rounded-full w-[40px] h-[40px] object-cover ' src="src\assets\user2.jpg" alt="" />
                        <div>
                        <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rem possimus cumque quidem, dolorem molestias eveniet suscipit consequuntur, expedita velit obcaecati quisquam sunt assumenda libero! Nam debitis eos, animi quam officiis odit pariatur laudantium. Impedit iste ad facilis saepe ipsa.</p>
                        <h1 className='text-[20px] font-bold mt-3'>Jone David</h1>
                        <div className='flex gap-1 mt-3'>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarFill className='text-orange-600'/>
                            <BsStarFill className='text-orange-600'/>
                            <BsStar className='text-orange-600'/>
                        </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Feedback
