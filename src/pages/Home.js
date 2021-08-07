import React from 'react';
import HomePageFirst from '../components/HomeSlides/HomePageFirst';
import HomePageSecond from '../components/HomeSlides/HomePageSecond';

function Home()
{
    return(
        <div id = 'home-page-wrapper'>
            <HomePageFirst />
            <HomePageSecond />
        </div>
    )
}

export default Home