import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <section className='footer' id='footer'>
        <div className='footer__container'>
            <p className='footer__copyright'>© 2022 Corporate. All Right Reserved.</p>
            <div className='footer__socials'>
                <li className='footer__social-link'><i className="footer__icon fab fa-facebook-f"></i></li>
                <li className='footer__social-link'><i className="footer__icon fab fa-facebook-f"></i></li>
                <li className='footer__social-link'><i className="footer__icon fab fa-linkedin-in"></i></li>
            </div>
        </div>
    </section>
  )
}

export default Footer