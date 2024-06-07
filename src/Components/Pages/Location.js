import React from 'react';
import '../Styles/Location.css';

function Location() {
  return (
    <section className='location' id='location'>
        <div className='location__container'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.6315219684368!2d121.1211239387947!3d14.237871746551686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd62f520da979b%3A0xc56913e11a3ee8b6!2sMahogany%20Village%20Phase%20II%2C%20Cabuyao%2C%20Laguna!5e0!3m2!1sen!2sph!4v1717800070597!5m2!1sen!2sph" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </section>
  )
}

export default Location