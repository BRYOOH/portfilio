import sun from '../Photos/sun.png'
import moon from '../Photos/moon.png'
import React from 'react'
import './toggle.css'

function Toggle() {
  return (
    <div className='t'>
        <img src={sun} alt="" className="t-icon" />
        <img src={moon} alt="" className="t-icon" />
 <div className="t-button"></div>
    </div>
  )
}

export default Toggle