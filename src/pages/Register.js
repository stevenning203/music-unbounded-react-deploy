import React, { useState } from 'react';
import "./Register.css";

function Redirect()
{
    window.location.href = "/thank-you"
}

export default function Register()
{
    const [submit_disabled, SetSubmitDisabled] = useState(false);
    const [submit_button_name, SetSubmitButtonName] = useState("Submit");

    function SubmitRegistration(event)
    {
        if (submit_disabled === true)
        {
            event.preventDefault();
            return;
        }
        SetSubmitDisabled(true);
        SetSubmitButtonName("Please wait...")
        event.preventDefault();
        const url = "https://script.google.com/macros/s/AKfycbzbknbXB0Lv6ITPCxbyEaGUkpkiQsvOBkQ_kOUmQobDSi6Yl1i-bURMWuuV4AKKOoWM/exec";
        const form = document.forms['sheets-form'];
        fetch(url, { method: 'POST', body: new FormData(form)})
        .then(response => Redirect())
        .catch()
    }

    return (
        <div id = "register-page-wrapper">
            <div id = "register-title">Register</div>
            <div id = "register-form">
                <form name = "sheets-form" onSubmit = {SubmitRegistration}>
                    <div>
                        <label htmlFor = "guardian-full-name-field">Guardian Full Name</label>
                        <br />
                        <input id = "guardian-full-name-field" className = "registration-wide-input-field" name = "Guardian Full Name" type = "text" required/>
                    </div>
                    <div>
                        <label htmlFor = "student-full-name-field">Student Full Name</label>
                        <br />
                        <input name = "Student Full Name" id = "student-full-name-field" className = "registration-wide-input-field" type = "text" required />
                    </div>
                    <div>
                        <label htmlFor = "email-field">Email</label>
                        <br />
                        <input name = "Email" id = "email-field" className = "registration-wide-input-field" type = "text" required/>
                    </div>
                    <div>
                        <label htmlFor = "phone-number-field">Phone Number (optional)</label>
                        <br />
                        <input name = "Phone Number" id = "phone-number-field" className = "registration-wide-input-field" type = "text"/>
                    </div>
                    <div>
                        <input name = "Contact by PN?" id = "phone-checkbox" type = "checkbox" />
                        <label htmlFor = "phone-checkbox"> I would prefer to be contacted by phone</label>
                        <br />
                        <br />
                    </div>
                    <div>
                        <label htmlFor = "preferred-platform-field">Preferred Lesson Platform (Discord, Zoom, or any preferred platform)</label>
                        <br />
                        <input name = "Lesson Platform" id = "preferred-platform-field" className = "registration-wide-input-field" type = "text" required/>
                    </div>
                    <div>
                        <label htmlFor = "preferred-location-field">Would you prefer to have your lessons in person or online? &sup1;</label>
                        <br />
                        <select name = "Online?" id = "preferred-location-field" className = "registration-wide-input-field" required>
                            <option value = "">Select an option</option>
                            <option value = "in_person">In person</option>
                            <option value = "online">Online</option>
                            <option value = "either">Either is fine</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "preferred-instrument-field">Preferred Instrument &sup2;</label>
                        <select id = "preferred-instrument-field" name = "Preferred Instrument" className = "registration-wide-input-field" required>
                            <option value="">Select an option</option>
                            <option value="viola">Viola</option>
                            <option value="violin">Violin</option>
                            <option value="piano">Piano</option>
                            <option value="guitar">Guitar</option>
                            <option value="cello">Cello</option>
                            <option value="trombone">Trombone</option>
                            <option value="theory">Music Theory</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "platform-field">How did you find out about us?</label>
                        <select id = "platform-field" name = "Found out from" className = "registration-wide-input-field" required>
                            <option value="">Select an option</option>
                            <option value="kijiji">Kijiji</option>
                            <option value="social_media">Social Media</option>
                            <option value="friends_or_family">Friends/Family</option>
                            <option value="news">News</option>
                            <option value="google">Google</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor = "lesson-times-field">Please state lesson times including days of the week and times of day</label>
                        <br />
                        <textarea name = "Statement" id = "lesson-times-field" className = "registration-wide-input-field" required/>
                    </div>
                    <div>
                        * Note: all fields are required except phone number
                        <br />
                        <br />
                        &sup1;
                         Note: If you select "either is fine," you will be more likely to be matched up. Additonally, in person lessons will be held at either the student's household or the teacher's. If in person is selected, the location will be decided by the student and the teacher together.
                        <br />
                    </div>
                    <br />
                    <input value = {submit_button_name} disabled = {submit_disabled} id = "submit-button" type = "submit" />
                </form>
            </div>
        </div>
    )
}