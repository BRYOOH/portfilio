import React, { useRef } from 'react'
import './contact.css'
import phone from '../Photos/phone.jpeg'
import email from '../Photos/mail.jpeg'
import whatsapp from '../Photos/whatsapp.png'
// import emailjs from '@emailjs/browser'

function Contact() {

//   const formRef= useRef();

// const handleSubmit=(e)=>{
//   e.preventDefault()
  
//   emailjs.sendForm ('service_96b50mg', 'template_o7k8wg3',formRef.current,'I5B71wGF1_1fbTXv8')
//   .then((result)=> {
//       console.log(result.text);
//   }, (error)=> {
//       console.log( error.text);
//   });}

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" /> +254745436025
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={email} alt="" className="c-icon" /> @bryoohmuchira@gmail.com
            </div>
          </div>
          <div className="c-info">
            <div className="c-info-item">
              <img src={whatsapp} alt="" className="c-icon" /> +254745436025
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-des">
            <b>What is your story</b> Get in touch a tech professional and connect with your projects
          </p>
          <form > 
            <input type='text' placeholder='Name' name='user_name'/>
            <input type='text' placeholder='Subject' name='user_subject'/>
            <input type='text' placeholder='Email' name='user_email'/>
            <textarea rows='5' placeholder='Message' name='message'/>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact