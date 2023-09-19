import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
const NavigationMobile = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <>
            <div onClick={handleMenu} className='text-white lg:hidden z-10'>
                {showMenu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={showMenu ? 'fixed top-0 right-0 bg-orange-600 w-[60%] h-screen duration-700' : 'fixed top-0 right-[-100%] w-[60%] h-screen duration-700'}>
                <ul className='flex flex-col gap-8 text-white items-center pt-20'>
                    <li><Link onClick={handleMenu} activeClass='active' to='home' spy={true} smooth={true} offset={-150} duration={500}>Home</Link></li>
                    <li><Link onClick={handleMenu} activeClass='active' to='courses' spy={true} smooth={true} offset={-150} duration={500} >Courses</Link></li>
                    <li><Link onClick={handleMenu} activeClass='active' to='campus' spy={true} smooth={true} offset={-150} duration={500} >Campus</Link></li>
                    <li><Link onClick={handleMenu} activeClass='active' to='faculity' spy={true} smooth={true} offset={-150} duration={500} >Faculity</Link></li>
                    <li><Link onClick={handleMenu} activeClass='active' to='feedback' spy={true} smooth={true} offset={-150} duration={500} >Feedback</Link></li>
                    <li><Link onClick={handleMenu} activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500} >About</Link></li>
                </ul>
            </div>
        </>
    )
}

export default NavigationMobile
