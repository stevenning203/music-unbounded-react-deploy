import React from 'react';
import Logo from '../../assets/logo.svg';
import './Footer.css';

function Footer()
{
    return(
        <div id = "__footer">
            <div id = "__footer-title">
                Support
            </div>
            <img id = "__footer-logo"src = {Logo}></img>
            <div id = "__footer-blurb">
                Come check out our social media!: <a href = "https://www.instagram.com/music.unbounded/">Instagram</a> and <a>Kijiji</a>
                <br />
                <br />
                Have any questions? Visit the help page and don't hesitate to email us at info@musicunbounded.org
                <br />
                <br />
                Register for lessons through our registration page!
            </div>
        </div>
    )
}

export default Footer