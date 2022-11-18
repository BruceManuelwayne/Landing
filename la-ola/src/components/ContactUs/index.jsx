import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
// todo: store id in ENV.
    emailjs.sendForm(process.env.REACT_APP_MY_KEY, 'template_t26ubjj', form.current, '0hzYciKCDdzkRw76F')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='flex w-full min-h-screen jusify-center items-center'>
      <div className=' flex flex-col space-y-6 bg-blue-wave w-full max-w-4xl p-8 rounded-xl sahdow-lg text-white'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
            <input type="text" name="user_name" />
          <label>Email</label>
            <input type="email" name="user_email" />
          <label>Message</label>
            <textarea name="message" />
            <button className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <input type="submit" value="Send" />
            </button>
         
    </form>
      </div>
      
    </div>
   
  );
};

