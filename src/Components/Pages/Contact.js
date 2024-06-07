import React from 'react';
import '../Styles/Contact.css';

function Contact() {
  return (
    <section className='contact' id='contact'>
        <div className='contact__container'>
            <div className='contact__header'>
                <h2 className='contact__title'>CONTACT US</h2>
                <p className='contact__sub-title'>- get connected with us -</p>
            </div>
            <div className='contact__body'>
                <div className='contact__form-header'>
                    <input type='text' placeholder='Enter your full name' className='contact__form-header-input'/>
                    <input type='text' placeholder='Enter your email address' className='contact__form-header-input'/>
                    <input type='text' placeholder='Enter your contact number' className='contact__form-header-input'/>
                </div>
                <div className='contact__form-body'>
                    <textarea placeholder='Enter your contact message' className='contact__form-body-textarea'></textarea>
                </div>
                <div className='contact__footer'>
                    <button className='contact__button'>SUBMIT</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact