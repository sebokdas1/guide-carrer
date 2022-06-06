import React from 'react';
import Attitude from './Attitude';
import GuideSection from './GuideSection';
import Motivators from './Motivators';
import Navbar from './Navbar';
import Promising from './Promising';
import Report from './Report';
import Top from './Top';

const Home = () => {
    return (
        <div>
            <Navbar />
            <GuideSection />
            <Report />
            <Top />
            <Motivators />
            <Attitude />
            <Promising />
        </div>
    );
};

export default Home;