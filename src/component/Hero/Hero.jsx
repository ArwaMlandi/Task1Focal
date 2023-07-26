import React from 'react'
import './Hero.scss'
const Hero = () => {
  return (
    <div className='Hero'>
      <h1 className='Hero__title'>The modern landing page for <span className='Hero__title__span'>React developer</span> </h1>
      <p className='Hero__p'>The easiest way to build landing page in secounds.</p>
      <button className='Hero__button'>Dawonload Your Free Version </button>
    </div>
  )
}

export default Hero