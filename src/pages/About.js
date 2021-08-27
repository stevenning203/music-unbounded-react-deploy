import React from 'react';
import orchestra from '../assets/orchestra.jpg';
import Footer from '../components/Footer/Footer';
import './About.css'

function About()
{

    return(
        <>
        <div id = "about-image-wrapper"><img id = "about-orchestra-image" src = {orchestra} /></div>
        <div id = "about-who-we-are-wrapper">
            <div id = "about-who-we-are-title">
                Who We Are
            </div>
            <div id = "about-who-we-are-blurb">
                Music Unbounded is a non-profit organization aimed at providing an opportunity to students K-9 to learn music through free introductory lessons instructed by
                passionate volunteers. We are a group of students hoping to spread our love for music.
                <br />
                <br />
                Music has many benefits, ranging from brain growth and academic success to being a creative outlet and source of entertainment. We want to help youth discover a desire to pursue music and enjoy the many benefits there are.
            </div>
        </div>
        <div id = "about-our-lessons-wrapper">
            <div id = "about-our-lessons-title">
                Our Lessons
            </div>
            <div id = "about-our-lessons-blurb">
                45 minute lessons are arranged between student and teacher and occur bi-weekly. Each student is taught for 5 months, after which the student graduates and can purse music through self-teaching or private lessons. Our teachers follow a curriculum that will help your child learn.
                <br />
                <br />
                We currently only operate online. However, we are exploring in-person options for lessons and recitals. If you have any questions about lessons, please contact us at info@musicunbounded.org
            </div>
        </div>
        </>
    )
}

export default About