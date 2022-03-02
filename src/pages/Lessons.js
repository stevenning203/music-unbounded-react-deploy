import React from 'react';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Lessons.css'

export default function Lessons()
{
    return(
        <div>
            <div id = "lessons-title">
                Our Lessons
            </div>
            <div className = "lessons-subtitle">
                Who can apply?
            </div>
            <div className = "lessons-blurb">
                Any child/youth under the age of 19 are eligible to become a Music Unbounded student. Our lessons are meant to be an introductory course for anyone wanting to discover a new passion!
            </div>
            <div className = "lessons-subtitle">
                Where can I take lessons?
            </div>
            <div className = "lessons-blurb">
                Currently, in person lessons are only held in Edmonton, AB and Calgary, AB. However, online lessons are available cross-Canada. 
            </div>
            <div className = "lessons-subtitle">
                What are the costs of these lessons?
            </div>
            <div className = "lessons-blurb">
                Nothing! Lessons held by Music Unbounded are free of cost as they are held by student volunteers. Because all of our teachers are volunteers, you can be sure they will be enthusiastic in helping each student cultivate their musical skill to the best of their ability! 
            </div>
            <div className = "lessons-subtitle">
                How long do lessons continue for?
            </div>
            <div className = "lessons-blurb">
                Lessons at Music Unbounded continue for 5 months, after which the student graduates and will receive a certificate of completion. 
            </div>
            <div className = "lessons-subtitle">
                Is there a specific lesson plan that Music Unbounded teachers follow?
            </div>
            <div className = "lessons-blurb">
                Yes! Each teacher follows the Music Unbounded curriculum as lessons progress. The Music Unbounded curriculum is designed to help each child/youth efficiently learn the basics of their instruments while also allowing for lots of room to be creative and learn what each student wants to learn. 
            </div>
            <div className = "lessons-subtitle">
                Sounds good! When can I start?
            </div>
            <div className = "lessons-blurb">
                Music Unbounded utilizes an ongoing registration system, which means that we will match you up with a teacher as soon as possible! Unfortunately, some instruments do fill up quite fast. If you sign up for an instrument that currently possesses no available spaces you will be waitlisted and given a spot as soon as one is vacant. Please note that as some instruments are in high demand, if you are contacted by a teacher you will have up to 3 business days to respond until you are taken off the waitlist. 
                <br /> <br />
                <Link to = "/register"><div className = "lessons-register-button">
                    Register as Student
                </div></Link>
                <Link to = "/volunteer"><div className = "lessons-register-button">
                    Apply to be a Teacher
                </div></Link>
            </div>
        </div>
    )
}