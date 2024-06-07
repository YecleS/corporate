import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeroBG1 from '../Assets/herobg1.png';
import HeroBG2 from '../Assets/herobg2.png';
import HeroBG3 from '../Assets/herobg3.png';
import '../Styles/Hero.css';

function Hero() {
  return (
    <section className='hero' id='home'>
        <Carousel>
            <Carousel.Item>
                <img src={HeroBG1} className='hero__carousel-img'/>
                <Carousel.Caption className='hero__carousel-caption'>
                    <h3>The perfect design for your website</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
                    <a className='hero__carousel-button'>Learn More <i class="fas fa-chevron-right"></i> </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={HeroBG2} />
                <Carousel.Caption className='hero__carousel-caption'>
                    <h3>Start Your Future Financial Plan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
                    <a className='hero__carousel-button'>Learn More <i class="fas fa-chevron-right"></i> </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={HeroBG3} />
                <Carousel.Caption className='hero__carousel-caption'>
                    <h3>Enjoy the Difference</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
                    <a className='hero__carousel-button'>Learn More <i class="fas fa-chevron-right"></i> </a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default Hero