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
                            <p className='text-3xl'><FontAwesomeIcon icon={faEarthOceania} /></p>
                            <div className='empty-div-featured mx-auto mt-2 mb-3'></div>

                            <h1 className='uppercase text-5xl font-bold'>aptitude</h1>
                            <p className='text-gray-500 text-center mt-2'>Aptitude is your ability - your strengths<br /> Knowing and working upon strengths can<br /> help walk long way in your carrer get<br /> scores and graphs related to 6 different types <br />of aptitde and find about your heighest<br /> Aptitude</p>

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