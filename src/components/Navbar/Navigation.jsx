import React from 'react'
import { Link } from 'react-scroll'
const Navigation = () => {
  return (
    <>
   <ul className=' hidden lg:flex gap-12 text-[18px] text-white'>
        <li> <Link activeClass='active' to='home' spy={true} smooth={true} offset={-150} duration={500}>Home</Link></li>
       <li>  <Link activeClass='active' to='courses' spy={true} smooth={true} offset={-150} duration={500} >Courses</Link></li>
        <li> <Link activeClass='active' to='campus' spy={true} smooth={true} offset={-150} duration={500} >Campus</Link></li>
        <li> <Link activeClass='active' to='faculity' spy={true} smooth={true} offset={-150} duration={500} >Faculity</Link></li>
        <li> <Link activeClass='active' to='feedback' spy={true} smooth={true} offset={-150} duration={500} >Feedback</Link></li>
        <li> <Link activeClass='active' to='about' spy={true} smooth={true} offset={-150} duration={500} >About</Link></li>
    </ul>
    </>
  )
}

export default Navigation
