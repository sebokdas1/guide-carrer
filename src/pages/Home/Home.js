import React from 'react';
import GuideSection from './GuideSection';
import Navbar from './Navbar';
import Report from './Report';

const Home = () => {
    return (
        <div>
            <Navbar />
            <GuideSection />
            <Report />
        </div>
    );
};

export default Home;