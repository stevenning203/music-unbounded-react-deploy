import React from 'react';
import orchestra from '../assets/orchestra.jpg';
import piano0 from '../assets/piano.jpg';
import Footer from '../components/Footer/Footer';
import IsMobile from '../IsMobile';
import './About.css'

function About()
{

    return(
        <>
        <div id = "about-who-we-are-wrapper">
            <div id = "about-who-we-are-title">
                Who We Are
            </div>
            <div id = "about-who-we-are-blurb">
                Music Unbounded is a student-run organization aimed at providing an opportunity for children and youth 4-18 to learn music through free introductory lessons instructed by passionate volunteers. 
            </div>
        </div>
        {!IsMobile() && <div id = "about-why-wrapper-pc">
            {<img id = "about-why-image" src = {piano0} />}
                <div id = "about-why-inner-wrapper">
                <div id = "about-why-title">
                    Why We Started Music Unbounded
                </div>
                <div id = "about-why-blurb">
                    Music has many benefits, ranging from brain growth and academic success to being a creative outlet and source of entertainment. Each and every teacher, volunteer, and board member here at Music Unbounded have been positively influenced throughout their life through music. We are all very grateful to have been given this opportunity to learn, however, we recognize that the cost of learning music can be prohibitive for some and we hope to use our passion to make music accessible to everyone.
                </div>
            </div>
        </div>}
        {IsMobile() && <div id = "about-why-wrapper-mobile">
            <div id = "about-why-title">
                Why We Started Music Unbounded
            </div>
            <div id = "about-why-blurb">
                Music has many benefits, ranging from brain growth and academic success to being a creative outlet and source of entertainment. Each and every teacher, volunteer, and board member here at Music Unbounded have been positively influenced throughout their life through music. We are all very grateful to have been given this opportunity to learn, however, we recognize that the cost of learning music can be prohibitive for some and we hope to use our passion to make music accessible to everyone.
            </div>
        </div>}
        </>
    )
}

export default About