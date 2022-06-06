import React from 'react';
import './GuideSection.css';
import img from '../../Asset/s1.png'

const GuideSection = () => {
    return (
        <div className='guide-container pt-8'>
            <div className='pl-20 guide-text-cont '>

                <div>
                    <h2 className=''>your</h2>
                    <h1 className='uppercase text-3xl font-bold'>ideal<br /> carrer</h1>
                    <h2>is waiting for you...</h2>
                    <p className='text-gray-500'>Suitable for person of any age grooup, this test report will help you to itentify and explore suitable carrer options in order to get started in carrer search or change.</p>
                    <p className='mt-2'>Stop being lost and confused. Know your values, learn about yourself, Identify your skills and find the perfect carrer for you.</p>
                    <button className='uppercase btn mt-3 bg-orange-600 text-white'>start ideal carrer test</button>
                    <p className='mt-5'>Get <span className='text-green-500'>Sample Test Report</span> or Buy <span className='text-green-500'>Full Report</span> @Rs 1999<br /> Have a <span className='text-green-500'>Coupon Code?</span></p>
                </div>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default GuideSection;