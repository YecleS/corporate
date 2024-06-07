import React from 'react';
import '../Styles/Services.css';

function Services() {
  return (
    <section className='services' id='services'>
        <div className='services__container'>
            <div className='services__header'>
                <h2 className='services__title'>OUR SERVICES</h2>
                <p className='services__sub-title'>- services we provide -</p>
            </div>
            <div className='services__body'>
                <div className='services__card'>
                    <div className='services__card-header'>
                        <i className='services__card-icon fas fa-clone'></i>
                    </div>
                    <div className='services__card-body'>
                        <h3 className='services__card-title'>Responsive Design</h3>
                        <p className='services__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
                    </div>
                </div>

                <div className='services__card'>
                    <div className='services__card-header'>
                        <i className='services__card-icon fas fa-snowflake'></i>
                    </div>
                    <div className='services__card-body'>
                        <h3 className='services__card-title'>Creative Design</h3>
                        <p className='services__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
                    </div>
                </div>

                <div className='services__card'>
                    <div className='services__card-header'>
                        <i className='services__card-icon fas fa-plug'></i>
                    </div>
                    <div className='services__card-body'>
                        <h3 className='services__card-title'>SEO Optimized</h3>
                        <p className='services__card-description'>Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
                    </div>
                </div>

                <div className='services__card'>
                    <div className='services__card-header'>
                        <i className='services__card-icon fas fa-desktop'></i>
                    </div>
                    <div className='services__card-body'>
                        <h3 className='services__card-title'>Retina Ready</h3>
                        <p className='services__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
                    </div>
                </div>

                <div className='services__card'>
                    <div className='services__card-header'>
                        <i className='services__card-icon fas fa-trophy'></i>
                    </div>
                    <div className='services__card-body'>
                        <h3 className='services__card-title'>Brower Compatibility</h3>
                        <p className='services__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
                    </div>
                </div>

                <div className='services__card'>
                    <div className='services__card-header'>
                        <i className='services__card-icon fas fa-life-ring'></i>
                    </div>
                    <div className='services__card-body'>
                        <h3 className='services__card-title'>Customer Support</h3>
                        <p className='services__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, vel! Accusantium hic fugiat laudantiu earum consequuntur, unde nam et mollitia eaque incidunt sed.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services