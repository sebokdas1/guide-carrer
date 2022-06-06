import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import img from '../../Asset/s2.png'
import './Report.css';

const Report = () => {
    return (
        <div className=''>
            <div className='report shadow-xl'>
                <h2 className='text-center mt-8 text-xl'><sup className='text-3xl text-gray-400'><FontAwesomeIcon icon={faQuoteLeft} /></sup> Find out what you do best and get someone to pay you for doind it. <sub className='text-3xl text-gray-400'><FontAwesomeIcon icon={faQuoteRight} /></sub></h2>

                <div className='guide-container report-container pt-8'>
                    <div className='pl-20 guide-text-cont '>
                        <div>
                            <img src={img} alt="" />
                        </div>

                        <div>
                            <div className='pl-20 text-center'>
                                <div className='empty-div-featured mx-auto mt-2'></div>
                                <h2 className='text-3xl'>Insight of your</h2>
                                <h1 className='uppercase text-6xl font-bold'>ideal carrer<br /> report</h1>
                                <p className='text-gray-500 text-center'>Will Provide you with 12 pages of<br /> psychometric carrer report and<br /> suggests you the carrer which is most<br /> suitable for you</p>

                                <button className='uppercase btn mt-5 bg-orange-600 text-white'>get ideal career report @rs. 1999</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Report;