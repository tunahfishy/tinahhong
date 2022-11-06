import React from 'react'
import './ContactForm.css'
import { useForm, ValidationError } from '@formspree/react';
// END IMPORT SECTION


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgedvwzr");

  if (state.succeeded) {
      return (
        <section id="contact-form">
          <div className='contact-inputs'>
            <h2>Thanks for sending a message, I'll be in contact soon!</h2>
          </div>
        </section>
      )
  }
  return (
    <section id="contact-form">
        <div className='contact-inputs'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <h3>Contact Me</h3>
            <input required
                type="text"
                placeholder="Name">
            </input>
            <input required
              id="email"
              type="email" 
              name="email"
              placeholder="Email I can reply to"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea required
              type="text"
              id="message"
              name="message"
              placeholder="What would you like to tell me?"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Send
            </button>
          </form>
        </div>
    </section>
  );
}