import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navigation from '../../shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import CustomizedTimeline from '../TimeLine/TimeLine';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Services></Services>
            <CustomizedTimeline />
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;