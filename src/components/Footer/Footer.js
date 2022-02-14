import React from 'react';
import Logo from '../../assets/logo.png';
import './Footer.css';

function Footer()
{
    return(
        <div id = "__footer">
            <img id = "__footer-logo"src = {Logo}></img>
            <div id = "__footer-blurb">
                Come check out our social media!: <a href = "https://www.instagram.com/music.unbounded/">Instagram</a> and
                <a href = "https://www.facebook.com/Music-Unbounded-101698102292596">Facebook</a>
                <br />
                <br />
                Questions? Visit the help and contact pages.
            </div>
        </div>
    )
}

export default Footer