import React from 'react'
import './hero.css'
import me from '../Photos/maad.jpg'

function Hero() {
  return (
  <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 className="i-intro">Hello my name is</h2>
        <h1 className="i-name">Brian  Mithamo</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Android app Developer</div>
            <div className="i-title-item">Software Developer</div>
            <div className="i-title-item">Back-end Developer</div>/ 
            <div className="i-title-item">Full stack Developer</div>
          </div>
        </div>
        <div className="i-desc">I am  a passionate Software engineer, with both front end and back-end skills. I specialize in Java frameworks, ReactJS and ASP.NET</div>
      </div>
    </div>
    <div className="i-right">
      <div className="i-bg"></div>
      <img src={me} alt="" className="i-img" />
      </div>
  </div>
  )
}

export default Hero