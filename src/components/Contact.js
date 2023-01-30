import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sp2envo', 'template_4hch7ap', form.current, '8Zv6ApvCzuRGzJGBA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <div className='info'>

      </div>
      <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact