import React from 'react'
import '../Styles/Works.css';
import Img1 from '../Assets/img2.jpg';
import Img2 from '../Assets/img3.jpg';
import Img3 from '../Assets/img4.jpg';
import Img4 from '../Assets/img5.jpg';
import Img5 from '../Assets/img6.jpg';
import Img6 from '../Assets/img7.jpg';
import Img7 from '../Assets/img8.jpg';
import Img8 from '../Assets/img9.jpg';
import Img9 from '../Assets/img10.jpg';
import Pagination from 'react-bootstrap/Pagination';



function Works() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
    );
    }

  return (
    <section className='works' id='works'>
        <div className='works__container'>
            <div className='works__header'>
                <h2 className='works__title'>OUR WORKS</h2>
                <p className='works__sub-title'>- our awesome works -</p>
            </div>
            <div className='works__body'>
                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img1} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Lonely Path</h5>
                        <p className='works__description'>Web Design</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img2} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Photographer Girl</h5>
                        <p className='works__description'>Branding</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img3} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>The Difference</h5>
                        <p className='works__description'>Web Design</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img4} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Nature Patterns</h5>
                        <p className='works__description'>Branding</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img5} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>The Difference</h5>
                        <p className='works__description'>Photography</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img6} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Winter Sonata</h5>
                        <p className='works__description'>Web Design</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img7} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Lonely Path</h5>
                        <p className='works__description'>Branding</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img8} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Appreciation</h5>
                        <p className='works__description'>Photography</p>
                    </div>
                </div>

                <div className='works__card'>
                    <div className='works__img-wrapper'>
                        <img src={Img9} className='works__img'/>
                    </div>
                    <div className='works__description_wrapper'>
                        <h5 className='works__description-title'>Happy Days</h5>
                        <p className='works__description'>Web Design</p>
                    </div>
                </div>

            </div>
            <div className='works__footer'>
            <Pagination className="custom-pagination">{items}</Pagination>
            </div>
        </div>
    </section>
  )
}

export default Works