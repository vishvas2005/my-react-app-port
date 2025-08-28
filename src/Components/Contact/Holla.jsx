import React, { useState, useRef } from 'react';
import Footer from '../Footer';
import emailjs from '@emailjs/browser';

function Holla() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [responseMsg, setResponseMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_15pwiid',    // Replace with your EmailJS service ID
        'template_5nobx3l',   // Replace with your EmailJS template ID
        formRef.current,
        'rekVDTXNTisMTkG8X'     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponseMsg("Message sent successfully!");
          setIsError(false);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setResponseMsg("Something went wrong. Please try again!");
          setIsError(true);
        }
      );
  };

  return (
    <>
      <div className='md:flex h-[120vh] md:h-screen w-full bg-black relative overflow-hidden'>
        <div className="left md:h-screen w-[80vw] md:w-[40vw] mt-28 ml-10 md:ml-20">
          <img src="src/assets/images/loop.gif" alt="" />
        </div>
        <div className="right h-screen md:h-screen w-[40vw] ml-0 md:ml-10">
          <h1 className='text-white text-[30px] font-[pp1] ml-10 md:ml-20 mt-8 md:mt-52'>HELLO!</h1>
          <p className='text-white w-full text-[14px] md:text-[20px] font-[pp] ml-10 md:ml-20'>What’s your name?</p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className='w-[90vw] lg:w-[30vw] ml-8 lg:ml-20 mt-6 pl-2 pb-1 text-white bg-transparent'
              name="name"
              placeholder='Enter your name....'
              value={form.name}
              onChange={handlechange}
              required
            />
            <div className='h-[1px] w-[80vw] lg:w-[30vw] bg-white ml-10 lg:ml-20'></div>
            <input
              className='w-[90vw] lg:w-[30vw] ml-8 lg:ml-20 mt-10 pl-2 pb-1 text-white bg-transparent'
              name='email'
              type='email'
              placeholder='Enter your Email....'
              value={form.email}
              onChange={handlechange}
              required
            />
            <div className='h-[1px] w-[80vw] lg:w-[30vw] bg-white ml-10 lg:ml-20'></div>
            <input
              className='w-[80vw] lg:w-[30vw] ml-10 lg:ml-20 mt-20 pl-2 pb-1 text-white bg-transparent'
              name="message"
              placeholder="Enter your message here...."
              value={form.message}
              onChange={handlechange}
              required
            />
            <div className='h-[1px] w-[80vw] lg:w-[30vw] bg-white ml-10 lg:ml-20'></div>
            <button className='w-[30vw] ml-10 lg:ml-20 bg-white mt-10 rounded-full h-8' type="submit">
              SUBMIT
            </button>
            {responseMsg && (
              <div style={{ color: isError ? "red" : "green", marginTop: 8 }}>
                {responseMsg}
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Holla;
