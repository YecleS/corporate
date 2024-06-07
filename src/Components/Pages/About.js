import React from 'react';
import '../Styles/About.css';
import AboutImg from '../Assets/aboutimg.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
  return (
    <section className='about' id='about'>
        <div className='about__container'>
            <div className='about__header'>
                <h2 className='about__title'>ABOUT US</h2>
                <p className='about__sub-title'>- learn more about us -</p>
            </div>
            <div className='about__body'>
                <div className='about__img-wrapper'>
                    <img src={AboutImg} className='about__img'/>
                </div>
                <div className='about__content-wrapper'>
                    <div className='about__content-text'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
                    </div>
                    <div className='about__content-figures'>
                        <div className='about__progress-bar-wrapper'>
                            <p className='about__progress-bar-label'>HTML / CSS / JAVASCRIPT</p>
                            <ProgressBar variant="danger" now="80" label="80%" className='about__progress-bar'/>
                        </div>
                        <div className='about__progress-bar-wrapper'>
                            <p className='about__progress-bar-label'>RESPONSIVE</p>
                            <ProgressBar variant="danger" now="95" label="95%" className='about__progress-bar'/>
                        </div>
                        <div className='about__progress-bar-wrapper'>
                            <p className='about__progress-bar-label'>PHOTOSHOP</p>
                            <ProgressBar variant="danger" now="60" label="60%" className='about__progress-bar'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About