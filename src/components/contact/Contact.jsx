import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp}from 'react-icons/bs'
import './contact.css'
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_noy5p4h', 'template_gavz25k', form.current, 'xRwlc9X39irpiC09d')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();
  };
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className='contact_option'>
          <MdOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>devrai197551@gmail.com</h5>
          <a href="mailto:devrai97551@gmail.com">Send a Message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 8528885508</h5>
          <a href="https://api.whatsapp.com/send?phone=+918528885508">Send a Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
