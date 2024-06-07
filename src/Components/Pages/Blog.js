import React from 'react';
import '../Styles/Blog.css';
import BlogImg1 from '../Assets/blog1.jpg';
import BlogImg2 from '../Assets/blog2.jpg';
import BlogImg3 from '../Assets/blog3.jpg';

function Blog() {
  return (
    <section className='blog' id='blog'>
        <div className='blog__container'>
            <div className='blog__header'>
                <h2 className='blog__title'>LATEST FROM BLOG</h2>
                <p className='blog__sub-title'>- get our latest news from blog -</p>
            </div>
            <div className='blog__body'>

                <div className='blog__card'>
                    <div className='blog__card-header'>
                        <img src={BlogImg1} className='blog__card-img'/>
                    </div>
                    <div className='blog__card-body'>
                        <p className='blog__card-date'>15 Nov 2016</p>
                        <h3 className='blog__card-title'>Coffee Lovers</h3>
                        <p className='blog__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.</p>
                    </div>
                    <div className='blog__card-footer'>
                        <button className='blog__card-button'>READ MORE <i class="fas fa-chevron-right"></i> </button>
                    </div>
                </div>

                <div className='blog__card'>
                    <div className='blog__card-header'>
                        <img src={BlogImg2} className='blog__card-img'/>
                    </div>
                    <div className='blog__card-body'>
                        <p className='blog__card-date'>10 Nov 2016</p>
                        <h3 className='blog__card-title'>Tips for UI Design</h3>
                        <p className='blog__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.</p>
                    </div>
                    <div className='blog__card-footer'>
                        <button className='blog__card-button'>READ MORE <i class="fas fa-chevron-right"></i> </button>
                    </div>
                </div>

                <div className='blog__card'>
                    <div className='blog__card-header'>
                        <img src={BlogImg3} className='blog__card-img'/>
                    </div>
                    <div className='blog__card-body'>
                        <p className='blog__card-date'>07 Nov 2016</p>
                        <h3 className='blog__card-title'>Beautiful Day</h3>
                        <p className='blog__card-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.</p>
                    </div>
                    <div className='blog__card-footer'>
                        <button className='blog__card-button'>READ MORE <i class="fas fa-chevron-right"></i> </button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Blog