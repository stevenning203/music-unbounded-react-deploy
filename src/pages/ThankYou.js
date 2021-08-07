import React from 'react';
import './ThankYou.css';

export default function ThankYou()
{
    return(
        <div id = "ty-wrapper">
        <div id = "thank-you-page-title">
            Thank you! <br /> &#128512; &#128077;
        </div>
        <div id = "thank-you-page-blurb">
            Your form has successfully been submitted. We will contact you within two weeks through email or phone!
        </div>
        </div>
    )
}