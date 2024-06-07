import React from 'react';
import '../Styles/Testimonial.css';
import Carousel from 'react-bootstrap/Carousel';
import Team1 from '../Assets/team6.jpg';

function Testimonial() {
  return (
    <section className='testimonial' id='testimonial'>
        <div className='testimonial__container'>
            <div className='testimonial__header'>
                <h2 className='testimonial__title'>CLIENT TESTIMONIAL</h2>
                <p className='testimonial__sub-title'>- what client says about us -</p>
            </div>
            <Carousel controls={false} className='testimonial__carousel'>
                <Carousel.Item className='testimonial__carousel-item'>
                        <blockquote>
                                <p className='testimonial__carousel-quote'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?</p>
                                <cite>
                                    <p className='testimonial__carousel-author'>- JOHN WILLS</p>
                                    <p className='testimonial__carousel-position'>Manager</p>
                                </cite>
                            </blockquote>
                </Carousel.Item>
                <Carousel.Item className='testimonial__carousel-item'>
                            <blockquote>
                                <p className='testimonial__carousel-quote'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?</p>
                                <cite>
                                    <p className='testimonial__carousel-author'>- JASMINE PERRY</p>
                                    <p className='testimonial__carousel-position'>Accountant</p>
                                </cite>
                            </blockquote>
                </Carousel.Item>
                <Carousel.Item className='testimonial__carousel-item'>
                            <blockquote>
                                <p className='testimonial__carousel-quote'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?</p>
                                <cite>
                                    <p className='testimonial__carousel-author'>- ROCKY JOHNSON</p>
                                    <p className='testimonial__carousel-position'>CEO</p>
                                </cite>
                            </blockquote>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
  )
}

export default Testimonial