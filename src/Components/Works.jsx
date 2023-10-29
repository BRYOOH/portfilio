import React from 'react'
import './works.css'
import Product from '../Components/Product' 
import { products } from '../data'

function Works() {
  return (
    <div className='o'>
      <div className="o-text">
        <h1 className="o-title">Projects and Community Works</h1>
        <p className='o-intro'>Hi there, I am a junior software developer who is obsesse3d with everything software engineering related. Below are some of my projects awith their respective links. Im always happy to connect with like-minded tech professionals.
        </p>
      </div>
      <div className="o-pro">
        {products.map((item)=>(
          <Product key={item.id} img= {item.img} link={item.link}/>))}   
          </div>
   </div>
  )}
  
export default Works;