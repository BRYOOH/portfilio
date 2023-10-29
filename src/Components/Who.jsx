import React from 'react'
import './who.css'
import me from '../Photos/me.jpg'

function Who() {
  return (
    <div className='w'>
      <div className="w-left">
        <div className="w-card b"></div>
          <div className="w-card">
            <img src={me} alt="" className="w-img" />
          </div>
        
      </div>
      <div className="w-right">
        <h1 className="header">About Me</h1>
        <p className="intro">I am a devoted and hardworking student, looking for some market experience to improve my
programming skills. I have also demonstrated numerous times that I am a great team player who is able
to adapt quickly to change</p>
        <p className="desc">I am proficient in Java frameworks, React native and C#. I possess excellent problem-solving abilities 
and a commitment to continuous learning and professional growth. Seeking an opportunity to 
contribute to a dynamic development team and expand my skills in a challenging and innovative 
environment.  </p>
      </div>
    </div>
  )
}

export default Who