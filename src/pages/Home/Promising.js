import React from 'react';
import aparna from '../../Asset/arpita.png'
import jahanvi from '../../Asset/jahnvi.png'
import prusti from '../../Asset/prusti.png'
import kanchana from '../../Asset/kanchana.png'
import lovly from '../../Asset/lovly.png'
import './Promising.css'

const Promising = () => {
    return (
        <div>
            <div>
                <img src="../../Asset/pic (3).png" alt="" />
            </div>
            <div className='empty-div-featured mx-auto mt-2 mb-3'></div>
            <div className='text-center'>
                <h2 className='text-1xl font-bold'>How Ideal Career Test</h2>
                <h2 className='text-xl text-gray-500'>helped and deciding a</h2>
                <h1 className='uppercase text-4xl font-bold'>promising career</h1>
            </div>
            <div className='mt-4 mx-3'>
                <div className='first-img'>
                    <div>
                        <img src={aparna} alt="" />
                        <h2 className='uppercase font-bold text-xl'>aparna agarwal</h2>
                    </div>

                    <div>
                        <img src={jahanvi} alt="" />
                        <h1 className='uppercase font-bold text-xl'>jahanvi motani</h1>
                    </div>
                </div>

                <div className='second-img mt-2'>
                    <div>
                        <img src={prusti} alt="" />
                        <h1 className='uppercase font-bold text-xl'>prusthi thakkar</h1>
                    </div>
                    <div>
                        <img src={kanchana} alt="" />
                        <h1 className='uppercase font-bold text-xl'>kanchana</h1>
                    </div>
                    <div>
                        <img src={lovly} alt="" />
                        <h1 className='uppercase font-bold text-xl'>lovely</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Promising;