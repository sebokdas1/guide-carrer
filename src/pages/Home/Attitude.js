import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthOceania } from '@fortawesome/free-solid-svg-icons';
import img from '../../Asset/ideal_career 2.png'

const Attitude = () => {
    return (
        <div className='shadow-sm'>
            <div className='guide-container  pt-8'>
                <div className='pl-20 guide-text-cont '>


                    <div>
                        <div className='pl-10 text-center'>
                            <p className='text-xl'><FontAwesomeIcon icon={faEarthOceania} /></p>
                            <div className='empty-div-featured mx-auto mt-2 mb-3'></div>

                            <h1 className='uppercase text-5xl font-bold'>top<br />ideal careers</h1>
                            <p className='text-gray-500 text-center mt-2'>Get Your 3 Ideal Carrer Recommendations list<br /> on basis of scientific data and 5 parameters<br /> Tese are Motivators, Personality, Aptitude<br /> and interests and your postentisl</p>

                            <button className='uppercase btn mt-5 bg-orange-600 text-white'>get ideal career report @rs. 1999</button>

                        </div>
                    </div>
                    <div>
                        <img className='pl-20' src={img} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Attitude;