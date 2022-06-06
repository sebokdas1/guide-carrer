import React from 'react';
import GuideSection from './GuideSection';
import Navbar from './Navbar';
import Report from './Report';
import Top from './Top';

const Home = () => {
    return (
        <div>
            <Navbar />
            <GuideSection />
            <Report />
            <Top />
        </div>
    );
};

export default Home;