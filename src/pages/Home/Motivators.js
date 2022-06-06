import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons';
import img from '../../Asset/ideal_career 2.png'

const Motivators = () => {
    return (
        <div className='shadow-xl'>
            <div className='guide-container pt-8'>
                <div className='pl-20 guide-text-cont '>
                    <div className='pt-4'>
                        <img className='pl-20' src={img} alt="" />
                    </div>

                    <div>
                        <div className='pl-10 text-center'>
                            <p className='text-2xl'><FontAwesomeIcon icon={faHandBackFist} /></p>
                            <div className='empty-div-featured mx-auto mt-2 mb-3'></div>

                            <h1 className='uppercase text-5xl font-bold'>motivators</h1>
                            <p className='text-gray-500 text-center mt-2'>Knowing your self and your motivators can<br /> help decidethe kind of carrers which will<br /> keep you exciter and motivated know all <br />different kinds of motivators and get charged <br />for your carrer plage.</p>

                            <button className='uppercase btn mt-5 bg-orange-600 text-white'>get ideal career report @rs. 1999</button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Motivators;