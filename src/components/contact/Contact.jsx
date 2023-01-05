import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ebgni37', 'template_q6qlwux', form.current, 'YQ9ibEU6-dZSDYygq')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      
      <div className='container contact__container '>
        <div className='contact__options'>
          <article className='contact__option '>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>subramanya1174@gmail.com</h6>
            <a href='mailto:subramanya1174@gmail.com' target='_blank' rel="noreferrer"> Send a message</a>
          </article>

          <article className='contact__option '>
            <FaWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+919686179990</h5>
            <a href='https://web.whatsapp.com/send?phone=+919686179990' target='_blank' rel="noreferrer"> Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea type="text" name='name' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
    </div>
  )
}

export default Contact
