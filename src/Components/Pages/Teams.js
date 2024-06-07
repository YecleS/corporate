import React from 'react';
import '../Styles/Teams.css';
import TeamImg1 from '../Assets/team1.jpg';
import TeamImg2 from '../Assets/team2.jpg';
import TeamImg3 from '../Assets/team3.jpg';
import TeamImg4 from '../Assets/team4.jpg';
import TeamImg5 from '../Assets/team5.jpg';
import TeamImg6 from '../Assets/team6.jpg';
import TeamImg7 from '../Assets/team7.jpg';
import TeamImg8 from '../Assets/team8.jpg';
import TeamImg9 from '../Assets/team9.jpg';

function Teams() {
  return (
    <section className='teams' id='teams'>
        <div className='teams__container'>
            <div className='teams__header'>
                <h2 className='teams__title'>OUR TEAMS</h2>
                <p className='teams__sub-title'>- some of our experts -</p>
            </div>
            <div className='teams__body'>
                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg1} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>Gabriel Hart</h5>
                        <p className='teams__position'>CEO</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg2} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>David Antony</h5>
                        <p className='teams__position'>Manager</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg3} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>Nicholas Perry</h5>
                        <p className='teams__position'>UX Designer</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg4} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>Sarah Wills</h5>
                        <p className='teams__position'>Developer</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg5} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>Sophia Pitt</h5>
                        <p className='teams__position'>Developer</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg6} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>Taylor Lopez</h5>
                        <p className='teams__position'>Developer</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg7} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>Ryan Giggs</h5>
                        <p className='teams__position'>Content Writer</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>

                <div className='teams__card'>
                    <div className='teams__card-header'>
                        <div className='teams__card-img-wrapper'>
                            <img src={TeamImg8} className='teams__card-img'/>
                        </div>
                        <div className='teams__card-socials'>
                            <a><i className="teams__social-icon fa-brands fa-square-facebook"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-twitter"></i></a>
                            <a><i className="teams__social-icon fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className='teams__card-body'>
                        <h5 className='teams__name'>David Smith</h5>
                        <p className='teams__position'>SEO Expertt</p>
                        <p className='teams__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Teams