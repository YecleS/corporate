import React from 'react';
import '../Styles/ContactIcons.css';

function ContactIcons() {
  return (
    <section className='contact-icons' id='contact-icons'>
        <div className='contact-icons__container'>
            <div className='contact-icons__card'>
                <i className="contact-icons__icon fas fa-envelope"></i>
                <p className='contact-icons__icon-description'>hello@domain.com</p>
            </div>

            <div className='contact-icons__card'>
                <i className="contact-icons__icon fas fa-phone"></i>
                <p className='contact-icons__icon-description'>000-000-0000</p>
            </div>

            <div className='contact-icons__card'>
                <i className="contact-icons__icon fas fa-map-marker-alt"></i>
                <p className='contact-icons__icon-description'>London, United Kingdom</p>
            </div>
        </div>
    </section>
  )
}

export default ContactIcons