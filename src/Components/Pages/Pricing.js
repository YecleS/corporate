import React from 'react';
import '../Styles/Pricing.css';

function Pricing() {
  return (
    <section className='pricing' id='pricing'>
        <div className='pricing__container'>
            <div className='pricing__header'>
                <h2 className='pricing__title'>PRICING & PLANS</h2>
                <p className='pricing__sub-title'>- check our pricing & plans -</p>
            </div>
            <div className='pricing__body'>

                <div className='pricing__card'>
                    <div className='pricing__card-header'>
                        <h3 className='pricing__card-title'>BASIC</h3>
                        <p className='pricing__card-price'>£49</p>
                    </div>
                    <div className='pricing__card-body'>
                        <table className='pricing__card-table'>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Wireframing</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Visual Design</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>5 Pages</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Free Hosting</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Support & Assistance</td>
                            </tr>
                        </table>
                    </div>
                    <div className='pricing__card-footer'>
                        <button className='pricing__card-button'>ORDER NOW</button>
                    </div>
                </div>

                <div className='pricing__card--colored'>
                    <div className='pricing__card-header'>
                        <h3 className='pricing__card-title'>PREMIUM</h3>
                        <p className='pricing__card-price'>£49</p>
                    </div>
                    <div className='pricing__card-body'>
                        <table className='pricing__card-table'>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Wireframing</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Visual Design</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>5 Pages</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Free Hosting</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Support & Assistance</td>
                            </tr>
                        </table>
                    </div>
                    <div className='pricing__card-footer'>
                        <button className='pricing__card-button'>ORDER NOW</button>
                    </div>
                </div>

                <div className='pricing__card'>
                    <div className='pricing__card-header'>
                        <h3 className='pricing__card-title'>ULTIMATE</h3>
                        <p className='pricing__card-price'>£49</p>
                    </div>
                    <div className='pricing__card-body'>
                        <table className='pricing__card-table'>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Wireframing</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Visual Design</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>5 Pages</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Free Hosting</td>
                            </tr>
                            <tr className='pricing__card-table-tr'>
                                <td className='pricing__card-table-td'>Support & Assistance</td>
                            </tr>
                        </table>
                    </div>
                    <div className='pricing__card-footer'>
                        <button className='pricing__card-button'>ORDER NOW</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Pricing