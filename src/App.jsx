import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import Campus from './components/Campus'
import Faculity from './components/Faculity'
import Feedback from './components/Feedback'
import About from './components/About'
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Courses />
      <Campus />
      <Faculity />
      <Feedback />
      <About />
    </>
  )
}

export default App
