import React from 'react'
import '../Components/product.css'

export default function Product({img,link}) {
  return (
    <div className='p'> 
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
       </div>
       <a href={link} target='_blank' rel='nonreferrer' >
        <img src={img} alt="" className="p-img" />
       </a>
      </div>
  )
}
