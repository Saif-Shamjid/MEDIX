import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestNews from '../../components/LatestNews/LatestNews';
import Services from '../../components/Services/Services';
import TopDoctors from '../../components/TopDoctors/TopDoctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TopDoctors></TopDoctors>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;