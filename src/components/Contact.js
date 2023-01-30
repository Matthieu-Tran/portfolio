import React, { useRef } from 'react';
import {FaUserAlt , FaEnvelope , FaVoicemail} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";
import cv from '../assets/CV-Matthieu-Tran.pdf'
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CV-MatthieuTran.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const email = formData.get("user_email");

    if (!emailPattern.test(email)) {
      return window.alert("Please enter a valid email address!");
    }


    emailjs.sendForm('service_sp2envo', 'template_4hch7ap', form.current, '8Zv6ApvCzuRGzJGBA')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          window.alert("Your email has been sent successfully!");
      }, (error) => {
          console.log(error.text);
          form.current.reset();
      });
  };
  return (
    <div className='contact'>
      <div className='info'>
        <h1> Contact Me !</h1>
        <h2 className='or-h2'> Or </h2>
        <motion.button 
          whileHover={{ scale: 1.1 , backgroundColor: "#8080E0", color: "#FFF", cursor: "pointer"}}
          whileTap={{ scale: 0.9 }}
          onClick={handleDownload} 
          className="btn-download"> 
          
          Download my CV 
        </motion.button>
      </div>
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='input-group'>
            <label className='label-group'> <FaUserAlt/> Your Name</label>
            <input className='input-box' type="text" name="user_name" required/>
          </div>
          <div className='input-group'>
            <label className='label-group'> <FaEnvelope/> Your Email</label>
            <input className='input-box' type="email" name="user_email" required/>
          </div>
          <div className='input-group'>
            <label className='label-group'> <FaVoicemail/> Your Message</label>
            <textarea className='input-box' name="message" rows="5" cols="30" required/>
          </div>
          <input className='btn-send' type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact