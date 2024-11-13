// Contact.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';
const Contact = () => {
  return (
    <div className=" w-full h-full md:mt-16 flex justify-center items-center p-8 ddd relative ">
 
      <span className="big-circle  w-72 h-72 rounded-full bg-gradient-to-br from-green-300/10 to-teal-500/40 absolute -top-10 left-56 z-[30] md:block hidden"></span>
      <div className="form max-w-5xl bg-white dark:bg-zinc-800 dark:text-green-50 rounded-md  z-40 overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-md shadow-emerald-700 relative ">
    
        {/* Contact Information Section */}
        <div className="contact-info p-10 relative ">
        <span className="big-circle block w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/10 absolute bottom-12 right-12  z-[30]"></span>
        <span className="big-circle block w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/10 absolute bottom-6 right-4  z-[30]"></span>
        <span className="big-circle block w-16 h-16 rounded-full bg-gradient-to-br from-green-500/10 to-teal-500/10 absolute bottom-4 right-16  z-[30]"></span>
          <h3 className="title text-3xl font-semibold mb-4 text-[#2cbe93] ">Let's get in touch</h3>
          <p className="text mb-12 text-lg ">
             Reach out to us if you have any questions about our recipes, nutrition plans, or if you just want to chat about food!
          </p>

          <div className="info flex  flex-col gap-3 mb-8">
            <div className="information flex gap-2 ">
              <FaMapMarkerAlt className="icon" fill='#2abc93' size={20} />
              <p>123 Main Street, Anytown, USA</p>
            </div>
            <div className=" information flex gap-2 ">
              <FaEnvelope className="icon" fill='#2abc93' size={20} />
              <p>gourab@gourab.com</p>
            </div>
            <div className=" information flex gap-2 ">
              <FaPhone className="icon" fill='#2abc93' size={20} />
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p className=' text-xl text-gray-900 dark:text-teal-500'>Connect with us :</p>
            <div className="social-icons flex gap-2 mt-2">
              <a href="#" aria-label="Facebook" ><FaFacebookF fill='#2abc93' size={25} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter fill='#2abc93' size={25} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram  fill='#2abc93' size={25}/></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn  fill='#2abc93' size={25}/></a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form bg-[#1abc9c] dark:bg-[#0b4a3e] relative">
          <span className="circle one w-32 h-32  top-32
           -right-10"></span>
          <span className="circle two w-32 h-32  top-3
           right-7"></span>

          <form className=' p-8 z-10 overflow-hidden relative' autoComplete="off">
            <h3 className="title text-white font-semibold leading-4 mb-1 text-2xl">Contact us</h3>
            <div className="input-container relative mt-4">
              <input type="text" name="name" placeholder="Username" className="input w-full outline-none bg-none py-3 px-4  tracking-wider bg-[#1abc9c] dark:bg-[#0b4a3e] rounded-md duration-300 border-2 border-white text-white text-[.95rem] placeholder:text-white" required />
              
            </div>
            <div className="input-container relative mt-4">
              <input type="email" name="email" placeholder="Email" className="input w-full outline-none bg-none py-3 px-4  tracking-wider bg-[#1abc9c] dark:bg-[#0b4a3e] rounded-md duration-300 border-2 border-white text-white text-[.95rem] placeholder:text-white" required />
             
            </div>
            <div className="input-container relative mt-4">
              <input type="tel" name="phone" placeholder="Phone number" className="input w-full outline-none bg-none py-3 px-4  tracking-wider bg-[#1abc9c] dark:bg-[#0b4a3e] rounded-md duration-300 border-2 border-white text-white text-[.95rem] placeholder:text-white" required />
              
            </div>
            <div className="input-container textarea relative mt-4">
              <textarea name="message" placeholder="Message" className="input px-5 py-3 min-h-36 w-full rounded-md resize-none overflow-y-auto bg-[#1abc9c] dark:bg-[#0b4a3e] border-2 border-white text-white placeholder:text-white outline-none" required></textarea>
              
            </div>
            <input type="submit" value="Send" className="bg-white border-2 border-gray-200 py-2 px-4 text-[#1abc9c] font-semibold rounded-md cursor-pointer transition duration-300 w-full hover:bg-transparent hover:text-white" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
