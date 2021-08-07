import React from 'react';
import './HomePageFirst.css';
import { Link } from 'react-router-dom';

function HomePageFirst()
{
    return(
        <div id = "home-page-first">
            <div id = "home-page-first-blurb">
                <h1 id = "home-page-first-title">
                    Music Unbounded
                </h1>
                <div id = "home-page-first-subtitle">
                    Providing every child with a musical future
                </div>
                <br />
                <div id = "home-page-first-button-group">
                    <Link to = "/about">
                        <div id = "home-page-first-about-button">
                            About
                        </div>
                    </Link>
                    <Link to = "/register">
                        <div id = "home-page-first-register-button">
                            Register
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePageFirst